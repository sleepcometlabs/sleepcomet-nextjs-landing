interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbListProps {
  items: BreadcrumbItem[]
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sleepcomet.com"

export function BreadcrumbList({ items }: BreadcrumbListProps) {
  const allItems = [{ name: "Início", url: siteUrl }, ...items]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${item.url}${index < allItems.length - 1 ? "" : ""}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
          {allItems.map((item, index) => (
            <li key={item.url} className="flex items-center gap-1">
              {index > 0 && <span className="text-muted-foreground/40">/</span>}
              {index < allItems.length - 1 ? (
                <a
                  href={item.url}
                  className="transition-colors hover:text-foreground"
                >
                  {item.name}
                </a>
              ) : (
                <span className="text-foreground">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
