import {Routes, Route} from "react-router-dom";

import NavbarComponent from "./components/client/Navbar/NavbarComponent";
import FooterComponent from "./components/client/Footer/FooterComponent";

import HomePage from "./pages/HomePage"

import MoreArticle from "./pages/MoreArticle";
import MoreDesign from "./pages/MoreDesign";
import MorePro from "./pages/MorePro";

import ReadArticle from "./pages/ReadArticle";
import ReadDesign from "./pages/ReadDesign";
import ReadPro from "./pages/ReadPro";

import ProNetwork from "./pages/pro/Landing/Landing"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import SesudahLoginPage from "./pages/SesudahLoginPage"

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/morearticle" Component={MoreArticle} />
        <Route path="/moredesign" Component={MoreDesign} />
        <Route path="/morepro" Component={MorePro} />

        <Route path="/readarticle" Component={ReadArticle} />
        <Route path="/readdesign" Component={ReadDesign} />
        <Route path="/readpro" Component={ReadPro} />
        <Route path="/pro" Component={ProNetwork} />

        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/sesudah-login" Component={SesudahLoginPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
