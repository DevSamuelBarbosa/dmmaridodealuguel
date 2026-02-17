export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'DM Marido de Aluguel',
    alternateName: 'DM Serviços Gerais',
    image: 'https://www.dmmaridodealuguel.com.br/icone_logo.jpg',
    '@id': 'https://www.dmmaridodealuguel.com.br',
    url: 'https://www.dmmaridodealuguel.com.br',
    telephone: '+55-54-98443-1383',
    email: 'dougbc2014@gmail.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Marau',
      addressLocality: 'Marau',
      addressRegion: 'RS',
      postalCode: '99150-000',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -28.4494,
      longitude: -52.2008,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Marau',
        containedIn: {
          '@type': 'State',
          name: 'Rio Grande do Sul',
        },
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Região de Marau',
      },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '18:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '20',
      bestRating: '5',
    },
    description:
      'Serviços de marido de aluguel, manutenção, reparos, hidráulica, elétrica, pintura e muito mais em Marau/RS e região.',
    founder: {
      '@type': 'Person',
      name: 'Douglas Mello',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Serviços Hidráulicos',
            description: 'Instalação e reparo de sistemas hidráulicos, torneiras, encanamentos',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Serviços Elétricos',
            description: 'Instalação elétrica, tomadas, interruptores, iluminação',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pintura e Acabamento',
            description: 'Pintura residencial, comercial, texturas e acabamentos',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Montagem e Instalação',
            description: 'Montagem de móveis, instalação de cortinas, prateleiras',
          },
        },
      ],
    },
    sameAs: [
      'https://www.facebook.com/andrieleedouglas/',
      'https://www.instagram.com/dm.maridodealugueloficial/',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
