"use client";

import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Goals } from "@/components/sections/Goals";
import { Contact } from "@/components/sections/Contact";

export default function Portfolio() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <div className="min-h-screen relative">
        <Navbar />
        <main>
          <Hero />

          {/* About / Summary Section */}
          <section id="about" className="py-20 px-6">
            <div className="max-w-[1200px] mx-auto">
              <div className="glass-card p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--accent-primary)]/8 rounded-full blur-[100px] -z-10" />
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <p className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-widest mb-4">
                      About
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
                      Backend Specialist.{" "}
                      <span className="text-[var(--text-secondary)] font-normal">
                        AI-Augmented Builder.
                      </span>
                    </h2>
                    <p className="text-[var(--text-secondary)] font-light leading-relaxed text-base md:text-lg mb-4">
                      I&apos;m a performance-driven Backend Engineer with 1.2+
                      years of experience designing and shipping{" "}
                      <span className="text-[var(--text-primary)] font-medium">secured, production-grade</span>{" "}
                      APIs, microservice architectures, and AI-integrated
                      platforms — built with a{" "}
                      <span className="text-[var(--text-primary)] font-medium">debugging-first mindset</span>{" "}
                      that optimizes the entire product lifecycle.
                    </p>
                    <p className="text-[var(--text-secondary)] font-light leading-relaxed text-base md:text-lg mb-4">
                      In this age of AI agents, I blend deep expertise in{" "}
                      <span className="text-[var(--accent-secondary)] font-medium">Python, DBMS, OOP & DSA</span>{" "}
                      with AI-powered workflows to ship faster, smarter, and with
                      fewer bugs. From Stripe subscription orchestration to
                      AI-powered property analysis engines behind isolated Docker
                      networks — I build systems that handle real traffic, real
                      money, and real users.
                    </p>
                    <p className="text-[var(--text-secondary)] font-light leading-relaxed">
                      Currently a Promoted Backend Developer at{" "}
                      <span className="text-[var(--text-primary)] font-medium">Join Venture AI</span>,{" "}
                      with two shipped products at{" "}
                      <span className="text-[var(--text-primary)] font-medium">FAARNS</span> under contract maintenance.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-5">
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-1">
                        1.2+
                      </div>
                      <p className="text-[var(--text-secondary)] text-sm font-medium">
                        Years Experience
                      </p>
                    </div>
                    <div className="w-12 h-px bg-[var(--glass-border)]" />
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-1">
                        10+
                      </div>
                      <p className="text-[var(--text-secondary)] text-sm font-medium">
                        Projects Shipped
                      </p>
                    </div>
                    <div className="w-12 h-px bg-[var(--glass-border)]" />
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-1">
                        2
                      </div>
                      <p className="text-[var(--text-secondary)] text-sm font-medium">
                        Companies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Experience />
          <Projects />
          <Skills />
          <Goals />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
