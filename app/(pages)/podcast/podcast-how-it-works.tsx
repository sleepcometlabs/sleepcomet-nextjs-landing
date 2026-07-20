const steps = [
  {
    step: "01",
    title: "Cole o link do vídeo",
    desc: "Cole o link do YouTube do seu episódio — a IA baixa e processa a gravação inteira automaticamente.",
  },
  {
    step: "02",
    title: "IA reconhece a conversa",
    desc: "Identifica cada voz, entende o ritmo da entrevista e encontra os momentos com cara de viral.",
  },
  {
    step: "03",
    title: "Cortes prontos em minutos",
    desc: "Receba clipes com legenda sincronizada, prontos pra TikTok, Reels e Shorts. Ajuste manualmente se quiser.",
  },
]

export function PodcastHowItWorks() {
  return (
    <section className="px-4 py-16 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            Como cortar seu podcast com IA em 3 passos
          </h2>
          <p className="text-muted-foreground">
            Cole o link, a inteligência artificial analisa a conversa e gera cortes prontos em minutos.
          </p>
        </div>

        <div className="w-full border-fade">
          <div className="grid sm:grid-cols-3">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col gap-3 border border-white/10 p-6">
                <span className="bg-linear-to-r from-brand to-brand/60 bg-clip-text text-5xl font-bold tracking-tighter text-transparent">
                  {s.step}
                </span>
                <h3 className="text-lg font-medium text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
