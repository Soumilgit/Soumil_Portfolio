import { useEffect, useRef, useState } from "react";

const StarsCanvas = () => {
  const canvasRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let triggerPoint;

      if (window.innerHeight <= 768) {
        triggerPoint = window.innerHeight * 2; 
      } else {
        triggerPoint = window.innerHeight * 0.75; 
      }
      const scrollPosition = window.scrollY;

      // Toggle visibility only after Hero section
      setVisible(scrollPosition > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!visible || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 28 : 55;

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2 + 0.5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.4) * 0.25;
        const speedY = (Math.random() - 0.4) * 0.25;
        const grey = 240; 
        const alpha = Math.random() * 0.3 + 0.25; 

        const color = `rgba(${grey}, ${grey}, ${grey}, ${alpha})`;


        particles.push({ x, y, size, speedX, speedY, color });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  // Return nothing if not visible
  if (!visible) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[-10]"
    />
  );
};

export default StarsCanvas;