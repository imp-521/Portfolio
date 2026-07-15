"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section>
      <div className="h-screen w-full px-4 pt-20 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100%)] flex-col">
        <div className="flex items-center justify-center flex-1 w-full flex-col">
          <div className="w-auto flex items-center justify-center flex-1 bg-white rounded-full px-4 gap-2">
            <div className="w-2 h-2 bg-green-700 rounded-full"></div>
            <p className="text-zinc-600 text-sm">Available for opportunities</p>
          </div>
          <div className="flex items-center justify-center flex-6 w-full flex-col">
            <h1 className="font-bold text-2xl">Hi I'm <span className="text-purple-500">Afshin Sohrabi</span></h1>
            <TypeAnimation className="font-bold" sequence={
              [
                'Crafting Beautiful User Interfaces',
                1000,
                'Turning Ideas into Interactive Websites',
                1000,
                'Always Learning, Always Building.',
                1000
              ]
            }
            speed={50}
            repeat={Infinity}/>
          </div>
        </div>
        <div className="flex items-center justify-center flex-1 w-full">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ea sequi, corporis facilis autem illum at provident facere optio, quis quos iure laudantium, totam suscipit omnis laboriosam eius ipsa in.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
