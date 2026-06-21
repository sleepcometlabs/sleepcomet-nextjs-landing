interface ProductSchemaProps {
  name: string
  description: string
  url: string
  offers: Array<{
    name: string
    price: string
    priceCurrency: string
    description: string
  }>
}

export function ProductSchema({ name, description, url, offers }: ProductSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    offers: offers.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      price: offer.price,
      priceCurrency: offer.priceCurrency,
      description: offer.description,
      availability: "https://schema.org/InStock",
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
