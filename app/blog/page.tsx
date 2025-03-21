import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: "10 Modern Interior Design Trends for 2025",
    excerpt:
      "Discover the hottest interior design trends that are shaping homes this year, from sustainable materials to smart furniture.",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1000",
    date: "March 15, 2025",
    author: "Emma Rodriguez",
    category: "Trends",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "How AI is Revolutionizing Interior Design",
    excerpt:
      "Explore how artificial intelligence is transforming the interior design industry, making professional design accessible to everyone.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000",
    date: "March 10, 2025",
    author: "Michael Chen",
    category: "Technology",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Small Space Solutions: Maximizing Your Apartment",
    excerpt:
      "Learn clever design tricks to make the most of limited square footage without sacrificing style or functionality.",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000",
    date: "March 5, 2025",
    author: "Sarah Johnson",
    category: "Tips & Tricks",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Color Psychology: Choosing the Right Palette for Your Home",
    excerpt:
      "Understand how different colors affect mood and atmosphere, and how to select the perfect color scheme for each room.",
    image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1000",
    date: "February 28, 2025",
    author: "David Thompson",
    category: "Color Theory",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Before & After: 5 Stunning Room Transformations",
    excerpt:
      "See dramatic room makeovers and the design decisions that made them successful, with tips you can apply to your own space.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000",
    date: "February 20, 2025",
    author: "Emily Rodriguez",
    category: "Inspiration",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "Sustainable Design: Eco-Friendly Home Decor Ideas",
    excerpt:
      "Discover how to create a beautiful, environmentally conscious home with sustainable materials and ethical decor choices.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000",
    date: "February 15, 2025",
    author: "Alex Morgan",
    category: "Sustainability",
    readTime: "7 min read",
  },
]

// Categories for filter
const categories = ["All", "Trends", "Technology", "Tips & Tricks", "Color Theory", "Inspiration", "Sustainability"]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Design Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the latest trends, tips, and inspiration for transforming your living spaces.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-video md:aspect-auto">
              <img
                src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1000"
                alt="Featured blog post"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                  <span className="mx-2">•</span>
                  <span>March 20, 2025</span>
                  <span className="mx-2">•</span>
                  <span>12 min read</span>
                </div>
                <h2 className="text-3xl font-bold">The Future of Home Design: AI and Beyond</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Explore how artificial intelligence, virtual reality, and other emerging technologies are reshaping how
                we design and experience our living spaces, with predictions for the next decade of interior design
                innovation.
              </p>
              <div className="mt-auto">
                <Link href="/blog/future-of-home-design">
                  <Button>
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Category Filter */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {categories.map((category) => (
            <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden flex flex-col">
            <div className="relative aspect-video">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="object-cover w-full h-full" />
            </div>
            <CardContent className="p-6 flex-grow">
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold">{post.title}</h3>
              </div>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex justify-between items-center">
              <div className="text-sm text-muted-foreground">By {post.author}</div>
              <Link href={`/blog/${post.id}`}>
                <Button variant="ghost" size="sm">
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-muted rounded-xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000')] bg-cover bg-center opacity-5 z-0"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Get the latest design tips, trends, and inspiration delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-grow" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

