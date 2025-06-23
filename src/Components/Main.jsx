import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Service";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};
export default Main;
