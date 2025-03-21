"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Download, Share2, Palette, Sofa, Lamp, PaintBucket, Save, ArrowDownToLine } from "lucide-react"

interface DesignCustomizerProps {
  originalImage: string | null
}

export function DesignCustomizer({ originalImage }: DesignCustomizerProps) {
  const [activeTab, setActiveTab] = useState("furniture")
  const [brightness, setBrightness] = useState([50])
  const [contrast, setContrast] = useState([50])
  const [wallColor, setWallColor] = useState("neutral")
  const [furnitureStyle, setFurnitureStyle] = useState("modern")
  const [isDownloading, setIsDownloading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  // In a real app, this would update based on customizations
  const customizedImageUrl = "/placeholder.svg?height=600&width=800&text=Customized+Design"

  const handleDownload = () => {
    setIsDownloading(true)

    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false)

      // Create a download link for the image
      const link = document.createElement("a")
      link.href = customizedImageUrl
      link.download = "customized-room-design.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 1500)
  }

  const handleSaveDesign = () => {
    setIsSaving(true)

    // Simulate saving process
    setTimeout(() => {
      setIsSaving(false)
      alert("Design saved successfully!")
    }, 1500)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium">Customized Design</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={handleDownload} disabled={isDownloading}>
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleSaveDesign} disabled={isSaving}>
                  <Save className="h-4 w-4 mr-2" />
                  {isSaving ? "Saving..." : "Save Design"}
                </Button>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden">
              <img
                src={customizedImageUrl || "/placeholder.svg"}
                alt="Customized room design"
                className="w-full h-auto"
              />
            </div>

            <div className="flex justify-between mt-4">
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
                    Download Image
                  </>
                )}
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Share2 className="h-4 w-4 mr-1" />
                Share Design
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Before</h4>
                  <div className="rounded-lg overflow-hidden">
                    {originalImage ? (
                      <img src={originalImage || "/placeholder.svg"} alt="Original room" className="w-full h-auto" />
                    ) : (
                      <div className="bg-muted h-32 flex items-center justify-center">
                        <p className="text-muted-foreground">No image</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">After</h4>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.svg?height=200&width=300&text=After"
                      alt="After design"
                      className="w-full h-auto"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-medium mb-4">Customize Your Design</h3>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="furniture" className="flex flex-col items-center px-2 py-3">
                  <Sofa className="h-4 w-4 mb-1" />
                  <span className="text-xs">Furniture</span>
                </TabsTrigger>
                <TabsTrigger value="colors" className="flex flex-col items-center px-2 py-3">
                  <Palette className="h-4 w-4 mb-1" />
                  <span className="text-xs">Colors</span>
                </TabsTrigger>
                <TabsTrigger value="lighting" className="flex flex-col items-center px-2 py-3">
                  <Lamp className="h-4 w-4 mb-1" />
                  <span className="text-xs">Lighting</span>
                </TabsTrigger>
                <TabsTrigger value="walls" className="flex flex-col items-center px-2 py-3">
                  <PaintBucket className="h-4 w-4 mb-1" />
                  <span className="text-xs">Walls</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="furniture" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label>Furniture Style</Label>
                  <RadioGroup
                    value={furnitureStyle}
                    onValueChange={setFurnitureStyle}
                    className="grid grid-cols-2 gap-2"
                  >
                    <div>
                      <RadioGroupItem value="modern" id="modern" className="peer sr-only" />
                      <Label
                        htmlFor="modern"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span>Modern</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="classic" id="classic" className="peer sr-only" />
                      <Label
                        htmlFor="classic"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span>Classic</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="minimalist" id="minimalist" className="peer sr-only" />
                      <Label
                        htmlFor="minimalist"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span>Minimalist</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="industrial" id="industrial" className="peer sr-only" />
                      <Label
                        htmlFor="industrial"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <span>Industrial</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Furniture Arrangement</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="h-auto py-4">
                      <div className="flex flex-col items-center">
                        <span>Conversation</span>
                        <span className="text-xs text-muted-foreground">Facing inward</span>
                      </div>
                    </Button>
                    <Button variant="outline" className="h-auto py-4">
                      <div className="flex flex-col items-center">
                        <span>Entertainment</span>
                        <span className="text-xs text-muted-foreground">TV focused</span>
                      </div>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Furniture Pieces</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="justify-start">
                      <Sofa className="h-4 w-4 mr-2" />
                      Sectional Sofa
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Sofa className="h-4 w-4 mr-2" />
                      Armchair
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Sofa className="h-4 w-4 mr-2" />
                      Coffee Table
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Sofa className="h-4 w-4 mr-2" />
                      Side Table
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="colors" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label>Color Scheme</Label>
                  <RadioGroup value={wallColor} onValueChange={setWallColor} className="grid grid-cols-3 gap-2">
                    <div>
                      <RadioGroupItem value="neutral" id="neutral" className="peer sr-only" />
                      <Label
                        htmlFor="neutral"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <div className="h-8 w-8 rounded-full bg-stone-200"></div>
                        <span className="mt-2">Neutral</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="warm" id="warm" className="peer sr-only" />
                      <Label
                        htmlFor="warm"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <div className="h-8 w-8 rounded-full bg-amber-200"></div>
                        <span className="mt-2">Warm</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="cool" id="cool" className="peer sr-only" />
                      <Label
                        htmlFor="cool"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        <div className="h-8 w-8 rounded-full bg-sky-200"></div>
                        <span className="mt-2">Cool</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Accent Colors</Label>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" className="w-10 h-10 p-0">
                      <div className="h-6 w-6 rounded-full bg-red-500"></div>
                    </Button>
                    <Button variant="outline" className="w-10 h-10 p-0">
                      <div className="h-6 w-6 rounded-full bg-blue-500"></div>
                    </Button>
                    <Button variant="outline" className="w-10 h-10 p-0">
                      <div className="h-6 w-6 rounded-full bg-green-500"></div>
                    </Button>
                    <Button variant="outline" className="w-10 h-10 p-0">
                      <div className="h-6 w-6 rounded-full bg-yellow-500"></div>
                    </Button>
                    <Button variant="outline" className="w-10 h-10 p-0">
                      <div className="h-6 w-6 rounded-full bg-purple-500"></div>
                    </Button>
                    <Button variant="outline" className="w-10 h-10 p-0">
                      <div className="h-6 w-6 rounded-full bg-orange-500"></div>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="lighting" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Brightness</Label>
                    <span className="text-sm text-muted-foreground">{brightness}%</span>
                  </div>
                  <Slider value={brightness} onValueChange={setBrightness} max={100} step={1} />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label>Contrast</Label>
                    <span className="text-sm text-muted-foreground">{contrast}%</span>
                  </div>
                  <Slider value={contrast} onValueChange={setContrast} max={100} step={1} />
                </div>

                <div className="space-y-2">
                  <Label>Lighting Type</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="h-auto py-4">
                      <div className="flex flex-col items-center">
                        <span>Natural</span>
                        <span className="text-xs text-muted-foreground">Window light</span>
                      </div>
                    </Button>
                    <Button variant="outline" className="h-auto py-4">
                      <div className="flex flex-col items-center">
                        <span>Ambient</span>
                        <span className="text-xs text-muted-foreground">Soft lighting</span>
                      </div>
                    </Button>
                    <Button variant="outline" className="h-auto py-4">
                      <div className="flex flex-col items-center">
                        <span>Task</span>
                        <span className="text-xs text-muted-foreground">Focused light</span>
                      </div>
                    </Button>
                    <Button variant="outline" className="h-auto py-4">
                      <div className="flex flex-col items-center">
                        <span>Accent</span>
                        <span className="text-xs text-muted-foreground">Decorative</span>
                      </div>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="walls" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label>Wall Treatment</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="h-auto py-4">
                      <div className="flex flex-col items-center">
                        <span>Paint</span>
                        <span className="text-xs text-muted-foreground">Solid color</span>
                      </div>
                    </Button>
                    <Button variant="outline" className="h-auto py-4">
                      <div className="flex flex-col items-center">
                        <span>Wallpaper</span>
                        <span className="text-xs text-muted-foreground">Patterns</span>
                      </div>
                    </Button>
                    <Button variant="outline" className="h-auto py-4">
                      <div className="flex flex-col items-center">
                        <span>Accent Wall</span>
                        <span className="text-xs text-muted-foreground">Single wall</span>
                      </div>
                    </Button>
                    <Button variant="outline" className="h-auto py-4">
                      <div className="flex flex-col items-center">
                        <span>Paneling</span>
                        <span className="text-xs text-muted-foreground">Textured</span>
                      </div>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Wall Colors</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" className="h-auto p-2">
                      <div className="h-12 w-full rounded bg-stone-100"></div>
                      <span className="text-xs mt-1">Eggshell</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-2">
                      <div className="h-12 w-full rounded bg-stone-200"></div>
                      <span className="text-xs mt-1">Beige</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-2">
                      <div className="h-12 w-full rounded bg-gray-200"></div>
                      <span className="text-xs mt-1">Light Gray</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-2">
                      <div className="h-12 w-full rounded bg-blue-100"></div>
                      <span className="text-xs mt-1">Sky Blue</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-2">
                      <div className="h-12 w-full rounded bg-green-100"></div>
                      <span className="text-xs mt-1">Sage</span>
                    </Button>
                    <Button variant="outline" className="h-auto p-2">
                      <div className="h-12 w-full rounded bg-amber-100"></div>
                      <span className="text-xs mt-1">Cream</span>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6">
              <Button className="w-full">Apply Changes</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

