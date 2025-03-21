"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageUploader } from "@/components/image-uploader"
import { DesignResults } from "@/components/design-results"
import { DesignCustomizer } from "@/components/design-customizer"
import { Loader2, Upload, ImageIcon, Wand2, Camera, CheckCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function DesignPage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [designsGenerated, setDesignsGenerated] = useState(false)
  const [activeTab, setActiveTab] = useState("upload")
  const [generationProgress, setGenerationProgress] = useState(0)
  const [processingStep, setProcessingStep] = useState(0)
  const router = useRouter()

  const processingSteps = [
    "Analyzing room dimensions and layout...",
    "Identifying furniture and architectural elements...",
    "Determining lighting conditions and color palette...",
    "Generating design styles and options...",
    "Finalizing design visualizations...",
  ]

  const handleImageUpload = (imageDataUrl: string) => {
    setUploadedImage(imageDataUrl)
  }

  const handleProcessImage = () => {
    if (!uploadedImage) return

    setIsProcessing(true)
    setGenerationProgress(0)
    setProcessingStep(0)

    // Simulate AI processing with progress updates
    const progressInterval = setInterval(() => {
      setGenerationProgress((prev) => {
        const newProgress = prev + Math.random() * 10
        return newProgress >= 100 ? 100 : newProgress
      })
    }, 300)

    // Simulate processing steps
    const stepInterval = setInterval(() => {
      setProcessingStep((prev) => {
        if (prev < processingSteps.length - 1) {
          return prev + 1
        }
        clearInterval(stepInterval)
        return prev
      })
    }, 1200)

    // Simulate AI processing completion
    setTimeout(() => {
      clearInterval(progressInterval)
      setGenerationProgress(100)

      setTimeout(() => {
        setIsProcessing(false)
        setDesignsGenerated(true)
        setActiveTab("results")
      }, 800)
    }, 6000)
  }

  const handleCustomize = () => {
    setActiveTab("customize")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Transform Your Space</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload a photo of your room and our AI will generate stunning interior design ideas tailored to your space.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="upload" className="flex items-center gap-2 py-3">
              <Upload className="h-4 w-4" />
              <span>Upload Photo</span>
            </TabsTrigger>
            <TabsTrigger value="results" disabled={!designsGenerated} className="flex items-center gap-2 py-3">
              <ImageIcon className="h-4 w-4" />
              <span>Design Results</span>
            </TabsTrigger>
            <TabsTrigger value="customize" disabled={!designsGenerated} className="flex items-center gap-2 py-3">
              <Wand2 className="h-4 w-4" />
              <span>Customize</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="mt-6">
            <Card className="border-2 border-dashed">
              <CardContent className="pt-6 pb-8">
                <ImageUploader onImageUpload={handleImageUpload} />

                {uploadedImage && (
                  <div className="mt-8">
                    {isProcessing ? (
                      <div className="space-y-6">
                        <div className="flex items-center justify-center gap-2">
                          <Loader2 className="h-5 w-5 animate-spin text-primary" />
                          <span className="font-medium">
                            {generationProgress < 100
                              ? "Analyzing your room and generating designs..."
                              : "Finalizing your designs..."}
                          </span>
                        </div>

                        <Progress value={generationProgress} className="h-2" />

                        <div className="text-center text-sm text-muted-foreground">
                          {processingSteps[processingStep]}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                          <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Loader2 className="h-6 w-6 animate-spin text-primary" />
                            </div>
                            {generationProgress > 25 && (
                              <img
                                src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=500"
                                alt="Modern design preview"
                                className="w-full h-full object-cover opacity-70"
                              />
                            )}
                          </div>
                          <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Loader2 className="h-6 w-6 animate-spin text-primary" />
                            </div>
                            {generationProgress > 45 && (
                              <img
                                src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=500"
                                alt="Scandinavian design preview"
                                className="w-full h-full object-cover opacity-70"
                              />
                            )}
                          </div>
                          <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Loader2 className="h-6 w-6 animate-spin text-primary" />
                            </div>
                            {generationProgress > 65 && (
                              <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=500"
                                alt="Industrial design preview"
                                className="w-full h-full object-cover opacity-70"
                              />
                            )}
                          </div>
                          <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Loader2 className="h-6 w-6 animate-spin text-primary" />
                            </div>
                            {generationProgress > 85 && (
                              <img
                                src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=500"
                                alt="Bohemian design preview"
                                className="w-full h-full object-cover opacity-70"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <Button
                          onClick={handleProcessImage}
                          disabled={isProcessing}
                          size="lg"
                          className="w-full max-w-md"
                        >
                          <Wand2 className="mr-2 h-5 w-5" />
                          Generate Design Ideas
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-muted/50 rounded-lg p-6 text-center">
                <div className="bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Take a Clear Photo</h3>
                <p className="text-muted-foreground text-sm">
                  Capture your room in good lighting from different angles for the best results.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 text-center">
                <div className="bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Wand2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">AI Generates Designs</h3>
                <p className="text-muted-foreground text-sm">
                  Our advanced AI analyzes your space and creates multiple design options in seconds.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 text-center">
                <div className="bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Instant Results</h3>
                <p className="text-muted-foreground text-sm">
                  Get professional design ideas in minutes, not weeks, and customize to your taste.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-muted/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-center">Example Transformations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1000"
                      alt="Before transformation"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-black/60 text-white px-3 py-1 text-sm">Before</div>
                  </div>
                  <p className="text-sm text-center text-muted-foreground">Traditional Living Room</p>
                </div>

                <div className="space-y-2">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1000"
                      alt="After transformation"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-primary/80 text-white px-3 py-1 text-sm">After</div>
                  </div>
                  <p className="text-sm text-center text-muted-foreground">Modern Redesign</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="results" className="mt-6">
            <DesignResults originalImage={uploadedImage} onCustomize={handleCustomize} />
          </TabsContent>

          <TabsContent value="customize" className="mt-6">
            <DesignCustomizer originalImage={uploadedImage} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

