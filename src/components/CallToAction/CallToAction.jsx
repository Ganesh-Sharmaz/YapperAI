import React from 'react'

function CallToAction() {
        const scrollToTop = () => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth', // smooth scroll effect
                });
              };
  return (
        <section className=" text-center h-screen place-content-center pt-20">
        <h2 className="text-8xl font-semibold mb-4">
            Ready to Chat?
        </h2>
        <p className="text-3xl text-gray-300 mb-8">
            Choose your favorite personality and start your
            conversation today.
        </p>
        <button
        onClick={scrollToTop}
        className="bg-blue-400 text-white px-6 py-3 rounded-lg text-6xl font-bold hover:bg-blue-600 transition duration-300">
            Get Started
        </button>
    </section>
  )
}

export default CallToAction