"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });

        const observer = new IntersectionObserver(
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
        sections.forEach((s) => observer.observe(s));

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav-scrolled" : "glass-nav"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
                <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#"
                        className="font-mono text-lg font-bold text-[#3b82f6] hover:text-[#60a5fa] transition-colors"
                    >
                        {"<SR />"}
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-2 py-1.5 backdrop-blur-xl">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`relative text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${activeSection === link.href.slice(1)
                                    ? "text-white bg-white/10"
                                    : "text-[#94a3b8] hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {link.label}
                                {activeSection === link.href.slice(1) && (
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-white/10"
                                        layoutId="nav-active"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA + Theme */}
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle />
                        <a
                            href="/Selim_Reza_Resume.pdf"
                            download="Selim_Reza_Resume.pdf"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-[var(--accent-primary)]/30 text-[var(--text-accent)] bg-[var(--accent-primary)]/5 hover:bg-[var(--accent-primary)]/15 hover:border-[var(--accent-primary)]/50 transition-all duration-300"
                        >
                            <Download size={14} />
                            Download CV
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Full-Screen Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] glass-elevated flex flex-col items-center justify-center gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            className="absolute top-6 right-6 text-white p-2"
                            onClick={() => setMobileOpen(false)}
                            aria-label="Close menu"
                        >
                            <X size={28} />
                        </button>

                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                className="text-2xl font-medium text-[#f1f5f9] hover:text-[#3b82f6] transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 + 0.1 }}
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </motion.a>
                        ))}

                        <motion.a
                            href="/Selim_Reza_Resume.pdf"
                            download="Selim_Reza_Resume.pdf"
                            className="flex items-center gap-2 mt-4 px-6 py-3 rounded-full text-sm font-medium border border-[var(--accent-primary)]/30 text-[var(--text-accent)] bg-[var(--accent-primary)]/5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navLinks.length * 0.08 + 0.1 }}
                            onClick={() => setMobileOpen(false)}
                        >
                            <Download size={14} />
                            Download CV
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
