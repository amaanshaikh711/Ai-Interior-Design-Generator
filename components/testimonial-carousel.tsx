"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample testimonials with real user photos
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    content:
      "I was skeptical about AI design at first, but RoomReimagine completely changed my living room. The suggestions were spot-on and exactly what I was looking for!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=500",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Interior Design Enthusiast",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    content:
      "The ability to see different styles applied to my actual space before making any changes saved me from making expensive mistakes. Absolutely worth it!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=500",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "First-time Homebuyer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200",
    content:
      "As someone with no design experience, this tool was a lifesaver. It helped me visualize possibilities I never would have thought of on my own.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=500",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Real Estate Agent",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    content:
      "I recommend RoomReimagine to all my clients who are staging homes for sale. It helps potential buyers see the possibilities in each space.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=500",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoplay, currentIndex])

  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  return (
    <div className="relative max-w-5xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>

                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>

                      <p className="text-lg italic mb-6 flex-grow">"{testimonial.content}"</p>
                    </div>

                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`Design by ${testimonial.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background shadow-md z-10 hidden md:flex"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background shadow-md z-10 hidden md:flex"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

