export function ProductDemo() {
  return (
    <section className="px-4 py-16 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            Veja a IA cortar
            <br />
            um vídeo em tempo real
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            Cole o link, escolha um estilo e pronto.
            <br />
            Sem edição manual, sem perder tempo.
          </p>
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
          <video
            src="/how-it-works-demo.mp4"
            poster="/how-it-works-demo-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload="metadata"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
