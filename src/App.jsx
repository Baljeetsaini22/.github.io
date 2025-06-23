import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

function App() {
  return (
    <Router>
      <Navbar />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
