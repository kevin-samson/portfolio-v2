"use client";
import React, { useEffect, useState, useContext } from "react";
import { motion, useAnimate } from "framer-motion";
import { SmoothScrollContext } from "@/context/smoothScroll";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [scope, animate] = useAnimate();
  const [scrolling, setScrolling] = useState(false);
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;
  const { scroll } = useContext(SmoothScrollContext);

  const scrollTo = (id: String) => {
    console.log(id);
    scroll?.scrollTo(`#${id}`, { offset: -80 });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight / 2;
      setScrolling(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrolling) {
      animate(scope.current, { scale: 1 });
    } else {
      animate(scope.current, { scale: 0 });
    }
  }, [scrolling]);

  return (
    <div className="z-50 w-full absolute  px-3">
      <div className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold" onClick={() => scrollTo("home")}>
          Logo
        </div>
        <div className="flex items-center">
          <nav className="mr-4 md:hidden">Menu</nav>
          <nav className="hidden md:flex">
            <a className="mr-4" onClick={() => scrollTo("about")}>
              About
            </a>
            <a className="mr-4" onClick={() => scrollTo("projects")}>
              Projects
            </a>
            <div className="mr-4">Contact</div>
          </nav>
        </div>
      </div>
      <div
        ref={scope}
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="fixed z-50 right-0 m-5 scale-0 bg-accent hover:bg-primary top-1 h-20 w-20 rounded-full flex flex-col justify-center items-center group"
      >
        <div
          className={`${genericHamburgerLine} ${
            isActive ? "rotate-45 translate-y-3  " : " "
          }`}
        />
        <div
          className={` ${genericHamburgerLine} ${isActive ? "opacity-0" : " "}`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isActive ? "-rotate-45 -translate-y-3  " : " "
          }`}
        />
      </div>
    </div>
  );
}
