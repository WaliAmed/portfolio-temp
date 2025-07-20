import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "Getting Started with Next.js 14: A Complete Guide",
    description:
      "Learn how to build modern web applications with Next.js 14, including the new App Router, Server Components, and more.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Next.js",
    slug: "getting-started-with-nextjs",
    featured: false,
  },
  {
    title: "Mastering React Hooks: Advanced Patterns and Best Practices",
    description:
      "Deep dive into React Hooks with advanced patterns, custom hooks, and performance optimization techniques.",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "React",
    slug: "mastering-react-hooks",
    featured: false,
  },
  {
    title: "Building Scalable APIs with Node.js and Express",
    description:
      "Learn how to design and build robust, scalable APIs using Node.js, Express, and modern best practices.",
    date: "2024-01-05",
    readTime: "15 min read",
    category: "Node.js",
    slug: "building-scalable-apis",
    featured: false,
  },
];

export default function Articles() {
  const otherArticles = articles.filter((article) => !article.featured);

  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Articles
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Insights, tutorials, and thoughts about web development and
            technology
          </p>
        </div>

        {/* Other Articles */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherArticles.map((article) => (
              <Card
                key={article.slug}
                className="bg-card hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs px-2 py-1">
                      {article.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-sm">
                    {article.description}
                  </CardDescription>
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
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between p-0 h-auto"
                  >
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
  );
}
