import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, ImageIcon, Upload, Wand2 } from "lucide-react"
import { BeforeAfterGallery } from "@/components/before-after-gallery"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { DesignStyleShowcase } from "@/components/design-style-showcase"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000')] bg-cover bg-center opacity-10 z-0" />
        <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 w-fit">
                AI-Powered Interior Design
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transform Your Space with AI
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Upload a photo of your room and get instant interior design suggestions tailored to your space.
                  Explore different styles, furniture arrangements, and color schemes.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/design">
                  <Button size="lg" className="gap-1">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button size="lg" variant="outline">
                    View Examples
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">
              <div className="absolute -top-4 -left-4 h-72 w-72 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000"
                  alt="Interior design transformation example"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  width={550}
                  height={550}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <span className="text-sm font-medium bg-primary/90 px-2 py-1 rounded-full">
                      After Transformation
                    </span>
                    <h3 className="text-xl font-bold mt-2">Modern Living Room Design</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Designs */}
      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Featured Transformations</h2>
            <p className="text-muted-foreground max-w-[700px]">
              See how our AI has transformed these spaces with stunning design ideas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000"
                alt="Living room transformation"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold">Modern Living Room</h3>
                <p className="text-white/80 text-sm">Minimalist design with clean lines</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000"
                alt="Kitchen transformation"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold">Contemporary Kitchen</h3>
                <p className="text-white/80 text-sm">Sleek design with modern appliances</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1617104678098-de229db51175?q=80&w=1000"
                alt="Bedroom transformation"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold">Cozy Bedroom</h3>
                <p className="text-white/80 text-sm">Warm tones and soft textures</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000"
                alt="Office transformation"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold">Home Office</h3>
                <p className="text-white/80 text-sm">Productive space with elegant design</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/gallery">
              <Button variant="outline">
                View All Transformations <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-muted py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2000')] bg-repeat opacity-5 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI-powered platform makes interior design simple and accessible for everyone.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg p-6 bg-background shadow-sm border">
              <div className="bg-primary text-primary-foreground rounded-full p-3">
                <Upload className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Upload Your Room</h3>
              <p className="text-center text-muted-foreground">
                Take a photo of your room and upload it to our platform. Our AI will analyze the space, dimensions, and
                existing elements.
              </p>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000"
                alt="Upload room photo"
                className="rounded-lg w-full h-auto mt-2 aspect-video object-cover"
              />
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg p-6 bg-background shadow-sm border">
              <div className="bg-primary text-primary-foreground rounded-full p-3">
                <Wand2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Generate Designs</h3>
              <p className="text-center text-muted-foreground">
                Our AI analyzes your space and generates multiple design options in different styles tailored to your
                room's unique characteristics.
              </p>
              <img
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1000"
                alt="AI generating designs"
                className="rounded-lg w-full h-auto mt-2 aspect-video object-cover"
              />
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg p-6 bg-background shadow-sm border">
              <div className="bg-primary text-primary-foreground rounded-full p-3">
                <ImageIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Customize & Download</h3>
              <p className="text-center text-muted-foreground">
                Explore and customize designs to match your personal style. Adjust colors, furniture, and more before
                downloading your final design.
              </p>
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000"
                alt="Customize design"
                className="rounded-lg w-full h-auto mt-2 aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2000')] bg-repeat opacity-5 z-0" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Before & After Transformations</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See the amazing transformations our AI has created for real homes.
              </p>
            </div>
          </div>

          <BeforeAfterGallery />

          <div className="flex justify-center mt-12">
            <Link href="/gallery">
              <Button variant="outline" size="lg">
                View More Examples <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Design Styles */}
      <section className="bg-muted/50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Explore Design Styles</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover a variety of interior design styles for your space.
              </p>
            </div>
          </div>

          <DesignStyleShowcase />

          <div className="flex justify-center mt-12">
            <Link href="/design">
              <Button size="lg">
                Design Your Room Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2000')] bg-cover bg-center opacity-5 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 w-fit">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Benefits of AI Interior Design
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Our platform offers numerous advantages over traditional interior design services.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Save Time & Money</h3>
                    <p className="text-muted-foreground">
                      Get professional design ideas in minutes instead of weeks, at a fraction of the cost.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Unlimited Design Options</h3>
                    <p className="text-muted-foreground">
                      Explore multiple styles and variations until you find the perfect match for your space.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Personalized Recommendations</h3>
                    <p className="text-muted-foreground">
                      Our AI learns your preferences to provide increasingly tailored suggestions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Easy Visualization</h3>
                    <p className="text-muted-foreground">
                      See exactly how your space will look before making any purchases or changes.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -right-4 h-72 w-72 bg-primary/5 rounded-full blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000"
                alt="AI design process visualization"
                className="mx-auto rounded-xl shadow-xl"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Users Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from people who have transformed their spaces with RoomReimagine.
              </p>
            </div>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="relative overflow-hidden rounded-xl bg-primary px-6 py-12 md:px-12 md:py-24">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-primary/90" />
            <div className="relative z-10 flex flex-col items-center justify-center space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Ready to Transform Your Space?
              </h2>
              <p className="max-w-[600px] text-white/90 md:text-xl">
                Upload a photo of your room and get AI-generated design ideas in minutes. No commitment, no hassle.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/design">
                  <Button size="lg" variant="secondary" className="gap-1">
                    Start Designing Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    View Examples
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

