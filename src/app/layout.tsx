import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://neopeds.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NeoPeds — Clinical Tools for Neonatology & Pediatrics",
    template: "%s | NeoPeds",
  },
  description:
    "Free, evidence-based clinical decision-support tools for neonatology and pediatrics. Includes a TPN calculator for neonates and a pediatric dosing reference.",
  keywords: [
    "neonatology",
    "pediatrics",
    "NICU",
    "TPN calculator",
    "total parenteral nutrition",
    "neonatal",
    "pediatric dosing",
    "clinical decision support",
    "neonate",
    "medical calculator",
  ],
  authors: [{ url: siteUrl }],
  creator: "NeoPeds",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "NeoPeds",
    title: "NeoPeds — Clinical Tools for Neonatology & Pediatrics",
    description:
      "Free, evidence-based clinical decision-support tools for neonatology and pediatrics.",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1024,
        height: 1024,
        alt: "NeoPeds — sleeping neonate in a neon heart with ECG line",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeoPeds — Clinical Tools for Neonatology & Pediatrics",
    description:
      "Free, evidence-based clinical decision-support tools for neonatology and pediatrics.",
    images: [`${siteUrl}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "NeoPeds",
      description:
        "Free, evidence-based clinical decision-support tools for neonatology and pediatrics.",
      inLanguage: "en-US",
    },
    {
      "@type": "MedicalWebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "NeoPeds — Clinical Tools for Neonatology & Pediatrics",
      isPartOf: { "@id": `${siteUrl}/#website` },
      description:
        "A directory of free clinical decision-support tools for neonatal and pediatric care teams.",
      about: [
        { "@type": "MedicalSpecialty", name: "Neonatology" },
        { "@type": "MedicalSpecialty", name: "Pediatrics" },
      ],
      audience: { "@type": "MedicalAudience", audienceType: "Clinician" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface font-sans">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
