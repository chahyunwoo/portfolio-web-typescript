import { useRef, useEffect, useLayoutEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import theme from "../../styles/theme";

interface LineType {
  angle: number;
  orbitRadius: number;
  length: number;
  dotColor: string;
  speed: number;
  currentOpacity?: number;
  targetOpacity?: number;
  hovered?: boolean;
}

const BREAKPOINTS = {
  MOBILE: parseInt(theme.breakpoints.sm),
  TABLET: parseInt(theme.breakpoints.md),
};

const determineNumLines = (windowWidth: number): number => {
  if (windowWidth <= BREAKPOINTS.MOBILE) {
    return 40;
  } else if (windowWidth <= BREAKPOINTS.TABLET) {
    return 70;
  } else {
    return 100;
  }
};

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const createLines = (): any[] => {
    const numLines = determineNumLines(window.innerWidth);
    const newLines: any[] = [];
    const colors = ["#FF5733", "#33FF57", "#fbc531", "#FF33A6", "#33A6FF"];

    const diagonal = Math.sqrt(
      (window.innerWidth * 2) ** 2 + (window.innerHeight * 2) ** 2
    );

    let minLineLength = diagonal * 1.5;
    let maxLineLength = diagonal * 3;
    let minOrbitRadius = 0.3 * window.innerWidth;
    let maxOrbitRadius = window.innerWidth * 1.5;

    if (window.innerWidth <= BREAKPOINTS.MOBILE) {
      minLineLength = diagonal * 5;
      maxLineLength = diagonal * 10;
      minOrbitRadius = 2.5 * window.innerWidth;
      maxOrbitRadius = window.innerWidth;
    } else if (window.innerWidth <= BREAKPOINTS.TABLET) {
      minLineLength = diagonal * 5;
      maxLineLength = diagonal * 10;
      minOrbitRadius = 2.5 * window.innerWidth;
      maxOrbitRadius = window.innerWidth * 1.1;
    }

    for (let i = 0; i < numLines; i++) {
      const angle = Math.random() * Math.PI * 2;
      const orbitRadius =
        minOrbitRadius + Math.random() * (maxOrbitRadius - minOrbitRadius);
      const length =
        minLineLength + Math.random() * (maxLineLength - minLineLength);
      const dotColor = colors[Math.floor(Math.random() * colors.length)];
      const speed = 0.0005 + Math.random() * 0.0001;

      newLines.push({
        angle,
        orbitRadius,
        length,
        dotColor,
        speed,
        currentOpacity: 0.15,
        targetOpacity: 0.15,
      });
    }

    return newLines;
  };

  const isLineHovered = (line: LineType, mouseX: number, mouseY: number) => {
    if (!canvasRef.current) return;

    const cx = canvasRef.current.width / 2;
    const cy = canvasRef.current.height / 2;

    const xOffset = Math.cos(line.angle) * line.orbitRadius;
    const yOffset = Math.sin(line.angle) * line.orbitRadius;

    const endX = cx + xOffset;
    const endY = cy + yOffset;

    const startX = endX - Math.cos(Math.PI / 4 + Math.PI / 3) * line.length;
    const startY = endY - Math.sin(Math.PI / 4 + Math.PI / 2) * line.length;

    const a = mouseX - startX;
    const b = mouseY - startY;
    const c = endX - startX;
    const d = endY - startY;
    const dot = a * c + b * d;
    const len_sq = c * c + d * d;
    const param = dot / len_sq;
    const xx = startX + param * c;
    const yy = startY + param * d;
    const dx = mouseX - xx;
    const dy = mouseY - yy;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < 150;
  };

  useLayoutEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = (event.clientX - rect.left) * 2;
      const mouseY = (event.clientY - rect.top) * 2;
      localLines.forEach((line) => {
        line.hovered = isLineHovered(line, mouseX, mouseY);
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    canvas.width = dimensions.width * 2;
    canvas.height = dimensions.height * 2;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    let localLines = createLines();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      localLines.forEach((line) => {
        line.angle += line.speed;
        line.targetOpacity = line.hovered ? 0.8 : 0.15;

        if (line.currentOpacity !== undefined) {
          line.currentOpacity +=
            (line.targetOpacity - line.currentOpacity) * 0.05;
        }

        const xOffset = Math.cos(line.angle) * line.orbitRadius;
        const yOffset = Math.sin(line.angle) * line.orbitRadius;

        const endX = cx + xOffset;
        const endY = cy + yOffset;

        const startX = endX - Math.cos(Math.PI / 4 + Math.PI / 3) * line.length;
        const startY = endY - Math.sin(Math.PI / 4 + Math.PI / 2) * line.length;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${line.currentOpacity})`;
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(endX, endY, 1.5, 0, 2 * Math.PI);
        ctx.fillStyle = line.dotColor;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dimensions]);

  return (
    <Box h="100vh" w="100vw" position="absolute" top={0} left={0} zIndex={0}>
      <canvas
        ref={canvasRef}
        width={window.innerWidth * 2}
        height={window.innerHeight * 2}
        style={{ width: window.innerWidth, height: window.innerHeight }}
      ></canvas>
    </Box>
  );
}
