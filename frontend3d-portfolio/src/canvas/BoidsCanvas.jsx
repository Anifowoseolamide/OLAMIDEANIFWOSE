import { useEffect, useRef } from 'react';

export default function KoiCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Draw a single stylized Koi
    const drawKoi = (ctx, isDark, tailWiggle) => {
      ctx.save();
      
      const bodyColor = isDark ? '#0b1a33' : '#F4F9FF';
      const eyeColor = isDark ? '#F4F9FF' : '#0b1a33';
      
      // Setup styles
      ctx.fillStyle = bodyColor;
      if (isDark) {
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
      } else {
        ctx.shadowColor = '#F4F9FF'; // White glow
        ctx.shadowBlur = 12;
      }
      
      // Single continuous path for body + fins + tail
      const tailAngle = Math.sin(tailWiggle) * 0.35;
      const t = (x, y) => {
         const nx = x * Math.cos(tailAngle) - (y - 34) * Math.sin(tailAngle);
         const ny = 34 + x * Math.sin(tailAngle) + (y - 34) * Math.cos(tailAngle);
         return [nx, ny];
      };

      ctx.beginPath();
      // Nose
      ctx.moveTo(0, -20);
      
      // Right Pectoral Fin
      ctx.lineTo(4, -12);
      ctx.quadraticCurveTo(22, -2, 18, 12);
      ctx.quadraticCurveTo(12, 6, 8, 2);
      
      // Right Body
      ctx.quadraticCurveTo(12, 10, 2, 34);
      
      // Right Tail Lobe 
      ctx.quadraticCurveTo(...t(10, 49), ...t(12, 56));
      ctx.quadraticCurveTo(...t(5, 49), ...t(0, 52));
      
      // Left Tail Lobe
      ctx.quadraticCurveTo(...t(-5, 49), ...t(-12, 56));
      ctx.quadraticCurveTo(...t(-10, 49), ...t(-2, 34));
      
      // Left Body
      ctx.quadraticCurveTo(-12, 10, -8, 2);
      
      // Left Pectoral Fin
      ctx.quadraticCurveTo(-12, 6, -18, 12);
      ctx.quadraticCurveTo(-22, -2, -4, -12);
      
      // Close to nose
      ctx.quadraticCurveTo(-2, -18, 0, -20);
      ctx.fill();

      // Details (no shadow)
      ctx.shadowBlur = 0;

      // Dorsal fin (in center)
      ctx.beginPath();
      ctx.moveTo(0, -5);
      ctx.quadraticCurveTo(3, 5, 0, 15);
      ctx.quadraticCurveTo(-3, 5, 0, -5);
      ctx.fillStyle = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)';
      ctx.fill();
      
      // Eyes
      ctx.fillStyle = eyeColor;
      ctx.beginPath(); ctx.arc(-3.5, -12, 1.2, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(3.5, -12, 1.2, 0, Math.PI*2); ctx.fill();

      // Speckles for dark koi
      if (isDark) {
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.beginPath(); ctx.arc(0, -5, 1, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(4, 5, 0.8, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(-3, 12, 1.2, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(2, 22, 0.6, 0, Math.PI*2); ctx.fill();
      }
      
      ctx.restore();
    };

    let animationFrameId;
    let time = 0;
    
    // Fish State
    const f1 = { x: 0, y: 0, angle: 0, pathOffset: 0 };
    const f2 = { x: 0, y: 0, angle: 0, pathOffset: Math.PI }; // Start opposite

    const trail1 = [];
    const trail2 = [];

    const render = () => {
      // Pause if tab is hidden
      if (document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      if (prefersReducedMotion) {
        // Draw static yin-yang in center
        ctx.save();
        ctx.translate(width / 2, height / 2);
        
        ctx.save();
        ctx.translate(-30, 0);
        ctx.rotate(Math.PI / 2);
        drawKoi(ctx, false, 0);
        ctx.restore();

        ctx.save();
        ctx.translate(30, 0);
        ctx.rotate(-Math.PI / 2);
        drawKoi(ctx, true, 0);
        ctx.restore();
        
        ctx.restore();
        return;
      }

      time += 0.005;

      const centerX = width / 2;
      const centerY = height / 2;
      
      // Base wandering paths
      // They loop across the screen on complex sine waves
      const getPos = (t, offset) => {
        // T creates a flowing sequence through the screen
        const cycle = (t + offset) % (Math.PI * 2);
        
        // When cycle is near PI, they converge in the center for the yin-yang arc
        let x, y;
        
        // Base sweeping path
        const sweepX = Math.sin(cycle) * (width * 0.4);
        const sweepY = Math.cos(cycle * 1.5) * (height * 0.3) + Math.sin(cycle * 0.5) * (height * 0.2);
        
        // Yin-Yang meet logic
        const meetPhase = Math.max(0, 1 - Math.abs(Math.sin(cycle * 0.5)) * 2); 
        // meetPhase is 1 when they are in the center of their cycle
        
        // Circle orbit offset
        const orbitRadius = 40;
        const orbitAngle = (cycle * 2) + offset;
        const orbitX = Math.cos(orbitAngle) * orbitRadius;
        const orbitY = Math.sin(orbitAngle) * orbitRadius;
        
        // Blend between sweeping and orbiting
        x = centerX + sweepX * (1 - meetPhase) + orbitX * meetPhase;
        y = centerY + sweepY * (1 - meetPhase) + orbitY * meetPhase;
        
        return { x, y };
      };

      // Calculate current and slightly future position to determine angle
      const p1 = getPos(time, 0);
      const nextP1 = getPos(time + 0.02, 0);
      f1.x = p1.x; f1.y = p1.y;
      f1.angle = Math.atan2(nextP1.y - p1.y, nextP1.x - p1.x) + Math.PI / 2;

      const p2 = getPos(time, Math.PI);
      const nextP2 = getPos(time + 0.02, Math.PI);
      f2.x = p2.x; f2.y = p2.y;
      f2.angle = Math.atan2(nextP2.y - p2.y, nextP2.x - p2.x) + Math.PI / 2;

      // Update trails
      trail1.push({ x: f1.x, y: f1.y, a: f1.angle });
      if (trail1.length > 25) trail1.shift();
      trail2.push({ x: f2.x, y: f2.y, a: f2.angle });
      if (trail2.length > 25) trail2.shift();

      // Draw trails
      ctx.save();
      ctx.lineWidth = 15;
      ctx.lineCap = 'round';
      
      // Light koi trail
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(244, 249, 255, 0.15)';
      ctx.shadowColor = '#F4F9FF';
      ctx.shadowBlur = 10;
      for (let i = 0; i < trail1.length; i++) {
        if (i === 0) ctx.moveTo(trail1[i].x, trail1[i].y);
        else ctx.lineTo(trail1[i].x, trail1[i].y);
      }
      ctx.stroke();

      // Dark koi trail
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(11, 26, 51, 0.5)';
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      for (let i = 0; i < trail2.length; i++) {
        if (i === 0) ctx.moveTo(trail2[i].x, trail2[i].y);
        else ctx.lineTo(trail2[i].x, trail2[i].y);
      }
      ctx.stroke();
      ctx.restore();

      // Draw Fish
      const tailWiggle1 = time * 40;
      ctx.save();
      ctx.translate(f1.x, f1.y);
      ctx.rotate(f1.angle);
      drawKoi(ctx, false, tailWiggle1);
      ctx.restore();

      const tailWiggle2 = time * 40 + Math.PI;
      ctx.save();
      ctx.translate(f2.x, f2.y);
      ctx.rotate(f2.angle);
      drawKoi(ctx, true, tailWiggle2);
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0 }} />;
}
