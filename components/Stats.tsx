"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { value: "150+", label: "Projects Completed", icon: "🚀", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop&q=80" },
  { value: "98%", label: "Client Satisfaction", icon: "⭐", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop&q=80" },
  { value: "50+", label: "Team Members", icon: "👥", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&q=80" },
  { value: "8+", label: "Years Experience", icon: "📅", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&q=80" },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        padding: "6rem 1rem",
        background: "linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background elements */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "-10%",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
        filter: "blur(80px)",
        opacity: "0.1",
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
            Driving Results
          </h2>
          <p style={{
            color: "#9ca3af",
            fontSize: "1.125rem",
          }}>
            Metrics that matter to our clients
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
        }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                padding: "0",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(99, 102, 241, 0.2)",
                borderRadius: "1rem",
                textAlign: "center",
                backdropFilter: "blur(10px)",
                transition: "all 300ms",
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 100}ms`,
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(99, 102, 241, 0.15)";
                el.style.borderColor = "rgba(99, 102, 241, 0.5)";
                el.style.transform = isVisible ? "translateY(-10px)" : "translateY(20px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255, 255, 255, 0.05)";
                el.style.borderColor = "rgba(99, 102, 241, 0.2)";
                el.style.transform = isVisible ? "translateY(0)" : "translateY(30px)";
              }}
            >
              {/* Background Image */}
              <div style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                height: "120px",
                zIndex: "1",
              }}>
                <Image
                  src={stat.image}
                  alt={stat.label}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  quality={75}
                />
                <div style={{
                  position: "absolute",
                  inset: "0",
                  background: "linear-gradient(180deg, rgba(99, 102, 241, 0.3) 0%, transparent 100%)",
                }} />
              </div>

              {/* Content */}
              <div style={{
                position: "relative",
                zIndex: "2",
                padding: "2rem",
                paddingTop: "8rem",
              }}>
                <div style={{
                  fontSize: "3rem",
                  marginBottom: "1rem",
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: "2.5rem",
                  fontWeight: "800",
                  color: "#6366f1",
                  marginBottom: "0.5rem",
                }}>
                  {stat.value}
                </div>
                <div style={{
                  color: "#d1d5db",
                  fontSize: "1rem",
                }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
