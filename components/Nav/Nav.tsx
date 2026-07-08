'use client'
import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import { DownloadIcon, MenuIcon } from "lucide-react";
import ThemToggler from "../Helper/ThemToggler";
import Link from "next/link"
import { navLinks } from "../../Constant/NavLinks";

const Nav = () => {
    const [scrolled, setScrolled] = useState(false)
    useEffect(()=>{
      const handler = ()=>{
        if (window.scrollY >= 90) setScrolled(true)
        if (window.scrollY < 90) setScrolled(false)
      }


      window.addEventListener("scroll",handler)
      return() => window.removeEventListener('scroll', handler)
    },[])
      
  return (
    <section>
      <div className= {`w-full h-18 flex items-center justify-between px-4 lg:px-30 fixed duration-200 z-100 ${scrolled ? "dark:bg-gray-800 bg-white shadow-md" : "fixed"}`}>
        {/* LOGO */}
        <div>
          <Logo />
        </div>

        {/* NAVLINKS */}
        <div className="hidden lg:flex items-cetner justify-center gap-9 flex-row">
            {navLinks.map((item, index) =>{
                return(
                      <Link href={item.href} key={index} className="text-zinc-600 dark:text-white hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold hover:-translate-y-1 transition-all duration-300 ease-in-out group relative">
                            <p>{item.name}</p>
                            <span className="w-0 bg-yellow-500 dark:bg-yellow-200 group-hover:w-full absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] rounded-full trnasition-all duration-300 ease-in-out"></span>
                      </Link>
                )
            })}
        </div>

        {/* BUTTON CV */}
        <div className="flex items-center justify-center flex-row gap-3">
          <a
            href="#"
            className="flex items-center justify-center gap-2 text-white px-3 py-2 lg:px-4 bg-indigo-600 rounded-md cursor-pointer transition-all duration-300 ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus-outline-none"
          >
            <DownloadIcon
              size={15}
              strokeWidth={3}
              className="text-white font-bold"
            />
            <span className="text-sm font-bold">Download CV</span>
          </a>
          {/* TOGGLE DARK MODE*/}
          <div>
            <ThemToggler />
          </div>
        </div>

        <div className="lg:hidden">
          <MenuIcon />
        </div>

        {/* MOBILE MENU */}
        <div className="lg:hidden h-screen w-full fixed bg-black opacity-70 inset-0">
            <div className="h-screen w-[80%] bg-purple-800 text-white flex items-center justify-center flex-col gap-4">
                {navLinks.map((item, index) =>{
                return(
                      <Link href={item.href} key={index}>
                            <p className="font-semibold">{item.name}</p>
                            <span className=""></span>
                      </Link>
                )
            })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
