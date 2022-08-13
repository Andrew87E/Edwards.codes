import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";
import React from "react";

export class ParticlesContainer extends React.PureComponent<any> {
  // this customizes the component tsParticles installation
  async customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadLinksPreset(engine);
  }

  render() {
    const options = {
      preset: "links",
      fpsLimit: 60,
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            area: 800,
          }
        },
        color: {
          value: "#41f00c"
        },
        links: {
          enable: true,
          color: "#fff",
          distance: 150
        },
        move: {
          enable: true
        }
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
    };

    return <Particles options={options} init={this.customInit} id="ae-particles"/>;
  }
}
