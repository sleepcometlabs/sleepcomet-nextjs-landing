import type { Metadata } from "next"
import { Section } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Licenças",
  description:
    "Licenças de software aberto utilizadas pelo SleepComet. Transparência sobre as bibliotecas e frameworks que utilizamos.",
  robots: { index: false },
}

const licenses = [
  {
    name: "SleepComet",
    description: "Plataforma de clipagem com IA (Next.js, React, Go, Python).",
    license: "MIT",
    repo: "github.com/sleepcomet-com",
  },
  {
    name: "Faster-Whisper",
    description: "Modelo de transcrição de áudio baseado no Whisper da OpenAI, otimizado com CTranslate2.",
    license: "MIT",
    repo: "github.com/systran/faster-whisper",
  },
  {
    name: "FFmpeg",
    description: "Solução completa para gravação, conversão e streaming de áudio e vídeo.",
    license: "LGPL-2.1+",
    repo: "github.com/FFmpeg/FFmpeg",
  },
  {
    name: "Next.js",
    description: "Framework React para produção com renderização híbrida.",
    license: "MIT",
    repo: "github.com/vercel/next.js",
  },
  {
    name: "React",
    description: "Biblioteca JavaScript para construção de interfaces de usuário.",
    license: "MIT",
    repo: "github.com/facebook/react",
  },
  {
    name: "Tailwind CSS",
    description: "Framework CSS utilitário para design rápido e consistente.",
    license: "MIT",
    repo: "github.com/tailwindlabs/tailwindcss",
  },
  {
    name: "Radix UI",
    description: "Componentes de UI headless e acessíveis para React.",
    license: "MIT",
    repo: "github.com/radix-ui/primitives",
  },
  {
    name: "Lucide",
    description: "Conjunto de ícones open source em SVG.",
    license: "ISC",
    repo: "github.com/lucide-icons/lucide",
  },
  {
    name: "PyTorch",
    description: "Framework de machine learning utilizado nos modelos de detecção de momentos.",
    license: "BSD-3-Clause",
    repo: "github.com/pytorch/pytorch",
  },
  {
    name: "CTranslate2",
    description: "Motor de inferência otimizado para modelos Transformer.",
    license: "MIT",
    repo: "github.com/OpenNMT/CTranslate2",
  },
]

export default function Licencas() {
  return (
    <div className="pt-20">
      <Section>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-2 text-center text-4xl font-bold tracking-tight">Licenças</h1>
          <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
            O SleepComet é construído sobre os ombros de gigantes. Abaixo estão as licenças das
            principais bibliotecas e ferramentas que utilizamos.
          </p>

          <div className="overflow-hidden rounded-xl border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-4 font-medium">Projeto</th>
                  <th className="p-4 font-medium">Descrição</th>
                  <th className="p-4 font-medium">Licença</th>
                  <th className="p-4 font-medium">Repositório</th>
                </tr>
              </thead>
              <tbody>
                {licenses.map((lib) => (
                  <tr key={lib.name} className="border-b last:border-0 hover:bg-muted/20">
                    <td className="p-4 font-medium">{lib.name}</td>
                    <td className="p-4 text-muted-foreground">{lib.description}</td>
                    <td className="p-4">
                      <span className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs">
                        {lib.license}
                      </span>
                    </td>
                    <td className="p-4">
                      <a
                        href={`https://${lib.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline underline-offset-4 hover:no-underline"
                      >
                        {lib.repo}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 rounded-xl border bg-card p-6 text-center">
            <h2 className="text-lg font-semibold">Código aberto</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Parte do SleepComet é open source. Contribuímos ativamente com a comunidade de
              código aberto e acreditamos na transparência como valor fundamental.
            </p>
            <a
              href="https://github.com/sleepcometlabs"
              target="_blank"
              rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-primary underline underline-offset-4 hover:no-underline"
          >
            github.com/sleepcomet-com →
          </a>
          </div>

          <p className="mt-10 text-center text-xs text-muted-foreground">
            Esta lista não é exaustiva. Para a lista completa de dependências, consulte os
            arquivos de licenciamento em nossos repositórios. Em caso de dúvidas sobre licenças,
            entre em contato: <a href="mailto:legal@sleepcomet.com" className="text-primary underline underline-offset-4">legal@sleepcomet.com</a>
          </p>
        </div>
      </Section>
    </div>
  )
}
