"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Only show custom cursor on desktop with fine pointer
        const mq = window.matchMedia("(pointer: fine)");
        if (!mq.matches) return;

        setVisible(true);

        const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
        const down = () => setClicked(true);
        const up = () => setClicked(false);

        const enter = () => setHovered(true);
        const leave = () => setHovered(false);

        window.addEventListener("mousemove", move, { passive: true });
        window.addEventListener("mousedown", down);
        window.addEventListener("mouseup", up);

        // Track interactive elements
        const addListeners = () => {
            const targets = document.querySelectorAll(
                "a, button, input, textarea, [role='button'], .glass-card"
            );
            targets.forEach((el) => {
                el.addEventListener("mouseenter", enter);
                el.addEventListener("mouseleave", leave);
            });
            return targets;
        };

        const targets = addListeners();
        const observer = new MutationObserver(() => {
            // Re-add on DOM changes
            addListeners();
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mousedown", down);
            window.removeEventListener("mouseup", up);
            targets.forEach((el) => {
                el.removeEventListener("mouseenter", enter);
                el.removeEventListener("mouseleave", leave);
            });
            observer.disconnect();
        };
    }, []);

    if (!visible) return null;

    return (
        <>
            {/* Outer glow ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference"
                animate={{
                    x: pos.x - (hovered ? 24 : 16),
                    y: pos.y - (hovered ? 24 : 16),
                    width: hovered ? 48 : 32,
                    height: hovered ? 48 : 32,
                    opacity: clicked ? 0.6 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
                style={{
                    border: "1.5px solid rgba(59, 130, 246, 0.6)",
                    background: hovered
                        ? "rgba(59, 130, 246, 0.08)"
                        : "transparent",
                }}
            />

            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
                animate={{
                    x: pos.x - 3,
                    y: pos.y - 3,
                    scale: clicked ? 0.6 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 1500,
                    damping: 30,
                    mass: 0.1,
                }}
                style={{
                    width: 6,
                    height: 6,
                    background: "#3b82f6",
                    boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
                }}
            />

            {/* Hide default cursor via global style */}
            <style jsx global>{`
        @media (pointer: fine) {
          *, *::before, *::after {
            cursor: none !important;
          }
        }
      `}</style>
        </>
    );
}
