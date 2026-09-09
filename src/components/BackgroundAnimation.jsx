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

    // Smaller vintage drafting grid cell size
    const gridSize = 24;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 130,
    };

    // Active animated boxes triggered by cursor
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
          scale: 0.2,
          targetScale: 1.0,
          alpha: 0.85,
          borderAlpha: 1.0,
          colorHue: 28 + Math.random() * 10, // Warm amber-copper tones
        });
      } else {
        const item = activeBoxes.get(key);
        item.alpha = 0.85;
        item.borderAlpha = 1.0;
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

    // Occasional gentle ambient drafting blips
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

      // 1. Render ambient vintage blips
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

        ctx.fillStyle = `rgba(194, 109, 56, ${b.alpha * 0.4})`;
        ctx.fillRect(b.x + 1, b.y + 1, gridSize - 2, gridSize - 2);
      }

      // 2. Animate and draw interactive cursor boxes
      for (let [key, box] of activeBoxes.entries()) {
        // Elastic scale pop
        box.scale += (box.targetScale - box.scale) * 0.25;

        // Warm fade out
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

        // Vintage parchment amber fill
        ctx.fillStyle = `hsla(${box.colorHue}, 65%, 48%, ${box.alpha * 0.42})`;
        ctx.fillRect(drawX, drawY, size, size);

        // Technical copper boundary
        ctx.strokeStyle = `hsla(${box.colorHue}, 75%, 40%, ${box.borderAlpha * 0.85})`;
        ctx.lineWidth = 1.1;
        ctx.strokeRect(drawX + 0.5, drawY + 0.5, size - 1, size - 1);
      }

      // 3. Warm drafting flare around cursor
      if (mouse.x > 0 && mouse.y > 0) {
        const radGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius
        );
        radGrad.addColorStop(0, 'rgba(194, 109, 56, 0.12)');
        radGrad.addColorStop(0.6, 'rgba(217, 119, 6, 0.04)');
        radGrad.addColorStop(1, 'rgba(217, 119, 6, 0)');

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
    <div className="blueprint-grid-wrapper vintage-theme">
      <div className="blueprint-grid-pattern"></div>
      <canvas ref={canvasRef} className="blueprint-grid-canvas" />
    </div>
  );
};

export default BackgroundAnimation;