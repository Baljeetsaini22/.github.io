import Hero from "./home/Hero";
import About from "./home/About";
import Skills from "./home/Skill";
import Education from "./home/Education";
import Certifications from "./home/Certification";
import Projects from "./home/Project";
import ContactMe from "./home/Contact";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);
      target?.scrollIntoView({ behavior: "smooth" });

      // clear the scroll state from history
      window.history.replaceState({}, document.title);
    }
  }, [location]);
  return (
    <div className="bg-black text-white">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
      <ContactMe />
    </div>
  );
};
export default Home;
