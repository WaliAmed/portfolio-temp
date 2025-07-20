import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    title: "Building Scalable React Applications",
    description:
      "Best practices for structuring and organizing large-scale React applications for maintainability and performance.",
    date: "2024-01-15",
    readTime: "5 min read",
    slug: "building-scalable-react-applications",
  },
  {
    title: "Modern CSS Techniques with Tailwind",
    description:
      "Exploring advanced Tailwind CSS features and how to create beautiful, responsive designs efficiently.",
    date: "2024-01-10",
    readTime: "4 min read",
    slug: "modern-css-techniques-tailwind",
  },
  {
    title: "Full-Stack Development with Next.js",
    description: "A comprehensive guide to building full-stack applications using Next.js and its powerful features.",
    date: "2024-01-05",
    readTime: "8 min read",
    slug: "fullstack-development-nextjs",
  },
]

export default function ArticlesSection() {
  return (
    <section className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Latest Articles</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Insights and tutorials about web development and technology
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.slug} className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                <CardDescription className="line-clamp-3">{article.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <span>{article.readTime}</span>
                </div>
                <Button asChild variant="ghost" className="w-full justify-between">
                  <Link href={`/articles/${article.slug}`}>
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/articles">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
