import {Routes, Route} from "react-router-dom";

import NavbarComponent from "./components/client/Navbar/NavbarComponent";
import FooterComponent from "./components/client/Footer/FooterComponent";

import HomePage from "./pages/HomePage"
import ArticlePage from "./pages/ArticlePage"
import PopularDesignPage from "./pages/PopularDesignPage"
import FindProPage from "./pages/FindProPage"
import ProNetwork from "./pages/pro/Landing/Landing"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/article" Component={ArticlePage}></Route>
        <Route path="/design" Component={PopularDesignPage}></Route>
        <Route path="/findpro" Component={FindProPage}></Route>
        <Route path="/pro" Component={ProNetwork}></Route>
        <Route path="/login" Component={LoginPage}></Route>
        <Route path="/register" Component={RegisterPage}></Route>
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
