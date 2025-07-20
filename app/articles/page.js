import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    title: "Building Scalable React Applications",
    description:
      "Learn best practices for structuring and organizing large-scale React applications. This comprehensive guide covers component architecture, state management, and performance optimization techniques.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    slug: "building-scalable-react-applications",
    featured: true,
  },
  {
    title: "Modern CSS Techniques with Tailwind",
    description:
      "Explore advanced Tailwind CSS features and learn how to create beautiful, responsive designs efficiently. Discover utility-first CSS methodology and custom component creation.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "CSS",
    slug: "modern-css-techniques-tailwind",
    featured: true,
  },
  {
    title: "Full-Stack Development with Next.js",
    description:
      "A comprehensive guide to building full-stack applications using Next.js. Learn about API routes, server-side rendering, and deployment strategies.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Next.js",
    slug: "fullstack-development-nextjs",
    featured: false,
  },
  {
    title: "State Management in React: Redux vs Context",
    description:
      "Compare different state management solutions in React applications. Learn when to use Redux, Context API, or other state management libraries.",
    date: "2023-12-20",
    readTime: "7 min read",
    category: "React",
    slug: "state-management-react-redux-context",
    featured: false,
  },
  {
    title: "Optimizing Web Performance",
    description:
      "Essential techniques for improving web application performance. Cover code splitting, lazy loading, image optimization, and caching strategies.",
    date: "2023-12-15",
    readTime: "9 min read",
    category: "Performance",
    slug: "optimizing-web-performance",
    featured: false,
  },
  {
    title: "TypeScript Best Practices",
    description:
      "Master TypeScript with these essential best practices. Learn about type definitions, generics, and how to write more maintainable code.",
    date: "2023-12-10",
    readTime: "6 min read",
    category: "TypeScript",
    slug: "typescript-best-practices",
    featured: false,
  },
  {
    title: "API Design and Development",
    description:
      "Learn how to design and build robust APIs using Node.js and Express. Cover authentication, validation, error handling, and documentation.",
    date: "2023-12-05",
    readTime: "8 min read",
    category: "Backend",
    slug: "api-design-development",
    featured: false,
  },
  {
    title: "Responsive Design Principles",
    description:
      "Master responsive web design with modern CSS techniques. Learn about mobile-first design, flexbox, grid, and media queries.",
    date: "2023-11-30",
    readTime: "5 min read",
    category: "CSS",
    slug: "responsive-design-principles",
    featured: false,
  },
]

const categories = ["All", "React", "Next.js", "CSS", "TypeScript", "Backend", "Performance"]

export default function Articles() {
  const featuredArticles = articles.filter((article) => article.featured)
  const otherArticles = articles.filter((article) => !article.featured)

  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Articles</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Insights, tutorials, and thoughts about web development and technology
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm" className="text-sm">
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Articles */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.slug} className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-3 text-base">{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                  <Button asChild variant="ghost" className="w-full justify-between p-0 h-auto">
                    <Link
                      href={`/articles/${article.slug}`}
                      className="flex items-center justify-between w-full p-3 hover:bg-muted rounded-md"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Articles */}
        <div>
          <h2 className="text-2xl font-bold mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherArticles.map((article) => (
              <Card key={article.slug} className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-3 text-sm">{article.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <Button asChild variant="ghost" size="sm" className="w-full justify-between p-0 h-auto">
                    <Link
                      href={`/articles/${article.slug}`}
                      className="flex items-center justify-between w-full p-2 hover:bg-muted rounded-md"
                    >
                      <span className="text-sm">Read More</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
