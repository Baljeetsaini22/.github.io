import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6 md:px-12 relative">
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-yellow-400 hover:bg-yellow-300 text-black p-3 rounded-full shadow-lg z-50 transition-all animate-bounce"
          aria-label="Scroll to Top"
        >
          <FaArrowUp size={20} />
        </button>
      )}

      {/* Footer Content */}
      <div className="w-full p-[7.5%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">BS</h2>
          <p className="mt-2 text-gray-400">Frontend Developer Portfolio</p>
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">Menu</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            Services
          </h3>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>UI Design</li>
            <li>Responsive Layout</li>
            <li>React Projects</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            Contact
          </h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            />
            <textarea
              rows="3"
              placeholder="Your Message"
              className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 text-black px-4 py-2 rounded font-medium hover:bg-yellow-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Baljeet Singh. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
