// Corrige https://github.com/vercel/next.js/issues/85374 — no Next.js 16 com
// output:"export", o build gera os payloads de prefetch RSC em pastas
// aninhadas (__next.<hash>/rota/__PAGE__.txt), mas o client-side router pede
// o nome achatado com pontos (__next.<hash>.rota.__PAGE__.txt), causando 404
// em todo prefetch de <Link>. Roda depois do `next build`: acha cada pasta
// __next.*, achata os arquivos de dentro pro nome com ponto que o navegador
// realmente pede, e remove a pasta aninhada que sobra vazia.
const fs = require("fs");
const path = require("path");

const OUT_DIR = path.join(__dirname, "..", "out");

function collectFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectFiles(full, files);
    else files.push(full);
  }
  return files;
}

function flattenedTarget(filePath) {
  const rel = path.relative(OUT_DIR, filePath);
  const components = rel.split(path.sep);
  const idx = components.findIndex((c) => c.startsWith("__next."));
  if (idx < 0 || idx >= components.length - 1) return null;
  const result = components.slice(0, idx);
  result.push(components.slice(idx).join("."));
  return path.join(OUT_DIR, ...result);
}

// Depois de mover os arquivos pra fora, sobra uma árvore de pastas vazias
// (a pasta __next.* e as subpastas de rota que ela continha) — remove tudo
// que ficou vazio, não só a pasta __next.* em si.
function removeEmptyDirs(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (!entry.isDirectory()) continue;
    removeEmptyDirs(full);
    if (fs.readdirSync(full).length === 0) {
      fs.rmdirSync(full);
    }
  }
}

if (!fs.existsSync(OUT_DIR)) {
  console.warn("[fix-rsc-paths] out/ não existe, pulando.");
  process.exit(0);
}

let fixedCount = 0;
for (const file of collectFiles(OUT_DIR)) {
  const target = flattenedTarget(file);
  if (target && target !== file) {
    fs.renameSync(file, target);
    fixedCount++;
  }
}
removeEmptyDirs(OUT_DIR);

console.log(`[fix-rsc-paths] ${fixedCount} arquivo(s) de prefetch RSC corrigido(s).`);
