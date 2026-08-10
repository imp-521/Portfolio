"use client"
import React from "react";
import SectionHeading from "../Helper/SectionHeading";
import image from "../../public/images/my-picture.png";
import { Briefcase, Clock3, Coffee, MapPin } from "lucide-react";
import { states } from "@/data";
import Counter from "../Helper/Counter";
import { delay, motion } from "framer-motion";


const About = () => {
  return (
    <section className="overflow-hidden h-auto w-full relative">
      <div className="h-full w-full px-6 relative bg-linear-to-b from-purple-100 via-white to-sky-50 dark:from-indigo-950 dark:via-zinc-900 dark:to-zinc-950 flex items-center justify-start flex-col gap-3 lg:px-30">
        {/* BLOBS */}
        <div className="absolute -left-40 top-20 w-[400px] h-[400px] rounded-full bg-purple-400/15 blur-[140px] dark:bg-purple-500/10"></div>
        <div className="absolute -right-40 bottom-0 w-[450px] h-[450px] rounded-full bg-sky-300/15 blur-[150px] dark:bg-sky-500/10" />

        <div className="w-full h-30 lg:h-40 flex items-center justify-center">
          <SectionHeading
            title1="About"
            title2="Me"
            description="Get ot know the develper behind the code"
          />
        </div>

        <div className=" w-full flex items-center justify-center flex-col gap-6 md:flex-row">
          <motion.div initial={{opacity:0 , x:-60}} whileInView={{opacity:1 , x:0}} viewport={{amount:0.2}} transition={{duration : 0.7, ease:"easeOut"}} className="w-full flex-1 flex items-center justify-center">
            <img
              className="rounded-xl object-cover w-100 h-100 lg:w-120 lg:h-120"
              src={image.src}
            />
          </motion.div>
          <motion.div initial={{opacity:0 , x:60}} whileInView={{opacity:1 , x:0}} transition={{duration : 0.7, ease:"easeOut", delay:0.15}} className="w-full flex-1">
            <h2 className="font-bold text-2xl pb-4 sm:text-center md:text-left">
              A passionate developer <br className="sm:hidden" /> who loves to
              create
            </h2>
            <div className="flex items-center justify-center flex-col gap-4 w-full h-full">
              <p className="text-muted-foreground text-base sm:text-center md:text-left">
                I’m a passionate Front-End Developer who enjoys turning ideas
                into modern, responsive, and user-friendly web applications.
              </p>
              <p className="text-muted-foreground text-base sm:text-center md:text-left">
                I specialize in building clean and interactive interfaces using
                the latest web technologies. I focus on writing maintainable
                code and creating seamless user experiences across all devices.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2  items-center justify-center w-full h-auto gap-3 sm:gap-5 md:gap-6 mt-5 sm:mt-10 md:hidden lg:grid">
              <div className="w-full flex-1 flex items-center justify-start lg:justify-start sm:justify-center gap-2">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-blue-500/10  flex items-center justify-center rounded-lg">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6  text-blue-500" />
                </div>
                <p className="text-sm text-muted-foreground ">
                  Based in Shiraz, Iran
                </p>
              </div>
              <div className="w-full flex-1 flex items-center justify-start sm:justify-center gap-2">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-blue-500/10  flex items-center justify-center rounded-lg dark:bg-gray-800">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6  text-blue-500" />
                </div>
                <p className="text-sm text-muted-foreground ">
                  Open for freelance work
                </p>
              </div>
              <div className="w-full flex-1 flex items-center justify-start sm:justify-center gap-2 lg:justify-start">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-blue-500/10  flex items-center justify-center rounded-lg dark:bg-gray-800">
                  <Clock3 className="w-5 h-5 sm:w-6 sm:h-6 d text-blue-500" />
                </div>
                <p className="text-sm text-muted-foreground ">
                  ‌24h Response Time
                </p>
              </div>
              <div className="w-full flex-1 flex items-center justify-start sm:justify-center gap-2">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-blue-500/10  flex items-center justify-center rounded-lg dark:bg-gray-800">
                  <Coffee className="w-5 h-5 sm:w-6 sm:h-6  text-blue-500" />
                </div>
                <p className="text-sm text-muted-foreground ">
                  Powered by coffee code
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="mt-6 md:mt-10 w-full h-auto mb-10">
           <motion.div className="w-full h-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
            {states.map((stat) => {
              return(
                <div key={stat.label} className="flex-1 flex items-center justify-center flex-col bg-white shadow rounded-xl p-4 gap-2 dark:bg-gray-800">
                    <div className="flex flex-1 items-center justify-center w-full h-full text-3xl text-purple-600 font-bold md:text-4xl">
                      <Counter target={stat.value} /><span>+</span>
                    </div>
                    <div className="flex flex-1 items-center justify-center w-full h-full">
                       <p className="text-sm text-center text-muted-foreground">{stat.label}</p>
                    </div>
                </div>
              )
            })}
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
