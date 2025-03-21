"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu, X, Home, Info, Phone, BookOpen, Palette, Image } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b shadow-sm" : "bg-background relative",
      )}
    >
      {!isScrolled && (
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2000')] bg-repeat opacity-[0.02] pointer-events-none"></div>
      )}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Palette className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">RoomReimagine</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), isActive("/") && "bg-accent text-accent-foreground")}
                    >
                      <Home className="mr-2 h-4 w-4" />
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                            href="/design"
                          >
                            <Image className="h-6 w-6 text-white" />
                            <div className="mt-4 mb-2 text-lg font-medium text-white">AI Room Design</div>
                            <p className="text-sm leading-tight text-white/90">
                              Upload a photo of your room and get AI-generated design ideas
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link href="/design" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Room Redesign</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Transform your existing spaces with AI
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/color-palette" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Color Palette</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Generate color schemes for your space
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                      <li>
                        <Link href="/furniture-finder" legacyBehavior passHref>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Furniture Finder</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Find furniture that matches your style
                            </p>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/gallery" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isActive("/gallery") && "bg-accent text-accent-foreground",
                      )}
                    >
                      <Image className="mr-2 h-4 w-4" />
                      Gallery
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isActive("/blog") && "bg-accent text-accent-foreground",
                      )}
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isActive("/about") && "bg-accent text-accent-foreground",
                      )}
                    >
                      <Info className="mr-2 h-4 w-4" />
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isActive("/contact") && "bg-accent text-accent-foreground",
                      )}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-2 ml-2">
              <ModeToggle />
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link href="/" onClick={closeMenu}>
              <Button
                variant="ghost"
                className={cn("w-full justify-start", isActive("/") && "bg-accent text-accent-foreground")}
              >
                <Home className="mr-2 h-4 w-4" />
                Home
              </Button>
            </Link>
            <Link href="/design" onClick={closeMenu}>
              <Button
                variant="ghost"
                className={cn("w-full justify-start", isActive("/design") && "bg-accent text-accent-foreground")}
              >
                <Palette className="mr-2 h-4 w-4" />
                Design Your Room
              </Button>
            </Link>
            <Link href="/gallery" onClick={closeMenu}>
              <Button
                variant="ghost"
                className={cn("w-full justify-start", isActive("/gallery") && "bg-accent text-accent-foreground")}
              >
                <Image className="mr-2 h-4 w-4" />
                Gallery
              </Button>
            </Link>
            <Link href="/blog" onClick={closeMenu}>
              <Button
                variant="ghost"
                className={cn("w-full justify-start", isActive("/blog") && "bg-accent text-accent-foreground")}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Blog
              </Button>
            </Link>
            <Link href="/about" onClick={closeMenu}>
              <Button
                variant="ghost"
                className={cn("w-full justify-start", isActive("/about") && "bg-accent text-accent-foreground")}
              >
                <Info className="mr-2 h-4 w-4" />
                About
              </Button>
            </Link>
            <Link href="/contact" onClick={closeMenu}>
              <Button
                variant="ghost"
                className={cn("w-full justify-start", isActive("/contact") && "bg-accent text-accent-foreground")}
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </Link>
            <div className="pt-4 border-t flex flex-col space-y-2">
              <Link href="/login" onClick={closeMenu}>
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link href="/signup" onClick={closeMenu}>
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

