"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ui/ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-[#3b82f6]/40 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                    <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0, scale: 0 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 90, opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Sun size={16} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0, scale: 0 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: -90, opacity: 0, scale: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Moon size={16} />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    );
}
