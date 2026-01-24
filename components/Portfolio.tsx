"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  { 
    id: 1, 
    title: "FinTech Dashboard", 
    category: "SaaS Development",
    description: "Real-time financial analytics platform with advanced charting and reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(37, 99, 235, 0.4) 100%)",
    stats: "10K+ Users, $2M ARR",
    // link: "/projects/fintech-dashboard",
  },
  { 
    id: 2, 
    title: "E-Commerce Platform", 
    category: "Shopify Headless",
    description: "High-performance commerce platform with seamless payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80",
    gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(147, 51, 234, 0.4) 100%)",
    stats: "$5M+ GMV, 50K+ Orders",
    // link: "/projects/e-commerce-platform",
  },
  { 
    id: 3, 
    title: "Health & Wellness App", 
    category: "Mobile Development",
    description: "Cross-platform health tracking app with AI-powered insights and recommendations.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
    gradient: "linear-gradient(135deg, rgba(20, 184, 166, 0.4) 0%, rgba(13, 148, 136, 0.4) 100%)",
    stats: "500K+ Downloads, 4.8★ Rating",
    // link: "/projects/health-wellness-app",
  },
];

export default function Portfolio() {
  return (
    <section id="work" style={{
      width: "100%",
      padding: "6rem 1rem",
      background: "#000000",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        top: "50%",
        right: "-20%",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
        filter: "blur(80px)",
        opacity: "0.1",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "90rem",
        margin: "0 auto",
        position: "relative",
        zIndex: "10",
      }}>
        <div style={{
          marginBottom: "4rem",
        }}>
          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "800",
            marginBottom: "1rem",
            backgroundImage: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Featured Work
          </h2>
          <p style={{
            color: "#9ca3af",
            fontSize: "1.125rem",
          }}>
            Transforming visions into digital realities
          </p>
        </div>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
        }}>
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group"
              style={{
                position: "relative",
                borderRadius: "1.5rem",
                overflow: "hidden",
                cursor: "pointer",
                height: "450px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(99, 102, 241, 0.8)";
                el.style.transform = "translateY(-10px)";
                el.style.boxShadow = "0 20px 50px rgba(99, 102, 241, 0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(255, 255, 255, 0.1)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Background Image */}
              <div style={{
                position: "absolute",
                inset: "0",
                zIndex: "1",
              }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  quality={90}
                  priority={project.id === 1}
                />
              </div>

              {/* Animated background gradient overlay */}
              <div style={{
                position: "absolute",
                inset: "0",
                background: project.gradient,
                opacity: "0.7",
                animation: "pulse 3s ease-in-out infinite",
                zIndex: "2",
              }} />
              
              {/* Dark overlay for text readability */}
              <div style={{
                position: "absolute",
                inset: "0",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: "3",
              }} />
              
              {/* Content */}
              <div style={{
                position: "absolute",
                inset: "0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "2rem",
                zIndex: "4",
              }}>
                <div>
                  <span style={{
                    display: "inline-block",
                    fontSize: "0.75rem",
                    color: "#6366f1",
                    fontFamily: "monospace",
                    marginBottom: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    opacity: "0.9",
                    background: "rgba(99, 102, 241, 0.2)",
                    padding: "0.5rem 0.75rem",
                    borderRadius: "0.375rem",
                    width: "fit-content",
                  }}>
                    {project.category}
                  </span>
                </div>

                <div>
                  <h3 style={{
                    fontSize: "1.75rem",
                    fontWeight: "800",
                    color: "#ffffff",
                    marginBottom: "0.75rem",
                    lineHeight: "1.2",
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    color: "#d1d5db",
                    fontSize: "0.95rem",
                    marginBottom: "1rem",
                    lineHeight: "1.5",
                  }}>
                    {project.description}
                  </p>
                  <div style={{
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}>
                    <span style={{
                      fontSize: "0.875rem",
                      color: "#6366f1",
                      fontWeight: "600",
                    }}>
                      {project.stats}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}