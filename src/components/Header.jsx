import React, { useState, useEffect } from "react";
import logoDark from "../assets/img/logo-light.svg";
import logoLight from "../assets/img/logo-dark.svg";

const Header = () => {
  //
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 75 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        {/* logo */}
        <a href="/">
          {header ? (
            <img className="h-[75px] w-[125px]" src={logoDark} />
          ) : (
            <img className="h-[75px] w-[125px]" src={logoLight} />
          )}
        </a>
        {/* nav items */}
        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex items-center gap-x-4 font-additional uppercase tracking-[1.5px] lg:gap-x-8`}
        >
          <a href="" className="transition hover:text-accent">
            Home
          </a>
          <a href="" className="transition hover:text-accent">
            Rooms
          </a>
          <a href="" className="transition hover:text-accent">
            Wellness
          </a>
          <a href="" className="transition hover:text-accent">
            Activities
          </a>
          <a href="" className="transition hover:text-accent">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
