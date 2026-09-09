import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const gridSize = 24;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 130,
    };

    const activeBoxes = new Map();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const cellX = Math.floor(e.clientX / gridSize) * gridSize;
      const cellY = Math.floor(e.clientY / gridSize) * gridSize;
      const key = `${cellX}_${cellY}`;

      if (!activeBoxes.has(key)) {
        activeBoxes.set(key, {
          x: cellX,
          y: cellY,
          scale: 0.25,
          targetScale: 1.0,
          alpha: 0.8,
          borderAlpha: 0.95,
          colorHue: 28 + Math.random() * 8, // Warm vintage amber
        });
      } else {
        const item = activeBoxes.get(key);
        item.alpha = 0.8;
        item.borderAlpha = 0.95;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const ambientBlips = [];
    for (let i = 0; i < 14; i++) {
      ambientBlips.push({
        x: Math.floor(Math.random() * (width / gridSize)) * gridSize,
        y: Math.floor(Math.random() * (height / gridSize)) * gridSize,
        alpha: 0,
        speed: 0.004 + Math.random() * 0.007,
        fadeIn: true,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Ambient drafting blips
      for (let b of ambientBlips) {
        if (b.fadeIn) {
          b.alpha += b.speed;
          if (b.alpha >= 0.22) b.fadeIn = false;
        } else {
          b.alpha -= b.speed;
          if (b.alpha <= 0) {
            b.fadeIn = true;
            b.alpha = 0;
            b.x = Math.floor(Math.random() * (width / gridSize)) * gridSize;
            b.y = Math.floor(Math.random() * (height / gridSize)) * gridSize;
          }
        }

        ctx.fillStyle = `rgba(180, 83, 9, ${b.alpha * 0.35})`;
        ctx.fillRect(b.x + 1, b.y + 1, gridSize - 2, gridSize - 2);
      }

      // Animated boxes touched by the cursor
      for (let [key, box] of activeBoxes.entries()) {
        box.scale += (box.targetScale - box.scale) * 0.22;
        box.alpha -= 0.015;
        box.borderAlpha -= 0.02;

        if (box.alpha <= 0) {
          activeBoxes.delete(key);
          continue;
        }

        const size = gridSize * box.scale;
        const offset = (gridSize - size) / 2;
        const drawX = box.x + offset;
        const drawY = box.y + offset;

        ctx.fillStyle = `hsla(${box.colorHue}, 68%, 45%, ${box.alpha * 0.35})`;
        ctx.fillRect(drawX, drawY, size, size);

        ctx.strokeStyle = `hsla(${box.colorHue}, 75%, 38%, ${box.borderAlpha * 0.85})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(drawX + 0.5, drawY + 0.5, size - 1, size - 1);
      }

      // Warm drafting lantern halo around cursor
      if (mouse.x > 0 && mouse.y > 0) {
        const radGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius
        );
        radGrad.addColorStop(0, 'rgba(180, 83, 9, 0.12)');
        radGrad.addColorStop(0.6, 'rgba(120, 53, 15, 0.03)');
        radGrad.addColorStop(1, 'rgba(120, 53, 15, 0)');

        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="blueprint-grid-wrapper">
      <div className="blueprint-grid-pattern"></div>
      <canvas ref={canvasRef} className="blueprint-grid-canvas" />
    </div>
  );
};

export default BackgroundAnimation;