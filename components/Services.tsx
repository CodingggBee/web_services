"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Monitor, PenTool, BarChart, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { 
    title: "Web Development", 
    desc: "Next.js & React scalable architectures.", 
    icon: <Monitor size={40} />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80"
    ,link: "/services/web-development"
  },
  { 
    title: "AI/ML Engineering", 
    desc: "AI based systems and chatbots.", 
    icon: <PenTool size={40} />,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&h=400&fit=crop&q=80"
    ,link: "/services/ai-ml-engineering"
  },
  { 
    title: "SEO & Performance", 
    desc: "Ranking high and loading fast.", 
    icon: <BarChart size={40} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80"
    ,link: "/services/seo-performance"
  },
  { 
    title: "Backend Systems", 
    desc: "Robust APIs and database solutions.", 
    icon: <Server size={40} />,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80"
    ,link: "/services/backend-systems"
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !triggerRef.current) return;

    const totalScroll = sectionRef.current.scrollWidth - window.innerWidth;

    gsap.fromTo(
      sectionRef.current,
      { x: 0 },
      {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=2000", // Length of the scroll
          scrub: 1,
          pin: true,
          // Handle mobile differently if needed, but this works responsively
        },
      }
    );
  }, { scope: triggerRef });

  const [imgSrcs, setImgSrcs] = useState<Record<number, string>>(() =>
    services.reduce((acc, s, i) => ({ ...acc, [i]: s.image }), {})
  );

  return (
    <section 
      id="services" 
      ref={triggerRef} 
      style={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#000000",
      }}
    >
      {/* Background decorative elements */}
      <div style={{
        position: "absolute",
        inset: "0",
        overflow: "hidden",
        pointerEvents: "none",
      }}>
        <div style={{
          position: "absolute",
          bottom: "33.333%",
          left: "25%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          opacity: "0.15",
          pointerEvents: "none",
          background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        />
      </div>

      <div style={{
        position: "absolute",
        top: "2.5rem",
        left: "2.5rem",
        zIndex: "10",
      }}>
        <h2 style={{
          fontSize: "clamp(1.875rem, 5vw, 3rem)",
          fontWeight: "700",
          color: "#ffffff",
          marginBottom: "0.5rem",
        }}>Our Services</h2>
        <p style={{
          color: "#9ca3af",
          fontWeight: "300",
        }}>Scroll to explore →</p>
      </div>
      
      <div ref={sectionRef} style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        paddingLeft: "2.5rem",
        gap: "2.5rem",
        width: "clamp(300vw, 400vw, 400vw)",
      }}>
        {services.map((service, index) => (
            <div 
            key={index} 
            style={{
              width: "clamp(60vw, 85vw, 600px)",
              height: "60vh",
              position: "relative",
              borderRadius: "1.5rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              overflow: "hidden",
              cursor: "pointer",
              transition: "all 300ms",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(99, 102, 241, 0.5)";
              el.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "rgba(255, 255, 255, 0.1)";
              el.style.transform = "scale(1)";
            }}
          >
            {/* Background Image */}
            <div style={{
              position: "absolute",
              inset: "0",
              zIndex: "1",
            }}>
              <Image
                src={imgSrcs[index]}
                alt={service.title}
                fill
                style={{
                  objectFit: "cover",
                }}
                quality={85}
                onError={() => setImgSrcs((s) => ({ ...s, [index]: '/fallback-service.svg' }))}
              />
            </div>

            {/* Gradient Overlay */}
            <div style={{
              position: "absolute",
              inset: "0",
              background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.9) 100%)",
              zIndex: "2",
            }} />

            {/* Content */}
            <div style={{
              position: "relative",
              zIndex: "3",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "2.5rem",
            }}>
              <div>
                <div style={{
                  marginBottom: "1.5rem",
                  color: "#6366f1",
                  fontSize: "2.5rem",
                }}>{service.icon}</div>
                <h3 style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  color: "#ffffff",
                }}>{service.title}</h3>
                <p style={{
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  color: "#d1d5db",
                  transition: "color 300ms",
                }}>{service.desc}</p>
              </div>
              <div style={{
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                color: "#9ca3af",
                fontSize: "0.875rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                <span>{service.title}</span>
                <Link href={service.link || '/services'} style={{
                  background: "rgba(99, 102, 241, 0.12)",
                  color: "#dbeafe",
                  padding: "0.5rem 0.75rem",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  fontWeight: 600,
                }}>
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}