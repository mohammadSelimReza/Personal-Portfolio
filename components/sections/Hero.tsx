"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { ParticleBackground } from "@/components/layout/ParticleBackground";
import { terminalLines, socialLinks } from "@/lib/data";
import { heroStagger, fadeInUp, slideInRight } from "@/lib/constants";
import { Github, Linkedin, Mail, ChevronDown, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
};

export function Hero() {
    const controls = useAnimation();
    const [terminalVisible, setTerminalVisible] = useState<number[]>([]);

    useEffect(() => {
        controls.start("visible");

        // Stagger terminal lines
        terminalLines.forEach((_, i) => {
            setTimeout(() => {
                setTerminalVisible((prev) => [...prev, i]);
            }, 1200 + i * 80);
        });
    }, [controls]);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-10">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Gradient Orbs */}
            <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-[#3b82f6]/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-[#06b6d4]/8 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left — Text Content */}
                    <motion.div
                        variants={heroStagger}
                        initial="hidden"
                        animate={controls}
                    >
                        {/* Status Badge */}
                        <motion.div variants={fadeInUp} className="mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse-glow" />
                                <span className="text-sm font-mono text-[var(--text-secondary)]">
                                    Available for new opportunities
                                </span>
                            </div>
                        </motion.div>

                        <motion.p
                            variants={fadeInUp}
                            className="text-sm font-mono text-[var(--text-muted)] mb-3 tracking-wider"
                        >
                            Hello, I&apos;m
                        </motion.p>

                        {/* Name */}
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black tracking-[-0.02em] text-[var(--text-primary)] mb-4 leading-[1.1]"
                        >
                            Selim Reza
                        </motion.h1>

                        {/* Typing Subtitle */}
                        <motion.div variants={fadeInUp} className="mb-6">
                            <span className="text-xl sm:text-2xl font-medium text-[var(--accent-primary)]">
                                <TypeAnimation
                                    sequence={[
                                        "Backend Engineer",
                                        2000,
                                        "AI-Augmented Builder",
                                        2000,
                                        "Systems Thinker",
                                        2000,
                                        "API Architect",
                                        2000,
                                        "Aspiring SRE",
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={40}
                                    repeat={Infinity}
                                    cursor={true}
                                />
                            </span>
                        </motion.div>

                        <motion.p
                            variants={fadeInUp}
                            className="text-base sm:text-lg text-[var(--text-secondary)] font-light max-w-lg leading-relaxed mb-8"
                        >
                            Blending deep Python, OOP & DSA expertise with AI-powered
                            workflows to ship secured, production-grade systems. Awarded{" "}
                            <span className="text-[var(--warning)] font-medium">
                                &quot;Developer of the Quarter&quot;
                            </span>{" "}
                            at Join Venture AI.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-4 mb-8"
                        >
                            <motion.a
                                href="#projects"
                                className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#3b82f6] text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                <span className="relative">View My Work</span>
                                <ArrowRight size={16} className="relative transition-transform group-hover:translate-x-1" />
                            </motion.a>

                            <motion.a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md text-[var(--text-primary)] hover:bg-[var(--glass-hover)] transition-all duration-300"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Let&apos;s Talk
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div variants={fadeInUp} className="flex gap-3">
                            {socialLinks.map((link) => {
                                const Icon = iconMap[link.icon];
                                return (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        target={link.icon !== "mail" ? "_blank" : undefined}
                                        rel={link.icon !== "mail" ? "noopener noreferrer" : undefined}
                                        className="w-10 h-10 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]/40 transition-all duration-300"
                                        whileHover={{ scale: 1.15, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label={link.label}
                                    >
                                        <Icon size={16} />
                                    </motion.a>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                    {/* Right — Terminal Card */}
                    <motion.div
                        className="hidden lg:block"
                        variants={slideInRight}
                        initial="hidden"
                        animate={controls}
                    >
                        <div className="terminal relative">
                            {/* Glow behind */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#3b82f6]/15 to-[#06b6d4]/10 rounded-2xl blur-2xl -z-10" />

                            {/* Header */}
                            <div className="terminal-header">
                                <div className="terminal-dot bg-[#ef4444]" />
                                <div className="terminal-dot bg-[#f59e0b]" />
                                <div className="terminal-dot bg-[#10b981]" />
                                <span className="ml-3 text-xs text-[var(--text-muted)] font-mono">
                                    selim@portfolio — zsh
                                </span>
                            </div>

                            {/* Body */}
                            <div className="terminal-body min-h-[340px]">
                                {terminalLines.map((line, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={
                                            terminalVisible.includes(i)
                                                ? { opacity: 1, x: 0 }
                                                : { opacity: 0, x: -10 }
                                        }
                                        transition={{ duration: 0.15, ease: "easeOut" }}
                                        className={`font-mono text-[0.8rem] leading-[1.8] ${line.type === "prompt"
                                            ? "terminal-prompt font-semibold"
                                            : line.type === "success"
                                                ? "terminal-success"
                                                : line.type === "accent"
                                                    ? "terminal-accent"
                                                    : line.type === "label"
                                                        ? "text-[var(--text-muted)]"
                                                        : ""
                                            }`}
                                    >
                                        {line.text || "\u00A0"}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                >
                    <div className="w-5 h-9 border-2 border-[#475569] rounded-full flex justify-center">
                        <div className="w-1 h-2.5 bg-[#3b82f6] rounded-full mt-2 animate-scroll-indicator" />
                    </div>
                    <ChevronDown size={14} className="text-[#475569] animate-bounce" />
                </motion.div>
            </div>
        </section>
    );
}
