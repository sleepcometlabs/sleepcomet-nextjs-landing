import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <span className="text-8xl font-bold tracking-tighter text-muted-foreground/20">404</span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
        Página não encontrada
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        A página que você procura não existe ou foi movida. Volte para a página
        inicial ou explore nossos recursos.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Página inicial
        </Link>
        <Link
          href="/como-funciona/"
          className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          Como funciona
        </Link>
      </div>
    </main>
  )
}
