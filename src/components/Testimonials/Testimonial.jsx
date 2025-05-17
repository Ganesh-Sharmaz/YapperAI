import React, { Suspense } from "react";
import ShinyText from "../ui/ShineyText.jsx";
import TextCursor from "../ui/TextCursor.jsx";

const LazyCard = React.lazy(() => import("./TestimonialCard.jsx"));

function Testimonial() {
    return (
        <section className="w-full py-10 px-4 md:px-8 bg-[#0A0A0F]">
            <div className="max-w-7xl mx-auto">
                <TextCursor
                    text="Hello!"
                    delay={0.01}
                    spacing={80}
                    followMouseDirection={true}
                    randomFloat={true}
                    exitDuration={0.3}
                    removalInterval={20}
                    maxPoints={10}
                />
                <div className="text-center mb-12">
                    <h2 className="md:text-7xl text-5xl font-bold mb-6">
                        <ShinyText
                            animationDuration={0.5}
                            pauseBetweenAnimations={0.3}
                            text="What Our Users Say"
                        />
                    </h2>
                </div>
                <div className="bg-[#1A1A1F]/90 backdrop-blur-md p-8 rounded-xl border border-[#2A2A2F]/50 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,255,0.15)] transition-all duration-300">
                    <div className="mt-8 grid md:grid-cols-2 gap-8">
                        <Suspense fallback="Loading...">
                            <LazyCard
                                name="Aman S."
                                feedback="The Desi Indian personality is hilarious! It feels like talking to a friend from back home."
                            />
                        </Suspense>
                        <Suspense fallback="Loading...">
                            <LazyCard
                                name="Sophia L."
                                feedback="I love the Caring Girlfriend personality—it’s like having someone who’s always there to support you!"
                            />
                        </Suspense>
                        <Suspense fallback="Loading...">
                            <LazyCard
                                name="David P."
                                feedback="The Intellectual is incredible for deep conversations. I never thought an AI could challenge my thoughts!"
                            />
                        </Suspense>
                        <Suspense fallback="Loading...">
                            <LazyCard
                                name="Mika T."
                                feedback="The anime characters are so much fun! It’s like talking to my favorite shows in real life."
                            />
                        </Suspense>
                        <Suspense fallback="Loading...">
                            <LazyCard
                                name="Zara R."
                                feedback="Yapper AI is a game-changer! I can switch between funny, sweet, and dark moods instantly."
                            />
                        </Suspense>
                        <Suspense fallback="Loading...">
                            <LazyCard
                                name="Josh B."
                                feedback="Brainrot is so chaotic, I can’t stop laughing! This is the best way to kill time."
                            />
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
