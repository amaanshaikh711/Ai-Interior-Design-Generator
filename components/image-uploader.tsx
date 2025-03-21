"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, Camera, ImageIcon, X } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ImageUploaderProps {
  onImageUpload: (imageDataUrl: string) => void
}

export function ImageUploader({ onImageUpload }: ImageUploaderProps) {
  const [dragActive, setDragActive] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    // Reset error state
    setError(null)

    // Check if file is an image
    if (!file.type.match("image.*")) {
      setError("Please upload an image file (JPG, PNG, etc.)")
      return
    }

    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError("Image size should be less than 10MB")
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      setPreviewUrl(result)
      onImageUpload(result)
    }
    reader.readAsDataURL(file)
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleRemoveImage = () => {
    setPreviewUrl(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div
        className={`relative rounded-lg border-2 border-dashed transition-colors ${
          dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleChange} />

        {previewUrl ? (
          <div className="flex flex-col items-center p-6">
            <div className="relative w-full max-w-md overflow-hidden rounded-lg">
              <img src={previewUrl || "/placeholder.svg"} alt="Room preview" className="w-full h-auto object-contain" />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8 rounded-full opacity-80 hover:opacity-100"
                onClick={handleRemoveImage}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-4 mt-6">
              <Button variant="outline" onClick={handleButtonClick}>
                <Camera className="mr-2 h-4 w-4" />
                Change Image
              </Button>
              <Button variant="default" onClick={handleButtonClick}>
                <Upload className="mr-2 h-4 w-4" />
                Upload Another
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4 py-12 px-4">
            <div className="rounded-full bg-primary/10 p-4">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">Drag and drop your room photo</p>
              <p className="text-sm text-muted-foreground">or click to browse files (JPG, PNG)</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" onClick={handleButtonClick}>
                <Camera className="mr-2 h-4 w-4" />
                Take Photo
              </Button>
              <Button variant="default" onClick={handleButtonClick}>
                <ImageIcon className="mr-2 h-4 w-4" />
                Browse Files
              </Button>
            </div>
          </div>
        )}
      </div>

      {!previewUrl && (
        <div className="mt-8 bg-muted/50 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Tips for best results:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-5 space-y-0">
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
              </div>
              <span className="text-muted-foreground">Use well-lit photos of your room</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
              </div>
              <span className="text-muted-foreground">Capture the entire room if possible</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
              </div>
              <span className="text-muted-foreground">Clear clutter for more accurate design suggestions</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
              </div>
              <span className="text-muted-foreground">Take photos from different angles for better results</span>
            </li>
          </ul>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <img
              src="/placeholder.svg?height=150&width=250&text=Good+Example"
              alt="Good photo example"
              className="rounded-lg w-full h-auto"
            />
            <img
              src="/placeholder.svg?height=150&width=250&text=Good+Lighting"
              alt="Good lighting example"
              className="rounded-lg w-full h-auto"
            />
            <img
              src="/placeholder.svg?height=150&width=250&text=Good+Angle"
              alt="Good angle example"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  )
}

