import React from 'react'

function FeatureCard({ title, description }) {
  return (
        <div className="  bg-red-500  p-6 rounded-lg shadow-lg backdrop-blur-3xl hover:scale-[1.02] transition duration-300 font-outfit   hover:shadow-purple-900">
        <h3 className="text-4xl font-bold mb-2">{title}</h3>
        <p className="text-white text-2xl">{description}</p>
    </div>
  )
}

export default FeatureCard