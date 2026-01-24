"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textRef.current || !container.current) return;
    
    // Parallax text effect
    gsap.to(textRef.current, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-[100px]"
      style={{
        backgroundColor: "#000000",
      }}
    >
      {/* Background Image with Overlay */}
      <div style={{
        position: "absolute",
        inset: "0",
        zIndex: "0",
      }}>
        <div style={{
          position: "absolute",
          inset: "0",
          backgroundImage: "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.3",
        }} />
        <div style={{
          position: "absolute",
          inset: "0",
          background: "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, rgba(10, 10, 10, 0.8) 50%, #000000 100%)",
        }} />
      </div>
      {/* Animated gradient blobs */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "5%",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
        filter: "blur(60px)",
        opacity: "0.5",
        animation: "float 8s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute",
        top: "50%",
        right: "10%",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, #a855f7 0%, transparent 70%)",
        filter: "blur(60px)",
        opacity: "0.4",
        animation: "float 10s ease-in-out infinite 2s",
      }} />
      <div style={{
        position: "absolute",
        bottom: "5%",
        left: "20%",
        width: "350px",
        height: "350px",
        borderRadius: "50%",
        background: "radial-gradient(circle, #14b8a6 0%, transparent 70%)",
        filter: "blur(60px)",
        opacity: "0.3",
        animation: "float 9s ease-in-out infinite 1s",
      }} />

      <div ref={textRef} className="relative z-10 text-center px-4 max-w-5xl">
        <div className="mb-6">
          <span style={{
            display: "inline-block",
            fontSize: "0.875rem",
            fontFamily: "monospace",
            color: "#6366f1",
            marginBottom: "1rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0.5rem 1rem",
            borderRadius: "9999px",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            backgroundColor: "rgba(99, 102, 241, 0.1)",
          }}>
            Welcome to Nexus
          </span>
        </div>
        
        <h1 style={{
          fontSize: "clamp(2.5rem, 10vw, 8rem)",
          color: "#ffffff",
          marginBottom: "2rem",
          lineHeight: "1.2",
          fontWeight: "800",
          letterSpacing: "-0.02em",
          backgroundImage: "linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #a78bfa 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 40px rgba(99, 102, 241, 0.3)",
          animation: "slideInDown 1s ease-out",
        }}>
          DIGITAL <br /> ALCHEMY
        </h1>
        
        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.5rem)",
          color: "#d1d5db",
          maxWidth: "48rem",
          margin: "3rem auto",
          lineHeight: "1.6",
          fontWeight: "300",
        }}>
          We transform code into experiences and brands into legacies. 
          <br className="hidden sm:block" /> Full-stack development for the modern web.
        </p>
        
        <div style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}>
          <Link
            href="#work"
            aria-label="View Projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              padding: "0.9rem 2.25rem",
              borderRadius: "0.75rem",
              fontWeight: 700,
              transition: "all 200ms",
              background: "linear-gradient(90deg,#6366f1 0%,#7c3aed 100%)",
              color: "#fff",
              boxShadow: "0 10px 30px rgba(99,102,241,0.25)",
              border: "1px solid rgba(124,58,237,0.15)",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          ><span>View Projects</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 5v14" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 12l-7 7-7-7" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="#services"
            aria-label="Our Services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.9rem 2rem",
              borderRadius: "0.75rem",
              fontWeight: 700,
              transition: "all 200ms",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#fff",
              background: "transparent",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Our Services
          </Link>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "bounce 2s infinite",
        }}>
        </div>
      </div>
    </section>
  );
}