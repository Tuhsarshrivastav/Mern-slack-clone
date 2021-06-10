import NavbarContainer from "./components/Layout/Navbar/NavbarContainer";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Layout/Footer";
const App = () => {
  return (
    <Router>
      <NavbarContainer />
      <Footer/>
    </Router>
  );
};

export default App;
