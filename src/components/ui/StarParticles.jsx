"use client";
import React from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const StarParticles = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // Loads lightweight particles engine
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 30, density: { enable: true, value_area: 1000 } },
          shape: { type: "circle" },
          opacity: { value: 1, random: true },
          size: { value: 2, random: true },
          move: { enable: true, speed: 0.2, direction: "none", outModes: "out" },
          color: { value: "#ffffff" },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
      }}
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default StarParticles;
