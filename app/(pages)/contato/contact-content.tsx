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
  { name: "Twitter / X", url: "https://twitter.com/sleepcomet" },
  { name: "Instagram", url: "https://instagram.com/sleepcomet" },
  { name: "YouTube", url: "https://youtube.com/@sleepcomet" },
  { name: "LinkedIn", url: "https://linkedin.com/company/sleepcomet" },
  { name: "GitHub", url: "https://github.com/sleepcomet" },
  { name: "Discord", url: "https://discord.gg/sleepcomet" },
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
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {contactMethods.map((method) => (
            <Card key={method.title} className="hover:border-primary/30 transition-colors">
              <CardContent className="p-5">
                <CardTitle className="text-base">{method.title}</CardTitle>
                <p className="mt-1 text-sm text-muted-foreground">{method.desc}</p>
                <a
                  href={`mailto:${method.email}`}
                  className="mt-3 inline-block text-sm font-medium text-primary underline underline-offset-4 hover:no-underline"
                >
                  {method.email}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-bold">Redes sociais</h2>
          <p className="mt-2 text-center max-w-sm mx-auto text-muted-foreground">
            Acompanhe o SleepComet nas redes para dicas, novidades e conteúdo exclusivo.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="outline" size="sm" asChild>
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
          <h2 className="text-center text-2xl font-bold">Envie uma mensagem</h2>
          <p className="mt-2 text-center max-w-sm mx-auto text-muted-foreground">
            Preferimos e-mails para garantir respostas rápidas, mas você também pode usar o
            formulário abaixo.
          </p>
          {sent ? (
            <p className="mt-8 text-center text-green-500 font-medium">
              Mensagem enviada com sucesso! Responderemos em breve.
            </p>
          ) : (
            <form className="mt-8 space-y-4" onSubmit={handleFormSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label htmlFor="nome" className="text-sm font-medium">
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    required
                    className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label htmlFor="assunto" className="text-sm font-medium">
                  Assunto
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                >
                  <option>Suporte</option>
                  <option>Comercial</option>
                  <option>Parceria</option>
                  <option>Imprensa</option>
                  <option>Outro</option>
                </select>
              </div>
              <div className="space-y-1">
                <label htmlFor="mensagem" className="text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={5}
                  required
                  className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:border-primary resize-y"
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
