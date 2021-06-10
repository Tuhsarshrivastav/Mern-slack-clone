import NavbarContainer from "./components/Layout/Navbar/NavbarContainer";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import TeamListContainer from "./components/Layout/TeamList/TeamListContainer";
const App = () => {
  return (
    <Router>
      <NavbarContainer />
      <TeamListContainer />
      <Footer />
    </Router>
  );
};

export default App;
