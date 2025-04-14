import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code2, Play } from "lucide-react"
import Image from "next/image"

// Sample product data - replace with your actual products
const products = [
  {
    id: 1,
    title: "Price Palette Perfect",
    description: "Price Palette Perfect is a responsive pricing table template for SaaS companies..",
    image: "/demo/price-palette-perfect/thumbnail.png",
    price: "$5",
    category: "CSS",
    url: "https://codecanyon.net/",
    demoUrl: "https://aifolio.click/demo/price-palette-perfect",
    sales: 124,
    rating: 4.8,
  },
  {
    id: 2,
    title: "E-commerce Plugin",
    description: "Enhance your online store with advanced features and analytics.",
    image: "/placeholder.svg?height=200&width=350",
    price: "$39",
    category: "Plugin",
    url: "#",
    demoUrl: "https://demo.yoursite.com/product-2",
    sales: 87,
    rating: 4.6,
  },
  {
    id: 3,
    title: "API Integration Tool",
    description: "Connect your application to popular services with this easy-to-use API tool.",
    image: "/placeholder.svg?height=200&width=350",
    price: "$35",
    category: "JavaScript",
    url: "#",
    demoUrl: "https://demo.yoursite.com/product-3",
    sales: 78,
    rating: 4.4,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">AIFolio</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Premium plugins, themes, and code solutions for your next project
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/aifolioofficial" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button size="lg" asChild>
            <a href="https://codecanyon.net/user/aifolio" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              CodeCanyon Profile
            </a>
          </Button>
        </div>
      </header>

      {/* Products Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow pt-6">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="bg-gray-100 dark:bg-gray-800">
                    {product.category}
                  </Badge>
                  <div className="text-lg font-bold text-green-600 dark:text-green-400">{product.price}</div>
                </div>
                <CardTitle className="mb-2">{product.title}</CardTitle>
                <CardDescription className="text-sm">{product.description}</CardDescription>
                <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="mr-4">{product.sales} sales</span>
                  <span>★ {product.rating}/5</span>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 px-6 pb-6">
  <div className="flex w-full gap-2">
    <Button
      variant="outline"
      size="sm"
      className="w-1/2 h-10 flex items-center justify-center"
      asChild
    >
      <a href={product.demoUrl} target="_blank" rel="noopener noreferrer">
        <Play className="mr-2 h-4 w-4" />
        Demo
      </a>
    </Button>
    <Button
      size="sm"
      className="w-1/2 h-10 flex items-center justify-center"
      asChild
    >
      <a href={product.url} target="_blank" rel="noopener noreferrer">
        <Code2 className="mr-2 h-4 w-4" />
        Purchase
      </a>
    </Button>
  </div>
</CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Need a custom solution?</h2>
          <p className="mb-8 max-w-xl mx-auto">
            We are available for freelance projects and custom development work. Let's create something amazing
            together!
          </p>
          <Button size="lg" asChild>
            <a href="https://codecanyon.net/user/aifolio" target="_blank" rel="noopener noreferrer">
              Contact Me
            </a>
          </Button>
          <div className="mt-12 text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} AIFolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
