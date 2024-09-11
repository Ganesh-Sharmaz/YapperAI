import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Server/server.js";
import { useNavigate } from "react-router-dom";

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
                console.log(errorCode, errorMessage);
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    return (
        <div className="flex min-h-fit md:flex-row flex-col md:py-24 py-10 font-outfit border-b-[1px] border-slate-800">
            <div className="md:w-1/2 text-center flex flex-col items-center justify-center gap-4 md:border-r-[1px] border-slate-700 border-b-[1px] pb-5 md:pb-0 md:pt-10 space-y-5 ">
                <div className="flex gap-5 text-transparent bg-clip-text bg-gradient-to-br from-[#FF00FF] to-[#FF4500]">
                    <h1 className="md:text-8xl text-6xl font-bold text-center">YAPPER AI</h1>
                </div>
                <p className="md:text-6xl text-3xl text-pretty">
                    Your AI companion, with personalities that match your every
                    mood!
                </p>
            </div>
            <div className="md:w-1/2 flex flex-col items-center pt-10">
                <div>
                    <h1 className="md:text-8xl text-5xl">Sign Up</h1>
                </div>
                <div
                    onClick={handleSignIn}
                    className=" text-xl flex items-center justify-center md:mt-20 mt-10 cursor-pointer select-none rounded-md shadow transition ease-in-out hover:outline-blue-500 hover:shadow-xl hover:bg-[#232323] p-3 px-5  outline outline-offset-4  outline-blue-700  space-x-3"
                >
                    <img
                        className="text-xl w-[45.4px] mb-[0.7px]"
                        src="/src/assets/google-color-svgrepo-com.png"
                        alt="googleicon"
                    />
                    <h2 className=" bg-#1a1a1a">Sign in with Google</h2>
                </div>
            </div>
        </div>
    );
}

export default Hero;
