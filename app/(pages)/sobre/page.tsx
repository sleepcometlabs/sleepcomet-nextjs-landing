import type { Metadata } from "next"
import { Section } from "@/components/ui/section"
import { ShimmerButton } from "@/components/ui/shimmer-button"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sleepcomet.com"

export const metadata: Metadata = {
  title: "Sobre o Sleepcomet — Plataforma de Clipagem com Inteligência Artificial",
  description:
    "Conheça o Sleepcomet, a plataforma de clipagem com IA. Nossa missão é eliminar o trabalho repetitivo da edição de vídeo para que criadores de conteúdo foquem no que importa: criar e crescer.",
  keywords: [
    "sobre o sleepcomet",
    "plataforma de clipagem com IA",
    "quem criou o sleepcomet",
    "ferramenta de IA para criadores",
    "missão do sleepcomet",
  ],
  openGraph: {
    title: "Sobre o Sleepcomet — Clipagem com IA | Sleepcomet",
    description:
      "Sleepcomet é uma plataforma que usa inteligência artificial para criar clipes virais automaticamente em segundos.",
    url: `${siteUrl}/sobre/`,
  },
  alternates: {
    canonical: `${siteUrl}/sobre/`,
  },
}

const values = [
  {
    title: "Tecnologia transparente",
    desc: "Acreditamos em construir ferramentas que colocam os criadores em primeiro lugar. Nosso código e infraestrutura são desenvolvidos com transparência.",
  },
  {
    title: "Criadores acima de tudo",
    desc: "Tudo que construímos é pensado para simplificar a vida de quem cria conteúdo. Menos edição, mais criação.",
  },
  {
    title: "Qualidade com IA",
    desc: "Não se trata de substituir o editor humano, mas de eliminar o trabalho repetitivo para que você foque no que importa: contar histórias.",
  },
  {
    title: "Privacidade e transparência",
    desc: "Seus vídeos pertencem a você. Não treinamos modelos com seu conteúdo. Criptografia de ponta a ponta em todo o processo.",
  },
]

export default function Sobre() {
  return (
    <div>
      <Section className="relative isolate -mt-16 overflow-hidden pt-24 pb-16 text-center sm:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/25 blur-[120px]"
        />

        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Sobre o{" "}
            <span className="bg-linear-to-r from-brand to-brand/60 bg-clip-text text-transparent">
              Sleepcomet
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Transformando a maneira como criadores de conteúdo
            <br />
            produzem clipes virais.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold text-white">Nossa missão</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            No Sleepcomet, acreditamos que todo criador de conteúdo merece ferramentas que
            potencializem seu trabalho, não que roubem seu tempo. Nossa missão é eliminar o trabalho
            braçal da edição de vídeo — assistir horas de gravação, cortar manualmente, sincronizar
            legendas — para que você possa se dedicar ao que realmente importa: criar, conectar e
            crescer sua audiência.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Combinamos inteligência artificial de ponta com uma experiência simples e intuitiva.
            Resultado: clipes prontos em segundos, não em horas.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-white">Nossos valores</h2>
          <div className="mt-10 border-fade">
            <div className="grid sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-none border border-white/10 p-6"
                >
                  <h3 className="font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white">Sleepcomet no GitHub</h2>
          <p className="mt-3 text-muted-foreground">
            Acompanhe o desenvolvimento e as novidades do Sleepcomet no GitHub.
          </p>
          <a
            href="https://github.com/sleepcometlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block"
          >
            <ShimmerButton background="#333333">github.com/sleepcometlabs →</ShimmerButton>
          </a>
        </div>
      </Section>
    </div>
  )
}
