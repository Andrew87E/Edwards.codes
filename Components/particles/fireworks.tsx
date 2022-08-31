import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import type { Container } from "tsparticles-engine";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

export const Fireworks: React.FC = () => {
    const particlesInit = useCallback(
        // @ts-ignore
        async (engine: Engine) => await loadFireworksPreset(engine),
        [],
    );

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => {},
        [],
    );

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                preset: "fireworks",
                fpsLimit: 60,
                detectRetina: true,
                background: {
                    opacity: 0,
                },
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
            }}
        />
    );
};
