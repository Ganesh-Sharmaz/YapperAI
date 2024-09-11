import React, { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    const currentUser = localStorage.getItem("userName");
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                console.log("sign out successfull");
                localStorage.removeItem("userName")
                navigate('/signup')
            })
            .catch((error) => {
                console.log("Error", error);
            });
    };

    return (
        <div className="w-full h-fit font-outfit text-white md:py-0 py-1 bg-mainBackground md:px-10 px-5  flex justify-between border-b-[1px] border-slate-800">
            <div className="w-fit flex justify-center items-center">
                <div className="font-amster flex justify-center items-center h-14">
                    
                    <div className="md:text-6xl text-xl text-transparent bg-clip-text bg-gradient-to-br from-[#FF00FF] to-[#FF4500]   ">YAI</div>
                </div>
            </div>
            <div className="w-fit flex items-center justify-center space-x-2">
                <p className=" font-amster text-xl md:pl-2 hidden md:block ">
                    A certified degree holder in yappanese
                </p>
                {currentUser ? (
                    <>
                        <div className=" p-2 self-center border-slate-700 border-r-[1px]">
                            {currentUser}
                        </div>
                        <button
                            onClick={handleSignOut}
                            className="p-2 bg-red-500 hover:bg-red-800 transition ease-in-out text-white rounded-full"
                        >
                            Sign Out
                        </button>
                    </>
                ) : (
                    <div className=" hidden bg-blue-500 p-2 text-center rounded-full">
                        Sign In
                    </div>
                )}

                
            </div>
        </div>
    );
}

export default Header;
