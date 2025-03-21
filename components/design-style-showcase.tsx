"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Design styles with high-quality images
const designStyles = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean lines, minimal decoration, and functional furniture with an emphasis on simplicity.",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1000",
    features: ["Clean lines", "Neutral colors", "Functional furniture", "Minimal decoration"],
  },
  {
    id: "scandinavian",
    name: "Scandinavian",
    description: "Light, airy spaces with functional furniture, minimal accessories, and natural textures.",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000",
    features: ["Light colors", "Natural materials", "Cozy textiles", "Functional design"],
  },
  {
    id: "industrial",
    name: "Industrial",
    description: "Raw, unfinished elements like exposed brick, metal, and wood with a focus on utility.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000",
    features: ["Exposed brick", "Metal fixtures", "Reclaimed wood", "Factory-inspired lighting"],
  },
  {
    id: "bohemian",
    name: "Bohemian",
    description: "Eclectic, carefree spaces with vibrant colors, patterns, and a mix of cultural influences.",
    image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1000",
    features: ["Vibrant colors", "Mixed patterns", "Plants and macramé", "Global influences"],
  },
  {
    id: "minimalist",
    name: "Minimalist",
    description:
      "Simplicity in form and function with clean lines, monochromatic color schemes, and clutter-free spaces.",
    image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1000",
    features: ["Monochromatic palette", "Clean lines", "Clutter-free", "Functional spaces"],
  },
  {
    id: "traditional",
    name: "Traditional",
    description: "Classic design with rich color palettes, ornate details, and elegant furnishings.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000",
    features: ["Rich colors", "Ornate details", "Classic furniture", "Symmetrical arrangements"],
  },
]

export function DesignStyleShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextStyle = () => {
    setActiveIndex((prev) => (prev === designStyles.length - 1 ? 0 : prev + 1))
  }

  const prevStyle = () => {
    setActiveIndex((prev) => (prev === 0 ? designStyles.length - 1 : prev - 1))
  }

  const activeStyle = designStyles[activeIndex]

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
          <img
            src={activeStyle.image || "/placeholder.svg"}
            alt={`${activeStyle.name} interior design style`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-white text-2xl font-bold">{activeStyle.name} Style</h3>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full h-10 w-10"
            onClick={prevStyle}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full h-10 w-10"
            onClick={nextStyle}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">{activeStyle.name} Style</h3>
          <p className="text-muted-foreground mb-6">{activeStyle.description}</p>

          <div className="space-y-4">
            <h4 className="font-medium">Key Features:</h4>
            <ul className="grid grid-cols-2 gap-2">
              {activeStyle.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex gap-4">
            <Button variant="default">Try This Style</Button>
            <Button variant="outline">See Examples</Button>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center space-x-2">
        {designStyles.map((style, index) => (
          <button
            key={style.id}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === activeIndex ? "bg-primary" : "bg-muted-foreground/30"
            }`}
            aria-label={`View ${style.name} style`}
          />
        ))}
      </div>
    </div>
  )
}

