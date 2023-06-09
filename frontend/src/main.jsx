import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/index.scss";
import AppHome from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ApartmentCard from "./pages/Apartement_File.jsx";
import ErrorPage from "./pages/Error404.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppHome />,
    },
    {
        path: "/About",
        element: <About />,
    },
    {
        path: "/Apartment/:id",
        element: <ApartmentCard />,
    },
   
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
