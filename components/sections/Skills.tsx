"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";

export function Skills() {
    return (
        <section id="skills" className="py-20 px-6 relative">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeading
                    label="Tech Stack"
                    title="Skills & Tools"
                    subtitle="Technologies I use daily to build production-grade systems"
                />

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {skillCategories.map((cat) => (
                        <motion.div
                            key={cat.category}
                            variants={fadeInUp}
                            className="glass-card p-6 group hover:bg-white/[0.07] transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-2xl">{cat.icon}</span>
                                <h3 className="font-semibold text-[var(--text-primary)]">{cat.category}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <TechBadge
                                        key={skill.name}
                                        name={skill.name}
                                        color={skill.color}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
