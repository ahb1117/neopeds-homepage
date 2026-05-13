import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

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
        "A directory of free clinical decision-support tools for neonatal and pediatric care teams, including a TPN calculator and pediatric drug dosing reference.",
      about: [
        {
          "@type": "MedicalSpecialty",
          name: "Neonatology",
        },
        {
          "@type": "MedicalSpecialty",
          name: "Pediatrics",
        },
      ],
      audience: {
        "@type": "MedicalAudience",
        audienceType: "Clinician",
      },
      medicalAudience: {
        "@type": "MedicalAudience",
        audienceType: "Clinician",
      },
    },
    {
      "@type": "MedicalWebPage",
      url: "https://tpn.neopeds.org",
      name: "TPN Calculator — NeoPeds",
      description:
        "Total parenteral nutrition calculator for neonates. Computes fluid, caloric, macronutrient, and electrolyte requirements using weight-based NICU dosing guidelines.",
      about: {
        "@type": "MedicalTherapy",
        name: "Total Parenteral Nutrition",
        alternateName: "TPN",
        relevantSpecialty: {
          "@type": "MedicalSpecialty",
          name: "Neonatology",
        },
      },
    },
    {
      "@type": "MedicalWebPage",
      url: "https://peds.neopeds.org",
      name: "Peds Reference — NeoPeds",
      description:
        "Pediatric clinical reference for weight-based drug dosing, age-stratified vital sign ranges, and growth milestones.",
      about: {
        "@type": "MedicalSpecialty",
        name: "Pediatrics",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-700">
        {children}
      </body>
    </html>
  );
}
