const steps = [
  {
    step: "01",
    title: "Faça upload do vídeo",
    desc: "Arraste ou selecione seu vídeo. Suportamos MP4, MOV, WebM e mais.",
  },
  {
    step: "02",
    title: "IA analisa o conteúdo",
    desc: "Nossa inteligência artificial detecta os melhores momentos com base em áudio, movimento e engajamento.",
  },
  {
    step: "03",
    title: "Clipes prontos em segundos",
    desc: "Receba clipes otimizados para cada plataforma. Ajuste manualmente se quiser.",
  },
]

export function HowItWorks() {
  return (
    <section className="px-4 py-16 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            Como funciona
          </h2>
          <p className="text-muted-foreground">
            Três passos simples para transformar seus vídeos em clipes virais.
          </p>
        </div>

        <div className="grid w-full gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-col gap-3">
              <span className="text-5xl font-bold tracking-tighter text-muted-foreground/60">
                {s.step}
              </span>
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="mt-2 hidden h-px w-full sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
