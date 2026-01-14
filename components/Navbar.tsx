"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services", icon: "⚡" },
    { href: "#work", label: "Portfolio", icon: "🎨" },
    { href: "#contact", label: "Contact", icon: "💬" },
  ];

  return (
    <nav style={{
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      zIndex: "50",
      transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
      borderBottom: scrolled ? "1px solid rgba(99, 102, 241, 0.3)" : "none",
      background: scrolled 
        ? "linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(17, 24, 39, 0.6) 100%)" 
        : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      boxShadow: scrolled ? "0 10px 40px rgba(0, 0, 0, 0.3)" : "none",
      padding: scrolled ? "0.75rem 0" : "1.5rem 0",
    }}>
      <div style={{
        maxWidth: "90rem",
        margin: "0 auto",
        padding: "0 1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60px", 
      }}>
        {/* Logo */}
        <Link 
          href="/" 
          style={{
            fontSize: "1.75rem",
            fontWeight: "900",
            color: "#ffffff",
            textDecoration: "none",
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #ffffff 0%, #6366f1 50%, #a855f7 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.transform = "scale(1)";
          }}
        >
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "2.5rem",
            height: "2.5rem",
            background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
            borderRadius: "50%",
            marginRight: "0.5rem",
            fontSize: "1.25rem",
            fontWeight: "800",
            color: "#ffffff",
          }}>
            N
          </span>
          NEXUS
        </Link>

        {/* Desktop Navigation */}
        <div style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
        }} className="hidden md:flex">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              style={{
                color: activeLink === link.href ? "#6366f1" : "#d1d5db",
                textDecoration: "none",
                transition: "all 300ms",
                padding: "0.75rem 1.25rem",
                borderRadius: "0.5rem",
                fontSize: "0.95rem",
                fontWeight: "500",
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: activeLink === link.href ? "rgba(99, 102, 241, 0.1)" : "transparent",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#ffffff";
                el.style.background = "rgba(99, 102, 241, 0.15)";
                el.style.transform = "translateX(5px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = activeLink === link.href ? "#6366f1" : "#d1d5db";
                el.style.background = activeLink === link.href ? "rgba(99, 102, 241, 0.1)" : "transparent";
                el.style.transform = "translateX(0)";
              }}
              onClick={() => {
                setActiveLink(link.href);
                if (mobileOpen) setMobileOpen(false);
                document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}>
          {/* Stats Badge */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 1rem",
            background: "rgba(99, 102, 241, 0.1)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            borderRadius: "50px",
            fontSize: "0.85rem",
            color: "#6366f1",
            fontWeight: "600",
          }} className="hidden md:flex">
            <span style={{
              width: "0.5rem",
              height: "0.5rem",
              background: "#10b981",
              borderRadius: "50%",
              animation: "pulse 2s infinite",
            }} />
            Available for Projects
          </div>

          {/* Primary CTA Button */}
          <button 
            onClick={() => {
              setActiveLink("#contact");
              setMobileOpen(false);
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              padding: "0.875rem 1.75rem",
              background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
              color: "#ffffff",
              fontWeight: "700",
              borderRadius: "50px",
              textDecoration: "none",
              fontSize: "0.9rem",
              border: "2px solid transparent",
              cursor: "pointer",
              transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 8px 20px rgba(99, 102, 241, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.boxShadow = "0 15px 40px rgba(99, 102, 241, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)";
              el.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.boxShadow = "0 8px 20px rgba(99, 102, 241, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
              el.style.transform = "translateY(0)";
            }}
          >
            <span>🚀</span>
            Get Started
          </button>

          {/* Mobile Menu Button - FIXED */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              // Removed "display" and "@media" keys
              background: "rgba(99, 102, 241, 0.2)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              borderRadius: "0.5rem",
              padding: "0.5rem 0.75rem",
              cursor: "pointer",
              color: "#6366f1",
              transition: "all 300ms",
            }}
            // Tailwind class "md:hidden" handles the hiding
            className="md:hidden flex flex-col gap-1"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(99, 102, 241, 0.3)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(99, 102, 241, 0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(99, 102, 241, 0.2)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(99, 102, 241, 0.3)";
            }}
          >
            <span style={{
              width: "20px",
              height: "2px",
              background: "#6366f1",
              borderRadius: "1px",
              transition: "all 300ms",
              transform: mobileOpen ? "rotate(45deg) translateY(10px)" : "rotate(0)",
            }} />
            <span style={{
              width: "20px",
              height: "2px",
              background: "#6366f1",
              borderRadius: "1px",
              transition: "all 300ms",
              opacity: mobileOpen ? 0 : 1,
            }} />
            <span style={{
              width: "20px",
              height: "2px",
              background: "#6366f1",
              borderRadius: "1px",
              transition: "all 300ms",
              transform: mobileOpen ? "rotate(-45deg) translateY(-10px)" : "rotate(0)",
            }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu - FIXED */}
      {mobileOpen && (
        <div style={{
          // Removed "display" and "@media" keys
          // Removed "flexDirection" (moved to className)
          gap: "0.5rem",
          padding: "1rem 1.5rem",
          background: "rgba(17, 24, 39, 0.95)",
          borderTop: "1px solid rgba(99, 102, 241, 0.2)",
          backdropFilter: "blur(10px)",
          animation: "slideInDown 300ms ease-out",
        }} className="md:hidden flex flex-col"> 
          {/* Added "flex flex-col" to className above */}
          
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              style={{
                color: "#d1d5db",
                textDecoration: "none",
                transition: "all 300ms",
                padding: "0.875rem 1rem",
                borderRadius: "0.5rem",
                fontSize: "0.95rem",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "rgba(99, 102, 241, 0.05)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#ffffff";
                el.style.background = "rgba(99, 102, 241, 0.2)";
                el.style.transform = "translateX(10px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#d1d5db";
                el.style.background = "rgba(99, 102, 241, 0.05)";
                el.style.transform = "translateX(0)";
              }}
              onClick={() => {
                setMobileOpen(false);
                setActiveLink(link.href);
              }}
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}