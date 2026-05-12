import React, { useRef, useState, useCallback } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: 'translate3d(0, 0, 0)',
    transition: inactiveTransition,
    willChange: 'transform',
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const dist = Math.sqrt(distX * distX + distY * distY);
      const maxDist = Math.max(rect.width, rect.height) / 2 + padding;

      if (dist < maxDist) {
        setStyle({
          transform: `translate3d(${distX / strength}px, ${distY / strength}px, 0)`,
          transition: activeTransition,
          willChange: 'transform',
        });
      } else {
        setStyle({
          transform: 'translate3d(0, 0, 0)',
          transition: inactiveTransition,
          willChange: 'transform',
        });
      }
    },
    [padding, strength, activeTransition, inactiveTransition]
  );

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'translate3d(0, 0, 0)',
      transition: inactiveTransition,
      willChange: 'transform',
    });
  }, [inactiveTransition]);

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default Magnet;
