"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, Linkedin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("idle");

        try {
            await emailjs.send("service_u9umlww", "template_ol2htam", {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: "Selim Reza",
            });
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch {
            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactMethods = [
        {
            icon: Mail,
            label: "Email",
            value: "selim.reza.uits@gmail.com",
            href: "mailto:selim.reza.uits@gmail.com",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "selim-reza-dev",
            href: "http://www.linkedin.com/in/selim-reza-dev",
        },
        {
            icon: Phone,
            label: "WhatsApp",
            value: "+880 1770821121",
            href: "https://wa.me/8801770821121",
        },
    ];

    return (
        <section id="contact" className="py-20 px-6 relative">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeading
                    label="Contact"
                    title="Let's Build Something."
                    subtitle="Open to backend engineering, DevOps, and SRE roles at global companies"
                />

                <motion.div
                    className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Left — Contact Methods */}
                    <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-4">
                        {contactMethods.map((method) => (
                            <motion.a
                                key={method.label}
                                href={method.href}
                                target={method.label !== "Email" ? "_blank" : undefined}
                                rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
                                className="glass-card p-5 flex items-center gap-4 group cursor-pointer block"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center group-hover:bg-[#3b82f6]/10 group-hover:border-[#3b82f6]/30 transition-all duration-300">
                                    <method.icon
                                        size={20}
                                        className="text-[#94a3b8] group-hover:text-[#3b82f6] transition-colors"
                                    />
                                </div>
                                <div>
                                    <p className="font-medium text-[var(--text-primary)] text-sm group-hover:text-[var(--accent-primary)] transition-colors">
                                        {method.label}
                                    </p>
                                    <p className="text-[var(--text-muted)] text-xs font-mono">
                                        {method.value}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Right — Contact Form */}
                    <motion.div variants={fadeInUp} className="lg:col-span-3">
                        <div className="glass-card p-6 md:p-8 relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3b82f6]/5 rounded-full blur-[80px] -z-10" />

                            <h3 className="text-xl font-semibold text-[#f1f5f9] mb-6">
                                Send a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-xs font-medium mb-2 text-[#94a3b8] uppercase tracking-wider"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData((p) => ({ ...p, name: e.target.value }))
                                            }
                                            required
                                            className="w-full px-4 py-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/40 focus:border-[var(--accent-primary)]/40 transition-all text-[var(--text-primary)] text-sm placeholder-[var(--text-muted)]"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-xs font-medium mb-2 text-[#94a3b8] uppercase tracking-wider"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData((p) => ({ ...p, email: e.target.value }))
                                            }
                                            required
                                            className="w-full px-4 py-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/40 focus:border-[var(--accent-primary)]/40 transition-all text-[var(--text-primary)] text-sm placeholder-[var(--text-muted)]"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-xs font-medium mb-2 text-[#94a3b8] uppercase tracking-wider"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData((p) => ({ ...p, message: e.target.value }))
                                        }
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/40 focus:border-[var(--accent-primary)]/40 transition-all text-[var(--text-primary)] text-sm placeholder-[var(--text-muted)] resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                {status === "success" && (
                                    <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] text-sm">
                                        <CheckCircle size={16} />
                                        Message sent successfully!
                                    </div>
                                )}
                                {status === "error" && (
                                    <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/20 text-[#ef4444] text-sm">
                                        <AlertCircle size={16} />
                                        Something went wrong. Try again.
                                    </div>
                                )}

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3b82f6] text-white rounded-xl font-medium hover:bg-[#2563eb] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Send size={16} />
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
