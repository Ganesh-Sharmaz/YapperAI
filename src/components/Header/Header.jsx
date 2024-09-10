import React from "react";

function Header() {
    return (
        <div className="w-full h-fit font-outfit text-white bg-mainBackground md:px-10 px-5 py-4 flex justify-between border-b-[1px] border-slate-800">
            <div className="w-fit flex justify-center items-center">
                <div className="font-amster flex justify-center items-center md:h-[60px] ">
                    <div className=" -rotate-90 w-fit hidden md:block  h-fit px-[3px] md:text-xl bg-white text-[#1a1a1a]">
                        Yapper
                    </div>
                    <div className="md:text-[82px] text-3xl   ">YAI</div>
                </div>
            </div>
            <div className="w-fit text-xl flex items-center justify-center space-x-2">
                <p className=" font-amster text-4xl md:pl-2 hidden md:block">
                    A certified degree holder in yappanese
                </p>
                <div className="bg-blue-500 p-4 text-center rounded-full">Sign In</div>
            </div>
        </div>
    );
}

export default Header;
