"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}>
          <button 
            style={{
              padding: "1rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: "600",
              transition: "all 300ms",
              background: "linear-gradient(to right, #6366f1, #6366f1)",
              color: "#ffffff",
              boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            View Projects
          </button>
          <button 
            style={{
              padding: "1rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: "600",
              transition: "all 300ms",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              color: "#ffffff",
              backgroundColor: "transparent",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Our Process
          </button>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "bounce 2s infinite",
        }}>
          <svg style={{width: "1.5rem", height: "1.5rem", color: "#6366f1"}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}