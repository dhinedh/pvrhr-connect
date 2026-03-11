import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  tiltEffect?: boolean;
}

const SpotlightCard = ({ children, className, tiltEffect = true, ...props }: SpotlightCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D tilt
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), { stiffness: 150, damping: 20 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    
    // For spotlight (CSS variables)
    containerRef.current?.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current?.style.setProperty("--mouse-y", `${y}px`);

    // For 3D tilt (Motion values normalized to center)
    if (tiltEffect) {
      mouseX.set(x - width / 2);
      mouseY.set(y - height / 2);
    }
  }

  function handleMouseLeave() {
    if (tiltEffect) {
      mouseX.set(0);
      mouseY.set(0);
    }
  }

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: tiltEffect ? rotateX : 0,
        rotateY: tiltEffect ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "spotlight-card group relative rounded-[3rem] bg-card/60 border border-border/10 backdrop-blur-xl transition-all duration-500 hover:shadow-premium overflow-hidden",
        className
      )}
      {...props}
    >
      {/* 3D Content Container */}
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="relative z-10">
        {children}
      </div>
      
      {/* Glossy Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default SpotlightCard;
