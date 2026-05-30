import React, { useEffect, useRef } from 'react';

/**
 * Renders an elegant, floating particle background simulating magical sparks.
 * Vanilla JS Canvas API wrapped in a React component for clean integration.
 */
export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{ x: number; y: number; s: number; vx: number; vy: number; life: number; maxLife: number; color: string }> = [];
    const colors = ['rgba(212, 175, 55, 0.4)', 'rgba(26, 71, 42, 0.5)', 'rgba(255, 255, 255, 0.2)']; // Potter Gold, Emerald, Soft White

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Init canvas size
    resize();
    window.addEventListener('resize', resize);

    const createParticle = () => {
      // Start slightly below the screen
      const x = Math.random() * canvas.width;
      const y = canvas.height + 10;
      const s = Math.random() * 2 + 0.5; // Size
      const vx = (Math.random() - 0.5) * 0.5; // Drift horizontally
      const vy = (Math.random() * -1) - 0.5; // Float upwards
      const life = 0;
      const maxLife = Math.random() * 200 + 100; // Frames before fading out completely
      const color = colors[Math.floor(Math.random() * colors.length)];

      return { x, y, s, vx, vy, life, maxLife, color };
    };

    // Pre-fill some particles
    for (let i = 0; i < 50; i++) {
        const p = createParticle();
        p.y = Math.random() * canvas.height; // Distribute on screen initially
        particles.push(p);
    }

    let animationFrameId: number;

    const draw = () => {
      // Clear the canvas on each frame with a slight trailing effect for softness
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Sine wave horizontal drift to look like gentle magic
        p.x += Math.sin(p.life * 0.02) * 0.2;

        // Fade in and out
        let opacity = 1;
        if (p.life < 20) {
            opacity = p.life / 20;
        } else if (p.life > p.maxLife - 40) {
            opacity = Math.max(0, (p.maxLife - p.life) / 40);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(/[\d.]+\)$/g, `${opacity * 0.6})`); 
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();

        // Respawn if dead or offscreen
        if (p.life >= p.maxLife || p.y < -10) {
          particles[i] = createParticle();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};
