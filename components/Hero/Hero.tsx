"use client";
import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Download, Folder } from "lucide-react";
import { motion } from "framer-motion";
import MouseGlow from "../MouseGlow/MouseGlow";

const Hero = () => {

  return (
    <section className="relative overflow-hidden h-screen w-full">
      <MouseGlow />
      <div className="h-screen w-full px-4 md:px-30 lg:px-70 pt-20 flex items-center justify-center flex-col bg-linear-to-br from-sky-100 via-white to-purple-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-indigo-950">

        {/* BLUBS */}
        <motion.div animate={{x: [0, 80, -40, 0],y: [0, -50, 60, 0],}} transition={{duration: 15,repeat: Infinity,ease: "easeInOut",
        }} className="w-[350px] h-[350px] rounded-full bg-purple-400/30 absolute left-20 top-20 blur-[120px] dark:bg-purple-600/20"></motion.div>
        <motion.div animate={{x: [0, -80, 50, 0],y: [0, 70, -40, 0]}}  transition={{duration: 15,repeat: Infinity,ease: "easeInOut"}} className="w-[400px] h-[400px] rounded-full bg-sky-400/30 absolute right-20 bottom-20 blur-[120px] dark:bg-blue-600/20"></motion.div>
        

        <div className="flex items-center justify-center flex-1 md:flex-2 w-full flex-col">
          <div className="w-auto flex items-center justify-center flex-1 gap-2 mt-5 md:mt-15 lg:mt-20 z-200">
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="bg-white dark:bg-zinc-600 rounded-full px-4 py-2 gap-2 flex items-center justify-center">
              <div className="w-2 h-2 bg-green-700 dark:bg-green-300 rounded-full relative"></div>

              <p className="text-zinc-600 text-sm dark:text-white z-200">
                Available for opportunities
              </p>
            </motion.div>
          </div>

          <div className="flex items-center justify-center flex-7 w-full flex-col gap-6 md:text-2xl z-200">
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0}} className="font-bold text-4xl md:text-5xl lg:text-6xl text-center leading-13">
              Hi, I'm{" "}
              <span className="text-purple-500">
                Afshin <br className="block md:hidden" /> Sohrabi
              </span>
            </motion.h1>

            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
              <TypeAnimation
              className="font-bold"
              sequence={[
                "Crafting Beautiful User Interfaces",
                1000,
                "Turning Ideas into Websites",
                1000,
                "Always Learning, Always Building",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-between md:justify-between md:gap-8 flex-1 w-full flex-col pb-5 lg:px-20 z-200">
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.8}} className="text-center text-zinc-500 text-base dark:text-white">
            I create modern, responsive, and user-friendly web experiences.
            I work with JavaScript, React, and modern UI tools to build clean
            interfaces.
          </motion.p>

          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:1}} className="w-full h-auto flex items-center justify-center flex-col md:flex-row gap-3 lg:mb-20 md:mb-10">
            <Button className="w-35 h-10 lg:h-12 lg:w-40">
              <Folder />
              View Projects
            </Button>

            <Button className="w-35 lg:w-40 h-10 lg:h-12">
              <Download className="mr-2" />
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;