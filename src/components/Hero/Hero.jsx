import React, { useRef } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Server/server.js";
import { useNavigate } from "react-router-dom";
import GoogleImg from "../../assets/google-color-svgrepo-com.png";
import TrueFocus from "../ui/TrueFocus.jsx";
import CountUp from "../ui/CountUp.jsx";
import VariableProximity from "../ui/VariableProximity.jsx";

function Hero() {
    const navigate = useNavigate();

    const provider = new GoogleAuthProvider();
    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log("User: ", user);
                console.log("sign in successful");

                if (user) {
                    localStorage.setItem("userName", user.displayName);
                    navigate("/");
                }
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error:", errorCode, errorMessage);
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    const containerRef = useRef(null);

    return (
        <div className="flex min-h-fit md:flex-row flex-col md:py-24 py-10 font-outfit bg-[#0A0A0F]">
            <div className="md:w-1/2 text-center flex flex-col items-center justify-center gap-4 md:border-r border-[#2A2A2F]/50 border-b md:border-b-0 pb-5 md:pb-0 md:pt-10 space-y-5">
                <div className="flex gap-5">
                    <VariableProximity
                        label={"YAPPER AI"}
                        className={
                            "md:text-8xl text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] via-[#FF4500] to-[#FF00FF] animate-gradient-x hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.3)]"
                        }
                        fromFontVariationSettings="'wght' 800, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff="linear"
                    />
                </div>
                <div ref={containerRef} style={{ position: "relative" }}>
                    <VariableProximity
                        label={`Your AI companion, with personalities that match your every mood!`}
                        className={
                            "md:text-6xl text-3xl text-pretty text-[#E0E0E0]"
                        }
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff="linear"
                    />
                </div>
            </div>
            <div className="md:w-1/2 flex flex-col items-center pt-10">
                <h1 className="md:text-8xl text-5xl">
                    <TrueFocus sentence="Sign Up" />
                </h1>
                <div className="mt-4 text-[#8A8A8F] text-lg font-medium">
                    <CountUp
                        from={0}
                        to={100}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text bg-gradient-to-r from-[#FF00FF] to-[#FF4500] text-transparent bg-clip-text"
                    />{" "}
                    certified yappers already making questionable life choices
                </div>
                <div
                    onClick={handleSignIn}
                    className="group relative mt-10 cursor-pointer select-none"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#0044CC] rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center space-x-3 bg-[#1A1A1F] hover:bg-[#2A2A2F] px-6 py-4 rounded-lg border border-[#3A3A3F]/30 transition-all duration-300">
                        <img
                            className="w-6 h-6"
                            src={GoogleImg}
                            alt="Google Sign In"
                        />
                        <span className="text-[#E0E0E0] text-lg font-medium">
                            Sign in with Google
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
