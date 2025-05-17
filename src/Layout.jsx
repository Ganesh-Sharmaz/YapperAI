import React from "react";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

function Layout() {
    return (
        <div className="flex flex-col min-h-svh md:min-h-screen items-center w-full bg-[#0A0A0F] font-outfit">
            <Header />
            <main className="flex flex-grow w-full bg-[#0A0A0F] text-white">
                <Outlet />
            </main>
            <footer className="bg-[#1A1A1F]/90 backdrop-blur-md hidden md:block pt-3 md:pt-0 md:pb-1 text-[#8A8A8F] md:px-10 py-3 w-full text-center border-t border-[#2A2A2F]/50">
                <p>Everything that Yapper AI says is made up or Maybe not...</p>
            </footer>
            <Analytics />
        </div>
    );
}

export default Layout;
