import React, { useRef } from 'react'
import VariableProximity from '../ui/VariableProximity'

function MobileBuildInfo() {
  const containerRef = useRef(null);

  return (
    <section className="w-full py-16 px-4 bg-[#0A0A0F] md:hidden">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <div className="flex gap-5">
                    <VariableProximity
                        label="Built on Advanced Technology"
                        className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] via-[#FF4500] to-[#FF00FF] animate-gradient-x hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,0,255,0.3)]"
                        fromFontVariationSettings="'wght' 800, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff="linear"
                    />
                </div>
            </div>
            
            <div className="bg-[#1A1A1F]/90 backdrop-blur-md p-6 rounded-xl border border-[#2A2A2F]/50 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                <div ref={containerRef} style={{ position: "relative" }}>
                    <VariableProximity
                        label="Powered by the cutting-edge Gemini-Flash-1.5 model, Yapper AI brings to life engaging conversations using advanced prompting techniques."
                        className="text-[#E0E0E0] text-xl"
                        fromFontVariationSettings="'wght' 400, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff="linear"
                    />
                </div>
                
                <div className="mt-8 space-y-6">
                    <div className="group relative bg-[#1A1A1F]/50 p-6 rounded-xl border border-[#2A2A2F]/50">
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
                    
                    <div className="group relative bg-[#1A1A1F]/50 p-6 rounded-xl border border-[#2A2A2F]/50">
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
  )
}

export default MobileBuildInfo 