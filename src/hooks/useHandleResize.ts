import { useCallback, useState, useEffect } from "react";

export default function useHandleResize() {
  const initialWidth = Math.min(
    300,
    300 * Math.min(1, window.innerWidth / 1920)
  );
  const initialHeight = Math.min(
    300,
    300 * Math.min(1, window.innerWidth / 1920)
  );
  const initialRadius = Math.min(
    500,
    500 * Math.min(300, (300 * Math.min(1, window.innerWidth / 1920)) / 300)
  );

  const [resizing, setResizing] = useState(false);
  const [imgBoxWidth, setImgBoxWidth] = useState(initialWidth);
  const [imgBoxHeight, setImgBoxHeight] = useState(initialHeight);
  const [radius, setRadius] = useState(initialRadius);

  const handleResize = useCallback(async () => {
    if (!resizing) {
      setResizing(true);

      const windowWidth = window.innerWidth;
      const scaleFactor = Math.min(1, windowWidth / 1920);

      const newImgBoxWidth = Math.min(300, 300 * scaleFactor);
      const newImgBoxHeight = Math.min(300, 300 * scaleFactor);

      const newRadius = Math.min(500, 500 * (newImgBoxWidth / 300));

      setImgBoxWidth(newImgBoxWidth);
      setImgBoxHeight(newImgBoxHeight);
      setRadius(newRadius);

      await new Promise((resolve) => setTimeout(resolve, 100));
      setResizing(false);
    }
  }, [resizing]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return { resizing, imgBoxWidth, imgBoxHeight, radius };
}
