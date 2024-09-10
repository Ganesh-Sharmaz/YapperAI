import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useRef, useEffect, useState } from "react";
import { Send } from "@mui/icons-material";

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
} from "@nextui-org/react";

import ReactMarkdown from "react-markdown";

function Home() {
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
            person: "intellectual",
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
            person: "Delusional",
            prompt: "Hypothetically about everything and be concise",
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
        if (inputValue.trim !== "") {
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

            try {
                const genAI = new GoogleGenerativeAI(
                    import.meta.env.VITE_REACT_GEMINI_API
                );
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
                console.log(result.response.text());

                // const result = await model.generateContent(prompt);
                // console.log(result.response.text());
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
                setChatHistory((prevHistory) =>
                    prevHistory.map((msg) =>
                        msg.text === "..."
                            ? { type: "Enable to fetch request." }
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

    const [selectedKeys, setSelectedKeys] = React.useState(new Set(['Desi']));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <div className=" relative px-5 w-full flex flex-col justify-center items-center flex-grow font-outfit md:mx-72 pt-3 md:px-5 bg-mainBackground">
            {/* for big screens */}
            <div className="md:flex md:justify-around justify-stretch shadow-lg items-center  p-5 bg-[#2c2b2b] m-2 md:p-2 md:w-full md:items-center cursor-pointer rounded-full md:z-0 z-10 md:relative hidden">
                {VoiceList.map((voice, index) => (
                    <button
                        onClick={() => handleActive(index)}
                        className={` transition ease-in-out hover:bg-blue-500 hover:text-white  p-1 px-3 rounded-full ${
                            activityIndex === index
                                ? "bg-blue-500 text-white"
                                : "bg-[#1a1a1a] text-[white]"
                        }`}
                        key={index}
                    >
                        {voice.person}
                    </button>
                ))}
            </div>

            {/* for small screens */}

            <Dropdown>
                <DropdownTrigger className="py-2">
                    <Button variant="solid" color="primary" className="capitalize font-outfit ring-2 ring-blue-500 focus:ring-blue-400 rounded-full mb-3 transition ease-in-out">
                        {selectedValue}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu className="bg-[#1a1a1a] rounded-xl py-2 font-outfit"
                    aria-label="Single selection example"
                    variant="bordered"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                >
                    
                    {
                        VoiceList.map((msg, index) => (
                            <DropdownItem className={` transition ease-in-out font-outfit hover:bg-blue-500 hover:text-white  p-1 px-3 rounded-full ${
                            activityIndex === index
                                ? " text-white"
                                : "bg-[#1a1a1a] text-[white]"
                        }`} onClick={() => (handleActive(index))} key={msg.person}>{msg.person}</DropdownItem>
                        ))
                    }
                </DropdownMenu>
            </Dropdown>

            {/* <div className="md:hidden  shadow-lg items-center  p-5 bg-[#2c2b2b] m-2 md:p-2 md:w-full md:items-center cursor-pointer rounded-lg space-y-3 md:z-0 z-10 ">
                <div className="flex flex-col gap-2 ">
                {VoiceList.map((voice, index) => (
                    <button
                        onClick={() => handleActive(index)}
                        className={` transition ease-in-out hover:bg-blue-500 hover:text-white  p-1 px-3 rounded-full ${
                            activityIndex === index
                                ? "bg-blue-500 text-white"
                                : "bg-[#1a1a1a] text-[white]"
                        }`}
                        key={index}
                    >
                        {voice.person}
                    </button>
                ))}
                </div>
                
            </div> */}
            <div className="flex flex-col overflow-x-clip  h-[440px] w-full flex-grow overflow-y-auto px-2  ">
                <div className=" md:w-full flex flex-col items-end space-y-2  px-2">
                    {chatHistory.map((msg, index) => (
                        <p
                            key={index}
                            className={` px-4 p-2 font-outfit  rounded-3xl ${
                                msg.type === "user"
                                    ? "bg-[#2c2b2b] text-white self-end text-right w-fit"
                                    : "bg-[#2c2b2b] text-white self-start"
                            }`}
                        >
                            <ReactMarkdown
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
                                    code: ({ inline, children, ...props }) =>
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
                        </p>
                    ))}

                    <div ref={chatEndRef} />
                </div>
            </div>
            <div className="py-5 bottom-0 w-full ">
                <form
                    className=" h-fit flex justify-center items-center pr-5 bg-[#2c2b2b] ring-blue-400 rounded-full transition ease-in-out  focus-within:ring focus:ring p-2 w-full select-none"
                    onSubmit={handleSubmit}
                >
                    <input
                        required
                        placeholder="talk to YapperAI   (Press '/' to Focus)"
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                        className=" placeholder:text-slate-300 bg-[#2c2b2b] w-full rounded-full  focus:outline-none  transition ease-in-out h-10 px-10 py-2 flex items-center justify-center"
                    />

                    <button type="submit">
                        <Send className="text-slate-500 m-1 hover:text-white transition ease-in-out" />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Home;
