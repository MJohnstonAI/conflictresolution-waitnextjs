import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://conflictresolution-waitnextjs.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Waitlist",
  description:
    "Join the early-access waitlist. We’ll email you as soon as Conflict Resolution opens.",
  alternates: {
    canonical: "/waitlist",
  },
  openGraph: {
    type: "website",
    url: "/waitlist",
    siteName: "Conflict Resolution",
    title: "Waitlist | Conflict Resolution",
    description:
      "Join the early-access waitlist. We’ll email you as soon as Conflict Resolution opens.",
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
    title: "Waitlist | Conflict Resolution",
    description:
      "Join the early-access waitlist. We’ll email you as soon as Conflict Resolution opens.",
    images: ["/twitter-image"],
  },
};

export default function WaitlistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

