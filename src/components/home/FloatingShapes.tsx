import { useEffect, useRef } from "react";

interface Shape {
  x: number;
  y: number;
  size: number;
  rotationSpeed: number;
  floatSpeed: number;
  opacity: number;
  rotation: number;
  type: "bubble-tea" | "laptop" | "chips";
  direction: { x: number; y: number };
}

const FloatingShapes = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapesRef = useRef<Shape[]>([]);
  const animationFrameRef = useRef<number>();
  const imagesRef = useRef<Record<Shape["type"], HTMLImageElement>>(); // 👈 ref for images

  useEffect(() => {
    // ⛔ no Image() on server — so do this in useEffect
    const imageMap = {
      "bubble-tea": new Image(),
      "laptop": new Image(),
      "chips": new Image(),
    };

    imageMap["bubble-tea"].src = "/background/bubble-tea.png";
    imageMap["laptop"].src = "/background/laptop.png";
    imageMap["chips"].src = "/background/chips.png";

    imagesRef.current = imageMap;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth - 15;
      canvas.height = document.body.scrollHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const generateShapes = (): Shape[] => {
      const shapes: Shape[] = [];
      const totalShapes = 30;
      const types: Shape["type"][] = ["bubble-tea", "laptop", "chips"];

      for (let i = 0; i < totalShapes; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 100 + Math.random() * 60,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          floatSpeed: 0.2 - Math.random() * 0.1,
          opacity: 0.2 + Math.random() * 0.5,
          rotation: Math.random() * Math.PI * 2,
          type: types[Math.floor(Math.random() * types.length)],
          direction: {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2,
          }
        });
      }

      return shapes;
    };

    shapesRef.current = generateShapes();

    const drawShape = (shape: Shape) => {
      if (!ctx || !imagesRef.current) return;
      const img = imagesRef.current[shape.type];

      ctx.save();
      ctx.globalAlpha = shape.opacity;
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);

      if (img.complete) {
        ctx.drawImage(img, -shape.size / 2, -shape.size / 2, shape.size, shape.size);
      } else {
        img.onload = () => {
          ctx.drawImage(img, -shape.size / 2, -shape.size / 2, shape.size, shape.size);
        };
      }

      ctx.restore();
    };

    const updateShapes = () => {
      shapesRef.current.forEach((shape) => {
        shape.x += shape.direction.x * shape.floatSpeed;
        shape.y += shape.direction.y * shape.floatSpeed;
        shape.rotation += shape.rotationSpeed;

        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;
      });
    };

    const renderFrame = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateShapes();
      shapesRef.current.forEach(drawShape);
      animationFrameRef.current = requestAnimationFrame(renderFrame);
    };

    renderFrame();

    return () => {
      cancelAnimationFrame(animationFrameRef.current!);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
    />
  );
};

export default FloatingShapes;