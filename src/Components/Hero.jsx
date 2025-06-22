import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
// import heroImage from "../assets/images/hero.png"; // Replace with your actual image
import Resume from "../assets/resume/Resume.pdf"

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Baljeet Singh", "Frontend Web Developer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 60,
    delaySpeed: 1500,
  });

  return (
    <section
      id="home"
      className="h-screen bg-black text-white px-6 md:px-12 py-16 flex items-center"
    >
      <div className="w-full p-[7.5%] grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white leading-tight mb-4">
            I'm {text}
            <Cursor cursorStyle="|" />
          </h1>
          <p className="text-gray-300 mb-6">
            I craft modern, responsive, and high-performance websites using the latest frontend technologies like React.js, Tailwind CSS, and JavaScript. I turn ideas into interactive digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-md font-medium hover:bg-yellow-300 transition"
            >
              Hire Me <FiArrowRight />
            </a>

            <a
              href={Resume}
              target="_blank"
              // download
              className="bg-transparent border border-yellow-400 px-5 py-2 rounded-md hover:bg-yellow-400 hover:text-black transition font-medium"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4 text-2xl text-yellow-400">
            <a href="https://www.linkedin.com/in/baljeet-singh-13590834b/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Baljeetsaini22" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/_baljeet.0" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/profile.php?id=100090123884874" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://x.com/_Baljeet_0" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src=''
            alt="Baljeet Singh"
            loading="lazy"
            className="w-[300px] md:w-[400px] rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
