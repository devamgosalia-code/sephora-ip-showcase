import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ value, duration = 1.5, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    // Parse the value string to extract prefix, number, suffix
    const match = value.match(/^([+\-]?)(\d+\.?\d*)(.*)/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const prefix = match[1];
    const numericValue = parseFloat(match[2]);
    const suffix = match[3];
    const hasDecimal = match[2].includes('.');
    const decimalPlaces = hasDecimal ? match[2].split('.')[1].length : 0;

    const startTime = performance.now() + delay * 1000;
    let animationFrame;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      if (elapsed < 0) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / (duration * 1000), 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numericValue * eased;

      if (progress < 1) {
        setDisplay(`${prefix}${current.toFixed(decimalPlaces)}${suffix}`);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
