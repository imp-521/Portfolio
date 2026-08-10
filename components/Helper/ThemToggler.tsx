"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ThemToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [circleColor, setCircleColor] = useState('')

  const handleThemeToggle = () => {
    const button = buttonRef.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    setOrigin({
      x,
      y,
    });
    setCircleColor(theme === 'dark' ? "#ffffff" : "#000000")
    setIsAnimating(true);
  };

  useEffect(() => {
    const mountCheck = () => {
      setMounted(true);
    };
    mountCheck();
  }, []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => {
          handleThemeToggle();
        }}
        className="p-2 transition w-10 h-10 cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center"
      >
        {currentTheme === "dark" ? (
          <Sun className="text-white  w-7 h-7 cursor-pointer" />
        ) : (
          <Moon className="text-black  w-7 h-7 cursor-pointer" />
        )}
      </button>
      {isAnimating && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-50"
          style={
            {
              backgroundColor: circleColor,
              clipPath:`circle(0px at ${origin.x}px ${origin.y}px)`
            }
          }
          initial={{
            clipPath: `circle(0px at ${origin.x}px ${origin.y}px)`,
          }}
          animate={{
            clipPath: `circle(1500px at ${origin.x}px ${origin.y}px)`,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          onAnimationComplete={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            setIsAnimating(false);
          }}
        />
      )}
    </>
  );
};

export default ThemToggler;
