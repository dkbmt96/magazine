import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    id: "Home",
  },
  {
    path: "/categories",
    element: <Home />,
    id: "Categories",
  },
  {
    path: "/news/${id}",
    // element: <Home />,
    id: "Single News",
  },
  {
    path: "/drowdown",
    // element: <Home />,
    id: "Dropdown",
    children: [
      {
        path: "/drowdown/aaa1",
        id: "Item1",
      },
      {
        path: "/drowdown/aaa2",
        id: "Item2",
      },
      {
        path: "/drowdown/aaa3",
        id: "Item3",
      },
    ],
  },
  {
    path: "/contact",
    // element: <Home />,
    id: "Contact",
  },
]);
