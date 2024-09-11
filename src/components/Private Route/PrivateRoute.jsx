import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

function PrivateRoute({children}) {

        const [uid, setUid] = useState(null)
        const [loading, setLoading] = useState(true)


        useEffect(() => {
                const auth = getAuth()
                const unSubscribe =      onAuthStateChanged(
                        auth, (user) => {
                                if(user){
                                        console.log(user)
                                        setUid(user.displayName)
                                        
                                        console.log("User is already Signed in with uid: ", uid);
                                        
                                }
                                else{
                                        setUid(null)
                                        console.log("User is not Signed in")
                                }
                                setLoading(false)
                        }
                )
                return () => unSubscribe()
        },[uid])

        if(loading){
                return <h1 className="p-10 text-center bg-[#1a1a1a] text-8xl">Loading...</h1>
        }

        return uid != null ? children : <Navigate to="/signup" />;
    
}

export default PrivateRoute;
