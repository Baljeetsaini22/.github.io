
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white fixed w-full top-0 z-50 shadow-md">
      <div className="w-full p-[7.5%] flex items-center justify-between py-4 shadow-md shadow-yellow-400">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-yellow-400">BS</div>

        {/* Center: Menu (Desktop only) */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li><a href="#home" className="hover:text-yellow-400 ">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About Me</a></li>
          <li><a href="#skills" className="hover:text-yellow-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
        </ul>

        {/* Right: Let's Talk + Hamburger (mobile) */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-block bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
          >
            Let's Talk
          </a>
          <button
            onClick={toggleMenu}
            className="md:hidden text-yellow-400 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black overflow-hidden transition-all duration-500 ease-in-out shadow-md shadow-yellow-400 ${
          isOpen ? "max-h-[400px] py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 text-lg text-white">
          <li><a onClick={toggleMenu} href="#home" className="hover:text-yellow-400">Home</a></li>
          <li><a onClick={toggleMenu} href="#about" className="hover:text-yellow-400">About Me</a></li>
          <li><a onClick={toggleMenu} href="#services" className="hover:text-yellow-400">Services</a></li>
          <li><a onClick={toggleMenu} href="#projects" className="hover:text-yellow-400">Projects</a></li>         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

