"use client";

import type React from "react";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setIsVisible(true);
    // TODO: Replace with your actual EmailJS public key from https://dashboard.emailjs.com
    emailjs.init("YOUR_PUBLIC_KEY");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".scroll-animate");
    animatedElements.forEach((el) => observer.observe(el));

    // Track active section for nav highlighting
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        "service_u9umlww",
        "template_ol2htam",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Selim Reza",
        }
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "✨" },
    { name: "Django", icon: "🎯" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Redis", icon: "🔴" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "REST APIs", icon: "🔗" },
    { name: "Git", icon: "📝" },
    { name: "Scraping", icon: "🕷️" },
    { name: "Debugging", icon: "🔍" },
    { name: "Hosting & Deployment", icon: "🚀" },
  ];

  const projects = [
    {
      title: "Bestowe — Smart Gift Finder",
      role: "Backend Developer & Deployment Engineer",
      description:
        "AI-powered smart gift finder delivering personalized gift recommendations with user authentication, collaborative gifting, and external store integrations.",
      features: [
        "AI-powered suggestions based on recipient preferences and user inputs",
        "Enable multiple users to contribute towards a chosen gift",
        "Facilitate gift purchases through Shopify stores",
      ],
      tech: ["Django", "DRF", "Stripe", "GraphQL", "Hostinger", "Namecheap"],
      image:
        "https://i.ibb.co.com/7t8H6XtC/Screenshot-from-2025-09-10-08-31-15.png",
      github:
        "https://github.com/mohammadSelimReza/Project-Bestowe-Smart-Gift-Finder-Backend",
    },
    {
      title: "Global Shopping Automation & Forwarding",
      role: "Backend Developer & Deployment Engineer",
      description:
        "Automation platform to fetch product details from global marketplaces with a robust admin dashboard for monitoring and managing orders.",
      features: [
        "Automatically fetch product details from major international stores",
        "Provide manual purchase forms when automation fails",
        "Advanced admin dashboard for managing users, products, and orders",
      ],
      tech: [
        "Django",
        "DRF",
        "Playwright",
        "BeautifulSoup4",
        "lxml",
        "Resend",
        "Digital Ocean",
      ],
      image:
        "https://i.ibb.co.com/Nd4j13Qz/Screenshot-from-2025-09-10-08-34-16.png",
      github:
        "https://github.com/mohammadSelimReza/Global-shopping-automation-and-forwarding-platform-server",
    },
    {
      title: "AI Travel Planner — Intelligent Trip Assistant",
      role: "Backend Development & Deployment",
      description:
        "AI-integrated trip planning platform for smarter and more personalized travel experiences.",
      features: [
        "Plan journeys by chatting with an AI travel assistant",
        "Create and store journals of past and upcoming trips",
        "Scrape travel data from Booking.com and other sources with Stripe payment support",
      ],
      tech: ["Django", "DRF", "aiohttp", "requests", "Stripe", "Render"],
      image:
        "https://i.ibb.co.com/LdKhjhj6/Screenshot-from-2025-09-10-08-36-28.png",
      github: "https://github.com/mohammadSelimReza/Ai-Travel-Planner",
    },
    {
      title: "EduSoft — E-Learning Platform",
      role: "Full-Stack Developer",
      description:
        "Feature-rich e-learning platform enabling browsing, enrollment, payments, and interactive learning.",
      features: [
        "JWT authentication, password management, and role-based access control",
        "Seamless backend with DRF + PostgreSQL + SSLCommerz",
        "Interactive React frontend with Tailwind CSS, Router, and Axios",
        "Core features: course browsing, enrollment, cart, checkout, order management, and dashboards",
      ],
      tech: [
        "Django",
        "DRF",
        "PostgreSQL",
        "SSLCommerz",
        "Swagger API",
        "React",
        "Tailwind CSS",
        "Axios",
      ],
      image:
        "https://i.ibb.co.com/vCGNtNGf/421224197-4d8ba02e-9462-4996-832f-804c306a707a.png",
      github:
        "https://github.com/mohammadSelimReza/EduSoft---Learning-Management-System",
    },
    {
      title: "Scan2Home — Automated Real Estate Inventory",
      role: "Backend & AI Integration Engineer",
      description:
        "A robust, multi-service platform designed to streamline property inventory management and real estate operations. Leverages an AI module alongside a Django backend to provide automated property analysis.",
      features: [
        "Automated Inventory: Smart property scanning and automated data extraction",
        "AI Property Analytics: Deep insights using an isolated FastAPI module",
        "Enterprise Security: Hardened production settings, rotating logs, and internal networking",
      ],
      tech: [
        "Django",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Docker",
        "GitHub Actions",
      ],
      image: "/architecture-diagram.jpeg",
      github:
        "https://github.com/mohammadSelimReza/Scan2Home-Smart-Reusable-Board",
    },
  ];

  const experiences = [
    {
      title: "Backend Engineer (Remote)",
      company: "Systalo",
      period: "Jan 2026 - Present",
      description:
        "Architecting a multi-vendor e-commerce platform using Django and best-practice Git/PR management. Implementing Event-Driven Notification System and background task processing using Celery and Redis.",
      achievements: [
        "Architecting multi-vendor e-commerce platform with Django",
        "Implementing Event-Driven Architecture with Celery & Redis",
        "Optimized data retrieval with advanced caching for high-traffic dashboards",
      ],
    },
    {
      title: "Backend Developer (Promoted)",
      company: "Join Venture AI",
      period: "April 2025 - Present",
      description:
        "R&D for AI-based projects, designing data schemas, flows, and high-performance API architectures. Built real-time Customer Support Chat using WebSockets and implemented Atomic Transactions for 100% data integrity.",
      achievements: [
        "Awarded Best Backend Developer of the Quarter (Nov 2025)",
        "Engineered EDA workflows for OTP and notification systems",
        "Managed live deployments, domain configs, and client communication",
      ],
    },
    {
      title: "Backend Developer (Remote)",
      company: "FAARNS",
      period: "Dec 2024 - Present",
      description:
        "Engineering complex drop-shipping and parcel-forwarding platforms with a focus on robust error handling and API reliability. Successfully developed and launched AmericaToBD.com automation platform.",
      achievements: [
        "Built AmericaToBD.us drop-shipping & parcel-forwarding platform",
        "Developed and launched AmericaToBD.com automation platform",
        "Leading system maintenance and performance scaling",
      ],
    },
  ];
  const services = [
    {
      icon: "🚀",
      title: "API Development",
      description:
        "Custom RESTful APIs with Django REST Framework and WebSockets, including authentication, rate limiting, and real-time features.",
    },
    {
      icon: "🗄️",
      title: "Database Design",
      description:
        "Schema design, query optimization, and migrations for PostgreSQL, MySQL, and Redis caching strategies.",
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description:
        "Code profiling, caching, Celery task queues, and database tuning to handle millions of records efficiently.",
    },
    {
      icon: "🔒",
      title: "Security Implementation",
      description:
        "JWT authentication, role-based access control, data encryption, and applying industry best practices for secure systems.",
    },
    {
      icon: "☁️",
      title: "Cloud Deployment",
      description:
        "Deployment and scaling on AWS, Render, and VPS with Docker and CI/CD pipelines for smooth production readiness.",
    },
    {
      icon: "🔧",
      title: "System Integration",
      description:
        "Stripe, SSLCommerz, Twilio, and third-party API integrations, along with CRM and payment gateway solutions.",
    },
  ];

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-accent">Selim Reza</a>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${activeSection === link.href.slice(1)
                  ? "text-accent"
                  : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="/Resume Of Reza.pdf"
            download="Selim_Reza_Resume.pdf"
            className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* ... existing hero section code ... */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-ping"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent/50 rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary rounded-full animate-ping"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-accent/30 rounded-full animate-pulse"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center px-4 max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="mb-6 overflow-hidden">
              <h1 className="text-5xl md:text-7xl font-bold text-balance animate-slide-in-left">
                Hi, I'm{" "}
                <span className="text-accent relative inline-block">
                  <span className="animate-gradient-text bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent bg-300% animate-gradient">
                    Selim Reza
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary animate-expand-width"></span>
                </span>
              </h1>
            </div>
            <div className="mb-8 overflow-hidden">
              <p
                className={`text-xl md:text-2xl text-muted-foreground text-pretty transition-all duration-1000 delay-300 ${isVisible
                  ? "animate-slide-in-left"
                  : "opacity-0 translate-x-10"
                  }`}
              >
                Python Django Backend Developer
              </p>
            </div>
            <div className="mb-12 overflow-hidden">
              <p
                className={`text-lg text-muted-foreground max-w-2xl text-pretty transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in" : "opacity-0"
                  }`}
              >
                Building robust, scalable web applications and APIs that power
                modern businesses. Passionate about clean code, performance
                optimization, and solving complex problems.
              </p>
            </div>
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isVisible ? "animate-slide-in-up" : "opacity-0 translate-y-10"
                }`}
            >
              <a
                href="#projects"
                className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 hover:bg-accent/90 animate-pulse-subtle"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-muted hover:scale-105 transition-all duration-300 hover:shadow-lg text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="relative group">
              {/* Animated border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-2xl blur opacity-30 group-hover:opacity-50 animate-gradient-rotate"></div>

              {/* Main image container */}
              <div className="relative bg-card rounded-2xl p-2 shadow-2xl">
                <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden">
                  <Image
                    src="/professional-developer-workspace-with-multiple-mon.png"
                    alt="Selim Reza - Python Django Developer Workspace"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Overlay with floating code snippets */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent">
                    <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium animate-bounce-subtle">
                      Django Expert
                    </div>
                    <div
                      className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium animate-float"
                      style={{ animationDelay: "1s" }}
                    >
                      Python Developer
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements around the image */}
              <div
                className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full animate-float opacity-60"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary rounded-full animate-float opacity-60"
                style={{ animationDelay: "1.5s" }}
              ></div>
              <div
                className="absolute top-1/2 -right-6 w-4 h-4 bg-accent/50 rounded-full animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-gradient-to-b from-accent to-primary rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
          <p className="text-xs text-muted-foreground mt-2 animate-pulse">
            Scroll Down
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                  Backend Specialist
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
                  With 1.2+ years of professional experience in Python and
                  Django development, I specialize in creating high-performance
                  backend systems that scale. From RESTful APIs to complex
                  database architectures, I focus on writing maintainable code
                  that stands the test of time.
                </p>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  I'm passionate about optimization, security best practices,
                  and staying current with the latest technologies in the Python
                  ecosystem. When I'm not coding, you'll find me contributing to
                  open-source projects or mentoring junior developers.
                </p>
              </div>
            </div>
            <div className="scroll-animate">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-card p-4 rounded-lg text-center hover:scale-105 transition-transform duration-200 hover:shadow-md"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className="text-3xl mb-2 animate-float"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium text-card-foreground">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="scroll-animate bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <div className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium inline-block mb-2">
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <div className="md:col-span-3">
                    <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-card-foreground">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-accent mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold text-center mb-16">Services</h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto text-pretty">
              I offer comprehensive backend development services to help
              businesses build robust, scalable applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="scroll-animate bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group h-full flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce-subtle transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty flex-grow">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold text-center mb-16">
              Featured Projects
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="scroll-animate w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 overflow-hidden shrink-0">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-pretty flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 shrink-0">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 shrink-0 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold text-center mb-16">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-pretty">
              Ready to start your next project? Let's discuss how I can help you
              build something amazing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="scroll-animate">
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-pretty">
                  I'm always interested in new opportunities and exciting
                  projects. Whether you need a robust API, database
                  optimization, or a complete backend solution, let's discuss
                  how I can help bring your ideas to life.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-200">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <span className="text-accent text-xl">📧</span>
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">Email</p>
                      <p className="text-muted-foreground">
                        selim.reza.uits@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-200">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <span className="text-accent text-xl">💼</span>
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">
                        LinkedIn
                      </p>
                      <p className="text-muted-foreground">
                        https://www.linkedin.com/in/selim-reza-a38a37318
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 group hover:scale-105 transition-transform duration-200">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <span className="text-accent text-xl">🐙</span>
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">GitHub</p>
                      <p className="text-muted-foreground">
                        https://github.com/mohammadSelimReza
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll-animate">
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                  Send Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-card-foreground"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-accent/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-card-foreground"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-accent/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-card-foreground"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-accent/50 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  {submitStatus === "success" && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg animate-fade-in">
                      <p className="font-medium">
                        Message sent successfully! 🎉
                      </p>
                      <p className="text-sm">
                        I'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg animate-fade-in">
                      <p className="font-medium">Failed to send message 😞</p>
                      <p className="text-sm">
                        Please try again or contact me directly via email.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="text-lg">🚀</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sidebar border-t border-sidebar-border py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sidebar-foreground/70">
            © 2026 Selim Reza
          </p>
        </div>
      </footer>
    </div>
  );
}
