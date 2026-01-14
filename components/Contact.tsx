"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: any) => {
    // -----------------------------------------------------------------
    // STEP 1: Get a free form endpoint from https://formspree.io/
    // STEP 2: Paste your unique URL inside the quotes below
    // -----------------------------------------------------------------
    const FORM_ENDPOINT = "https://formspree.io/f/mgoovobw";

    try {
      // If you haven't set up the endpoint yet, this will just log to console
      if (FORM_ENDPOINT.includes("YOUR_FORM_ID_HERE")) {
        console.log("Form Data (Simulation):", data);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate loading
      } else {
        // This is the real sending logic
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error("Failed to send");
      }

      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" style={{
      width: "100%",
      padding: "6rem 1rem",
      position: "relative",
      overflow: "hidden",
      background: "#000000",
      color: "#ffffff"
    }}>
      {/* Background Image */}
      <div style={{
        position: "absolute",
        inset: "0",
        zIndex: "0",
      }}>
        <div style={{
          position: "absolute",
          inset: "0",
          backgroundImage: "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.15",
        }} />
        <div style={{
          position: "absolute",
          inset: "0",
          background: "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)",
        }} />
      </div>

      {/* Background Elements */}
      <div style={{
        position: "absolute",
        inset: "0",
        overflow: "hidden",
        pointerEvents: "none",
      }}>
        <div style={{
          position: "absolute",
          top: "5rem",
          right: "25%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          opacity: "0.2",
          pointerEvents: "none",
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        />
      </div>

      <div style={{
        maxWidth: "72rem",
        margin: "0 auto",
        position: "relative",
        zIndex: "1",
        display: "flex",
        flexWrap: "wrap",
        gap: "4rem",
        alignItems: "flex-start"
      }}>
        
        {/* LEFT COLUMN: Text & Contact Info */}
        <div style={{ flex: "1 1 300px" }}>
            <div style={{ marginBottom: "3rem" }}>
              <h2 style={{
                fontSize: "clamp(2rem, 5vw, 2.5rem)",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#ffffff",
                lineHeight: "1.1"
              }}>
                Start Your <br />
                <span style={{ color: "#6366f1" }}>Project Today</span>
              </h2>
              <p style={{
                color: "#9ca3af",
                fontSize: "1.125rem",
                lineHeight: "1.6",
                maxWidth: "35ch"
              }}>
                Ready to transform your vision into reality? Fill out the form or reach out to us directly.
              </p>
            </div>

            {/* --- CONTACT DETAILS START --- */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              
              {/* 1. EMAIL SECTION */}
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  padding: "0.75rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#6366f1"
                }}>
                   <svg style={{ width: "1.5rem", height: "1.5rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.25rem" }}>Email Us</h4>
                  {/* EDIT YOUR EMAIL BELOW */}
                  <p style={{ color: "#9ca3af" }}>zain.developer.official@gmail.com</p>
                  <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>Response time: 24 hours</p>
                </div>
              </div>

              {/* 2. PHONE SECTION */}
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  padding: "0.75rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#6366f1"
                }}>
                   <svg style={{ width: "1.5rem", height: "1.5rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.25rem" }}>Call Us</h4>
                  {/* EDIT YOUR PHONE BELOW */}
                  <p style={{ color: "#9ca3af" }}>+92 3255222234</p>
                  <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>Mon-Fri from 6pm to 2am</p>
                </div>
              </div>

              {/* 3. LOCATION SECTION */}
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{
                  padding: "0.75rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "#6366f1"
                }}>
                   <svg style={{ width: "1.5rem", height: "1.5rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.25rem" }}>Visit Us</h4>
                  {/* EDIT YOUR ADDRESS BELOW */}
                  <p style={{ color: "#9ca3af" }}>Mall Road</p>
                  <p style={{ color: "#9ca3af" }}>Lahore, Pakistan</p>
                </div>
              </div>

            </div>
            {/* --- CONTACT DETAILS END --- */}
        </div>
        
        {/* RIGHT COLUMN: Form */}
        <div style={{ flex: "1 1 400px" }}>
          {success ? (
            <div style={{
              height: "100%",
              minHeight: "400px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              background: "rgba(34, 197, 94, 0.1)",
              border: "1px solid rgba(34, 197, 94, 0.5)",
              borderRadius: "1rem",
              textAlign: "center",
              backdropFilter: "blur(10px)",
            }}>
              <div style={{
                display: "inline-block",
                padding: "0.75rem",
                backgroundColor: "rgba(34, 197, 94, 0.2)",
                borderRadius: "50%",
                marginBottom: "1rem",
              }}>
                <svg style={{width: "2rem", height: "2rem", color: "#4ade80"}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#4ade80",
                marginBottom: "0.5rem",
              }}>Message Sent!</h3>
              <p style={{color: "#d1d5db"}}>We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              padding: "2rem",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "1rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
            }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
              }}>
                <div>
                  <label style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    marginBottom: "0.75rem",
                    color: "#d1d5db",
                  }}>Full Name</label>
                  <input 
                    {...register("name", { required: "Name is required" })}
                    style={{
                      width: "100%",
                      background: "rgba(0, 0, 0, 0.5)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "0.5rem",
                      padding: "0.75rem",
                      color: "#ffffff",
                      fontSize: "1rem",
                    }}
                    placeholder="Zain ul Abdin Arshad"
                  />
                  {errors.name && <span style={{color: "#f87171", fontSize: "0.75rem", marginTop: "0.25rem"}}>{String(errors.name.message)}</span>}
                </div>
                <div>
                  <label style={{
                    display: "block",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    marginBottom: "0.75rem",
                    color: "#d1d5db",
                  }}>Email Address</label>
                  <input 
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                    })}
                    style={{
                      width: "100%",
                      background: "rgba(0, 0, 0, 0.5)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "0.5rem",
                      padding: "0.75rem",
                      color: "#ffffff",
                      fontSize: "1rem",
                    }}
                    placeholder="zain.developer.official@gmail.com.com"
                  />
                  {errors.email && <span style={{color: "#f87171", fontSize: "0.75rem", marginTop: "0.25rem"}}>{String(errors.email.message)}</span>}
                </div>
              </div>
              
              <div>
                <label style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  marginBottom: "0.75rem",
                  color: "#d1d5db",
                }}>Service Interest</label>
                <select 
                  {...register("service")} 
                  style={{
                    width: "100%",
                    background: "rgba(0, 0, 0, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "0.5rem",
                    padding: "0.75rem",
                    color: "#ffffff",
                    fontSize: "1rem",
                  }}
                >
                  <option value="dev">Web Development</option>
                  <option value="design">UI/UX Design</option>
                  <option value="seo">SEO & Marketing</option>
                  <option value="seo">AI/ ML</option>
                  <option value="seo">Chatbots & Automation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  marginBottom: "0.75rem",
                  color: "#d1d5db",
                }}>Project Details</label>
                <textarea 
                  {...register("message", { required: "Message is required" })}
                  rows={5}
                  style={{
                    width: "100%",
                    background: "rgba(0, 0, 0, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "0.5rem",
                    padding: "0.75rem",
                    color: "#ffffff",
                    fontSize: "1rem",
                    resize: "none",
                    fontFamily: "inherit",
                  }}
                  placeholder="Tell us about your project vision, goals, and timeline..."
                />
                {errors.message && <span style={{color: "#f87171", fontSize: "0.75rem", marginTop: "0.25rem"}}>{String(errors.message.message)}</span>}
              </div>

              <button 
                disabled={isSubmitting}
                type="submit" 
                style={{
                  width: "100%",
                  background: "linear-gradient(to right, #6366f1, #6366f1)",
                  color: "#ffffff",
                  fontWeight: "700",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  transition: "all 300ms",
                  border: "none",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  opacity: isSubmitting ? 0.5 : 1,
                  boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
                }}
              >
                {isSubmitting ? (
                  <span style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem"}}>
                    <svg style={{width: "1.25rem", height: "1.25rem", animation: "spin 1s linear infinite"}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v6m4-2l-4 4m4-4l4 4" />
                    </svg>
                    Sending...
                  </span>
                ) : "Send Inquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}