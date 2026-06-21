import type { Metadata } from "next"
import { Section } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade do Sleepcomet. Saiba como coletamos, usamos e protegemos seus dados pessoais.",
  robots: { index: false },
}

const sections = [
  {
    title: "1. Introdução",
    content: (
      <>
        <p>
          O Sleepcomet ("nós", "nosso" ou "plataforma") está comprometido com a proteção da sua
          privacidade. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e
          compartilhamos suas informações quando você utiliza nossos serviços de clipagem com
          inteligência artificial.
        </p>
        <p>
          Ao usar o Sleepcomet, você concorda com as práticas descritas nesta política. Se você não
          concordar com algum termo, recomendamos que não utilize a plataforma.
        </p>
      </>
    ),
  },
  {
    title: "2. Informações que coletamos",
    content: (
      <>
        <h3 className="text-base font-semibold mt-6 mb-2">2.1 Informações fornecidas por você</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Dados de cadastro: nome, endereço de e-mail e senha criptografada.</li>
          <li>Conteúdo enviado: vídeos e áudios que você faz upload para processamento.</li>
          <li>Informações de pagamento: processadas exclusivamente por nossos parceiros (Stripe). Não armazenamos números de cartão de crédito.</li>
          <li>Comunicações: mensagens enviadas ao suporte e feedbacks.</li>
        </ul>
        <h3 className="text-base font-semibold mt-6 mb-2">2.2 Informações coletadas automaticamente</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Dados de uso: páginas visitadas, funcionalidades utilizadas, duração das sessões.</li>
          <li>Dados do dispositivo: tipo de navegador, sistema operacional.</li>
          <li>Dados de rede: endereço IP, localização aproximada (cidade/país).</li>
          <li>Cookies e tecnologias similares: conforme detalhado em nossa <a href="/cookies" className="text-primary underline underline-offset-4 hover:no-underline">Política de Cookies</a>.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Como usamos suas informações",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Processar seus vídeos e gerar clipes com inteligência artificial.</li>
        <li>Melhorar nossos algoritmos de forma agregada e anônima.</li>
        <li>Enviar comunicados sobre atualizações e novos recursos (com opção de descadastramento).</li>
        <li>Fornecer suporte técnico e responder a solicitações.</li>
        <li>Cumprir obrigações legais e regulatórias.</li>
        <li>Prevenir fraudes, abusos e violações dos Termos de Serviço.</li>
      </ul>
    ),
  },
  {
    title: "4. Armazenamento e segurança",
    content: (
      <>
        <p>
          Seus vídeos são armazenados em servidores criptografados (AES-256). Os clipes gerados
          ficam disponíveis enquanto sua conta estiver ativa, podendo ser baixados ou excluídos a
          qualquer momento.
        </p>
        <p>
          Adotamos medidas técnicas e organizacionais para proteger seus dados, incluindo
          criptografia em trânsito (TLS 1.3) e acesso restrito por funcionários.
        </p>
      </>
    ),
  },
  {
    title: "5. Compartilhamento de dados",
    content: (
      <>
        <p>Não vendemos seus dados pessoais para terceiros. Podemos compartilhar informações nas seguintes situações:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Processadores de pagamento</strong>: Stripe para processar transações.</li>
          <li><strong>Infraestrutura em nuvem</strong>: Provedores de hospedagem e processamento.</li>
          <li><strong>Obrigação legal</strong>: Quando exigido por lei, ordem judicial ou solicitação governamental.</li>
          <li><strong>Com seu consentimento</strong>: Em qualquer outro caso, solicitaremos sua autorização explícita.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Seus direitos (LGPD)",
    content: (
      <>
        <p>De acordo com a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Confirmar a existência de tratamento de seus dados.</li>
          <li>Acessar seus dados pessoais.</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
          <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
          <li>Solicitar a portabilidade dos dados a outro fornecedor.</li>
          <li>Eliminar dados tratados com seu consentimento.</li>
          <li>Revogar o consentimento a qualquer momento.</li>
        </ul>
        <p className="mt-4">
          Para exercer seus direitos, entre em contato:{" "}
          <a href="mailto:privacidade@sleepcomet.com" className="text-primary underline underline-offset-4 hover:no-underline">privacidade@sleepcomet.com</a>
        </p>
      </>
    ),
  },
  {
    title: "7. Retenção de dados",
    content: (
      <p>
        Mantemos seus dados pessoais pelo tempo necessário para fornecer os serviços ou cumprir
        obrigações legais. Vídeos enviados são mantidos enquanto sua conta estiver ativa. Dados de
        conta são mantidos por até 6 meses após o encerramento para cumprimento de obrigações
        fiscais.
      </p>
    ),
  },
  {
    title: "8. Transferência internacional",
    content: (
      <p>
        Seus dados podem ser processados em servidores localizados no Brasil ou nos Estados Unidos
        (apenas para parceiros de pagamento). Em todos os casos, adotamos cláusulas contratuais que
        garantem nível adequado de proteção conforme a LGPD.
      </p>
    ),
  },
  {
    title: "9. Alterações nesta política",
    content: (
      <p>
        Esta política pode ser atualizada periodicamente. Notificaremos você sobre alterações
        significativas por e-mail ou através de um aviso na plataforma. Recomendamos revisar esta
        página regularmente.
      </p>
    ),
  },
  {
    title: "10. Contato",
    content: (
      <div className="space-y-1">
        <p>
          <strong>E-mail:</strong>{" "}
          <a href="mailto:privacidade@sleepcomet.com" className="text-primary underline underline-offset-4 hover:no-underline">privacidade@sleepcomet.com</a>
        </p>
        <p>
          <strong>Endereço:</strong> [Inserir endereço comercial]
        </p>
      </div>
    ),
  },
]

export default function Privacidade() {
  return (
    <div className="pt-20">
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Política de Privacidade</h1>
          <p className="text-sm text-muted-foreground mb-10">Última atualização: 15 de maio de 2026</p>

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
