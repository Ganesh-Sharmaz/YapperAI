import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound.jsx";
import { NextUIProvider } from "@nextui-org/react";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="*" element={<NotFound />} /> {/* 404 fallback */}
        </Route>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <NextUIProvider>
            <RouterProvider router={router} />
        </NextUIProvider>
    </StrictMode>
);
