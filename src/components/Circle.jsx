import React, { useEffect, useRef } from "react";
import './Circle.css';

function Circle() {
  const coords = useRef({ x: 0, y: 0 });
  const circleRefs = useRef([]);

  useEffect(() => {
    // Initialize positions
    circleRefs.current.forEach((circle) => {
      if (circle) {
        circle.x = 0;
        circle.y = 0;
      }
    });

    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circleRefs.current.forEach((circle, index) => {
        if (!circle) return;
        circle.style.left = `${x - 15}px`;
        circle.style.top = `${y - 15}px`;

        circle.style.transform = `scale(${(circleRefs.current.length - index) / circleRefs.current.length})`;

        const nextCircle = circleRefs.current[index + 1] || circleRefs.current[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;

        circle.x = x;
        circle.y = y;
      });

      requestAnimationFrame(animateCircles);
    };
    

    window.addEventListener("mousemove", handleMouseMove);
    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {Array.from({ length: 14 }).map((_, i) => (
        <div
          key={i}
          className="circle"
          ref={(el) => (circleRefs.current[i] = el)}
        />
      ))}
    </>
  );
}

export default Circle;
