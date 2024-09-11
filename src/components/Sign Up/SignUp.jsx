import { Google } from "@mui/icons-material";
import React from "react";
import { motion } from "framer-motion";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Server/server.js";

import { useNavigate } from "react-router-dom";
import { div } from "framer-motion/client";
import Features from "../Features/Features.jsx";
import Testimonial from "../Testimonials/Testimonial.jsx";
import BuildInfo from "../BuildInfo/BuildInfo.jsx";
import CallToAction from "../CallToAction/CallToAction.jsx";
import Hero from "../Hero/Hero.jsx";

function SignUp() {
    
    return (
        <div className="w-full md:px-10 h-fit">
            <Hero />

            {/* Home page */}

            <div className="font-outfit min-h-screen bg-[#1a1a1a] text-white flex flex-col  py-8">
                {/* Features Section */}
                <Features />

                {/* Build Info Section */}
                <BuildInfo />

                {/* Testimonials Section */}
                <Testimonial />

                {/* Call to Action */}
                <CallToAction />
            </div>
        </div>
    );
}

export default SignUp;
