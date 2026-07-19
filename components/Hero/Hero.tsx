"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { Download, Folder } from "lucide-react";


const Hero = () => {
  return (
    <section>
      <div className="h-screen w-full px-4 md:px-30 lg:px-70 pt-20 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100%)] flex-col dark:bg-[radial-gradient(circle_at_center,#312e81_0%,#18181b_45%,#09090b_100%)]">
        <div className="flex items-center justify-center flex-1 md:flex-2 w-full flex-col">
          <div className="w-auto flex items-center justify-center flex-1 gap-2 mt-10 lg:mt-20">
            <div className=" bg-white dark:bg-zinc-600 rounded-full px-4 py-2 gap-2 flex items-center justify-center ">
                 <div className="w-2 h-2 bg-green-700 dark:bg-green-300 rounded-full relative"></div>
                 <p className="text-zinc-600 text-sm dark:text-white">Available for opportunities</p>
            </div>
          </div>
          <div className="flex items-center justify-center flex-5 w-full flex-col gap-6 md:text-2xl">
            <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl">
              Hi, I'm {" "}
                <span className="text-purple-500"> 
                 Afshin Sohrabi
                </span>
            </h1>
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
          </div>
        </div>
        <div className="flex items-center justify-between md:justify-between md:gap-8 flex-1 w-full flex-col pb-5 lg:px-20">
          <p className="text-center text-zinc-500 text-base dark:text-white">
            I create modern, responsive, and user-friendly web experiences. I
            work with JavaScript, React, and modern UI tools to build clean
            interfaces.
          </p>
          <div className="w-full h-auto flex items-center justify-center flex-col md:flex-row gap-3 lg:mb-20">
            ‌<Button className="w-35 h-10"><Folder/>View Projects</Button>
            <Button className="w-35 h-10"><Download className="mr-2"/>Get Resume</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
