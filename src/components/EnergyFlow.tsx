// src/components/EnergyFlow.tsx
'use client';

import React, { useEffect, useRef } from 'react';

interface EnergyFlowProps {
  className?: string;
  color?: string;
  particleCount?: number;
}

export default function EnergyFlow({ 
  className = "", 
  color = "#D68A67", 
  particleCount = 40 
}: EnergyFlowProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width: number;
    let height: number;

    const particles: Particle[] = [];

    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speed: number = 0;
      progress: number = 0;
      offset: number = 0;

      constructor() {
        this.reset();
        // Randomize initial progress to spread them out
        this.progress = Math.random();
      }

      reset() {
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 0.002 + 0.001;
        this.progress = 0;
        this.offset = (Math.random() - 0.5) * 20; // Spread around the path
      }

      update(isVertical: boolean) {
        this.progress += this.speed;
        if (this.progress > 1) {
          this.reset();
        }

        if (isVertical) {
          // Vertical path (Mobile)
          this.x = width / 2 + this.offset;
          this.y = this.progress * height;
        } else {
          // Horizontal path (Desktop)
          this.x = this.progress * width;
          this.y = height / 2 + this.offset;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = color;
        // Fade in/out at ends
        const opacity = Math.sin(this.progress * Math.PI);
        context.globalAlpha = opacity * 0.6;
        context.fill();
        
        // Add a subtle glow
        context.shadowBlur = 10;
        context.shadowColor = color;
        context.fill();
        context.shadowBlur = 0;
      }
    }

    const init = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const isVertical = height > width;

      // Draw path line (subtle)
      ctx.beginPath();
      if (isVertical) {
        ctx.moveTo(width / 2, 0);
        ctx.lineTo(width / 2, height);
      } else {
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
      }
      ctx.strokeStyle = color;
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 1;
      ctx.stroke();

      particles.forEach(p => {
        p.update(isVertical);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, particleCount]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`w-full h-full ${className}`}
      style={{ touchAction: 'none' }}
    />
  );
}
