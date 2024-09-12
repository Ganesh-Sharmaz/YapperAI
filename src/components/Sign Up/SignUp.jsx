
import React from "react";

import Hero from "../Hero/Hero.jsx";
import { Suspense } from "react";

const LazyFeatures = React.lazy(() => import("../Features/Features.jsx"))
const LazyBuildInfo = React.lazy(() => import("../BuildInfo/BuildInfo.jsx"))
const LazyTestimonials = React.lazy(() => import("../Testimonials/Testimonial.jsx"))
const LazyCTA = React.lazy(() => import("../CallToAction/CallToAction.jsx"))

function SignUp() {
    
    return (
        <div className="w-full md:px-10 h-fit px-5 px">
            <Hero />

            {/* Home page */}

            <Suspense fallback="Loading...">
            <div className="font-outfit min-h-screen bg-[#1a1a1a] text-white flex flex-col  py-8">
                {/* Features Section */}
                <Suspense fallback="Loading...">
                    <LazyFeatures/>
                </Suspense>
                

                {/* Build Info Section */}
                <Suspense fallback="Loading...">
                    <LazyBuildInfo/>
                </Suspense>

                {/* Testimonials Section */}
                <Suspense fallback="Loading...">
                    <LazyTestimonials/>
                </Suspense>

                {/* Call to Action */}
                <Suspense fallback="Loading...">
                    <LazyCTA/>
                </Suspense>
            </div>
            </Suspense>
        </div>
    );
}

export default SignUp;
