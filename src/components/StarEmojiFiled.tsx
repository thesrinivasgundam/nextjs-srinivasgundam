'use client';

import { useRef, useEffect } from 'react';
import { Box } from '@mui/material';

type Star = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
};

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const STAR_COUNT = 1000;

  const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.5 + 0.5,
    vx: 0,
    vy: 0,
  }));

  let mouse = { x: width / 2, y: height / 2 };

  const onMouseMove = (e: MouseEvent) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  const onClick = (e: MouseEvent) => {
    const cx = e.clientX;
    const cy = e.clientY;

    for (const star of stars) {
      const dx = star.x - cx;
      const dy = star.y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;

      const force = Math.min(120, 8000 / (dist * dist));

      star.vx += (dx / dist) * force;
      star.vy += (dy / dist) * force;
    }
  };

  const onResize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('click', onClick);
  window.addEventListener('resize', onResize);

  // 🔥 IMPORTANT PART
  let animationId: number;

  const animate = () => {
    ctx.clearRect(0, 0, width, height);

    for (const star of stars) {
      const dx = mouse.x - star.x;
      const dy = mouse.y - star.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;

      star.vx += (dx / dist) * 0.015;
      star.vy += (dy / dist) * 0.015;

      star.x += star.vx;
      star.y += star.vy;

      star.vx *= 0.92;
      star.vy *= 0.92;

      if (star.x < 0) star.x = width;
      if (star.x > width) star.x = 0;
      if (star.y < 0) star.y = height;
      if (star.y > height) star.y = 0;

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
    }

    animationId = requestAnimationFrame(animate);
  };

  animationId = requestAnimationFrame(animate);

  // ✅ CLEANUP FUNCTION
  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('click', onClick);
    window.removeEventListener('resize', onResize);
  };
}, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        backgroundColor: 'black',
      }}
    >
      <canvas ref={canvasRef} />
    </Box>
  );
}
