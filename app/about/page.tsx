"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const stats = [
    { number: "20+", label: "Projects Completed", icon: "🚀" },
    { number: "98%", label: "Client Satisfaction", icon: "⭐" },
    { number: "5+", label: "Team Members", icon: "👥" },
    { number: "4+", label: "Years Experience", icon: "💎" },
  ];

  const values = [
    {
      icon: "💡",
      title: "Innovation First",
      description: "We push boundaries and explore cutting-edge technologies to deliver solutions that set you apart from the competition.",
    },
    {
      icon: "🎯",
      title: "Quality Driven",
      description: "Every line of code, every pixel, every interaction is crafted with meticulous attention to detail and excellence.",
    },
    {
      icon: "🤝",
      title: "Client Partnership",
      description: "We believe in building lasting relationships, not just completing projects. Your success is our success.",
    },
    {
      icon: "⚡",
      title: "Agile Delivery",
      description: "Fast-paced development with continuous iteration ensures your project stays on track and adapts to your needs.",
    },
  ];

  const team = [
    {
      name: "Zain ul Abdin Arshad",
      role: "CEO, Founder & CTO",
      image: "/CEO.jpg",
      bio: "Visionary leader with 5+ years in digital transformation",
      social: { linkedin: "https://www.linkedin.com/in/zain-ul-abdin-arshad-98b9352b9/", twitter: "https://www.twiter.com" },
    },
    {
      name: "Miss Amna",
      role: "Head of Design",
      image: "/Head_Of_Design.jpg",
      bio: "Award-winning designer passionate about user experience",
      // social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Development Team",
      role: "Full Stack developers",
      image: "/Team.jpg",
      bio: "Full-stack expert with a love for clean, efficient code",
      // social: { linkedin: "#", twitter: "#" },
    },
  ];

  const timeline = [
    { year: "2022", title: "The Beginning", description: "Founded with a vision to revolutionize digital experiences" },
    { year: "2023", title: "Rapid Growth", description: "Expanded team to 2+ members, launched 5+ successful projects" },
    { year: "2024", title: "Global Reach", description: "Expanded team to 4+ members, launched 10+ successful projects" },
    { year: "2025", title: "Innovation Leader", description: "Recognized as industry leader in cutting-edge web solutions" },
  ];

  return (
    <div style={{ background: "#000000", minHeight: "100vh", paddingTop: "100px" }}>
      {/* Hero Section */}
      <section style={{
        padding: "4rem 1.5rem",
        background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%)",
        borderBottom: "1px solid rgba(99, 102, 241, 0.2)",
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}>
          <div style={{
            display: "inline-block",
            padding: "0.5rem 1.5rem",
            background: "rgba(99, 102, 241, 0.1)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            borderRadius: "50px",
            marginBottom: "1.5rem",
            fontSize: "0.9rem",
            color: "#6366f1",
            fontWeight: "600",
          }}>
            About Nexus Digital
          </div>

          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: "900",
            background: "linear-gradient(135deg, #ffffff 0%, #6366f1 50%, #a855f7 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1.5rem",
            lineHeight: "1.2",
          }}>
            Crafting Digital Excellence
            <br />
            Since 2021
          </h1>

          <p style={{
            fontSize: "1.25rem",
            color: "#d1d5db",
            maxWidth: "800px",
            margin: "0 auto 3rem",
            lineHeight: "1.8",
          }}>
            We're a team of passionate designers, developers, and strategists dedicated to transforming your digital vision into reality. Our mission is to create exceptional web experiences that drive results.
          </p>

          {/* Stats Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginTop: "4rem",
          }}>
            {stats.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(17, 24, 39, 0.8)",
                  border: "1px solid rgba(99, 102, 241, 0.2)",
                  borderRadius: "1rem",
                  padding: "2rem",
                  textAlign: "center",
                  transition: "all 0.3s",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${idx * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(99, 102, 241, 0.1)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(17, 24, 39, 0.8)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.2)";
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{stat.icon}</div>
                <div style={{
                  fontSize: "2.5rem",
                  fontWeight: "900",
                  background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "0.5rem",
                }}>
                  {stat.number}
                </div>
                <div style={{ color: "#9ca3af", fontSize: "1rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: "6rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
          <div>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "900",
              background: "linear-gradient(135deg, #ffffff 0%, #6366f1 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1.5rem",
            }}>
              Our Story
            </h2>
            <p style={{ color: "#d1d5db", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "1rem" }}>
              Founded in 2021, Nexus Digital emerged from a simple belief: every business deserves a digital presence that truly represents their vision and drives measurable results.
            </p>
            <p style={{ color: "#d1d5db", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "1rem" }}>
              What started as a small team of one passionate developer has grown into a full-service digital agency with a diverse team of 5+ experts spanning design, development, strategy, and marketing.
            </p>
            <p style={{ color: "#d1d5db", fontSize: "1.1rem", lineHeight: "1.8" }}>
              Today, we're proud to have helped over 5 businesses transform their digital presence and achieve their goals through innovative, user-centric solutions.
            </p>
          </div>

          <div style={{
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.1) 100%)",
            borderRadius: "2rem",
            padding: "3rem",
            border: "1px solid rgba(99, 102, 241, 0.3)",
          }}>
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#6366f1",
              marginBottom: "1.5rem",
            }}>
              Why Choose Us?
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "100% custom, no templates",
                "Dedicated project manager",
                "Agile development process",
                "Post-launch support included",
                "SEO optimization built-in",
                "Mobile-first approach",
              ].map((item, idx) => (
                <li key={idx} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 0",
                  borderBottom: idx < 5 ? "1px solid rgba(99, 102, 241, 0.2)" : "none",
                  color: "#d1d5db",
                  fontSize: "1rem",
                }}>
                  <span style={{
                    width: "24px",
                    height: "24px",
                    background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    flexShrink: 0,
                  }}>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{
        padding: "6rem 1.5rem",
        background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: "900",
            background: "linear-gradient(135deg, #ffffff 0%, #6366f1 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "3rem",
            textAlign: "center",
          }}>
            Our Core Values
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}>
            {values.map((value, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(17, 24, 39, 0.6)",
                  border: "1px solid rgba(99, 102, 241, 0.2)",
                  borderRadius: "1.5rem",
                  padding: "2.5rem",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(99, 102, 241, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.4)";
                  e.currentTarget.style.transform = "translateY(-10px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(17, 24, 39, 0.6)";
                  e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{
                  fontSize: "3rem",
                  marginBottom: "1rem",
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#ffffff",
                  marginBottom: "1rem",
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: "#9ca3af",
                  lineHeight: "1.7",
                  fontSize: "1rem",
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: "6rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: "900",
          background: "linear-gradient(135deg, #ffffff 0%, #6366f1 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "4rem",
          textAlign: "center",
        }}>
          Our Journey
        </h2>

        <div style={{ position: "relative" }}>
          {/* Timeline Line */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "0",
            bottom: "0",
            width: "2px",
            background: "linear-gradient(180deg, #6366f1 0%, #a855f7 100%)",
            transform: "translateX(-50%)",
            // display: window.innerWidth < 768 ? "none" : "block",
          }} />

          {timeline.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "4rem",
                position: "relative",
                flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
              }}
            >
              <div style={{
                flex: 1,
                textAlign: idx % 2 === 0 ? "right" : "left",
                padding: idx % 2 === 0 ? "0 3rem 0 0" : "0 0 0 3rem",
              }}>
                <div style={{
                  display: "inline-block",
                  background: "rgba(99, 102, 241, 0.1)",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  borderRadius: "1rem",
                  padding: "2rem",
                  transition: "all 0.3s",
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(99, 102, 241, 0.15)";
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(99, 102, 241, 0.1)";
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <div style={{
                    fontSize: "2rem",
                    fontWeight: "900",
                    background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "0.5rem",
                  }}>
                    {item.year}
                  </div>
                  <h3 style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#ffffff",
                    marginBottom: "0.5rem",
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#9ca3af", lineHeight: "1.6" }}>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Center Dot */}
              <div style={{
                width: "20px",
                height: "20px",
                background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                borderRadius: "50%",
                border: "4px solid #000000",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
                // display: window.innerWidth < 768 ? "none" : "block",
              }} />

              <div style={{ flex: 1 }} />
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section style={{
        padding: "6rem 1.5rem",
        background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: "900",
            background: "linear-gradient(135deg, #ffffff 0%, #6366f1 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1rem",
            textAlign: "center",
          }}>
            Meet Our Leadership
          </h2>
          <p style={{
            textAlign: "center",
            color: "#9ca3af",
            fontSize: "1.1rem",
            marginBottom: "4rem",
            maxWidth: "600px",
            margin: "0 auto 4rem",
          }}>
            The visionaries driving innovation and excellence at Nexus Digital
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}>
            {team.map((member, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(17, 24, 39, 0.6)",
                  border: "1px solid rgba(99, 102, 241, 0.2)",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.2)";
                }}
              >
                <div style={{
                  width: "100%",
                  height: "300px",
                  background: `url(${member.image}) center/cover`,
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                    padding: "3rem 1.5rem 1.5rem",
                  }}>
                    <h3 style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: "#ffffff",
                      marginBottom: "0.25rem",
                    }}>
                      {member.name}
                    </h3>
                    <p style={{
                      color: "#6366f1",
                      fontSize: "0.95rem",
                      fontWeight: "600",
                    }}>
                      {member.role}
                    </p>
                  </div>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <p style={{
                    color: "#9ca3af",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    marginBottom: "1rem",
                  }}>
                    {member.bio}
                  </p>
                  <div style={{ display: "flex", gap: "1rem" }}>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section style={{ padding: "6rem 1.5rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.1) 100%)",
          border: "1px solid rgba(99, 102, 241, 0.3)",
          borderRadius: "2rem",
          padding: "4rem 2rem",
          textAlign: "center",
        }}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: "900",
            background: "linear-gradient(135deg, #ffffff 0%, #6366f1 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1.5rem",
          }}>
            Ready to Start Your Project?
          </h2>
          <p style={{
            color: "#d1d5db",
            fontSize: "1.2rem",
            marginBottom: "2.5rem",
            maxWidth: "600px",
            margin: "0 auto 2.5rem",
          }}>
            Let's collaborate and bring your vision to life with cutting-edge technology and creative excellence.
          </p>
        </div>
      </section>
    </div>
  );
}