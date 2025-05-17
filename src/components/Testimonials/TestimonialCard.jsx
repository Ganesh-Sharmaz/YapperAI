import React from 'react'

function TestimonialCard( { name, feedback } ) {
  return (
    <div className="group relative bg-[#1A1A1F]/50 p-6 rounded-xl border border-[#2A2A2F]/50 hover:border-[#FF00FF]/30 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF00FF]/5 to-[#FF4500]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      <div className="relative z-10">
      <p className="text-[#E0E0E0] text-lg">"{feedback}"</p>
        <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#FF4500]">{name}</h3>
        </div>
      </div>
  )
}

export default TestimonialCard