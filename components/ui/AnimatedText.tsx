"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
    tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export function AnimatedText({
    text,
    className = "",
    delay = 0,
    tag = "span",
}: AnimatedTextProps) {
    const words = text.split(" ");
    const Tag = motion[tag];

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: delay,
            },
        },
    };

    const child = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" as const },
        },
    };

    return (
        <Tag
            className={`inline-flex flex-wrap ${className}`}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    variants={child}
                    className="mr-[0.3em] inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </Tag>
    );
}
