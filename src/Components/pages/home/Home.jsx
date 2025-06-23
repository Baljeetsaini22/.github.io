import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skill";
import Education from "./Education";
import Certifications from "./Certification";
import Projects from "./Projects";
import ContactMe from "./Contact";

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
