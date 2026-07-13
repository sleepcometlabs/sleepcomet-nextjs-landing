import type { Metadata } from "next"
import { Section } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Exclusão de Dados",
  description: "Como solicitar a exclusão dos seus dados pessoais e das conexões com redes sociais no Sleepcomet.",
  robots: { index: false },
}

const sections = [
  {
    title: "1. O que é excluído",
    content: (
      <>
        <p>
          Ao solicitar a exclusão dos seus dados, removemos permanentemente da nossa plataforma:
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Sua conta e informações de perfil (nome, e-mail, senha).</li>
          <li>Vídeos enviados, clipes gerados, transcrições e legendas.</li>
          <li>
            Conexões com redes sociais (TikTok, YouTube, Instagram) — incluindo os tokens de acesso
            armazenados, que são revogados junto com a exclusão.
          </li>
          <li>Publicações agendadas ainda não realizadas.</li>
          <li>Histórico de créditos, plano e dados de cobrança associados à sua conta.</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. Como solicitar",
    content: (
      <>
        <p>Você pode pedir a exclusão dos seus dados de duas formas:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>
            Enviando um e-mail para{" "}
            <a href="mailto:privacidade@sleepcomet.com" className="text-primary underline underline-offset-4 hover:no-underline">
              privacidade@sleepcomet.com
            </a>{" "}
            com o assunto "Exclusão de dados", a partir do e-mail cadastrado na sua conta.
          </li>
          <li>
            Se você conectou sua conta do Sleepcomet através do TikTok, Google ou Meta
            (Instagram/Facebook), você também pode revogar o acesso do Sleepcomet diretamente nas
            configurações de aplicativos conectados dessas plataformas — isso desconecta a
            integração, mas não apaga automaticamente sua conta e seus dados no Sleepcomet. Para
            excluir sua conta por completo, use o e-mail acima.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Prazo de processamento",
    content: (
      <p>
        Confirmamos o recebimento do seu pedido em até 48 horas e concluímos a exclusão em até 30
        dias corridos, conforme previsto na nossa{" "}
        <a href="/privacy" className="text-primary underline underline-offset-4 hover:no-underline">
          Política de Privacidade
        </a>
        . Dados que precisamos manter por obrigação legal ou fiscal (ex: registros de cobrança) são
        retidos apenas pelo prazo exigido em lei, e não são mais usados para nenhuma outra
        finalidade.
      </p>
    ),
  },
  {
    title: "4. Contato",
    content: (
      <p>
        <strong>E-mail:</strong>{" "}
        <a href="mailto:privacidade@sleepcomet.com" className="text-primary underline underline-offset-4 hover:no-underline">
          privacidade@sleepcomet.com
        </a>
      </p>
    ),
  },
]

export default function ExclusaoDeDados() {
  return (
    <div className="pt-20">
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Exclusão de Dados</h1>
          <p className="text-sm text-muted-foreground mb-10">Última atualização: 3 de julho de 2026</p>

          {sections.map((s, i) => (
            <div key={i} className={i > 0 ? "border-t border-border/40 pt-8 mt-8" : ""}>
              <h2 className="text-xl font-semibold tracking-tight mb-3">{s.title}</h2>
              <div className="text-muted-foreground leading-relaxed space-y-3 text-[15px]">
                {s.content}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}
