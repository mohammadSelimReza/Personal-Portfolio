"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
    const featured = projects.find((p) => p.featured);
    const rest = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="py-20 px-6 relative">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeading
                    label="Portfolio"
                    title="Featured Projects"
                    subtitle="Systems I've designed & shipped — not tutorials, real production code"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Featured Project — Wide Card */}
                    {featured && (
                        <motion.div variants={fadeInUp} className="mb-8">
                            <div className="glass-card p-8 md:p-10 relative overflow-hidden group">
                                {/* Glow accent */}
                                <div className="absolute top-0 right-0 w-72 h-72 bg-[#3b82f6]/10 rounded-full blur-[100px] -z-10 group-hover:bg-[#3b82f6]/20 transition-colors duration-700" />

                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-2.5 py-0.5 rounded text-[0.7rem] font-mono font-medium bg-[#3b82f6]/10 text-[#60a5fa] border border-[#3b82f6]/20 uppercase tracking-wider">
                                        Featured
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2">
                                    {featured.title}
                                </h3>
                                <p className="text-sm text-[#3b82f6] font-medium mb-4">
                                    {featured.role}
                                </p>

                                <p className="text-[var(--text-secondary)] font-light leading-relaxed mb-4 max-w-3xl">
                                    {featured.description}
                                </p>

                                {/* Architecture Highlight */}
                                <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl p-4 mb-6 font-mono text-sm text-[var(--text-secondary)] leading-relaxed">
                                    <span className="text-[var(--accent-primary)] font-semibold">
                                        Architecture:{" "}
                                    </span>
                                    {featured.architectureHighlight}
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {featured.tech.map((t) => (
                                        <TechBadge key={t} name={t} />
                                    ))}
                                </div>

                                <motion.a
                                    href={featured.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-primary)] hover:bg-[var(--glass-hover)] transition-all duration-300"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Github size={16} />
                                    View Repository
                                    <ExternalLink size={12} />
                                </motion.a>
                            </div>
                        </motion.div>
                    )}

                    {/* Grid of Remaining Projects */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {rest.map((project) => (
                            <motion.div key={project.title} variants={scaleIn}>
                                <div className="glass-card p-6 md:p-8 h-full flex flex-col group hover:bg-white/[0.07] transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#06b6d4]/8 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs text-[#3b82f6] font-medium mb-3">
                                        {project.role}
                                    </p>

                                    <p className="text-[var(--text-secondary)] font-light text-sm leading-relaxed mb-4 flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Architecture one-liner */}
                                    <p className="text-xs font-mono text-[#475569] mb-4 leading-relaxed border-l-2 border-[#3b82f6]/30 pl-3">
                                        {project.architectureHighlight.split(".")[0]}.
                                    </p>

                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {project.tech.map((t) => (
                                            <TechBadge key={t} name={t} />
                                        ))}
                                    </div>

                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mt-auto"
                                        whileHover={{ x: 4 }}
                                    >
                                        <Github size={14} />
                                        Repository
                                        <ExternalLink size={11} />
                                    </motion.a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
