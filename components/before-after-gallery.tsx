"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample before/after transformations with high-quality images
const transformations = [
  {
    id: 1,
    title: "Modern Living Room",
    description: "Transformed from traditional to modern minimalist",
    before: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1000",
  },
  {
    id: 2,
    title: "Cozy Bedroom",
    description: "Updated from outdated to Scandinavian style",
    before: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000",
  },
  {
    id: 3,
    title: "Kitchen Renovation",
    description: "Converted from classic to industrial chic",
    before: "https://images.unsplash.com/photo-1556911220-bda9f7f6b548?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000",
  },
  {
    id: 4,
    title: "Home Office",
    description: "Redesigned from cluttered to minimalist workspace",
    before: "https://images.unsplash.com/photo-1544140708-514b7837e6b5?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1593476550610-87baa860004a?q=80&w=1000",
  },
]

export function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === transformations.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? transformations.length - 1 : prevIndex - 1))
  }

  const currentTransformation = transformations[currentIndex]

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect()
    const position = ((e.clientX - container.left) / container.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, position)))
  }

  return (
    <div className="relative">
      <div className="mb-8">
        <div className="relative h-[500px] overflow-hidden rounded-xl shadow-xl">
          {/* Image comparison slider */}
          <div
            className="absolute inset-0 cursor-col-resize z-20"
            onClick={handleSliderChange}
            onMouseMove={(e) => {
              if (e.buttons === 1) {
                handleSliderChange(e)
              }
            }}
          >
            {/* Before image (full width) */}
            <div className="absolute inset-0">
              <img
                src={currentTransformation.before || "/placeholder.svg"}
                alt={`Before: ${currentTransformation.title}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-bold">
                Before
              </div>
            </div>

            {/* After image (clipped by slider) */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
              <img
                src={currentTransformation.after || "/placeholder.svg"}
                alt={`After: ${currentTransformation.title}`}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: `${100 / (sliderPosition / 100)}%` }}
              />
              <div className="absolute bottom-4 left-4 bg-primary/70 text-white px-4 py-2 rounded-full text-sm font-bold">
                After
              </div>
            </div>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-30 shadow-xl"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-xl flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <ChevronLeft className="h-4 w-4 text-white" />
                  <ChevronRight className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <h3 className="text-2xl font-bold">{currentTransformation.title}</h3>
          <p className="text-muted-foreground">{currentTransformation.description}</p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8 space-x-4">
        <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex space-x-2">
          {transformations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

