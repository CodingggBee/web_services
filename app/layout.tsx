import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

// Optimized font loading with display swap
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const syne = Syne({ 
  subsets: ["latin"], 
  variable: "--font-syne", 
  weight: ["400", "700", "800"],
  display: "swap",
  preload: true,
});

// Viewport configuration (recommended for Next.js 14+)
export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Enhanced metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: {
    default: "Nexus Digital | Future-Ready Web Solutions",
    template: "%s | Nexus Digital",
  },
  description: "Premium web development, UI/UX design, and SEO services. Transform your digital presence with cutting-edge web solutions and innovative design.",
  keywords: [
    "web development",
    "next.js development",
    "react development",
    "ui/ux design",
    "seo services",
    "digital agency",
    "web design",
    "app development",
    "branding",
    "digital marketing",
  ],
  authors: [{ name: "Nexus Digital", url: "https://yourdomain.com" }],
  creator: "Nexus Digital",
  publisher: "Nexus Digital",
  applicationName: "Nexus",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Nexus Digital",
    title: "Nexus Digital | Future-Ready Web Solutions",
    description: "Premium web development, UI/UX design, and SEO services. Transform your digital presence with cutting-edge web solutions.",
    images: [
      {
        url: "/og-image.jpg", // Use local optimized image
        width: 1200,
        height: 630,
        alt: "Nexus Digital - Future-Ready Web Solutions",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nexusdigital",
    creator: "@nexusdigital",
    title: "Nexus Digital | Future-Ready Web Solutions",
    description: "Premium web development, UI/UX design, and SEO services.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://yourdomain.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

// JSON-LD structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexus Digital",
  url: "https://yourdomain.com",
  logo: {
    "@type": "ImageObject",
    url: "https://yourdomain.com/logo.png",
    width: "512",
    height: "512",
  },
  description: "Premium web development, UI/UX design, and SEO services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Street Address",
    addressLocality: "Your City",
    addressRegion: "Your State",
    postalCode: "Your ZIP",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-XXX-XXX-XXXX",
    contactType: "Customer Service",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.linkedin.com/in/zain-ul-abdin-arshad-98b9352b9/",
    "https://twitter.com/nexusdigital",
    "https://github.com/Zain-ul-Abdin-Arshad?tab=repositories",
    "https://www.instagram.com/nexusdigital",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nexus Digital",
  url: "https://yourdomain.com",
  description: "Premium web development, UI/UX design, and SEO services.",
  publisher: {
    "@type": "Organization",
    name: "Nexus Digital",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://yourdomain.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nexus Digital",
  image: "https://yourdomain.com/logo.png",
  "@id": "https://yourdomain.com",
  url: "https://yourdomain.com",
  telephone: "+1-XXX-XXX-XXXX",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Street Address",
    addressLocality: "Your City",
    addressRegion: "Your State",
    postalCode: "Your ZIP",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7128,
    longitude: -74.0060,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className="scroll-smooth" 
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for additional optimization */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body 
        className={`${inter.variable} ${syne.variable} bg-black text-white antialiased selection:bg-primary selection:text-white overflow-x-hidden`}
        style={{
          backgroundColor: "#000000",
          color: "#ededed",
        }}
      >
        {/* Google Analytics - Replace with your ID */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Optional: Google Tag Manager */}
        {/* <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        /> */}

        <SmoothScroll>
          <Navbar />
          <main 
            className="relative w-full overflow-x-hidden min-h-screen"
            id="main-content"
            role="main"
          >
            {children}
          </main>
          <Footer />
        </SmoothScroll>

        {/* Optional: Cookie Consent Banner */}
        {/* <CookieConsent /> */}
        
        {/* Optional: Back to Top Button */}
        {/* <BackToTop /> */}
      </body>
    </html>
  );
}