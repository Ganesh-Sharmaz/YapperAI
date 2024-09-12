import React, { Suspense } from 'react'
import FeatureCard from './FeatureCard'

const LazyFCard = React.lazy(() => import('./FeatureCard.jsx'))

function Features() {
  return (
        <section className="w-full  mb-16">
        <h2 className="md:text-8xl text-6xl text-pretty font-semibold mb-10">
            Personalities that Speak to You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Suspense fallback='Loading...'>
            <LazyFCard
                title="Desi Indian"
                description="Get the authentic Desi flavor, complete with humor and sass."
            />
            </Suspense>
            <Suspense fallback='Loading...'>
            <LazyFCard
                title="Baby"
                description="Cute, innocent, and playful responses that will melt your heart."
            />
            </Suspense>
            <Suspense fallback='Loading...'>
            <LazyFCard
                title="Caring Girlfriend"
                description="Sweet, loving, and supportive—always there for you."
            />
            </Suspense>
            <Suspense fallback='Loading...'>
            <LazyFCard
                title="Royal Personality"
                description="Talk like a king or queen with regal elegance and wisdom."
            />
            </Suspense>
            <Suspense fallback='Loading...'>
            <LazyFCard
                title="Intellectual"
                description="Engage in deep, thought-provoking conversations."
            />
            </Suspense>
            <Suspense fallback='Loading...'>
            <LazyFCard
                title="Evil AI"
                description="Dark and twisted—explore the sinister side of AI."
            />
            </Suspense>
            <Suspense fallback='Loading...'>
            <LazyFCard
                title="Brainrot"
                description="For the wild, chaotic, and unfiltered experience."
            />
            </Suspense>
            <Suspense fallback='Loading...'>
            <LazyFCard
                title="Anime Characters"
                description="Talk to your favorite anime-style characters."
            />
            </Suspense>
            <Suspense fallback='Loading...'>
            <LazyFCard
                title="Sigma Male"
                description="Alpha personality with sigma male traits."
            />
            </Suspense>
        </div>
    </section>
  )
}

export default Features