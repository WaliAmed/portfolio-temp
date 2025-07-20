import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "Getting Started with Next.js 14: A Complete Guide",
    description:
      "Learn how to build modern web applications with Next.js 14, including the new App Router, Server Components, and more.",
    category: "Next.js",
    slug: "getting-started-with-nextjs",
    featured: false,
    date: "2025-07-20",
    readTime: "10 min read",
    tags: [
      "Next.js",
      "React",
      "Web Development",
      "Server Actions",
      "Partial Prerendering",
    ],
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
export default function ArticlesSection() {
  return (
    <section className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Latest Articles
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Insights and tutorials about web development and technology
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map((article) => (
            <Card
              key={article.slug}
              className="bg-card hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-xl line-clamp-2">
                  {article.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <span>{article.readTime}</span>
                </div>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between"
                >
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
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent px-12 py-1"
            >
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
