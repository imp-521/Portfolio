"use client";
import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import { DownloadIcon, MenuIcon, XIcon } from "lucide-react";
import ThemToggler from "../Helper/ThemToggler";
import Link from "next/link";
import { navLinks } from "../../Constant/NavLinks";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setScrolled(true);
      if (window.scrollY < 90) setScrolled(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const [menuVisible, setMenuVisible] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const openMenu = () => {
    setMenuVisible(true);
    setTimeout(() => {
      setPanelOpen(true);
    }, 100);
  };
  const closeMenu = () => {
    setPanelOpen(false);
    setTimeout(() => {
      setMenuVisible(false);
    }, 200);
  };
  return (
    <section>
      <div
        className={`w-full h-18 flex items-center justify-between px-4 lg:px-30 fixed duration-200 z-100 ${scrolled ? "dark:bg-gray-800 bg-white shadow-md" : "fixed"}`}
      >
        {/* LOGO */}
        <div>
          <Logo />
        </div>

        {/* NAVLINKS */}
        <div className="hidden lg:flex items-cetner justify-center gap-9 flex-row">
          {navLinks.map((item, index) => {
            return (
              <Link
                href={item.href}
                key={index}
                className="text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold hover:-translate-y-1 transition-all duration-300 ease-in-out group relative"
              >
                <p>{item.name}</p>
                <span className="w-0 bg-yellow-500 dark:bg-yellow-200 group-hover:w-full absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] rounded-full trnasition-all duration-300 ease-in-out"></span>
              </Link>
            );
          })}
        </div>

        {/* BUTTON RE */}
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
            <span className="text-sm font-bold">Get Resume</span>
          </a>
          {/* TOGGLE DARK MODE*/}
          <div>
            <ThemToggler />
          </div>
        </div>

        <div className="lg:hidden">
          <MenuIcon onClick={openMenu} />
        </div>
      </div>
      {/* MOBILE MENU */}
      <div
        className={`z-300 lg:hidden h-screen w-full fixed bg-black/70 inset-0 -translate-x-200 transition duration-300 ${menuVisible == true ? "translate-x-0" : "-translate-x-200 transition ease-in-out duration-500"}`}
      >
        <div
          className={`transition duration-500 h-screen w-[80%] bg-purple-800 text-white flex items-start justify-center flex-col gap-6 relative px-10 -translate-x-180 ${panelOpen == true ? "translate-x-0 transition ease-in-out duration-500" : "-translate-x-180"}`}
        >
          {navLinks.map((item, index) => {
            return (
              <Link
                href={item.href}
                key={index}
                className="transition ease-in relative group hover:text-yellow-500"
              >
                <p className="font-semibold text-lg">{item.name}</p>
                <span className="w-0 h-[2px] bg-yellow-500 hover:w-full absolute left-1/2 -translate-x-1/2 group-hover:w-full"></span>
              </Link>
            );
          })}
          <XIcon
            onClick={closeMenu}
            size={25}
            strokeWidth={3}
            className="text-white absolute right-3 top-3 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Nav;
