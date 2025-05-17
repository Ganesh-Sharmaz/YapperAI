import React from 'react'

function FeatureCard({ title, description }) {
  return (
    <div className="group relative bg-[#1A1A1F]/90 backdrop-blur-md p-6 rounded-xl border border-[#2A2A2F]/50 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,255,0.15)] transition-all duration-300 font-outfit overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF00FF]/5 to-[#FF4500]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF00FF] to-[#FF4500] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#FF4500]">{title}</h3>
            <p className="text-[#E0E0E0] text-lg leading-relaxed">{description}</p>
        </div>
    </div>
  )
}

export default FeatureCard