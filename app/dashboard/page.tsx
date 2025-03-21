"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Heart, Clock, Settings } from "lucide-react"

// Mock saved designs data
const savedDesigns = [
  {
    id: 1,
    name: "Living Room Redesign",
    date: "March 15, 2025",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Living+Room",
  },
  {
    id: 2,
    name: "Kitchen Makeover",
    date: "March 10, 2025",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Kitchen",
  },
  {
    id: 3,
    name: "Bedroom Update",
    date: "March 5, 2025",
    thumbnail: "/placeholder.svg?height=200&width=300&text=Bedroom",
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("designs")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">My Dashboard</h1>
          <p className="text-muted-foreground">Manage your designs and account</p>
        </div>
        <Link href="/design">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Design
          </Button>
        </Link>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="designs" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            <span className="hidden md:inline">My Designs</span>
            <span className="md:hidden">Designs</span>
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="hidden md:inline">History</span>
            <span className="md:hidden">History</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span className="hidden md:inline">Settings</span>
            <span className="md:hidden">Settings</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="designs" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedDesigns.map((design) => (
              <Card key={design.id}>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">{design.name}</CardTitle>
                  <CardDescription>{design.date}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={design.thumbnail || "/placeholder.svg"}
                      alt={design.name}
                      className="w-full h-auto object-cover aspect-video"
                    />
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </CardFooter>
              </Card>
            ))}

            <Card className="border-dashed">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[250px]">
                <PlusCircle className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-center mb-4">Create a new design project</p>
                <Link href="/design">
                  <Button>New Design</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your design history from the past 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg border">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Saved Living Room Design</h4>
                    <p className="text-sm text-muted-foreground">March 15, 2025 at 2:30 PM</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg border">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <PlusCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Created Kitchen Design</h4>
                    <p className="text-sm text-muted-foreground">March 10, 2025 at 10:15 AM</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg border">
                  <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Modified Bedroom Design</h4>
                    <p className="text-sm text-muted-foreground">March 5, 2025 at 4:45 PM</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences and settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Profile Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input type="text" className="w-full p-2 rounded-md border" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" className="w-full p-2 rounded-md border" defaultValue="john.doe@example.com" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Email Notifications</h4>
                      <p className="text-sm text-muted-foreground">Receive emails about your designs and updates</p>
                    </div>
                    <div className="h-6 w-11 bg-primary rounded-full relative">
                      <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Dark Mode</h4>
                      <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                    </div>
                    <div className="h-6 w-11 bg-muted rounded-full relative">
                      <div className="h-5 w-5 bg-background border rounded-full absolute top-0.5 left-0.5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

