import { useCallback, useEffect, useRef, useState } from "react";

export default function useHandlePointer(click: boolean) {
  const [dragging, setDragging] = useState(false);
  const [isRunning, setIsRunning] = useState(true);
  const [dragDirection, setDragDirection] = useState(1);

  const sXRef = useRef(0);
  const sYRef = useRef(0);
  const nXRef = useRef(0);
  const nYRef = useRef(0);
  const desXRef = useRef(0);
  const desYRef = useRef(0);
  const tXRef = useRef(0);
  const tYRef = useRef(10);
  const timerRef = useRef<number | null>(null);

  const tX = tXRef.current;
  const tY = tYRef.current;

  const easing = 0.5;

  const playSpin = (bool: boolean) => {
    setIsRunning(bool);
  };

  const handlePointerDown = useCallback(
    (e: any) => {
      if (!click) return;

      playSpin(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      sXRef.current = e.clientX;
      sYRef.current = e.clientY;
      setDragging(true);
      e.preventDefault();
    },
    [click]
  );

  const handlePointerMove = useCallback(
    (e: any) => {
      if (!click) return;

      if (dragging) {
        requestAnimationFrame(() => {
          nXRef.current = e.clientX;
          nYRef.current = e.clientY;

          desXRef.current +=
            (nXRef.current - sXRef.current - desXRef.current) * easing;
          desYRef.current +=
            (nYRef.current - sYRef.current - desYRef.current) * easing;

          tXRef.current = tXRef.current + desXRef.current * 0.1;
          tYRef.current = tYRef.current + desYRef.current * 0.1;

          const dragDirectionValue = nXRef.current - sXRef.current > 0 ? 1 : -1;
          if (dragDirectionValue !== dragDirection) {
            setDragDirection(dragDirectionValue);
          }

          sXRef.current = nXRef.current;
          sYRef.current = nYRef.current;
        });
      }
    },
    [dragging, dragDirection, click]
  );

  const handlePointerUp = useCallback(() => {
    if (!click) return;

    setDragging(false);

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = window.setInterval(() => {
      desXRef.current = desXRef.current * easing;
      desYRef.current = desYRef.current * easing;
      tXRef.current = tXRef.current + desXRef.current * 0.1;
      tYRef.current = tYRef.current + desYRef.current * 0.1;

      if (Math.abs(desXRef.current) < 0.5 && Math.abs(desYRef.current) < 0.5) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
        playSpin(true);
      }
    }, 17);
  }, [click]);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [dragging]);

  return {
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    tX,
    tY,
    isRunning,
    dragDirection,
  };
}
