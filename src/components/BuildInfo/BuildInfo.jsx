import React from 'react'

function BuildInfo() {
  return (
        <section className="w-full  mb-16">
        <h2 className="text-8xl font-semibold mb-6">
            Built on Advanced Technology
        </h2>
        <p className="text-5xl text-gray-300 leading-relaxed text-pretty">
            Powered by the cutting-edge{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-br from-[#FF00FF] to-[#FF4500]">
                Gemini-Flash-1.5
            </span>{" "}
            model, Yapper AI brings to life engaging conversations
            using advanced prompting techniques. Experience
            markdown-rich responses with visually appealing
            highlights, making every conversation an interactive
            delight.
        </p>
    </section>
  )
}

export default BuildInfo