import React from "react";
import Header from "./components/Header/Header.jsx";

import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className=" flex flex-col min-h-screen items-center w-full">
            <Header />
            <main className=" flex flex-grow bg-mainBackground text-white w-full">
                <Outlet />
            </main>
            <footer className="bg-mainBackground hidden md:block pt-3 md:pt-0 text-white md:px-10 py-3 w-full text-center">
                <p>© 2024 YapperAI. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Layout;
