# Sleepcomet Landing Page — Next.js Website

Este é o site institucional e landing page da plataforma **Sleepcomet**, desenvolvido em Next.js 15, React 19 e TailwindCSS. Ele apresenta os recursos da plataforma, os planos de preços integrados ao Stripe e redireciona os usuários para o aplicativo web.

## Pré-requisitos

* **Node.js 18** ou superior instalado
* **npm** ou **yarn** instalado

## Instalação e Execução Local

1. **Instalar Dependências**:
   ```bash
   npm install
   ```

2. **Configuração de Variáveis**:
   Copie o arquivo de exemplo de variáveis de ambiente:
   ```bash
   cp .env.example .env.local
   ```
   Ajuste `NEXT_PUBLIC_APP_URL` para apontar para a porta de execução do seu dashboard React local (por padrão `http://localhost:5173`).

3. **Executar em Modo de Desenvolvimento (com Turbopack)**:
   ```bash
   npm run dev
   ```
   O site estará disponível por padrão em `http://localhost:3002`.

---

## ⚡ Implantação em Produção no Cloudflare Pages

Esta landing page está configurada com `output: "export"` no `next.config.ts`, gerando uma build estática em HTML/CSS/JS otimizada. Isso a torna perfeita para ser hospedada gratuitamente e com carregamento ultra rápido no **Cloudflare Pages**.

### Passos de Implantação:

1. **Repositório Independente**:
   Crie um repositório isolado no GitHub contendo apenas os arquivos da pasta desta landing page (`lp/`) e faça o push.
2. **Criar Projeto no Cloudflare Pages**:
   - Vá no painel do Cloudflare -> *Workers & Pages* -> *Create application* -> *Pages* -> *Connect to Git*.
   - Escolha o repositório criado.
3. **Configuração de Build**:
   - **Framework Preset**: `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
4. **Variáveis de Ambiente (Build)**:
   - Nas configurações do projeto no Cloudflare Pages, adicione a variável `NEXT_PUBLIC_APP_URL` apontando para o subdomínio do seu dashboard React em produção (ex: `https://app.sleepcomet.com`).
   - Adicione `NEXT_PUBLIC_SITE_URL` com a URL final do site (ex: `https://sleepcomet.com`).
5. **Salvar e Implantar**:
   Dispare o primeiro deploy. A cada push no repositório GitHub, o Cloudflare compilará e atualizará as páginas de forma totalmente automática.
