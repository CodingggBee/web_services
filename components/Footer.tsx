"use client";
import Link from "next/link";

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a jump link (starts with #), prevent default Next.js navigation and scroll manually
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer style={{
      background: "#000000",
      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      padding: "4rem 1rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
        filter: "blur(80px)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "90rem",
        margin: "0 auto",
        position: "relative",
        zIndex: "10",
      }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}>
          {/* Main Footer Content */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
          }}>
            {/* 1. Brand Section */}
            <div>
              <div style={{
                fontSize: "1.75rem",
                fontWeight: "900",
                marginBottom: "1rem",
                background: "linear-gradient(135deg, #ffffff 0%, #6366f1 50%, #a855f7 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}>
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2.5rem",
                  height: "2.5rem",
                  background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                  borderRadius: "50%",
                  fontSize: "1.25rem",
                  fontWeight: "800",
                  color: "#ffffff",
                }}>
                  N
                </span>
                NEXUS
              </div>
              <p style={{
                color: "#9ca3af",
                fontSize: "0.95rem",
                lineHeight: "1.6",
                maxWidth: "280px",
              }}>
                Transforming visions into digital realities. Premium web solutions for modern businesses.
              </p>
            </div>

            {/* 2. Quick Links (UPDATED TO JUMP LINKS) */}
            <div>
              <h3 style={{
                fontSize: "1rem",
                fontWeight: "700",
                color: "#ffffff",
                marginBottom: "1.5rem",
              }}>
                Quick Links
              </h3>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}>
                {[
                  // These now point to IDs on the page (e.g. id="services")
                  { name: "Services", href: "#services" },
                  { name: "Portfolio", href: "#work" },
                  { name: "About Us", href: "#about" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    style={{
                      color: "#9ca3af",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      transition: "all 300ms",
                      display: "inline-block",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#6366f1";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#9ca3af";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* 3. Services List */}
            <div>
              <h3 style={{
                fontSize: "1rem",
                fontWeight: "700",
                color: "#ffffff",
                marginBottom: "1.5rem",
              }}>
                Our Services
              </h3>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}>
                {[
                  "Web Development",
                  "UI/UX Design",
                  "SEO & Marketing",
                  "Backend Systems",
                ].map((service) => (
                  <Link
                    key={service}
                    href="#services"
                    onClick={(e) => scrollToSection(e, '#services')}
                    style={{
                      color: "#9ca3af",
                      fontSize: "0.95rem",
                      textDecoration: "none",
                      transition: "color 200ms",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#6366f1'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af'; }}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>

            {/* 4. Social Links */}
            <div>
              <h3 style={{
                fontSize: "1rem",
                fontWeight: "700",
                color: "#ffffff",
                marginBottom: "1.5rem",
              }}>
                Connect
              </h3>
              <div style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}>
                {[
                  { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/zain-ul-abdin-arshad-98b9352b9/" },
                  { name: "GitHub", icon: "💻", url: "https://github.com/Zain-ul-Abdin-Arshad?tab=repositories" },
                  { name: "Twitter", icon: "🐦", url: "https://twitter.com" },
                  { name: "Email", icon: "✉️", url: "mailto:contact@nexus.com" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.75rem 1rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "0.5rem",
                      color: "#9ca3af",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "all 300ms",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(99, 102, 241, 0.15)";
                      e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.5)";
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.color = "#9ca3af";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span>{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}>
            <div style={{
              color: "#6b7280",
              fontSize: "0.875rem",
              textAlign: "center",
            }}>
              © {new Date().getFullYear()} Nexus Digital. All rights reserved.
            </div>
            <div style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}>
              <Link href="/privacy" style={{ color: "#6b7280", fontSize: "0.875rem", textDecoration: "none" }}>
                Privacy Policy
              </Link>
              <Link href="/terms" style={{ color: "#6b7280", fontSize: "0.875rem", textDecoration: "none" }}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}