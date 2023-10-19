import { Routes, Route, RouterProvider } from "react-router-dom";

import NavbarComponent from "./components/client/Navbar/NavbarComponent";
import FooterComponent from "./components/client/Footer/FooterComponent";

import router from "./lib/router/router";

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
  return <RouterProvider router={router} />;
}

export default App;
