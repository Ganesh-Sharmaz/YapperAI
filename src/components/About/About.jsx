import { GitHub } from "@mui/icons-material";
import React from "react";
import { useLoaderData } from "react-router-dom";

function About() {
    const data = useLoaderData();

    return (
        <div className="w-full font-outfit md:h-fit md:my-24 h-svh  flex-col items-center justify-center">
            <div className="mt-44 md:mt-0">
                <h2 className="text-6xl font-semibold text-center mb-4">
                    Developer
                </h2>
                <div className="flex flex-col items-center mt-16 md:mt-10 ">
                    <img
                        className="w-28 h-28 rounded-full mb-4"
                        src={data.avatar_url}
                        alt="Developer Avatar"
                    />
                    <div className="text-3xl  font-bold ">
                        <h1 className="bg-clip-text bg-gradient-to-br text-[#FF00FF] ">{data.name}</h1>
                    </div>
                    <p className="text-gray-600 text-center text-xl text-pretty">
                        MERN stack developer passionate about building
                        interactive web applications. Creator of Yapper AI.
                    </p>
                    <div className="mt-2 0 mb-4">
                        <a
                            href="https://github.com/Ganesh-Sharmaz"
                            className="text-[#FF00FF] hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHub/>
                        </a>
                    </div>
                    <div className="border-t-[1px] space-y-3 border-t-slate-700 pt-3 flex flex-col items-center justify-center">
                        <h1 className="text-2xl text-center text-pretty">
                            I welcome contributions and feedback from fellow
                            developers.
                        </h1>
                        <div className="text-base ">
                            <h1>
                                <strong>Contribute here: </strong>{" "}
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://github.com/Ganesh-Sharmaz/YapperAI"
                                    className="text-[#FF00FF] hover:text-blue-700 cursor-pointer"
                                >
                                    Yapper AI Repository
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const gitInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Ganesh-Sharmaz");
    return response.json();
};

export default About;
