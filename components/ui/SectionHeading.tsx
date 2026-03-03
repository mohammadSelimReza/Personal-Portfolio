"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/constants";

interface SectionHeadingProps {
    label?: string;
    title: string;
    subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
    return (
        <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {label && (
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-medium text-[var(--text-accent)] border border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/5 mb-4 tracking-wider uppercase">
                    {label}
                </span>
            )}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] via-[var(--text-primary)] to-[var(--accent-secondary)]">
                    {title}
                </span>
            </h2>
            {subtitle && (
                <p className="text-lg text-[var(--text-secondary)] font-light mt-4 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
