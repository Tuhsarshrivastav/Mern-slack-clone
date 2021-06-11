import NavbarContainer from "./components/Layout/Navbar/NavbarContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import TeamListContainer from "./components/Layout/TeamList/TeamListContainer";
import LoginContainer from "./components/Login/LoginContainer";
import RegisterContainer from "./components/Register/RegisterContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
