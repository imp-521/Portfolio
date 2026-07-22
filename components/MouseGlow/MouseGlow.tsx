"use client"

import { useMotionValue, motion, useSpring } from "framer-motion";
import React, { useEffect } from "react";

const MouseGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, {
    stiffness: 120,
    damping: 25,
  })
  const glowY = useSpring(mouseY, {
    stiffness: 120,
    damping: 25,
  })
  const moveMouse = (e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveMouse);
    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);
  return (

      <motion.div style={{x:glowX , y:glowY}}  className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-purple-400/20 dark:bg-purple-500/15 blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0">
      </motion.div>

  )
  
};

export default MouseGlow;
