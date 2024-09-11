import { StrictMode } from "react";
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
import SignUp from "./components/Sign Up/SignUp.jsx";
import PrivateRoute from "./components/Private Route/PrivateRoute.jsx";
import ReverseRoute from "./components/Private Route/ReverseRoute.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            
            <Route path="" element={<PrivateRoute><Home/></PrivateRoute>}/>
            <Route path="/signup" element={<SignUp />}/>
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
