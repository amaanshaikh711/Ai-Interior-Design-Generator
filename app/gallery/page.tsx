import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Heart, Eye, Download, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

// Sample gallery items with high-quality images
const galleryItems = [
  {
    id: 1,
    title: "Modern Living Room",
    description: "Clean lines and minimalist design transform this living space",
    before: "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1000",
    style: "Modern",
    likes: 245,
    views: 1.2,
    downloads: 89,
  },
  {
    id: 2,
    title: "Scandinavian Bedroom",
    description: "Light, airy bedroom with natural textures and minimal decor",
    before: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000",
    style: "Scandinavian",
    likes: 189,
    views: 0.9,
    downloads: 67,
  },
  {
    id: 3,
    title: "Industrial Kitchen",
    description: "Raw materials and exposed elements create a stylish cooking space",
    before: "https://images.unsplash.com/photo-1556911220-bda9f7f6b548?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000",
    style: "Industrial",
    likes: 156,
    views: 0.8,
    downloads: 52,
  },
  {
    id: 4,
    title: "Bohemian Dining Room",
    description: "Eclectic mix of patterns, textures, and global influences",
    before: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1000",
    style: "Bohemian",
    likes: 210,
    views: 1.0,
    downloads: 73,
  },
  {
    id: 5,
    title: "Minimalist Home Office",
    description: "Clutter-free workspace focused on productivity and calm",
    before: "https://images.unsplash.com/photo-1544140708-514b7837e6b5?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1593476550610-87baa860004a?q=80&w=1000",
    style: "Minimalist",
    likes: 178,
    views: 0.7,
    downloads: 61,
  },
  {
    id: 6,
    title: "Traditional Master Bedroom",
    description: "Classic elegance with rich colors and ornate details",
    before: "https://images.unsplash.com/photo-1560448204-e02f11c3d0c2?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000",
    style: "Traditional",
    likes: 132,
    views: 0.6,
    downloads: 45,
  },
  {
    id: 7,
    title: "Contemporary Bathroom",
    description: "Sleek fixtures and clean lines create a spa-like retreat",
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1000",
    style: "Contemporary",
    likes: 165,
    views: 0.85,
    downloads: 58,
  },
  {
    id: 8,
    title: "Mid-Century Modern Living Room",
    description: "Retro-inspired space with iconic furniture pieces",
    before: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1000",
    style: "Mid-Century",
    likes: 198,
    views: 0.95,
    downloads: 71,
  },
  {
    id: 9,
    title: "Coastal Sunroom",
    description: "Bright, airy space with beach-inspired colors and textures",
    before: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1000",
    style: "Coastal",
    likes: 142,
    views: 0.7,
    downloads: 49,
  },
]

// Room types for filter
const roomTypes = ["All Rooms", "Living Room", "Bedroom", "Kitchen", "Dining Room", "Office", "Bathroom", "Sunroom"]

// Design styles for filter
const designStyles = [
  "All Styles",
  "Modern",
  "Scandinavian",
  "Industrial",
  "Bohemian",
  "Minimalist",
  "Traditional",
  "Mid-Century",
  "Coastal",
  "Contemporary",
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Design Gallery</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our collection of AI-generated interior design transformations for inspiration.
        </p>
      </div>

      {/* Featured Transformation */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-video md:aspect-auto">
              <img
                src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1000"
                alt="Before transformation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Before</span>
              </div>
            </div>
            <div className="relative aspect-video md:aspect-auto">
              <img
                src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000"
                alt="After transformation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-xl font-bold">After</span>
              </div>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold">Luxury Penthouse Transformation</h2>
                <p className="text-muted-foreground">
                  A complete redesign of a city penthouse into a modern luxury space with panoramic views.
                </p>
              </div>
              <Link href="/design">
                <Button>
                  Create Your Own <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search designs..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <TabsList className="bg-muted">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              <select className="bg-background border rounded-md px-3 py-2 text-sm">
                <option value="">Room Type</option>
                {roomTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <select className="bg-background border rounded-md px-3 py-2 text-sm">
                <option value="">Design Style</option>
                {designStyles.map((style) => (
                  <option key={style} value={style}>
                    {style}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <div className="absolute inset-0 z-10">
                      <img
                        src={item.before || "/placeholder.svg"}
                        alt={`Before: ${item.title}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-white text-lg font-bold">Before</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <img
                        src={item.after || "/placeholder.svg"}
                        alt={`After: ${item.title}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-white text-lg font-bold">After</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.style} Style</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Heart className="h-3 w-3" /> {item.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" /> {item.views}k
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="h-3 w-3" /> {item.downloads}
                        </span>
                      </div>
                      <Link href={`/gallery/${item.id}`}>
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems
                .sort((a, b) => b.likes - a.likes)
                .map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <div className="absolute inset-0 z-10">
                        <img
                          src={item.before || "/placeholder.svg"}
                          alt={`Before: ${item.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="text-white text-lg font-bold">Before</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <img
                          src={item.after || "/placeholder.svg"}
                          alt={`After: ${item.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="text-white text-lg font-bold">After</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.style} Style</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Heart className="h-3 w-3" /> {item.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" /> {item.views}k
                          </span>
                          <span className="flex items-center gap-1">
                            <Download className="h-3 w-3" /> {item.downloads}
                          </span>
                        </div>
                        <Link href={`/gallery/${item.id}`}>
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          {/* Other tabs would have similar content */}
          <TabsContent value="recent" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems
                .slice()
                .reverse()
                .map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <div className="absolute inset-0 z-10">
                        <img
                          src={item.before || "/placeholder.svg"}
                          alt={`Before: ${item.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="text-white text-lg font-bold">Before</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <img
                          src={item.after || "/placeholder.svg"}
                          alt={`After: ${item.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="text-white text-lg font-bold">After</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.style} Style</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Heart className="h-3 w-3" /> {item.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" /> {item.views}k
                          </span>
                          <span className="flex items-center gap-1">
                            <Download className="h-3 w-3" /> {item.downloads}
                          </span>
                        </div>
                        <Link href={`/gallery/${item.id}`}>
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="trending" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems
                .sort((a, b) => b.views - a.views)
                .map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <div className="absolute inset-0 z-10">
                        <img
                          src={item.before || "/placeholder.svg"}
                          alt={`Before: ${item.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="text-white text-lg font-bold">Before</span>
                        </div>
                      </div>
                      <div className="absolute inset-0 z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <img
                          src={item.after || "/placeholder.svg"}
                          alt={`After: ${item.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="text-white text-lg font-bold">After</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.style} Style</p>
                        </div>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Heart className="h-3 w-3" /> {item.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" /> {item.views}k
                          </span>
                          <span className="flex items-center gap-1">
                            <Download className="h-3 w-3" /> {item.downloads}
                          </span>
                        </div>
                        <Link href={`/gallery/${item.id}`}>
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Featured Transformations Grid */}
      <div className="mt-12 mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Transformations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?q=80&w=1000"
                alt="Before transformation"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 text-sm rounded-md">Before</div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1000"
                alt="After transformation"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-primary/80 text-white px-3 py-1 text-sm rounded-md">
                After
              </div>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-bold">Modern Living Room Transformation</h3>
              <p className="text-sm text-muted-foreground">
                This living room was transformed from a traditional style to a clean, modern aesthetic with minimalist
                furniture and a neutral color palette.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556911220-bda9f7f6b548?q=80&w=1000"
                alt="Before transformation"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 text-sm rounded-md">Before</div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000"
                alt="After transformation"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-primary/80 text-white px-3 py-1 text-sm rounded-md">
                After
              </div>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <h3 className="font-bold">Industrial Kitchen Redesign</h3>
              <p className="text-sm text-muted-foreground">
                This kitchen was transformed from a classic style to an industrial chic space with exposed brick, metal
                fixtures, and reclaimed wood elements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-12">
        <Button variant="outline" size="lg">
          Load More Designs
        </Button>
      </div>

      {/* Before & After Showcase */}
      <div className="mt-16 mb-16">
        <h2 className="text-2xl font-bold mb-6">Before & After Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544140708-514b7837e6b5?q=80&w=500"
                  alt="Before office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">Before</span>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1593476550610-87baa860004a?q=80&w=500"
                  alt="After office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">After</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-center">Minimalist Home Office</p>
          </div>

          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=500"
                  alt="Before bedroom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">Before</span>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=500"
                  alt="After bedroom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">After</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-center">Scandinavian Bedroom</p>
          </div>

          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617097669521-98a2e958d150?q=80&w=500"
                  alt="Before dining room"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">Before</span>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=500"
                  alt="After dining room"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">After</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-center">Bohemian Dining Room</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-muted rounded-xl p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000')] bg-cover bg-center opacity-10 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 z-0"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Upload a photo of your room and see how our AI can transform it with different design styles.
          </p>
          <Link href="/design">
            <Button size="lg">
              Start Your Design Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

