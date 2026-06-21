const comparisonData = [
  { aspect: "Tempo de edição", sleepcomet: "2 minutos", manual: "Horas" },
  { aspect: "Detecção de melhores momentos", sleepcomet: "Automática por IA", manual: "Manual (assistir tudo)" },
  { aspect: "Formato para cada rede social", sleepcomet: "Automático", manual: "Ajuste manual" },
  { aspect: "Legendas automáticas", sleepcomet: "Sim", manual: "Não" },
  { aspect: "Custo por clipe", sleepcomet: "Gratuito (Free)", manual: "Seu tempo" },
  { aspect: "Escalabilidade", sleepcomet: "Ilimitada", manual: "Limitada" },
]

export function Comparison() {
  return (
    <section className="px-4 py-16 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            Cortar vídeo com IA vs edição manual
          </h2>
          <p className="text-muted-foreground">
            Veja por que milhares de criadores escolhem a clipagem automática com inteligência artificial.
          </p>
        </div>

        <div className="w-full">
          {comparisonData.map((row, i) => (
            <div
              key={row.aspect}
              className="grid grid-cols-3 gap-4 border-t border-border/40 px-4 py-3 text-sm last:border-b"
            >
              <span className="text-muted-foreground">{row.aspect}</span>
              <span className="font-medium text-foreground">{row.sleepcomet}</span>
              <span className="text-muted-foreground">{row.manual}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
