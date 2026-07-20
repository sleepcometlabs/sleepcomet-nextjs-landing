"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"

const contactMethods = [
  {
    title: "Suporte",
    email: "suporte@sleepcomet.com",
    desc: "Dúvidas técnicas, problemas na plataforma ou ajuda com clipagem.",
  },
  {
    title: "Comercial",
    email: "comercial@sleepcomet.com",
    desc: "Parcerias, planos corporativos e programas de creator.",
  },
  {
    title: "Imprensa",
    email: "imprensa@sleepcomet.com",
    desc: "Entrevistas, matérias e solicitações de mídia.",
  },
  {
    title: "Segurança",
    email: "seguranca@sleepcomet.com",
    desc: "Reporte vulnerabilidades ou questões de segurança.",
  },
]

const socialLinks = [
  { name: "X (Twitter)", url: "https://x.com/usesleepcomet" },
  { name: "Instagram", url: "https://www.instagram.com/usesleepcomet" },
  { name: "Reddit", url: "https://www.reddit.com/r/sleepcomet/" },
  { name: "Product Hunt", url: "https://www.producthunt.com/@sleepcomet" },
  { name: "GitHub", url: "https://github.com/sleepcometlabs" },
]

export function ContactContent() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const subject = formData.get("assunto") as string

    setSending(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("nome"),
          email: formData.get("email"),
          subject,
          message: formData.get("mensagem"),
        }),
      })
      if (res.ok) {
        setSent(true)
        form.reset()
      }
    } catch {
      // falha silenciosa; usuário pode tentar novamente
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <Section>
        <div className="mx-auto max-w-4xl border-fade">
          <div className="grid sm:grid-cols-2">
          {contactMethods.map((method) => (
            <Card
              key={method.title}
              className="rounded-none border border-white/10 bg-transparent ring-0"
            >
              <CardContent className="p-5">
                <CardTitle className="text-base text-white">{method.title}</CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">{method.desc}</p>
                <a
                  href={`mailto:${method.email}`}
                  className="mt-3 inline-block text-sm font-medium text-brand underline underline-offset-4 hover:no-underline"
                >
                  {method.email}
                </a>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-bold text-white">Redes sociais</h2>
          <p className="mt-2 text-center max-w-sm mx-auto text-muted-foreground">
            Acompanhe o Sleepcomet nas redes para dicas, novidades e conteúdo exclusivo.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                size="sm"
                className="border-white/10 bg-white/[0.03] hover:bg-white/[0.08]"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-xl">
          <h2 className="text-center text-2xl font-bold text-white">Envie uma mensagem</h2>
          <p className="mt-2 text-center max-w-sm mx-auto text-muted-foreground">
            Preferimos e-mails para garantir respostas rápidas, mas você também pode usar o
            formulário abaixo.
          </p>
          {sent ? (
            <p className="mt-8 text-center text-green-400 font-medium">
              Mensagem enviada com sucesso! Responderemos em breve.
            </p>
          ) : (
            <form className="mt-8 space-y-4" onSubmit={handleFormSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label htmlFor="nome" className="text-sm font-medium text-white">
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white outline-none placeholder:text-muted-foreground focus:border-brand"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white outline-none placeholder:text-muted-foreground focus:border-brand"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="assunto" className="text-sm font-medium text-white">
                  Assunto
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white outline-none focus:border-brand"
                >
                  <option>Suporte</option>
                  <option>Comercial</option>
                  <option>Parceria</option>
                  <option>Imprensa</option>
                  <option>Outro</option>
                </select>
              </div>
              <div className="space-y-1">
                <label htmlFor="mensagem" className="text-sm font-medium text-white">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white outline-none placeholder:text-muted-foreground focus:border-brand resize-y"
                  placeholder="Escreva sua mensagem..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={sending}>
                {sending ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          )}
        </div>
      </Section>
    </>
  )
}
