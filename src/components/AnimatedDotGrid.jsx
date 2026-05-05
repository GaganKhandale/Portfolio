import React, { useRef, useEffect } from 'react';

export default function AnimatedDotGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight || 150;

    const spacing = 35; // space between dots
    let cols = Math.floor(width / spacing);
    let rows = Math.floor(height / spacing);
    
    let offsetX = (width - (cols * spacing)) / 2;
    let offsetY = (height - (rows * spacing)) / 2;

    const baseColor = 'rgba(100, 255, 218, 0.15)'; // faint primary color
    const activeColor = 'rgba(100, 255, 218, 0.9)'; // bright primary color

    const getPos = (col, row) => ({
      x: offsetX + col * spacing,
      y: offsetY + row * spacing
    });

    const numActive = 35; // Number of active traveling dots
    let activeDots = [];
    
    const initDots = () => {
      activeDots = [];
      for (let i = 0; i < numActive; i++) {
        const c = Math.floor(Math.random() * cols);
        const r = Math.floor(Math.random() * rows);
        activeDots.push({
          col: c,
          row: r,
          targetCol: c,
          targetRow: r,
          progress: 0,
          speed: 0.015 + Math.random() * 0.02, // Units per frame
          delay: Math.random() * 60, // Frames to wait before moving
        });
      }
    };
    initDots();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw base grid
      ctx.fillStyle = baseColor;
      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r <= rows; r++) {
          const pos = getPos(c, r);
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Update and draw active dots
      for (let dot of activeDots) {
        if (dot.delay > 0) {
          dot.delay--;
        } else {
          // If we reached our target intersection
          if (dot.col === dot.targetCol && dot.row === dot.targetRow) {
            // Pick a new random target direction (up, down, left, right)
            const dirs = [
              { dc: 1, dr: 0 }, { dc: -1, dr: 0 },
              { dc: 0, dr: 1 }, { dc: 0, dr: -1 }
            ];
            // Filter to keep inside bounds
            const validDirs = dirs.filter(d => 
              dot.col + d.dc >= 0 && dot.col + d.dc <= cols &&
              dot.row + d.dr >= 0 && dot.row + d.dr <= rows
            );
            if (validDirs.length > 0) {
              const dir = validDirs[Math.floor(Math.random() * validDirs.length)];
              dot.targetCol = dot.col + dir.dc;
              dot.targetRow = dot.row + dir.dr;
              dot.progress = 0;
            } else {
               dot.delay = 30; // wait if stuck
            }
          } else {
            // Move towards target
            dot.progress += dot.speed;
            if (dot.progress >= 1) {
              dot.col = dot.targetCol;
              dot.row = dot.targetRow;
              dot.progress = 0;
              dot.delay = Math.floor(Math.random() * 40); // Random pause at intersection
            }
          }
        }

        const startPos = getPos(dot.col, dot.row);
        const endPos = getPos(dot.targetCol, dot.targetRow);
        
        // Easing function for smoother movement (InOutQuad)
        const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        const p = ease(Math.min(dot.progress, 1));
        
        const curX = startPos.x + (endPos.x - startPos.x) * p;
        const curY = startPos.y + (endPos.y - startPos.y) * p;

        ctx.shadowBlur = 12;
        ctx.shadowColor = activeColor;
        ctx.fillStyle = activeColor;
        ctx.beginPath();
        ctx.arc(curX, curY, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight || 150;
      cols = Math.floor(width / spacing);
      rows = Math.floor(height / spacing);
      offsetX = (width - (cols * spacing)) / 2;
      offsetY = (height - (rows * spacing)) / 2;
      initDots();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '150px', marginTop: '3rem', position: 'relative' }}>
      <canvas 
        ref={canvasRef} 
        style={{ width: '100%', height: '100%', display: 'block', opacity: 0.8 }} 
      />
    </div>
  );
}
