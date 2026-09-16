"use client";

import React, { useEffect, useRef } from "react";

export default function AnimatedCyberWallpaper() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle system: glowing laser embers and energy dust
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
      maxAlpha: number;
      decay: number;
    }

    const particles: Particle[] = [];
    const colors = [
      "rgba(255, 0, 127, ", // Neon Hot Pink
      "rgba(255, 0, 56, ",  // Laser Crimson
      "rgba(255, 77, 166, ", // Bright Ruby Pink
      "rgba(255, 255, 255, ", // Crystal Spark
      "rgba(255, 100, 50, ", // Amber Flare
    ];

    const createParticle = (): Particle => {
      const colorBase = colors[Math.floor(Math.random() * colors.length)];
      const maxAlpha = Math.random() * 0.7 + 0.3;
      return {
        x: Math.random() * width,
        y: height + Math.random() * 20,
        size: Math.random() * 2.5 + 0.8,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: -(Math.random() * 1.5 + 0.6),
        color: colorBase,
        alpha: 0.1,
        maxAlpha: maxAlpha,
        decay: Math.random() * 0.005 + 0.002,
      };
    };

    // Initialize 65 particles
    for (let i = 0; i < 65; i++) {
      const p = createParticle();
      p.y = Math.random() * height; // Spread across screen initially
      p.alpha = Math.random() * p.maxAlpha;
      particles.push(p);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw & update floating cyber particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        // Fade in and out
        if (p.y < height * 0.8) {
          p.alpha -= p.decay;
        } else {
          p.alpha = Math.min(p.maxAlpha, p.alpha + 0.02);
        }

        // Reset if out of bounds or invisible
        if (p.y < -10 || p.alpha <= 0 || p.x < -10 || p.x > width + 10) {
          particles[i] = createParticle();
        }

        // Draw particle glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0, p.alpha)})`;
        ctx.shadowColor = p.color === "rgba(255, 255, 255, " ? "#ffffff" : "#ff0055";
        ctx.shadowBlur = p.size * 5;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none transition-opacity duration-500">
      {/* 1. Base Wallpaper Image (Active in Dark Mode, Soft in Light Mode) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-700 animate-cyber-breathing scale-105 opacity-10 dark:opacity-100"
        style={{
          backgroundImage: "url('/cyber-bg.png')",
        }}
      />

      {/* 2. Light Mode Ambient Light Mesh Aura */}
      <div className="dark:hidden absolute inset-0 bg-gradient-to-b from-[#f8f9fd] via-[#f1f5f9]/70 to-[#f8f9fd] pointer-events-none" />
      <div className="dark:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-pink-300/30 via-rose-200/20 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="dark:hidden absolute bottom-10 right-10 w-[500px] h-[500px] bg-pink-200/25 rounded-full blur-[140px] pointer-events-none" />

      {/* 3. Dark Mode Central Sanctuary Pillar Pulsing Glow */}
      <div className="hidden dark:block absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[550px] h-[500px] bg-gradient-to-b from-pink-500/30 via-red-600/25 to-transparent rounded-full blur-[90px] animate-pulse-slow" />

      {/* 4. Horizontal Cyber Laser Scanning Sweep Line (Dark Mode) */}
      <div className="hidden dark:block absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff007f] to-transparent shadow-[0_0_20px_#ff007f,0_0_40px_#ff0038] animate-laser-scan opacity-70" />

      {/* 5. Floor Laser Perspective Runway Grid Pulses (Dark Mode) */}
      <div className="hidden dark:block absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-red-600/20 via-pink-600/10 to-transparent pointer-events-none blur-md animate-floor-flicker" />

      {/* 6. Dynamic Canvas Floating Sparks & Embers */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 dark:opacity-85"
      />

      {/* 7. Dark Mode Cinematic Vignette */}
      <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-[#07070a]/80 via-[#07070a]/45 to-[#07070a]/90" />
      <div className="hidden dark:block absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,7,10,0.65)_70%,rgba(7,7,10,0.92)_100%)]" />
    </div>
  );
}
