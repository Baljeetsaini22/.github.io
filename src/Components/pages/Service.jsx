import { useLocation } from "react-router-dom";
import About from "./service/ServiceAbout";
import Banner from "./service/ServiceBanner";
import { useEffect } from "react";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = document.getElementById(location.state.scrollTo);
      target?.scrollIntoView({ behavior: "smooth" });

      // clear scroll state from history
      window.history.replaceState({}, document.title);
    }
  }, [location]);
  return (
    <div className="bg-black text-white">
      <Banner />
      <About />
    </div>
  );
};
export default Services;
