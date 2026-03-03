"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { fadeInUp, staggerContainer, slideInLeft } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="py-20 px-6 relative">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeading
                    label="Career"
                    title="Experience"
                    subtitle="Building production systems at companies that ship real products"
                />

                {/* Timeline */}
                <motion.div
                    className="relative pl-12 md:pl-16"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Glowing Line */}
                    <div className="timeline-line" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            variants={slideInLeft}
                            className="relative mb-12 last:mb-0"
                        >
                            {/* Timeline Dot */}
                            <div
                                className={`timeline-dot ${index === 0 ? "timeline-dot-active" : ""
                                    }`}
                                style={{ top: "24px" }}
                            />

                            {/* Card */}
                            <div className="glass-card p-6 md:p-8 hover:bg-white/[0.07] transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
                                            {exp.title}
                                        </h3>
                                        <p className="text-[var(--accent-primary)] font-medium">{exp.company}</p>
                                    </div>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono text-[var(--text-secondary)] border border-[var(--glass-border)] bg-[var(--glass-bg)] whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className="text-[var(--text-secondary)] font-light leading-relaxed mb-5">
                                    {exp.description}
                                </p>

                                {/* Award Badge */}
                                {exp.award && (
                                    <motion.div
                                        className="flex items-center gap-2 mb-5 px-4 py-2.5 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#fbbf24]"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <Award size={16} />
                                        <span className="text-sm font-medium">{exp.award}</span>
                                    </motion.div>
                                )}

                                {/* Achievements */}
                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-3 text-[#94a3b8]/80"
                                        >
                                            <span className="text-[#3b82f6] mt-1.5 text-[0.5rem]">
                                                ▸
                                            </span>
                                            <span className="font-light text-sm">{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
