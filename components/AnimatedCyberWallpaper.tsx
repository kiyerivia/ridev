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
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-700 animate-cyber-breathing scale-105 opacity-[0.07] dark:opacity-85"
        style={{
          backgroundImage: "url('/cyber-bg.png')",
        }}
      />

      {/* 2. Light Mode Iridescent Liquid-Glass Chromatic Mesh Backdrop */}
      <div className="dark:hidden absolute inset-0 bg-gradient-to-br from-[#fdf2f8] via-[#f3f1fb] to-[#eff6ff] pointer-events-none" />
      <div className="dark:hidden absolute -top-24 -left-20 w-[620px] h-[620px] bg-gradient-to-br from-pink-400/40 via-rose-300/35 to-fuchsia-300/25 rounded-full blur-[110px] animate-orb-drift pointer-events-none" />
      <div className="dark:hidden absolute top-[18%] -right-24 w-[640px] h-[640px] bg-gradient-to-bl from-violet-400/35 via-indigo-300/30 to-sky-300/30 rounded-full blur-[120px] animate-orb-drift-slow pointer-events-none" />
      <div className="dark:hidden absolute bottom-[-10%] left-[20%] w-[680px] h-[520px] bg-gradient-to-tr from-cyan-300/35 via-pink-300/30 to-amber-200/30 rounded-full blur-[125px] animate-orb-drift pointer-events-none" />
      <div className="dark:hidden absolute top-[55%] left-[55%] w-[420px] h-[420px] bg-gradient-to-tr from-rose-400/25 via-purple-300/25 to-transparent rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />

      {/* 3. Dark Mode Deep Iridescent Aurora Orbs (Refracted Through Dark Liquid Glass) */}
      <div className="hidden dark:block absolute -top-28 -left-24 w-[650px] h-[650px] bg-gradient-to-br from-pink-600/30 via-fuchsia-600/20 to-transparent rounded-full blur-[120px] animate-orb-drift" />
      <div className="hidden dark:block absolute top-[20%] -right-24 w-[620px] h-[620px] bg-gradient-to-bl from-violet-600/30 via-cyan-500/20 to-transparent rounded-full blur-[130px] animate-orb-drift-slow" />
      <div className="hidden dark:block absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[620px] h-[520px] bg-gradient-to-b from-pink-500/25 via-rose-600/20 to-transparent rounded-full blur-[110px] animate-pulse-slow" />
      <div className="hidden dark:block absolute bottom-[-12%] left-[25%] w-[680px] h-[480px] bg-gradient-to-tr from-cyan-500/20 via-purple-600/20 to-pink-600/20 rounded-full blur-[140px] animate-orb-drift" />

      {/* 4. Subtle Horizontal Specular Light Sweep (Dark Mode) */}
      <div className="hidden dark:block absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-pink-400/80 to-transparent shadow-[0_0_20px_#ff007f,0_0_40px_#8b5cf6] animate-laser-scan opacity-55" />

      {/* 5. Floor Perspective Glow Pulses (Dark Mode) */}
      <div className="hidden dark:block absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-fuchsia-600/15 via-pink-600/10 to-transparent pointer-events-none blur-md animate-floor-flicker" />

      {/* 6. Dynamic Canvas Floating Luminous Dust */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-35 dark:opacity-75"
      />

      {/* 7. Dark Mode Balanced Vignette (preserves luminous color for glass refraction) */}
      <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-[#06060b]/70 via-[#06060b]/35 to-[#06060b]/82" />
      <div className="hidden dark:block absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(6,6,11,0.52)_72%,rgba(6,6,11,0.86)_100%)]" />
    </div>
  );
}
