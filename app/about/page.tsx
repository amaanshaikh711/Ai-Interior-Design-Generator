import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Users, Lightbulb, Award, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About RoomReimagine</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're revolutionizing interior design with AI technology that makes beautiful spaces accessible to everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At RoomReimagine, we believe everyone deserves to live in a space they love. Our mission is to democratize
              interior design by making professional-quality design accessible, affordable, and easy to implement.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Using cutting-edge AI technology, we're breaking down the barriers that traditionally made interior design
              a luxury service, allowing anyone to transform their living spaces regardless of budget or design
              experience.
            </p>
            <Link href="/design">
              <Button size="lg" className="mt-4">
                Try It Yourself <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -right-4 h-72 w-72 bg-primary/5 rounded-full blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000"
              alt="The RoomReimagine team"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our core values guide everything we do as we work to transform the interior design industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-background rounded-lg p-6 shadow-sm border">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Accessibility</h3>
            <p className="text-muted-foreground">
              We believe great design should be available to everyone, regardless of budget or expertise.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm border">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-muted-foreground">
              We continuously push the boundaries of what's possible with AI and design technology.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm border">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p className="text-muted-foreground">
              We're committed to delivering high-quality design suggestions that truly transform spaces.
            </p>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm border">
            <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Simplicity</h3>
            <p className="text-muted-foreground">
              We make the design process simple and intuitive, eliminating complexity and confusion.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a simple idea to a revolutionary design platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">How It All Started</h3>
            <p className="text-lg text-muted-foreground mb-4">
              RoomReimagine began when our founders, a team of designers and AI engineers, recognized a fundamental
              problem: professional interior design was inaccessible to most people due to high costs and time
              constraints.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              They envisioned a future where anyone could upload a photo of their room and instantly receive
              professional-quality design suggestions tailored to their space and preferences.
            </p>
            <p className="text-lg text-muted-foreground">
              After years of development and refinement, RoomReimagine was born—combining cutting-edge AI technology
              with design expertise to make beautiful living spaces accessible to everyone.
            </p>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute -top-4 -left-4 h-72 w-72 bg-primary/5 rounded-full blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000"
              alt="The journey of RoomReimagine"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of interior design today.
          </p>
        </div>

        <div className="mt-16 bg-muted rounded-xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000')] bg-cover bg-center opacity-10 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">Ready to transform your space?</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Upload a photo of your room and see the magic happen in minutes. No commitment, no hassle—just beautiful
              design ideas tailored to your space.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/design">
                <Button size="lg">Design Your Room Now</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

