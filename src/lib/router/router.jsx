import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/client/Layout/Layout";
import { default as ProLayout } from "../../components/pro/Layout";
import ArticlePage from "../../pages/ArticlePage";
import FindProPage from "../../pages/FindProPage";
import HomePage from "../../pages/HomePage";
import PopularDesignPage from "../../pages/PopularDesignPage";
import Landing from "../../pages/pro/Landing";
import SignIn from "../../pages/pro/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "article",
        element: <ArticlePage />,
      },
      {
        path: "design",
        element: <PopularDesignPage />,
      },
      {
        path: "findpro",
        element: <FindProPage />,
      },
    ],
  },
  {
    path: "/pro",
    element: <ProLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
