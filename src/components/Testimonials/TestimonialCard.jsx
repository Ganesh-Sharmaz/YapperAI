import React from 'react'

function TestimonialCard( { name, feedback } ) {
  return (
        <div className="bg-[#f64f59] p-6 rounded-lg shadow-lg font-outfit hover:shadow-red-700 backdrop-blur-3xl hover:scale-[1.02] transition duration-300">
        <p className="italic text-gray-300 mb-4 text-xl">"{feedback}"</p>
        <h4 className="text-2xl font-bold text-yellow-400">{name}</h4>
      </div>
  )
}

export default TestimonialCard