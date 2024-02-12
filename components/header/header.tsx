"use client";
import React, { useEffect, useState, useContext } from "react";
import { useAnimate, AnimatePresence } from "framer-motion";
import { SmoothScrollContext } from "@/context/smoothScroll";
import { useRouter } from "next/navigation";
import Sidenav from "./sidenav";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [scope, animate] = useAnimate();
  const [scrolling, setScrolling] = useState(false);
  const { scroll } = useContext(SmoothScrollContext);
  const pathname = usePathname();
  const router = useRouter();

  const scrollTo = (id: String) => {
    console.log(id);
    router.push(`/#${id}`);
    scroll?.scrollTo(`#${id}`, { offset: -80 });
  };

  useEffect(() => {
    const handleScroll = () => {
      let isScrolled = window.scrollY > window.innerHeight / 2;
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
      setIsActive(false);
    }
  }, [scrolling]);

  return (
    <div
      className={`z-20 w-full ${
        pathname.substring(1).startsWith("projects") ? " " : "absolute"
      }  px-3`}
    >
      <div className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold" onClick={() => scrollTo("home")}>
          KS
        </div>
        <div className="flex items-center">
          <nav
            className="mr-4 md:hidden"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            Menu
          </nav>
          <nav className="hidden md:flex">
            <a
              className="mr-4 cursor-pointer"
              onClick={() => scrollTo("about")}
            >
              About
            </a>
            <a
              className="mr-4 cursor-pointer"
              onClick={() => scrollTo("projects")}
            >
              Projects
            </a>
            <a
              className="mr-4 cursor-pointer"
              onClick={() => scrollTo("contact")}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
      <div
        ref={scope}
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={`fixed z-50 right-0 m-5 scale-0 ${
          isActive ? "bg-primary" : "bg-accent"
        } hover:bg-primary transition-colors duration-150 ease-linear top-1 h-20 w-20 rounded-full flex flex-col justify-center items-center group gap-2`}
      >
        <div
          className={`h-[1px] w-8 bg-white rounded-xl transition-all duration-500 ease-in-out ${
            isActive ? "translate-y-1 rotate-45 h-[1px]" : " "
          }`}
        ></div>
        <div
          className={`h-[1px] w-8 bg-white rounded-xl transition-all duration-500 ease-in-out ${
            isActive ? "-translate-y-1 -rotate-45 h-[1px]" : " "
          }`}
        ></div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Sidenav setIsActive={setIsActive} />}
      </AnimatePresence>
    </div>
  );
}
