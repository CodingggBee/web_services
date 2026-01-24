"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

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
    { href: "/#home", label: "Home", icon: "🏠" },
    { href: "/about", label: "About", icon: "👤" },
    { href: "/#services", label: "Services", icon: "⚡" },
    { href: "/#work", label: "Portfolio", icon: "🎨" },
    // { href: "#testimonials", label: "Testimonials", icon: "⭐" },
    // { href: "#blog", label: "Blog", icon: "📝" },
    { href: "#contact", label: "Contact", icon: "💬" },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>

      <nav style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "50",
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        borderBottom: scrolled ? "1px solid rgba(99, 102, 241, 0.3)" : "none",
        background: scrolled 
          ? "linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(17, 24, 39, 0.9) 100%)" 
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
          minHeight: "60px", 
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
              boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
            }}>
              N
            </span>
            NEXUS
          </Link>

          {/* Desktop Navigation - VISIBLE ON LARGE SCREENS */}
          <div className="hidden lg:flex" style={{
              gap: "0.25rem",
              alignItems: "center",
            }}
          >
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                style={{
                  color: activeLink === link.href ? "#6366f1" : "#d1d5db",
                  textDecoration: "none",
                  transition: "all 300ms",
                  padding: "0.625rem 1rem",
                  borderRadius: "0.5rem",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: activeLink === link.href ? "rgba(99, 102, 241, 0.1)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (activeLink !== link.href) {
                    e.currentTarget.style.color = "#a855f7";
                    e.currentTarget.style.background = "rgba(99, 102, 241, 0.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeLink !== link.href) {
                    e.currentTarget.style.color = "#d1d5db";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
                onClick={() => {
                  setActiveLink(link.href);
                  if (mobileOpen) setMobileOpen(false);
                }}
              >
                <span>{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}>
            {/* Stats Badge */}
            <div className="hidden xl:flex" style={{
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                background: "rgba(99, 102, 241, 0.1)",
                border: "1px solid rgba(99, 102, 241, 0.3)",
                borderRadius: "50px",
                fontSize: "0.85rem",
                color: "#6366f1",
                fontWeight: "600",
              }}
            >
              <span style={{
                width: "0.5rem",
                height: "0.5rem",
                background: "#10b981",
                borderRadius: "50%",
                animation: "pulse 2s infinite",
              }} />
              Available for Projects
            </div>

            {/* Social Links */}
            <div className="hidden md:flex" style={{
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <a 
                href="https://github.com/Zain-ul-Abdin-Arshad?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(99, 102, 241, 0.1)",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  borderRadius: "0.5rem",
                  color: "#6366f1",
                  transition: "all 300ms",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(99, 102, 241, 0.2)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(99, 102, 241, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/zain-ul-abdin-arshad-98b9352b9/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(99, 102, 241, 0.1)",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  borderRadius: "0.5rem",
                  color: "#6366f1",
                  transition: "all 300ms",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(99, 102, 241, 0.2)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(99, 102, 241, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(99, 102, 241, 0.1)",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  borderRadius: "0.5rem",
                  color: "#6366f1",
                  transition: "all 300ms",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(99, 102, 241, 0.2)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(99, 102, 241, 0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            {/* Primary CTA Button */}
            <button 
              onClick={() => {
                setActiveLink("#contact");
                setMobileOpen(false);
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
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(99, 102, 241, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(99, 102, 241, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
              }}
            >
              <span>🚀</span>
              <span className="hidden sm:inline">Get Started</span>
            </button>

            {/* Mobile Menu Button - ONLY VISIBLE ON SMALL SCREENS */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "rgba(99, 102, 241, 0.2)",
                border: "1px solid rgba(99, 102, 241, 0.3)",
                borderRadius: "0.5rem",
                padding: "0.5rem 0.75rem",
                cursor: "pointer",
                color: "#6366f1",
                transition: "all 300ms",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
              className="lg:hidden"
            >
              <span style={{
                width: "20px",
                height: "2px",
                background: "#6366f1",
                borderRadius: "1px",
                transition: "all 300ms",
                transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "rotate(0)",
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
                transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : "rotate(0)",
              }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown - ONLY VISIBLE ON SMALL SCREENS WHEN OPEN */}
      {mobileOpen && (
        <div 
          style={{
            position: "fixed",
            top: scrolled ? "76px" : "92px",
            left: "0",
            right: "0",
            zIndex: "40",
            background: "rgba(17, 24, 39, 0.98)",
            borderBottom: "1px solid rgba(99, 102, 241, 0.2)",
            backdropFilter: "blur(20px)",
            maxHeight: "calc(100vh - 92px)",
            overflowY: "auto",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
          }} 
          className="lg:hidden"
        > 
          <div style={{
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}>
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                style={{
                  color: activeLink === link.href ? "#6366f1" : "#d1d5db",
                  textDecoration: "none",
                  transition: "all 300ms",
                  padding: "1rem 1.25rem",
                  borderRadius: "0.75rem",
                  fontSize: "1rem",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  background: activeLink === link.href ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.05)",
                  border: "1px solid",
                  borderColor: activeLink === link.href ? "rgba(99, 102, 241, 0.3)" : "transparent",
                }}
                onClick={() => {
                  setMobileOpen(false);
                  setActiveLink(link.href);
                }}
              >
                <span style={{ fontSize: "1.25rem" }}>{link.icon}</span>
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Social Links */}
            <div style={{
              display: "flex",
              gap: "0.75rem",
              padding: "1rem 0",
              marginTop: "1rem",
              borderTop: "1px solid rgba(99, 102, 241, 0.2)",
              justifyContent: "center",
            }}>
              <a 
                href="https://github.com/Zain-ul-Abdin-Arshad?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: "3rem",
                  height: "3rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(99, 102, 241, 0.1)",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  borderRadius: "0.75rem",
                  color: "#6366f1",
                  textDecoration: "none",
                  fontSize: "1.5rem",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/zain-ul-abdin-arshad-98b9352b9/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: "3rem",
                  height: "3rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(99, 102, 241, 0.1)",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  borderRadius: "0.75rem",
                  color: "#6366f1",
                  textDecoration: "none",
                  fontSize: "1.5rem",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: "3rem",
                  height: "3rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(99, 102, 241, 0.1)",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  borderRadius: "0.75rem",
                  color: "#6366f1",
                  textDecoration: "none",
                  fontSize: "1.5rem",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}