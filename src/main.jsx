import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";

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

import PrivateRoute from "./components/Private Route/PrivateRoute.jsx";
import { Suspense } from "react";

const LazySignUp = React.lazy(() => import('./components/Sign Up/SignUp.jsx'))
const LazyHome = React.lazy(() => import('./components/Home/Home.jsx'))


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            
            <Route path="" element={<Suspense fallback='Loading...'><PrivateRoute><Home/></PrivateRoute></Suspense>}/>
            
            <Route path="/signup" element={<Suspense fallback='loading...'><LazySignUp/></Suspense>}/>
            
            <Route path="*" element={<NotFound/>}/>
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
