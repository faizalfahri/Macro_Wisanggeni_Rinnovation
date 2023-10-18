import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/client/Layout/Layout";
import { default as ProLayout } from "../../components/pro/Layout";
import ArticlePage from "../../pages/ArticlePage";
import FindProPage from "../../pages/FindProPage";
import HomePage from "../../pages/HomePage";
import PopularDesignPage from "../../pages/PopularDesignPage";
import Landing from "../../pages/pro/Landing";

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
        index: "findpro",
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
    ],
  },
]);

export default router;
