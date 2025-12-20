import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://conflictresolution.solutions";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Conflict Resolution - AI Mediation for Calm & Difficult Conversations",
    template: "%s | Conflict Resolution",
  },
  description:
    "Turn Conflict into Resolution. Instant AI Mediation for Texts, Emails, and Disputes.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Conflict Resolution",
    title: "Conflict Resolution - AI Mediation for Calm & Difficult Conversations",
    description:
      "Turn Conflict into Resolution. Instant AI Mediation for Texts, Emails, and Disputes.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Conflict Resolution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conflict Resolution - AI Mediation for Calm & Difficult Conversations",
    description:
      "Turn Conflict into Resolution. Instant AI Mediation for Texts, Emails, and Disputes.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Conflict Resolution",
    url: siteUrl,
    description:
      "Instant AI Mediation for Texts, Emails, and Disputes. Peacekeeper, Barrister, and Defense modes.",
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
