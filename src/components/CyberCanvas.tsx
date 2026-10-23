import React, { useEffect, useRef } from 'react';

export const CyberCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle class
    class NodeParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
        this.color = `rgba(6, 182, 212, ${Math.random() * 0.4 + 0.2})`; // cyan shade
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around boundaries
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
      }
    }

    // Packet class traveling on connecting lines
    class CyberPacket {
      nodeA: NodeParticle;
      nodeB: NodeParticle;
      progress: number;
      speed: number;

      constructor(nodeA: NodeParticle, nodeB: NodeParticle) {
        this.nodeA = nodeA;
        this.nodeB = nodeB;
        this.progress = 0;
        this.speed = Math.random() * 0.01 + 0.005;
      }

      update() {
        this.progress += this.speed;
        return this.progress >= 1;
      }

      draw(c: CanvasRenderingContext2D) {
        const x = this.nodeA.x + (this.nodeB.x - this.nodeA.x) * this.progress;
        const y = this.nodeA.y + (this.nodeB.y - this.nodeA.y) * this.progress;

        c.beginPath();
        c.arc(x, y, 3, 0, Math.PI * 2);
        c.fillStyle = '#22d3ee'; // bright cyan
        // Shadow glow for packet
        c.shadowColor = '#06b6d4';
        c.shadowBlur = 8;
        c.fill();
        c.shadowBlur = 0; // reset
      }
    }

    // Initialize nodes
    const particleCount = Math.min(Math.floor((width * height) / 15000), 75);
    const particles: NodeParticle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new NodeParticle());
    }

    const packets: CyberPacket[] = [];

    // Track mouse
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle tech digital grids or matrix dots in background
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update & Draw particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      // Connections
      const maxDistance = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pi = particles[i];
          const pj = particles[j];
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.15;
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(pi.x, pi.y);
            ctx.lineTo(pj.x, pj.y);
            ctx.stroke();

            // Chance to spawn a data packet
            if (Math.random() < 0.0001 && packets.length < 15) {
              packets.push(new CyberPacket(pi, pj));
            }
          }
        }
      }

      // Connect to mouse
      if (mouseX !== -1000 && mouseY !== -1000) {
        particles.forEach((p) => {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.25;
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
          }
        });
      }

      // Update & Draw packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const pk = packets[i];
        const isDone = pk.update();
        if (isDone) {
          packets.splice(i, 1);
        } else {
          pk.draw(ctx);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
