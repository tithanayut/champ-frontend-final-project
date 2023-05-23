import { HashRouter as Router, Switch, Route } from "react-router-dom";
import useApp from "hooks/useApp";
import NavBar from "components/NavBar";
import Login from "pages/Login";
import Logout from "pages/Logout";
import Profile from "pages/Profile";
import Article from "pages/Article";
import ArticleList from "pages/ArticleList";
import Footer from "components/Footer";

function App() {
  useApp();

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/profile/:username" exact component={Profile} />
        <Route path="/:slug" exact component={Article} />
        <Route path="/" component={ArticleList} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
