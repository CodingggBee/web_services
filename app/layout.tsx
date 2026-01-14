import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google"; // Import fonts
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400", "700", "800"] });

export const metadata: Metadata = {
  title: "Nexus Digital | Future-Ready Web Solutions",
  description: "Premium web development, UI/UX design, and SEO services.",
  keywords: ["web development", "next.js", "ui/ux", "seo", "agency"],
  authors: [{ name: 'Nexus Digital' }],
  applicationName: 'Nexus',
  openGraph: {
    title: 'Nexus Digital | Future-Ready Web Solutions',
    description: 'Premium web development, UI/UX design, and SEO services.',
    url: 'https://yourdomain.com',
    siteName: 'Nexus',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=840&fit=crop&q=80',
        width: 1600,
        height: 840,
        alt: 'Nexus — Digital Alchemy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus Digital | Future-Ready Web Solutions',
    description: 'Premium web development, UI/UX design, and SEO services.',
    images: ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=840&fit=crop&q=80'],
  },
  alternates: { canonical: 'https://yourdomain.com' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" style={{ colorScheme: "dark" }}>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        {/* JSON-LD structured data for Organization + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Nexus Digital",
            url: "https://yourdomain.com",
            logo: "https://yourdomain.com/logo.png",
            sameAs: [
              "https://www.linkedin.com/",
            ],
          })
        }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://yourdomain.com",
            name: "Nexus Digital",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://yourdomain.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
        />
      </head>
      <body 
        className={`${inter.variable} ${syne.variable} bg-black text-white antialiased selection:bg-primary selection:text-white`}
        style={{
          backgroundColor: "#000000",
          color: "#ededed",
        }}
      >
        <SmoothScroll>
          <Navbar />
          <main className="relative w-full overflow-x-hidden">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}