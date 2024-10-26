import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Categories = lazy(() => import("./pages/Categories"));
const News = lazy(() => import("./pages/News"));

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<div>Loading...</div>}><Home /></Suspense>,
    id: "Home",
  },
  {
    path: "/categories/:id?",
    element: <Suspense fallback={<div>Loading...</div>}><Categories /></Suspense>,
    id: "Categories",
  },
  {
    path: "/news/:id?",
    element:<Suspense fallback={<div>Loading...</div>}><News /></Suspense>,
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
