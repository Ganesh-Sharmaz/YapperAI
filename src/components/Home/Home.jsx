import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useRef, useEffect, useState } from "react";
import { Send, StarBorder } from "@mui/icons-material";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import "highlight.js/styles/github.css";
import "katex/dist/katex.min.css";
import "../../styles/scrollbar.css";

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
} from "@nextui-org/react";

import ReactMarkdown from "react-markdown";

function Home() {
    console.log("Arrived at Homepage");
    const [inputValue, setInputValue] = useState("");

    const [chatHistory, setChatHistory] = useState([]);

    const [currentVoice, setCurrentVoice] = useState(0);

    const [activityIndex, setActivityIndex] = useState(0);

    const inputRef = useRef(null);
    const chatEndRef = useRef(null);
    const VoiceList = [
        { person: "Desi", prompt: "Hinglish and sarcasm" },
        { person: "Baby", prompt: "silly baby voice" },
        {
            person: "Intellectual",
            prompt: "english and help me with the problem",
        },
        { person: "Girlfriend", prompt: "caring girlfriend voice" },

        {
            person: "Royal",
            prompt: " talk in gardinose style and royal voice ",
        },
        { person: "BrainRot", prompt: " funny brainrot" },
        {
            person: "Real AI",
            prompt: "Hypothetical Evil AI",
        },
        {
            person: "Anime",
            prompt: "voice of any random anime main character and provide the name of the main character",
        },

        { person: "Sigma Male", prompt: "sigma male voice, like the top g" },
    ];

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [inputValue]);

    useEffect(() => {
        // Function to handle keypress event
        const handleKeyPress = (event) => {
            if (event.key === "/") {
                event.preventDefault(); // Prevent typing the '/' into the input field
                if (inputRef.current) {
                    inputRef.current.focus(); // Focus the input field
                }
            }
        };

        // Add event listener for keydown
        window.addEventListener("keydown", handleKeyPress);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputValue.trim() !== "") {
            setChatHistory((prevHistory) => [
                ...prevHistory,
                {
                    type: "user",
                    text: inputValue,
                },
            ]);

            setInputValue("");

            setChatHistory((prevHistory) => [
                ...prevHistory,
                {
                    type: "bot",
                    text: "...",
                },
            ]);
            console.log(import.meta.env.VITE_REACT_GEMINI_API);

            try {
                const apiKey = import.meta.env.VITE_REACT_GEMINI_API;

                if (!apiKey) {
                    throw new Error(
                        "API key is not configured. Please check your environment variables."
                    );
                }

                const genAI = new GoogleGenerativeAI(apiKey);
                const model = genAI.getGenerativeModel({
                    model: "gemini-1.5-flash",
                });

                const prompt = `Give response in ${VoiceList[currentVoice].prompt} to the further message, ${inputValue}`;

                const chat = model.startChat({
                    history: [
                        {
                            role: "user",
                            parts: [{ text: "Hello" }],
                        },
                        {
                            role: "model",
                            parts: [
                                {
                                    text: "Great to meet you. What would you like to know?",
                                },
                            ],
                        },
                    ],
                });

                let result = await chat.sendMessage(prompt);
                const textResponse = result.response.text();

                setChatHistory((prevHistory) =>
                    prevHistory.map((msg) =>
                        msg.text === "..."
                            ? { type: "bot", text: textResponse }
                            : msg
                    )
                );
            } catch (error) {
                console.error("Error while fetching the values", error);
                let errorMessage = "Unable to process request. ";

                if (error.message.includes("API key")) {
                    errorMessage += "Please check your API key configuration.";
                } else {
                    errorMessage += "Please try again later.";
                }

                setChatHistory((prevHistory) =>
                    prevHistory.map((msg) =>
                        msg.text === "..."
                            ? { type: "bot", text: errorMessage }
                            : msg
                    )
                );
            }
        }
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatHistory]);

    const handleActive = (index) => {
        setActivityIndex(index);
        setCurrentVoice(index);
    };

    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Desi"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <div className="relative px-5 w-full flex flex-col justify-center items-center flex-grow font-outfit md:mx-72 pt-3 md:px-5 bg-[#0A0A0F]">
            {/* Voice selector for big screens */}
            
            <div className="md:flex md:justify-around justify-stretch items-center p-4 bg-[#1A1A1F]/90 backdrop-blur-md m-2 md:p-3 md:w-full md:items-center cursor-pointer rounded-xl md:z-0 z-10 md:relative hidden border border-[#2A2A2F]/50 shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(255,0,255,0.1)] transition-all duration-500">
                {VoiceList.map((voice, index) => (
                    <button
                        onClick={() => handleActive(index)}
                        className={`group relative transition-all duration-500 px-4 py-2 rounded-lg overflow-hidden ${
                            activityIndex === index
                                ? "bg-gradient-to-r from-[#FF00FF] to-[#FF4500] text-white shadow-[0_0_20px_rgba(255,0,255,0.3)] scale-105"
                                : "bg-[#1A1A1F] text-[#E0E0E0] hover:bg-[#2A2A2F] hover:shadow-[0_0_15px_rgba(255,0,255,0.15)]"
                        }`}
                        key={index}
                    >
                        <span className="relative z-10 font-medium">
                            {voice.person}
                        </span>
                        <div
                            className={`absolute inset-0 bg-gradient-to-r from-[#FF00FF]/20 to-[#FF4500]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                                activityIndex === index ? "opacity-100" : ""
                            }`}
                        ></div>
                        <div
                            className={`absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF00FF] to-[#FF4500] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                                activityIndex === index ? "scale-x-100" : ""
                            }`}
                        ></div>
                    </button>
                ))}
            </div>

            {/* Voice selector for small screens */}
            <div className="md:hidden w-full px-2">
                <Dropdown className="md:hidden">
                    <DropdownTrigger className="py-2">
                        <Button
                            variant="solid"
                            className="w-full bg-[#1A1A1F] text-white border border-[#2A2A2F]/50 rounded-lg hover:bg-[#2A2A2F] transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(255,0,255,0.1)] group"
                        >
                            <span className="relative z-10">
                                {selectedValue}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF00FF]/10 to-[#FF4500]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        className="bg-[#1A1A1F]/95 backdrop-blur-md rounded-xl py-2 font-outfit border border-[#2A2A2F]/50 shadow-[0_0_20px_rgba(0,0,0,0.4)]"
                        aria-label="Voice selection"
                        variant="bordered"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys}
                    >
                        {VoiceList.map((msg, index) => (
                            <DropdownItem
                                key={msg.person}
                                textValue={msg.person}
                                className={`group relative transition-all duration-500 font-outfit p-2 rounded-lg ${
                                    activityIndex === index
                                        ? "bg-gradient-to-r from-[#FF00FF] to-[#FF4500] text-white"
                                        : "text-[#E0E0E0] hover:bg-[#2A2A2F]"
                                }`}
                                onClick={() => handleActive(index)}
                            >
                                <span className="relative z-10">
                                    {msg.person}
                                </span>
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r from-[#FF00FF]/20 to-[#FF4500]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                                        activityIndex === index
                                            ? "opacity-100"
                                            : ""
                                    }`}
                                ></div>
                                <div
                                    className={`absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF00FF] to-[#FF4500] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                                        activityIndex === index
                                            ? "scale-x-100"
                                            : ""
                                    }`}
                                ></div>
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </div>

            {/* Chat container */}
            <div className="flex flex-col overflow-x-clip h-[440px] w-full flex-grow overflow-y-auto px-2 custom-scrollbar">
                <div className="md:w-full flex flex-col space-y-6 px-4 py-2 relative">
                    {/* Gradient overlays for top and bottom */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#0A0A0F] to-transparent pointer-events-none z-10"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0A0A0F] to-transparent pointer-events-none z-10"></div>

                    {chatHistory.map((msg, index) => (
                        <div
                            key={index}
                            className={`w-full animate-fadeIn flex ${
                                msg.type === "user"
                                    ? "justify-end"
                                    : "justify-start"
                            }`}
                        >
                            <div className="flex flex-col">
                                <div
                                    className={`px-5 py-3 rounded-xl backdrop-blur-sm ${
                                        msg.type === "user"
                                            ? "bg-gradient-to-r from-[#1A1A1F] to-[#2A2A2F] text-white text-right text-pretty w-fit border border-[#3A3A3F]/30 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(255,0,255,0.1)] transition-all duration-300"
                                            : "bg-gradient-to-r from-[#1A1A1F] to-[#2A2A2F] text-white text-left text-pretty w-fit border border-[#3A3A3F]/30 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(255,0,255,0.1)] transition-all duration-300"
                                    }`}
                                >
                                    <ReactMarkdown
                                        rehypePlugins={[rehypeHighlight]}
                                        remarkPlugins={[remarkGfm]}
                                        components={{
                                            // Heading customization
                                            h1: (props) => (
                                                <h1
                                                    className="text-4xl font-outfit text-text2 font-extrabold mt-6 mb-4"
                                                    {...props}
                                                />
                                            ),
                                            h2: (props) => (
                                                <h2
                                                    className="text-3xl  font-outfit text-text2 font-extrabold mt-5 mb-3"
                                                    {...props}
                                                />
                                            ),
                                            h3: (props) => (
                                                <h3
                                                    className="text-xl font-outfit text-text2 font-semibold mt-4 mb-2"
                                                    {...props}
                                                />
                                            ),
                                            h4: (props) => (
                                                <h4
                                                    className="text-lg font-outfit text-text2 font-semibold mt-3 mb-1"
                                                    {...props}
                                                />
                                            ),
                                            h5: (props) => (
                                                <h5
                                                    className="text-base font-outfit text-text2 font-semibold mt-2 mb-1"
                                                    {...props}
                                                />
                                            ),
                                            h6: (props) => (
                                                <h6
                                                    className="text-sm font-outfit text-text2 font-semibold mt-1 mb-1"
                                                    {...props}
                                                />
                                            ),

                                            // Bold and Italic
                                            strong: (props) => (
                                                <strong
                                                    className="font-bold font-outfit text-text2 text-medium"
                                                    {...props}
                                                />
                                            ),
                                            em: (props) => (
                                                <em
                                                    className="italic font-outfit text-text2 font-extrabold"
                                                    {...props}
                                                />
                                            ),

                                            // Paragraph
                                            p: (props) => (
                                                <p
                                                    className=" text-medium  font-outfit text-text2 leading-relaxed"
                                                    {...props}
                                                />
                                            ),

                                            // Lists
                                            ul: (props) => (
                                                <ul
                                                    className="list-disc text-xl font-outfit text-text2 list-inside ml-6 my-2"
                                                    {...props}
                                                />
                                            ),
                                            ol: (props) => (
                                                <ol
                                                    className="list-decimal font-outfit text-text2 list-inside ml-6 my-2"
                                                    {...props}
                                                />
                                            ),
                                            li: (props) => (
                                                <li
                                                    className="my-1 font-outfit text-text2"
                                                    {...props}
                                                />
                                            ),

                                            // Blockquote
                                            blockquote: (props) => (
                                                <blockquote
                                                    className="border-l-4 font-outfit text-text2 border-gray-300 pl-4 italic my-4"
                                                    {...props}
                                                />
                                            ),

                                            // Code and Preformatted Text
                                            code: ({
                                                inline,
                                                children,
                                                ...props
                                            }) =>
                                                inline ? (
                                                    <code
                                                        className="bg-gray-100 font-outfit  text-red-500 rounded p-1"
                                                        {...props}
                                                    >
                                                        {children}
                                                    </code>
                                                ) : (
                                                    <pre className="bg-gray-900 font-outfit  text-green-400 rounded-md p-4 my-2 overflow-auto">
                                                        <code>{children}</code>
                                                    </pre>
                                                ),

                                            // Links
                                            a: (props) => (
                                                <a
                                                    className="text-blue-500 font-outfit  underline"
                                                    {...props}
                                                />
                                            ),

                                            // Horizontal Rule
                                            hr: () => (
                                                <hr className="my-4 font-outfit text-text2 border-gray-300" />
                                            ),

                                            // Images
                                            img: (props) => (
                                                <img
                                                    className="mx-auto font-outfit text-text2 rounded-lg my-4 shadow-lg"
                                                    {...props}
                                                    alt={props.alt || ""}
                                                />
                                            ),
                                        }}
                                    >
                                        {msg.text}
                                    </ReactMarkdown>
                                </div>
                                {msg.type === "user" ? (
                                    <h1 className="text-right pr-2 font-bold text-[#FF00FF] mt-1 animate-fadeIn text-sm">
                                        YOU
                                    </h1>
                                ) : (
                                    <h1 className="text-left pl-2 font-bold text-[#FF00FF] mt-1 animate-fadeIn text-sm">
                                        YAI
                                    </h1>
                                )}
                            </div>
                        </div>
                    ))}
                    <div ref={chatEndRef} />
                </div>
            </div>

            {/* Input form */}
            <div className="py-5 bottom-0 w-full relative">
                <div className="absolute -top-8 left-0 right-0 h-8 bg-gradient-to-t from-[#0A0A0F] to-transparent pointer-events-none"></div>
                <form
                    className="group h-fit flex justify-center items-center pr-5 bg-[#1A1A1F]/95 backdrop-blur-md rounded-xl transition-all duration-300 p-2 w-full select-none border border-[#2A2A2F]/50 shadow-[0_0_15px_rgba(0,0,0,0.3)] focus-within:shadow-[0_0_25px_rgba(255,0,255,0.15)] focus-within:border-[#FF00FF]/30 focus-within:scale-[1.01] outline-none"
                    onSubmit={handleSubmit}
                >
                    <input
                        required
                        placeholder="Talk to YapperAI (Press '/' to Focus)"
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="placeholder:text-[#8A8A8F] bg-transparent w-full rounded-lg focus:outline-none focus:ring-0 border-0 h-10 px-4 py-2 text-[#E0E0E0] focus:text-white transition-all duration-300"
                    />

                    <button
                        type="submit"
                        className="p-2 rounded-lg hover:bg-[#2A2A2F] transition-all duration-300 group-hover:scale-110 focus:outline-none focus:ring-0"
                    >
                        <Send className="text-[#FF00FF] group-hover:text-[#FF4500] transition-all duration-300" />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Home;
