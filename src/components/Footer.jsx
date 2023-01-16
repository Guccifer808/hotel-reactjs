import React from "react";
import LogoDark from "../assets/img/logo-dark.svg";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto flex max-h-[2rem] items-center justify-between text-white">
        {/* logo */}
        <a href="/">
          <img className="" src={LogoDark} alt="Houston logo" />
        </a>
        <p>Houston Hotels &copy; 1990 - 2022. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
