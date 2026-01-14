"use client";
import Image from "next/image";

const features = [
  {
    title: "Custom Solutions",
    description: "Bespoke development tailored to your unique business needs and goals.",
    icon: "⚙️",
    color: "#6366f1",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&q=80",
  },
  {
    title: "Performance First",
    description: "Lightning-fast load times and optimized performance across all devices.",
    icon: "⚡",
    color: "#a855f7",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&q=80",
  },
  {
    title: "Scalable Architecture",
    description: "Built to grow with your business, from startup to enterprise scale.",
    icon: "📈",
    color: "#14b8a6",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&q=80",
  },
  {
    title: "Security Focused",
    description: "Enterprise-grade security and data protection for complete peace of mind.",
    icon: "🔒",
    color: "#f59e0b",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&q=80",
  },
  {
    title: "24/7 Support",
    description: "Dedicated support team ready to help anytime, anywhere, any issue.",
    icon: "🤝",
    color: "#ec4899",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&q=80",
  },
  {
    title: "Continuous Updates",
    description: "Regular updates, improvements, and feature additions post-launch.",
    icon: "🔄",
    color: "#06b6d4",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80",
  },
];

export default function Features() {
  return (
    <section style={{
      width: "100%",
      padding: "6rem 1rem",
      background: "#000000",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background gradient */}
      <div style={{
        position: "absolute",
        inset: "0",
        backgroundImage: "radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: "80rem",
        margin: "0 auto",
        position: "relative",
        zIndex: "10",
      }}>
        <div style={{
          textAlign: "center",
          marginBottom: "4rem",
        }}>
          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "800",
            color: "#ffffff",
            marginBottom: "1rem",
            backgroundImage: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Why Choose Nexus
          </h2>
          <p style={{
            color: "#9ca3af",
            fontSize: "1.125rem",
            maxWidth: "40rem",
            margin: "0 auto",
          }}>
            We combine innovation, expertise, and dedication to deliver exceptional results
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                padding: "0",
                background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "1.25rem",
                backdropFilter: "blur(10px)",
                transition: "all 300ms ease-out",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = `linear-gradient(135deg, rgba(${
                  feature.color === "#6366f1" ? "99, 102, 241" :
                  feature.color === "#a855f7" ? "168, 85, 247" :
                  feature.color === "#14b8a6" ? "20, 184, 166" :
                  feature.color === "#f59e0b" ? "245, 158, 11" :
                  feature.color === "#ec4899" ? "236, 72, 153" :
                  "6, 182, 212"
                }, 0.15) 0%, rgba(255,255,255,0.02) 100%)`;
                el.style.borderColor = feature.color;
                el.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)";
                el.style.borderColor = "rgba(255, 255, 255, 0.1)";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Background Image */}
              <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                height: "180px",
                zIndex: "1",
              }}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  quality={80}
                />
                <div style={{
                  position: "absolute",
                  inset: "0",
                  background: `linear-gradient(180deg, ${feature.color}20 0%, transparent 100%)`,
                }} />
              </div>

              {/* Accent line */}
              <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "3px",
                background: feature.color,
                opacity: "0",
                transition: "opacity 300ms",
                zIndex: "3",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.opacity = "0";
              }}
              />

              {/* Content */}
              <div style={{
                position: "relative",
                zIndex: "2",
                padding: "2rem",
                paddingTop: "12rem",
              }}>
                <div style={{
                  fontSize: "2.5rem",
                  marginBottom: "1rem",
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#ffffff",
                  marginBottom: "0.75rem",
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: "#9ca3af",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
