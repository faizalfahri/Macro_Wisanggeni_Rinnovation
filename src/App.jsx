import {Routes, Route} from "react-router-dom";

import NavbarComponent from "./components/client/Navbar/NavbarComponent";
import FooterComponent from "./components/client/Footer/FooterComponent";

import HomePage from "./pages/HomePage"
import ArticlePage from "./pages/ArticlePage"
import PopularDesignPage from "./pages/PopularDesignPage"
import FindProPage from "./pages/FindProPage"
function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/article" Component={ArticlePage}></Route>
        <Route path="/design" Component={PopularDesignPage}></Route>
        <Route path="/findpro" Component={FindProPage}></Route>
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App
