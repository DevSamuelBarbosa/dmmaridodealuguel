import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DM Marido de Aluguel | Serviços em Marau/RS e região",
  description:
    "Serviços de marido de aluguel, manutenção, reparos, hidráulica, elétrica, pintura, limpeza e muito mais em Marau/RS e região. Solicite orçamento pelo WhatsApp!",
  keywords: [
    "marido de aluguel",
    "serviços gerais Marau",
    "manutenção residencial Marau",
    "eletricista Marau RS",
    "encanador Marau",
    "pintor Marau",
    "reformas Marau",
    "instalações Marau",
    "reparos residenciais",
    "Douglas Mello",
    "DM Marido de Aluguel",
    "serviços gerais RS",
  ],
  authors: [{ name: "Douglas Mello - DM Marido de Aluguel" }],
  creator: "DM Marido de Aluguel",
  publisher: "DM Marido de Aluguel",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "DM Marido de Aluguel | Serviços em Marau/RS e região",
    description:
      "Serviços profissionais de manutenção, reparos, hidráulica, elétrica, pintura e muito mais. Atendimento em Marau/RS e região com garantia e qualidade.",
    url: "https://www.dmmaridodealuguel.com.br",
    siteName: "DM Marido de Aluguel",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/icone_logo.jpg",
        width: 1200,
        height: 630,
        alt: "DM Marido de Aluguel - Serviços Gerais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DM Marido de Aluguel | Serviços em Marau/RS",
    description:
      "Serviços profissionais de manutenção e reparos em Marau/RS e região. Orçamento pelo WhatsApp!",
    images: ["/icone_logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.dmmaridodealuguel.com.br",
  },
  category: "services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <JsonLd />
        <link rel="canonical" href="https://www.dmmaridodealuguel.com.br" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0284c7" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
