"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    elevated?: boolean;
    glowOnHover?: boolean;
    children: React.ReactNode;
    className?: string;
}

export function GlassCard({
    elevated = false,
    glowOnHover = true,
    children,
    className,
    ...props
}: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "relative group",
                elevated ? "glass-elevated" : "glass-card",
                className
            )}
            whileHover={
                glowOnHover
                    ? {
                        y: -4,
                        transition: { duration: 0.2 },
                    }
                    : undefined
            }
            {...props}
        >
            {glowOnHover && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3b82f6]/20 to-[#06b6d4]/20 rounded-[20px] blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />
            )}
            {children}
        </motion.div>
    );
}
