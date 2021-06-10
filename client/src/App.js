import NavbarContainer from "./components/Layout/Navbar/NavbarContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import TeamListContainer from "./components/Layout/TeamList/TeamListContainer";
import LoginContainer from "./components/Login/LoginContainer";
import RegisterContainer from "./components/Register/RegisterContainer";
const App = () => {
  return (
    <Router>
      <NavbarContainer />
      <Switch>
        <Route exact path="/">
          <TeamListContainer />
        </Route>
        <Route exact path="/login">
          <LoginContainer />
        </Route>
        <Route exact path="/register">
          <RegisterContainer />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
