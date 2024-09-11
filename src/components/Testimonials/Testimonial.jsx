import React from 'react'
import TestimonialCard from './TestimonialCard'

function Testimonial() {
  return (
        <section className="w-full  mb-16">
        <h2 className="md:text-8xl text-6xl font-semibold mb-6">
            What Our Users Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
                name="Aman S."
                feedback="The Desi Indian personality is hilarious! It feels like talking to a friend from back home."
            />
            <TestimonialCard
                name="Sophia L."
                feedback="I love the Caring Girlfriend personality—it’s like having someone who’s always there to support you!"
            />
            <TestimonialCard
                name="David P."
                feedback="The Intellectual is incredible for deep conversations. I never thought an AI could challenge my thoughts!"
            />
            <TestimonialCard
                name="Mika T."
                feedback="The anime characters are so much fun! It’s like talking to my favorite shows in real life."
            />
            <TestimonialCard
                name="Zara R."
                feedback="Yapper AI is a game-changer! I can switch between funny, sweet, and dark moods instantly."
            />
            <TestimonialCard
                name="Josh B."
                feedback="Brainrot is so chaotic, I can’t stop laughing! This is the best way to kill time."
            />
        </div>
    </section>
  )
}

export default Testimonial