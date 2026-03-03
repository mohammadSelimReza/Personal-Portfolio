"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ui/ThemeProvider";
import { useEffect, useState } from "react";

interface TechBadgeProps {
    name: string;
    color?: string;
}

export function TechBadge({ name, color }: TechBadgeProps) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isLight = mounted && theme === "light";
    const borderColor = color
        ? `rgba(${hexToRgb(color)}, 0.4)`
        : "rgba(6, 182, 212, 0.3)";
    const bgColor = color
        ? `rgba(${hexToRgb(color)}, 0.1)`
        : "rgba(6, 182, 212, 0.08)";
    const hoverBorderColor = color
        ? `rgba(${hexToRgb(color)}, 0.7)`
        : "rgba(6, 182, 212, 0.7)";
    const hoverBgColor = color
        ? `rgba(${hexToRgb(color)}, 0.18)`
        : "rgba(6, 182, 212, 0.15)";
    const glowColor = color
        ? `rgba(${hexToRgb(color)}, 0.3)`
        : "rgba(6, 182, 212, 0.3)";

    return (
        <motion.span
            className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono font-medium cursor-default select-none"
            style={{
                border: `1px solid ${borderColor}`,
                background: bgColor,
                color: color && color !== "#000000" && color !== "#010101"
                    ? adjustColor(color, isLight ? -60 : 60)
                    : isLight ? "#0f172a" : "#67e8f9",
            }}
            whileHover={{
                scale: 1.08,
                borderColor: hoverBorderColor,
                background: hoverBgColor,
                boxShadow: `0 0 16px ${glowColor}`,
            }}
            transition={{ duration: 0.2 }}
        >
            {name}
        </motion.span>
    );
}

function hexToRgb(hex: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return "6, 182, 212";
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
}

function adjustColor(hex: string, amount: number): string {
    const num = parseInt(hex.replace("#", ""), 16);
    const r = Math.max(0, Math.min(255, (num >> 16) + amount));
    const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amount));
    const b = Math.max(0, Math.min(255, (num & 0x0000ff) + amount));
    return `rgb(${r}, ${g}, ${b})`;
}
