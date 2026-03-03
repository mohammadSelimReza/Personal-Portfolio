"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            className="relative border-t border-[var(--glass-border)] py-12 px-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2 text-[#94a3b8] text-sm">
                    <span>© {currentYear} Selim Reza.</span>
                    <Heart size={14} className="text-[#ef4444] fill-[#ef4444]" />
                </div>

                <div className="flex items-center gap-4">
                    {[
                        { icon: Github, href: "https://github.com/mohammadSelimReza", label: "GitHub" },
                        { icon: Linkedin, href: "http://www.linkedin.com/in/selim-reza-dev", label: "LinkedIn" },
                        { icon: Mail, href: "mailto:selim.reza.uits@gmail.com", label: "Email" },
                    ].map(({ icon: Icon, href, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target={label !== "Email" ? "_blank" : undefined}
                            rel={label !== "Email" ? "noopener noreferrer" : undefined}
                            className="w-10 h-10 rounded-full bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)]/40 transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={label}
                        >
                            <Icon size={16} />
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.footer>
    );
}
