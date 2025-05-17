import React from 'react'
import TrueFocus from '../ui/TrueFocus'
import MobileBuildInfo from './MobileBuildInfo'

function BuildInfo() {
  return (
    <>
      <MobileBuildInfo />
      <section className="w-full py-16 px-4 md:px-8 bg-[#0A0A0F] hidden md:block">
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                  <h2 className="md:text-7xl text-5xl font-bold mb-6">
                      <TrueFocus animationDuration={0.5} pauseBetweenAnimations={0.3} sentence="Built on Advanced Technology" />
                  </h2>
              </div>
              
              <div className="bg-[#1A1A1F]/90 backdrop-blur-md p-8 rounded-xl border border-[#2A2A2F]/50 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,255,0.15)] transition-all duration-300">
                  <p className="md:text-3xl text-xl text-[#E0E0E0] leading-relaxed text-pretty">
                      Powered by the cutting-edge{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#FF4500] font-bold">
                          Gemini-Flash-1.5
                      </span>{" "}
                      model, Yapper AI brings to life engaging conversations
                      using advanced prompting techniques.
                  </p>
                  
                  <div className="mt-8 grid md:grid-cols-2 gap-8">
                      <div className="group relative bg-[#1A1A1F]/50 p-6 rounded-xl border border-[#2A2A2F]/50 hover:border-[#FF00FF]/30 transition-all duration-300">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#FF00FF]/5 to-[#FF4500]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                          <div className="relative z-10">
                              <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#FF4500]">
                                  Rich Markdown Support
                              </h3>
                              <p className="text-[#E0E0E0] text-lg">
                                  Experience beautifully formatted responses with code highlighting, tables, and more.
                              </p>
                          </div>
                      </div>
                      
                      <div className="group relative bg-[#1A1A1F]/50 p-6 rounded-xl border border-[#2A2A2F]/50 hover:border-[#FF00FF]/30 transition-all duration-300">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#FF00FF]/5 to-[#FF4500]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                          <div className="relative z-10">
                              <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#FF4500]">
                                  Interactive Experience
                              </h3>
                              <p className="text-[#E0E0E0] text-lg">
                                  Every conversation is enhanced with visual elements and dynamic formatting.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

export default BuildInfo