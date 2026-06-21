"use client"

import React from "react"
import Image from "next/image"

const avatars = [
  { imageUrl: "https://i.pravatar.cc/80?u=1", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/80?u=2", profileUrl: "#" },
  { imageUrl: "https://i.pravatar.cc/80?u=3", profileUrl: "#" },
]

const testimonials = [
  {
    quote:
      "Eu passava horas editando clipes manualmente. O Sleepcomet faz em 2 minutos o que eu levava uma tarde inteira.",
    author: "Ana Clara",
    role: "Criadora de conteúdo · 500K seguidores",
  },
  {
    quote:
      "A detecção automática é assustadoramente precisa. Ela encontra momentos que eu nem lembrava que estavam no vídeo.",
    author: "Lucas Mendes",
    role: "YouTuber · 1.2M inscritos",
  },
  {
    quote:
      "Uso todo santo dia para alimentar meu TikTok e Instagram. Melhor ferramenta de clipagem que já testei.",
    author: "Julia Costa",
    role: "Social Media · Agência Digital",
  },
]

export const Testimonials = () => {
  return (
    <section className="relative py-16 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 border border-foreground/5 bg-muted/20 flex flex-col justify-between"
            >
              <p className="text-sm leading-6 text-white/90">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="mt-5 flex items-center gap-3">
                <Image
                  src={avatars[i % avatars.length].imageUrl}
                  alt={`Avatar de ${testimonial.author}`}
                  width={40}
                  height={40}
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white">
                    {testimonial.author}
                  </span>

                  <span className="text-xs text-white/60">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}