import { useEffect, useRef } from "react";

export default function CursorLight({ parentRef }) {
  const lightRef = useRef(null);

  useEffect(() => {
    if (!parentRef.current) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const speed = 0.1; // smaller = slower follow

    const handleMouseMove = (e) => {
      const rect = parentRef.current.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      if (lightRef.current) {
        lightRef.current.style.transform = `translate(${currentX - 100}px, ${currentY - 100}px)`;
      }

      requestAnimationFrame(animate);
    };

    parentRef.current.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      parentRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, [parentRef]);

  return (
    <div
      ref={lightRef}
      style={{
        position: "absolute",
        width: 200,
        height: 200,
        pointerEvents: "none",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 80%)",
        mixBlendMode: "screen",
        filter: "blur(60px)",
        zIndex: 999,
      }}
    />
  );
}
