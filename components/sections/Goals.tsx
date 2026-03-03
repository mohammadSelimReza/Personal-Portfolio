"use client";

import { motion } from "framer-motion";
import { goals } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TypeAnimation } from "react-type-animation";

export function Goals() {
    // Build the typing sequence
    const typeSequence: (string | number)[] = [];
    goals.forEach((goal) => {
        typeSequence.push(`├── ${goal.icon} ${goal.label}\n│   └── ${goal.description}`);
        typeSequence.push(1500);
    });

    return (
        <section id="goals" className="py-20 px-6 relative">
            <div className="max-w-[1200px] mx-auto">
                <SectionHeading
                    label="Roadmap"
                    title="What's Next"
                    subtitle="Current focus areas and career trajectory"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-3xl mx-auto"
                >
                    {/* Terminal-style Goals */}
                    <motion.div variants={fadeInUp}>
                        <div className="terminal relative">
                            {/* Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#3b82f6]/10 to-[#06b6d4]/5 rounded-2xl blur-2xl -z-10" />

                            {/* Header */}
                            <div className="terminal-header">
                                <div className="terminal-dot bg-[#ef4444]" />
                                <div className="terminal-dot bg-[#f59e0b]" />
                                <div className="terminal-dot bg-[#10b981]" />
                                <span className="ml-3 text-xs text-[#475569] font-mono">
                                    goals.sh
                                </span>
                            </div>

                            {/* Body */}
                            <div className="terminal-body">
                                <p className="terminal-prompt font-semibold mb-1">
                                    selim@portfolio:~$ cat career_focus.txt
                                </p>
                                <p className="text-[#94a3b8] mb-4 text-sm">
                                    📍 Current Focus
                                </p>

                                {/* Static goal display for reliable rendering */}
                                <div className="space-y-3 mb-6">
                                    {goals.map((goal, i) => (
                                        <motion.div
                                            key={goal.label}
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.2, duration: 0.4 }}
                                            className="text-sm"
                                        >
                                            <span className="text-[#3b82f6]">
                                                {i < goals.length - 1 ? "├──" : "└──"}
                                            </span>{" "}
                                            <span>{goal.icon}</span>{" "}
                                            <span className="text-[#f1f5f9] font-medium">
                                                {goal.label}
                                            </span>
                                            <span className="text-[#475569]"> → </span>
                                            <span className="text-[#94a3b8]">{goal.description}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="border-t border-white/[0.06] pt-4 mt-4">
                                    <p className="text-[#94a3b8] text-sm mb-2">
                                        <span className="text-[#f59e0b]">Goal:</span> Transition
                                        into a{" "}
                                        <span className="text-[#3b82f6] font-medium">
                                            Site Reliability Engineering
                                        </span>{" "}
                                        role at a global MNC
                                    </p>
                                    <p className="terminal-prompt font-semibold">
                                        selim@portfolio:~${" "}
                                        <span className="animate-blink">█</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
