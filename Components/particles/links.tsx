import React from "react";
import Particles from "react-particles";
import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import type { Container } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export const Links: React.FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => {
            await console.log(container);
        },
        [],
    );
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                autoPlay: true,
                background: {
                    opacity: 0,
                },
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                detectRetina: true,
                duration: 0,
                fpsLimit: 120,
                interactivity: {
                    detectsOn: "window",
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onDiv: {
                            selectors: [],
                            enable: false,
                            mode: [],
                            type: "circle",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                            parallax: {
                                enable: false,
                                force: 90,
                                smooth: 10,
                            },
                        },
                        resize: true,
                    },
                    modes: {
                        slow: {
                            factor: 3,
                            radius: 200,
                        },
                        attract: {
                            distance: 200,
                            duration: 0.4,
                            easing: "ease-out-quad",
                            factor: 1,
                            maxSpeed: 70,
                            speed: 1,
                        },
                        bounce: {
                            distance: 200,
                        },
                        bubble: {
                            distance: 400,
                            duration: 2,
                            mix: false,
                            opacity: 0.8,
                            size: 40,
                            divs: {
                                distance: 200,
                                duration: 0.4,
                                mix: false,
                                selectors: [],
                            },
                        },
                        connect: {
                            distance: 80,
                            links: {
                                opacity: 0.5,
                            },
                            radius: 60,
                        },
                        grab: {
                            distance: 400,
                            links: {
                                blink: false,
                                consent: false,
                                opacity: 1,
                            },
                        },
                        push: {
                            default: true,
                            groups: [],
                            quantity: 4,
                        },
                        remove: {
                            quantity: 2,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                            factor: 100,
                            speed: 1,
                            maxSpeed: 50,
                            easing: "ease-out-quad",
                            divs: {
                                distance: 200,
                                duration: 0.4,
                                factor: 100,
                                speed: 1,
                                maxSpeed: 50,
                                easing: "ease-out-quad",
                                selectors: [],
                            },
                        },
                        trail: {
                            delay: 1,
                            pauseOnStop: false,
                            quantity: 1,
                        },
                        light: {
                            area: {
                                gradient: {
                                    start: {
                                        value: "#ffffff",
                                    },
                                    stop: {
                                        value: "#000000",
                                    },
                                },
                                radius: 1000,
                            },
                            shadow: {
                                color: {
                                    value: "#000000",
                                },
                                length: 2000,
                            },
                        },
                    },
                },
                manualParticles: [],
                motion: {
                    disable: false,
                    reduce: {
                        factor: 4,
                        value: true,
                    },
                },
                particles: {
                    bounce: {
                        horizontal: {
                            random: {
                                enable: false,
                                minimumValue: 0.1,
                            },
                            value: 1,
                        },
                        vertical: {
                            random: {
                                enable: false,
                                minimumValue: 0.1,
                            },
                            value: 1,
                        },
                    },
                    collisions: {
                        bounce: {
                            horizontal: {
                                random: {
                                    enable: false,
                                    minimumValue: 0.1,
                                },
                                value: 1,
                            },
                            vertical: {
                                random: {
                                    enable: false,
                                    minimumValue: 0.1,
                                },
                                value: 1,
                            },
                        },
                        enable: false,
                        mode: "bounce",
                        overlap: {
                            enable: true,
                            retries: 0,
                        },
                    },
                    color: {
                        value: "#41f00c",
                    },
                    destroy: {
                        mode: "none",
                        split: {
                            count: 1,
                            factor: {
                                random: {
                                    enable: false,
                                    minimumValue: 0,
                                },
                                value: 3,
                            },
                            rate: {
                                random: {
                                    enable: false,
                                    minimumValue: 0,
                                },
                                value: {
                                    min: 4,
                                    max: 9,
                                },
                            },
                            sizeOffset: true,
                        },
                    },
                    groups: {},
                    move: {
                        angle: {
                            offset: 0,
                            value: 90,
                        },
                        attract: {
                            distance: 200,
                            enable: false,
                            rotate: {
                                x: 600,
                                y: 1200,
                            },
                        },
                        center: {
                            x: 50,
                            y: 50,
                            radius: 0,
                        },
                        decay: 0,
                        distance: {},
                        direction: "none",
                        drift: 0,
                        enable: true,
                        gravity: {
                            acceleration: 9.81,
                            enable: false,
                            inverse: false,
                            maxSpeed: 50,
                        },
                        path: {
                            clamp: true,
                            delay: {
                                random: {
                                    enable: false,
                                    minimumValue: 0,
                                },
                                value: 0,
                            },
                            enable: false,
                            options: {},
                        },
                        outModes: {
                            default: "out",
                            bottom: "out",
                            left: "out",
                            right: "out",
                            top: "out",
                        },
                        random: false,
                        size: false,
                        speed: 2,
                        spin: {
                            acceleration: 0,
                            enable: false,
                        },
                        straight: false,
                        vibrate: false,
                        warp: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                            factor: 1000,
                        },
                        limit: 0,
                        value: 100,
                    },
                    opacity: {
                        random: {
                            enable: true,
                            minimumValue: 0.1,
                        },
                        value: {
                            min: 0.1,
                            max: 0.5,
                        },
                        animation: {
                            count: 0,
                            enable: true,
                            speed: 3,
                            decay: 0,
                            sync: false,
                            destroy: "none",
                            startValue: "random",
                            minimumValue: 0.1,
                        },
                    },
                    reduceDuplicates: false,
                    rotate: {
                        random: {
                            enable: false,
                            minimumValue: 0,
                        },
                        value: 0,
                        animation: {
                            enable: false,
                            speed: 0,
                            decay: 0,
                            sync: false,
                        },
                        direction: "clockwise",
                        path: false,
                    },
                    shape: {
                        options: {},
                        type: "star",
                    },
                    size: {
                        random: {
                            enable: false,
                            minimumValue: 0.2,
                        },
                        value: {
                            min: 1,
                            max: 5,
                        },
                        animation: {
                            count: 0,
                            enable: true,
                            speed: 20,
                            decay: 0,
                            sync: false,
                            destroy: "none",
                            startValue: "random",
                            minimumValue: 0.1,
                        },
                    },
                    stroke: {
                        width: 0,
                    },
                    zIndex: {
                        random: {
                            enable: false,
                            minimumValue: 0,
                        },
                        value: 0,
                        opacityRate: 1,
                        sizeRate: 1,
                        velocityRate: 1,
                    },
                    life: {
                        count: 0,
                        delay: {
                            random: {
                                enable: false,
                                minimumValue: 0,
                            },
                            value: 0,
                            sync: false,
                        },
                        duration: {
                            random: {
                                enable: false,
                                minimumValue: 0.0001,
                            },
                            value: 0,
                            sync: false,
                        },
                    },
                    roll: {
                        darken: {
                            enable: false,
                            value: 0,
                        },
                        enable: false,
                        enlighten: {
                            enable: false,
                            value: 0,
                        },
                        mode: "vertical",
                        speed: 25,
                    },
                    tilt: {
                        random: {
                            enable: false,
                            minimumValue: 0,
                        },
                        value: 0,
                        animation: {
                            enable: false,
                            speed: 0,
                            decay: 0,
                            sync: false,
                        },
                        direction: "clockwise",
                        enable: false,
                    },
                    twinkle: {
                        lines: {
                            enable: false,
                            frequency: 0.05,
                            opacity: 1,
                        },
                        particles: {
                            enable: false,
                            frequency: 0.05,
                            opacity: 1,
                        },
                    },
                    links: {
                        blink: false,
                        color: {
                            value: "#ffffff",
                        },
                        consent: false,
                        distance: 150,
                        enable: true,
                        frequency: 1,
                        opacity: 0.4,
                        triangles: {
                            enable: false,
                            frequency: 1,
                        },
                        width: 1,
                        warp: false,
                    },
                    repulse: {
                        random: {
                            enable: false,
                            minimumValue: 0,
                        },
                        value: 0,
                        enabled: false,
                        distance: 1,
                        duration: 1,
                        factor: 1,
                        speed: 1,
                    },
                },
                pauseOnBlur: true,
                pauseOnOutsideViewport: true,
                responsive: [],
                style: {},
                themes: [],
                zLayers: 100,
            }}
        />
    );
};
