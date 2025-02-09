// "use client";

// import { useEffect, useRef } from "react";

// interface Star {
//   x: number;
//   y: number;
//   size: number;
//   opacity: number;
// }

// export default function StarBackground() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const starsRef = useRef<Star[]>([]);
//   const mouseRef = useRef({ x: 0, y: 0 });
//   const rafRef = useRef<number>(0);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     const createStars = () => {
//       starsRef.current = Array.from({ length: 100 }, () => ({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         size: Math.random() * 2 + 1,
//         opacity: Math.random() * 0.5 + 0.5,
//       }));
//     };

//     const draw = () => {
//       if (!ctx || !canvas) return;

//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       const mouseX = mouseRef.current.x;
//       const mouseY = mouseRef.current.y;

//       starsRef.current.forEach((star) => {
//         const dx = mouseX - canvas.width / 2;
//         const dy = mouseY - canvas.height / 2;

//         // Parallax effect - stars move slightly based on mouse position
//         const offsetX = (dx / canvas.width) * 30 * (star.size / 3);
//         const offsetY = (dy / canvas.height) * 30 * (star.size / 3);

//         ctx.beginPath();
//         ctx.arc(star.x + offsetX, star.y + offsetY, star.size, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
//         ctx.fill();
//       });

//       rafRef.current = requestAnimationFrame(draw);
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       mouseRef.current = {
//         x: e.clientX,
//         y: e.clientY,
//       };
//     };

//     window.addEventListener("resize", resizeCanvas);
//     window.addEventListener("mousemove", handleMouseMove);

//     resizeCanvas();
//     createStars();
//     draw();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       window.removeEventListener("mousemove", handleMouseMove);
//       if (rafRef.current) {
//         cancelAnimationFrame(rafRef.current);
//       }
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 pointer-events-none"
//       style={{ background: "linear-gradient(to bottom, #0f172a, #1e293b)" }}
//     />
//   );
// }

"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface Moon {
  x: number;
  y: number;
  radius: number;
}

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const moonRef = useRef<Moon>({ x: 0, y: 0, radius: 40 });
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Position moon in the top right quadrant
      moonRef.current = {
        x: canvas.width * 0.8,
        y: canvas.height * 0.2,
        radius: Math.min(canvas.width, canvas.height) * 0.08,
      };
    };

    const createStars = () => {
      starsRef.current = Array.from({ length: 100 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.5,
      }));
    };

    const drawMoon = (
      ctx: CanvasRenderingContext2D,
      offsetX: number,
      offsetY: number
    ) => {
      const moon = moonRef.current;
      const gradient = ctx.createRadialGradient(
        moon.x + offsetX,
        moon.y + offsetY,
        moon.radius * 0.85,
        moon.x + offsetX,
        moon.y + offsetY,
        moon.radius
      );

      // Create moon glow
      ctx.beginPath();
      ctx.arc(
        moon.x + offsetX,
        moon.y + offsetY,
        moon.radius * 1.2,
        0,
        Math.PI * 2
      );
      const glowGradient = ctx.createRadialGradient(
        moon.x + offsetX,
        moon.y + offsetY,
        moon.radius,
        moon.x + offsetX,
        moon.y + offsetY,
        moon.radius * 1.2
      );
      glowGradient.addColorStop(0, "rgba(170, 170, 170, 0.6)");
      glowGradient.addColorStop(1, "rgba(170, 170, 170, 0)");
      ctx.fillStyle = glowGradient;
      ctx.fill();

      // Draw main moon
      ctx.beginPath();
      ctx.arc(moon.x + offsetX, moon.y + offsetY, moon.radius, 0, Math.PI * 2);
      gradient.addColorStop(0, "#e1e1e1");
      gradient.addColorStop(1, "#d4d4d4");
      ctx.fillStyle = gradient;
      ctx.fill();

      // Add some crater details
      const craters = [
        { x: -0.2, y: -0.2, size: 0.15 },
        { x: 0.3, y: 0.1, size: 0.1 },
        { x: -0.1, y: 0.3, size: 0.12 },
      ];

      craters.forEach((crater) => {
        const craterX = moon.x + offsetX + crater.x * moon.radius;
        const craterY = moon.y + offsetY + crater.y * moon.radius;
        const craterSize = crater.size * moon.radius;

        ctx.beginPath();
        ctx.arc(craterX, craterY, craterSize, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(180, 180, 180, 0.8)";
        ctx.fill();
      });
    };

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      const dx = mouseX - canvas.width / 2;
      const dy = mouseY - canvas.height / 2;

      // Draw moon with subtle parallax
      const moonOffsetX = (dx / canvas.width) * 15;
      const moonOffsetY = (dy / canvas.height) * 15;
      drawMoon(ctx, moonOffsetX, moonOffsetY);

      // Draw stars with more pronounced parallax
      starsRef.current.forEach((star) => {
        const offsetX = (dx / canvas.width) * 30 * (star.size / 3);
        const offsetY = (dy / canvas.height) * 30 * (star.size / 3);

        ctx.beginPath();
        ctx.arc(star.x + offsetX, star.y + offsetY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    resizeCanvas();
    createStars();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ background: "linear-gradient(to bottom, #0f172a, #1e293b)" }}
    />
  );
}
