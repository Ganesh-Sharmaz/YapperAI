import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ShinyText from "../ui/ShineyText";
import GradientText from "../ui/GradientText";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Server/server.js";

function Header() {
    const navigate = useNavigate()
    const currentUser = localStorage.getItem("userName");
    
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                console.log("sign out successful");
                localStorage.removeItem("userName")
                navigate('/signup')
            })
            .catch((error) => {
                console.log("Error", error);
            });
    };

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

    return (
        <div className="w-full h-16 font-outfit text-white bg-[#0A0A0F]/95 backdrop-blur-md md:px-10 px-5 flex justify-between items-center border-b border-[#1A1A1F]/50 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
            <div className="flex items-center space-x-4">
                <div className="font-amster flex items-center">
                    <div className="md:text-5xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] via-[#FF4500] to-[#FF00FF] animate-gradient-x hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.3)]">
                        YAI
                    </div>
                </div>
                <div className="hidden md:block h-6 w-[1px] bg-gradient-to-b from-transparent via-[#2A2A2F] to-transparent"></div>
                <div className="hidden md:block">
                    <GradientText colors={["#FF00FF", "#FF4500", "#FF00FF"]} animationSpeed={8} showBorder={false}>
                        A certified degree holder in yappanese
                    </GradientText>
                </div>
            </div>
            
            <div className="flex items-center space-x-4">
                {currentUser ? (
                    <>
                        <div className="group relative">
                            <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#1A1A1F] to-[#2A2A2F] border border-[#3A3A3F]/30 text-[#E0E0E0] shadow-[0_0_10px_rgba(0,0,0,0.2)] flex items-center space-x-2 hover:shadow-[0_0_15px_rgba(255,0,255,0.1)] transition-all duration-300">
                                <div className="w-2 h-2 rounded-full bg-[#FF00FF] animate-pulse"></div>
                                {/* <span className="font-medium">{currentUser}</span> */}
                                <ShinyText text={currentUser} />
                            </div>
                            <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF00FF] to-[#FF4500] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </div>
                        <button
                            onClick={handleSignOut}
                            className="group relative px-4 py-2 rounded-lg bg-[#1A1A1F] hover:bg-[#2A2A2F] text-white transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center space-x-2">
                                <span>Sign Out</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF1A1A] to-[#CC0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => handleSignIn()}
                        className="group relative px-4 py-2 rounded-lg bg-[#1A1A1F] hover:bg-[#2A2A2F] text-white transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center space-x-2">
                            <span>Sign In</span>
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#0044CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                )}
            </div>
        </div>
    );
}

export default Header;
