import React from 'react'
import FeatureCard from './FeatureCard'

function Features() {
  return (
        <section className="w-full  mb-16">
        <h2 className="md:text-8xl text-6xl text-pretty font-semibold mb-10">
            Personalities that Speak to You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
                title="Desi Indian"
                description="Get the authentic Desi flavor, complete with humor and sass."
            />
            <FeatureCard
                title="Baby"
                description="Cute, innocent, and playful responses that will melt your heart."
            />
            <FeatureCard
                title="Caring Girlfriend"
                description="Sweet, loving, and supportive—always there for you."
            />
            <FeatureCard
                title="Royal Personality"
                description="Talk like a king or queen with regal elegance and wisdom."
            />
            <FeatureCard
                title="Intellectual"
                description="Engage in deep, thought-provoking conversations."
            />
            <FeatureCard
                title="Evil AI"
                description="Dark and twisted—explore the sinister side of AI."
            />
            <FeatureCard
                title="Brainrot"
                description="For the wild, chaotic, and unfiltered experience."
            />
            <FeatureCard
                title="Anime Characters"
                description="Talk to your favorite anime-style characters."
            />
            <FeatureCard
                title="Sigma Male"
                description="Alpha personality with sigma male traits."
            />
        </div>
    </section>
  )
}

export default Features