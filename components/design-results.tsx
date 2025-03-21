"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Download,
  Share2,
  Heart,
  ArrowDownToLine,
  Printer,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Mock design styles with more realistic data and high-quality images
const designStyles = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean lines, minimal decoration, and functional furniture with an emphasis on simplicity.",
    features: [
      "Clean lines and minimalist aesthetic",
      "Neutral color palette with accent colors",
      "Functional furniture with sleek designs",
      "Strategic lighting to enhance space",
      "Open floor plan with minimal visual barriers",
    ],
    suggestions: [
      "Replace current sofa with a low-profile sectional",
      "Add accent lighting in corners",
      "Introduce a statement art piece on main wall",
      "Update window treatments to maximize light",
      "Add a geometric area rug to define the space",
    ],
    furniture: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=300",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=300",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=300",
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?q=80&w=300",
    ],
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1000",
  },
  {
    id: "scandinavian",
    name: "Scandinavian",
    description: "Light, airy spaces with functional furniture, minimal accessories, and natural textures.",
    features: [
      "Light color palette with natural wood tones",
      "Cozy textiles and natural materials",
      "Functional, simple furniture designs",
      "Emphasis on natural light",
      "Minimal but thoughtful accessories",
    ],
    suggestions: [
      "Add light wood furniture pieces",
      "Incorporate sheepskin or wool textiles",
      "Install simple white curtains",
      "Add plants for a touch of nature",
      "Use woven baskets for storage",
    ],
    furniture: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=300",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=300",
      "https://images.unsplash.com/photo-1551298370-9d3d53740c72?q=80&w=300",
      "https://images.unsplash.com/photo-1532372320572-cda25653a694?q=80&w=300",
    ],
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000",
  },
  {
    id: "industrial",
    name: "Industrial",
    description: "Raw, unfinished elements like exposed brick, metal, and wood with a focus on utility.",
    features: [
      "Exposed brick or concrete surfaces",
      "Metal fixtures and furniture frames",
      "Reclaimed or distressed wood",
      "Vintage or factory-inspired lighting",
      "Open shelving and visible storage solutions",
    ],
    suggestions: [
      "Add metal shelving units",
      "Replace current lighting with pendant fixtures",
      "Incorporate leather and canvas upholstery",
      "Add vintage or repurposed accessories",
      "Consider a metal and wood coffee table",
    ],
    furniture: [
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=300",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=300",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0c2?q=80&w=300",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=300",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000",
  },
  {
    id: "minimalist",
    name: "Minimalist",
    description:
      "Simplicity in form and function with clean lines, monochromatic color schemes, and clutter-free spaces.",
    features: [
      "Monochromatic color scheme",
      "Limited number of furniture pieces",
      "Hidden storage solutions",
      "Absence of decorative elements",
      "Focus on functionality and space",
    ],
    suggestions: [
      "Reduce furniture to essential pieces only",
      "Choose furniture with built-in storage",
      "Maintain clear surfaces with minimal decor",
      "Use wall-mounted lighting to free up floor space",
      "Select multi-functional furniture pieces",
    ],
    furniture: [
      "https://images.unsplash.com/photo-1588200908342-23b585c03e26?q=80&w=300",
      "https://images.unsplash.com/photo-1554295405-abb8fd54f153?q=80&w=300",
      "https://images.unsplash.com/photo-1551298370-9d3d53740c72?q=80&w=300",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=300",
    ],
    image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=1000",
  },
  {
    id: "bohemian",
    name: "Bohemian",
    description: "Eclectic, carefree spaces with vibrant colors, patterns, and a mix of cultural influences.",
    features: [
      "Rich, layered textiles and patterns",
      "Global-inspired decor and accessories",
      "Mix of furniture styles and eras",
      "Plants and natural elements",
      "Vibrant colors and textures",
    ],
    suggestions: [
      "Add colorful throw pillows and blankets",
      "Incorporate macramé or woven wall hangings",
      "Mix patterns in rugs and textiles",
      "Add houseplants in decorative planters",
      "Include low seating options like floor cushions",
    ],
    furniture: [
      "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=300",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=300",
      "https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?q=80&w=300",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=300",
    ],
    image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1000",
  },
]

interface DesignResultsProps {
  originalImage: string | null
  onCustomize: () => void
}

export function DesignResults({ originalImage, onCustomize }: DesignResultsProps) {
  const [activeStyle, setActiveStyle] = useState("modern")
  const [isSaved, setIsSaved] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isSharing, setIsSharing] = useState(false)
  const [copied, setCopied] = useState(false)
  const [currentView, setCurrentView] = useState<"split" | "before" | "after">("split")
  const [isLoading, setIsLoading] = useState(true)
  const [sliderPosition, setSliderPosition] = useState(50)

  // Simulate loading of design images
  useEffect(() => {
    if (activeStyle) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [activeStyle])

  // Get the current design style data
  const currentStyle = designStyles.find((style) => style.id === activeStyle) || designStyles[0]

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget.getBoundingClientRect()
    const position = ((e.clientX - container.left) / container.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, position)))
  }

  const handleDownload = () => {
    setIsDownloading(true)

    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false)

      // Create a download link for the image
      const link = document.createElement("a")
      link.href = currentStyle.image
      link.download = `room-design-${activeStyle}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 1500)
  }

  const handleSave = () => {
    setIsSaved(!isSaved)
  }

  const handleShare = () => {
    setIsSharing(true)

    // Simulate share process
    setTimeout(() => {
      setIsSharing(false)

      // In a real app, this would open a share dialog
      // For now, we'll just copy a fake URL to clipboard
      navigator.clipboard.writeText(`https://roomreimagine.com/shared-design/${activeStyle}-${Date.now()}`).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }, 800)
  }

  const handleNextStyle = () => {
    const currentIndex = designStyles.findIndex((style) => style.id === activeStyle)
    const nextIndex = (currentIndex + 1) % designStyles.length
    setActiveStyle(designStyles[nextIndex].id)
  }

  const handlePrevStyle = () => {
    const currentIndex = designStyles.findIndex((style) => style.id === activeStyle)
    const prevIndex = currentIndex === 0 ? designStyles.length - 1 : currentIndex - 1
    setActiveStyle(designStyles[prevIndex].id)
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Original Room</h3>
              <div className="flex gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setCurrentView("split")}>
                        Split View
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Show before and after side by side</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden aspect-video bg-muted">
              {originalImage ? (
                <img
                  src={originalImage || "/placeholder.svg"}
                  alt="Original room"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-muted-foreground">No image available</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium">Redesigned Room</h3>
                <Badge variant="outline" className="ml-2">
                  {currentStyle.name} Style
                </Badge>
              </div>
              <div className="flex gap-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleSave}
                        className={isSaved ? "text-red-500" : ""}
                      >
                        <Heart className={`h-4 w-4 ${isSaved ? "fill-current" : ""}`} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{isSaved ? "Remove from favorites" : "Save to favorites"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={handleShare} disabled={isSharing}>
                        {isSharing ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : copied ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Share2 className="h-4 w-4" />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{copied ? "Link copied!" : "Share design"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" onClick={handleDownload} disabled={isDownloading}>
                        {isDownloading ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Download className="h-4 w-4" />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download design</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden aspect-video bg-muted relative">
              {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <p className="text-sm text-muted-foreground">Generating {currentStyle.name} design...</p>
                  </div>
                </div>
              ) : (
                <img
                  src={currentStyle.image || "/placeholder.svg"}
                  alt={`${activeStyle} design`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="flex justify-between mt-4">
              <Button variant="outline" size="sm" onClick={handlePrevStyle} className="flex items-center gap-1">
                <ChevronLeft className="h-4 w-4" />
                Previous Style
              </Button>

              <Button variant="outline" size="sm" onClick={handleNextStyle} className="flex items-center gap-1">
                Next Style
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="relative h-[400px] overflow-hidden rounded-xl shadow-xl">
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
              src={originalImage || "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1000"}
              alt="Before transformation"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-bold">
              Before
            </div>
          </div>

          {/* After image (clipped by slider) */}
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
            <img
              src={currentStyle.image || "/placeholder.svg"}
              alt="After transformation"
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

      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">{currentStyle.name} Style</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex items-center gap-1"
          >
            {isDownloading ? (
              <>Downloading...</>
            ) : (
              <>
                <ArrowDownToLine className="h-4 w-4" />
                Download
              </>
            )}
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <Printer className="h-4 w-4" />
            Print
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleShare}
            disabled={isSharing}
            className="flex items-center gap-1"
          >
            {isSharing ? (
              <>Sharing...</>
            ) : copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Share
              </>
            )}
          </Button>
        </div>
      </div>

      <p className="text-muted-foreground">{currentStyle.description}</p>

      <div className="space-y-4">
        <Tabs value={activeStyle} onValueChange={setActiveStyle}>
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
            {designStyles.map((style) => (
              <TabsTrigger key={style.id} value={style.id}>
                {style.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {designStyles.map((style) => (
            <TabsContent key={style.id} value={style.id} className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Style Features</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {style.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">Suggested Changes</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {style.suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-4">Recommended Furniture & Decor</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {style.furniture.map((item, index) => (
                    <div key={index} className="relative rounded-lg overflow-hidden">
                      <img
                        src={item || "/placeholder.svg"}
                        alt={`Suggested item ${index + 1}`}
                        className="w-full h-auto aspect-square object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Button variant="secondary" size="sm">
                          View Item
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="flex justify-center mt-8">
        <Button onClick={onCustomize} size="lg" className="px-8">
          Customize This Design
        </Button>
      </div>
    </div>
  )
}

