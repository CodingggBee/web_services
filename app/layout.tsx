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