import type { Metadata } from "next"
import { Section } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description: "Termos de Serviço do Sleepcomet. Condições de uso da plataforma de clipagem com inteligência artificial.",
  robots: { index: false },
}

const sections = [
  {
    title: "1. Aceitação dos Termos",
    content: (
      <>
        <p>
          Ao acessar ou utilizar a plataforma Sleepcomet ("Serviço"), você confirma que leu,
          entendeu e concorda com estes Termos de Serviço ("Termos"). Se você não concordar com
          qualquer parte destes Termos, não utilize o Serviço.
        </p>
        <p>
          O Sleepcomet é uma plataforma de software como serviço (SaaS) que utiliza inteligência
          artificial para analisar, processar e gerar clipes de vídeo a partir de conteúdo enviado
          pelos usuários.
        </p>
      </>
    ),
  },
  {
    title: "2. Elegibilidade",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Tem pelo menos 16 anos de idade (ou a idade mínima exigida em seu país).</li>
        <li>Possui capacidade legal para firmar contratos.</li>
        <li>Não está listado em sanções internacionais ou restrições comerciais.</li>
        <li>Não é concorrente direto do Sleepcomet utilizando a plataforma para engenharia reversa.</li>
      </ul>
    ),
  },
  {
    title: "3. Contas e Responsabilidades",
    content: (
      <>
        <p>
          Você é responsável por manter a confidencialidade de suas credenciais de acesso e por
          todas as atividades realizadas em sua conta. Notifique imediatamente o Sleepcomet sobre
          qualquer uso não autorizado.
        </p>
        <p>
          O Sleepcomet se reserva o direito de suspender ou encerrar contas que violem estes Termos
          ou que apresentem atividade suspeita.
        </p>
      </>
    ),
  },
  {
    title: "4. Propriedade Intelectual e Conteúdo",
    content: (
      <>
        <h3 className="text-base font-semibold mt-6 mb-2">4.1 Seu conteúdo</h3>
        <p>
          Você mantém todos os direitos de propriedade intelectual sobre os vídeos e conteúdos que
          enviar ao Sleepcomet. Nós não reivindicamos propriedade sobre seu conteúdo. Você concede
          ao Sleepcomet uma licença limitada para processar, armazenar e exibir seu conteúdo
          exclusivamente para a prestação dos serviços solicitados.
        </p>
        <h3 className="text-base font-semibold mt-6 mb-2">4.2 Clipes gerados</h3>
        <p>
          Os clipes gerados pela IA do Sleepcomet a partir do seu conteúdo também são de sua
          propriedade. Você pode baixar, publicar e comercializar os clipes livremente.
        </p>
        <h3 className="text-base font-semibold mt-6 mb-2">4.3 Propriedade do Sleepcomet</h3>
        <p>
          O Sleepcomet retém todos os direitos sobre o software, algoritmos, interface, marca,
          logotipos e tecnologia subjacente. Estes Termos não concedem a você nenhuma licença sobre
          a propriedade intelectual do Sleepcomet além do direito de uso do Serviço.
        </p>
      </>
    ),
  },
  {
    title: "5. Uso Aceitável",
    content: (
      <>
        <p>Você concorda em não utilizar o Serviço para:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Enviar conteúdo infrator, difamatório, obsceno ou ilegal.</li>
          <li>Realizar engenharia reversa ou extrair os modelos de IA do Sleepcomet.</li>
          <li>Sobrecarregar intencionalmente a infraestrutura da plataforma.</li>
          <li>Criar contas falsas ou automatizadas sem autorização.</li>
          <li>Utilizar o Serviço para treinar modelos de IA concorrentes.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Planos e Faturamento",
    content: (
      <>
        <p>
          O Sleepcomet oferece planos pagos com assinatura mensal. As características de cada plano
          estão descritas na página de preços. Assinaturas são cobradas mensalmente de forma
          antecipada e não são reembolsáveis, exceto quando exigido por lei.
        </p>
        <p>
          Você pode cancelar sua assinatura a qualquer momento. O acesso aos recursos do plano
          permanece ativo até o final do período já pago.
        </p>
      </>
    ),
  },
  {
    title: "7. Limitação de Responsabilidade",
    content: (
      <>
        <p>
          O Sleepcomet fornece o Serviço "como está" e "conforme disponível". Em nenhuma hipótese
          o Sleepcomet será responsável por danos indiretos, incidentais, especiais ou
          consequenciais decorrentes do uso ou da impossibilidade de uso do Serviço.
        </p>
        <p>
          A responsabilidade total do Sleepcomet em relação ao Serviço está limitada ao valor pago
          por você nos 12 meses anteriores ao evento que deu origem à reclamação.
        </p>
      </>
    ),
  },
  {
    title: "8. Garantias",
    content: (
      <p>
        O Sleepcomet se esforça para manter o Serviço disponível e funcionando corretamente, mas
        não garante que o Serviço será ininterrupto, livre de erros ou que os clipes gerados pela
        IA atingirão resultados específicos de engajamento ou viralidade.
      </p>
    ),
  },
  {
    title: "9. Rescisão",
    content: (
      <>
        <p>
          Você pode encerrar sua conta a qualquer momento nas configurações da plataforma. O
          Sleepcomet pode suspender ou encerrar seu acesso em caso de violação destes Termos,
          inatividade prolongada (mais de 12 meses) ou por determinação legal.
        </p>
        <p>
          Após o encerramento, seu conteúdo será excluído dentro de 30 dias, exceto quando sua
          retenção for exigida por lei.
        </p>
      </>
    ),
  },
  {
    title: "10. Disposições Gerais",
    content: (
      <>
        <p>
          Estes Termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida no foro
          da comarca de São Paulo, SP.
        </p>
        <p>
          Se qualquer disposição destes Termos for considerada inválida, as demais permanecem em
          pleno vigor. O fato de não exercermos um direito não constitui renúncia a ele.
        </p>
        <p>
          Estes Termos constituem o acordo integral entre você e o Sleepcomet em relação ao
          Serviço.
        </p>
      </>
    ),
  },
  {
    title: "11. Contato",
    content: (
      <div className="space-y-1">
        <p>
          <strong>E-mail:</strong>{" "}
          <a href="mailto:legal@sleepcomet.com" className="text-brand underline underline-offset-4 hover:no-underline">legal@sleepcomet.com</a>
        </p>
      </div>
    ),
  },
]

export default function Termos() {
  return (
    <div className="pt-20">
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Termos de Serviço</h1>
          <p className="text-sm text-muted-foreground mb-10">Última atualização: 15 de maio de 2026</p>

          {sections.map((s, i) => (
            <div key={i} className={i > 0 ? "pt-8 mt-8" : ""}>
              <h2 className="text-xl font-semibold tracking-tight text-white mb-3">{s.title}</h2>
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
