import React, { Suspense, useState, useEffect } from 'react'
import TrueFocus from '../ui/TrueFocus'

const LazyFCard = React.lazy(() => import('./FeatureCard.jsx'))

function Features() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cards = [
    {
      title: "Desi Indian",
      description: "Get the authentic Desi flavor, complete with humor and sass."
    },
    {
      title: "Baby",
      description: "Cute, innocent, and playful responses that will melt your heart."
    },
    {
      title: "Caring Girlfriend",
      description: "Sweet, loving, and supportive—always there for you."
    },
    {
      title: "Royal Personality",
      description: "Talk like a king or queen with regal elegance and wisdom."
    },
    {
      title: "Intellectual",
      description: "Engage in deep, thought-provoking conversations."
    },
    {
      title: "Evil AI",
      description: "Dark and twisted—explore the sinister side of AI."
    },
    {
      title: "Brainrot",
      description: "For the wild, chaotic, and unfiltered experience."
    },
    {
      title: "Anime Characters",
      description: "Talk to your favorite anime-style characters."
    },
    {
      title: "Sigma Male",
      description: "Alpha personality with sigma male traits."
    }
  ];

  // Show all cards in md view, only limit in mobile view
  const visibleCards = !isMobile ? cards : (showAll ? cards : cards.slice(0, 2));
 
  return (
    <section className="w-full py-16 px-4 md:px-5 bg-[#0A0A0F]">
        <div className="max-w-8xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="md:text-9xl text-5xl font-bold mb-6">
                    <span className="hidden md:inline">
                        <TrueFocus animationDuration={0.5} pauseBetweenAnimations={0.3} sentence="Personalities that Speak to You" />
                    </span>
                    <span className="md:hidden text-transparent bg-clip-text bg-gradient-to-r from-[#FF00FF] to-[#FF4500]">
                        Personalities that Speak to You
                    </span>
                </h2>
                <p className="text-[#8A8A8F] text-xl max-w-2xl mx-auto">
                    Choose from our diverse range of AI personalities, each with their own unique style and charm.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {visibleCards.map((card) => (
                    <Suspense key={card.title} fallback={
                        <div className="bg-[#1A1A1F]/50 p-6 rounded-xl animate-pulse">
                            <div className="h-8 bg-[#2A2A2F] rounded w-3/4 mb-4"></div>
                            <div className="h-4 bg-[#2A2A2F] rounded w-full"></div>
                        </div>
                    }>
                        <LazyFCard
                            title={card.title}
                            description={card.description}
                        />
                    </Suspense>
                ))}
            </div>
            
            {/* See More Button - Only visible on mobile */}
            <div className="md:hidden mt-8 flex justify-center">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="group relative px-6 py-3 rounded-lg bg-[#1A1A1F] hover:bg-[#2A2A2F] text-white transition-all duration-300 overflow-hidden border border-[#2A2A2F]/50 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,255,0.15)]"
                >
                    <span className="relative z-10 flex items-center space-x-2">
                        <span>{showAll ? "Show Less" : "See More"}</span>
                        <svg 
                            className={`w-5 h-5 transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF00FF]/10 to-[#FF4500]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Features