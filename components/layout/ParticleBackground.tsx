"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export function ParticleBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            fullScreen: false,
            fpsLimit: 60,
            detectRetina: true,
            pauseOnBlur: true,
            particles: {
                number: {
                    value: 60,
                    density: { enable: true, width: 1920, height: 1080 },
                },
                color: { value: "#3b82f6" },
                links: {
                    enable: true,
                    color: "#3b82f6",
                    distance: 150,
                    opacity: 0.15,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 0.8,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: { default: "out" },
                },
                opacity: {
                    value: { min: 0.1, max: 0.4 },
                    animation: {
                        enable: true,
                        speed: 0.5,
                        sync: false,
                    },
                },
                size: {
                    value: { min: 1, max: 2.5 },
                },
                shape: { type: "circle" },
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                    resize: { enable: true },
                },
                modes: {
                    grab: {
                        distance: 180,
                        links: { opacity: 0.3 },
                    },
                },
            },
            responsive: [
                {
                    maxWidth: 768,
                    options: {
                        particles: {
                            number: { value: 20 },
                            links: { opacity: 0.1 },
                        },
                    },
                },
            ],
        }),
        []
    );

    if (!init) return null;

    return (
        <Particles
            id="hero-particles"
            className="absolute inset-0 z-0"
            options={options}
        />
    );
}
