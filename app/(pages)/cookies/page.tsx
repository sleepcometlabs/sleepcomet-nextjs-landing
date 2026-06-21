import type { Metadata } from "next"
import { Section } from "@/components/ui/section"

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies do Sleepcomet. Saiba como utilizamos cookies e tecnologias similares para melhorar sua experiência.",
  robots: { index: false },
}

const sections = [
  {
    title: "1. O que são cookies",
    content: (
      <>
        <p>
          Cookies são pequenos arquivos de texto armazenados no seu navegador quando você visita um
          site. Eles permitem que o site reconheça seu dispositivo, lembre de suas preferências e
          forneça funcionalidades personalizadas.
        </p>
        <p>
          Esta Política de Cookies explica quais cookies utilizamos no Sleepcomet, para quais
          finalidades e como você pode gerenciá-los.
        </p>
      </>
    ),
  },
  {
    title: "2. Tipos de cookies que utilizamos",
    content: (
      <>
        <h3 className="text-base font-semibold mt-6 mb-2">2.1 Cookies essenciais</h3>
        <p className="mb-2">Necessários para o funcionamento básico da plataforma. Sem eles, você não consegue acessar áreas protegidas ou fazer upload de vídeos.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Cookie de sessão (autenticação) — expira ao fechar o navegador.</li>
          <li>Cookie CSRF (proteção contra falsificação de requisição) — 24 horas.</li>
          <li>Cookie de rate limit (controle de uso) — 1 minuto.</li>
        </ul>

        <h3 className="text-base font-semibold mt-6 mb-2">2.2 Cookies de preferências</h3>
        <p className="mb-2">Armazenam suas escolhas e configurações para melhorar sua experiência.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Tema (claro/escuro) — 1 ano.</li>
        </ul>

        <h3 className="text-base font-semibold mt-6 mb-2">2.3 Cookies analíticos</h3>
        <p className="mb-2">Utilizamos ferramentas de análise para entender como você interage com a plataforma.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Google Analytics (IP anonimizado) — 2 anos.</li>
          <li>PostHog (auto-hospedado, dados não compartilhados) — 1 ano.</li>
        </ul>

        <h3 className="text-base font-semibold mt-6 mb-2">2.4 Cookies de marketing</h3>
        <p className="mb-2">Utilizados para medir a eficácia de campanhas publicitárias. Apenas com seu consentimento explícito.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Facebook Pixel — 3 meses.</li>
          <li>Google Ads Conversion — 3 meses.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Gerenciamento de cookies",
    content: (
      <>
        <p>
          Ao acessar o Sleepcomet pela primeira vez, você verá um banner de consentimento onde pode
          aceitar, rejeitar ou personalizar suas preferências de cookies.
        </p>
        <p>
          Você também pode gerenciar cookies diretamente nas configurações do seu navegador.
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Google Chrome</strong>: Configurações → Privacidade e segurança → Cookies.</li>
          <li><strong>Mozilla Firefox</strong>: Opções → Privacidade e segurança → Cookies.</li>
          <li><strong>Safari</strong>: Preferências → Privacidade → Gerenciar dados.</li>
          <li><strong>Microsoft Edge</strong>: Configurações → Cookies e permissões.</li>
        </ul>
        <p className="mt-2">
          A desativação de cookies pode afetar o funcionamento de algumas funcionalidades da
          plataforma.
        </p>
      </>
    ),
  },
  {
    title: "4. Cookies de terceiros",
    content: (
      <>
        <p>Utilizamos serviços terceiros que podem definir seus próprios cookies:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li><strong>Stripe</strong>: Processamento de pagamentos — cookies de sessão.</li>
          <li><strong>GitHub</strong>: Badge de estrelas e links — cookies de sessão.</li>
        </ul>
        <p className="mt-2">
          Consulte as políticas de privacidade desses serviços para mais informações sobre o uso de
          cookies por eles.
        </p>
      </>
    ),
  },
  {
    title: "5. Consentimento",
    content: (
      <>
        <p>
          Ao clicar em "Aceitar todos os cookies" no banner de consentimento, você autoriza o uso
          de todas as categorias de cookies descritas nesta política.
        </p>
        <p>
          Você pode retirar ou alterar seu consentimento a qualquer momento clicando no botão
          "Gerenciar cookies" disponível no rodapé do site.
        </p>
      </>
    ),
  },
  {
    title: "6. Atualizações",
    content: (
      <p>
        Esta Política de Cookies pode ser atualizada periodicamente para refletir mudanças nas
        tecnologias ou requisitos legais. Recomendamos revisar esta página regularmente.
      </p>
    ),
  },
  {
    title: "7. Contato",
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

export default function Cookies() {
  return (
    <div className="pt-20">
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Política de Cookies</h1>
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
