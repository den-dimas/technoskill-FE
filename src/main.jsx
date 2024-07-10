import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Home from "./pages/home";
import Lists from "./pages/lists";
import Matkul from "./pages/matkul";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/lists",
    element: <Lists />,
  },
  {
    path: "/dsd",
    element: <Matkul nama="DSD" />,
  },
  {
    path: "/matek",
    element: <Matkul nama="Matematika Teknik" />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
