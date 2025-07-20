"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Sample article data - in a real app, this would come from a CMS or database
const articles = {
  "getting-started-with-nextjs": {
    title: "Getting Started with Next.js 14 (and Beyond): A Complete Guide",
    excerpt:
      "Discover how to build modern, high‑performance web applications with Next.js 14 and beyond. Learn about the App Router, Server Components, Turbopack, Partial Prerendering, and more cutting‑edge features.",
    content: `# Getting Started with Next.js 14 (and Beyond): A Complete Guide

Next.js 14 and its subsequent updates (rolling through 2024 and 2025) mark a **huge leap in React‑based web development**. With a strong focus on speed, scalability, and developer experience, Next.js has evolved into a complete toolkit for building **modern full‑stack applications**.

---

## 🚀 What’s New in Next.js 14+

### ✅ App Router (Stable and Improved)
The App Router introduced in Next.js 13 is now fully stable and **refined in v14+**, offering:
- **Layouts and Nested Routes** — Create persistent UI shells and nest routes with ease.
- **Server Components by default** — Faster initial loads and improved SEO.
- **Streaming and Suspense** — Render content progressively for a better user experience.

### ⚡ Turbopack (Beta, but production-ready for many cases)
Turbopack, the Rust-based successor to Webpack, continues to mature:
- **Incredibly fast Hot Module Replacement** (HMR).
- Near‑instant cold starts and rebuilds.
- Fine‑grained caching to speed up dev cycles.

### ✨ Partial Prerendering (Experimental 2025)
One of the most exciting experimental features in 2025 is **Partial Prerendering (PPR)**:
- Combines the best of **Static Generation (SSG)** and **Server-Side Rendering (SSR)**.
- Statically generate as much as possible while dynamically streaming in personalized or non‑cacheable parts.
- Great for dashboards, multi‑tenant apps, and authenticated experiences.

### 🛠️ Server Actions (Latest)
Server Actions are now supported, enabling you to:
- Mutate data directly in Server Components.
- Avoid writing manual API routes for common mutations.
- Simplify full‑stack development by keeping logic close to your UI.

### 🌍 Edge Runtime Improvements
Deploying to the Edge is now seamless:
- Faster TTFB (Time to First Byte) by running closer to users.
- Native support for **middleware** and **Edge Functions**.
- Ideal for personalized content and low‑latency apps.

---

## ⚙️ Setting Up Your First Next.js 14+ Project

Getting started is still straightforward:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

**Tip:** Use the \`--typescript\` flag for built‑in TypeScript support:
\`\`\`bash
npx create-next-app@latest my-app --typescript
\`\`\`

---

## 🌟 Key Features to Explore

### Server Components (Default)
Server Components allow direct access to databases and backend resources without exposing them to the client:
\`\`\`jsx
// This is a Server Component by default
async function BlogPost({ id }) {
  const post = await fetchPost(id);
  return <article>{post.content}</article>;
}
\`\`\`

### Client Components
Use the \`'use client'\` directive when interactivity is needed:
\`\`\`jsx
'use client'
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>
}
\`\`\`

### Server Actions
Simplify your data mutations:
\`\`\`jsx
// app/posts/page.jsx
export default function Posts() {
  async function addPost(formData) {
    'use server'
    await db.post.create({ title: formData.get('title') })
  }

  return (
    < form 
    action={addPost}
    >
      < input 
      name="title" 
      />
      < button 
      type="submit"
      >Add
      </ button>
    < />
  )
}
\`\`\`

---

## ✅ Best Practices in 2024/2025

1. **Default to Server Components** — lean on them for performance and SEO.
2. **Embrace Partial Prerendering (PPR)** — mix static and dynamic rendering for optimal UX.
3. **Minimize Client Components** — only where interactivity is essential.
4. **Utilize Server Actions** — reduce boilerplate API routes.
5. **Deploy at the Edge** — leverage Vercel or your own Edge network for ultra‑low latency.
6. **Monitor and Optimize** — use Vercel Analytics or OpenTelemetry integrations for performance insights.

---

## 🌐 DevOps and Deployment Notes

- **CI/CD Ready:** Next.js integrates seamlessly with GitHub Actions, GitLab CI, or any CI/CD platform.
- **VPS Deployments:** You can build and deploy on a VPS using Docker or PM2 for production.
- **AWS & S3 Support:** Store and serve images or assets directly from S3, or use the Image Optimization API with remote patterns.

---

## 📈 Why Next.js 14+ Is the Future

With **faster builds**, **smarter rendering**, and **simplified full‑stack patterns**, Next.js is more than a frontend framework — it's a robust platform for **enterprise‑grade applications**.

**Start experimenting with Partial Prerendering, Server Actions, and Edge deployments today to future‑proof your projects.**

---

Happy building! ✨`,
    author: "Wali Ahmed",
    publishedAt: "2025-07-20",
    readTime: "10 min read",
    tags: [
      "Next.js",
      "React",
      "Web Development",
      "Server Actions",
      "Partial Prerendering",
    ],
    image: "/nextjs.webp",
  },

  "mastering-react-hooks": {
    title: "Mastering React Hooks: Advanced Patterns and Best Practices",
    excerpt:
      "Deep dive into React Hooks with advanced patterns, custom hooks, and performance optimization techniques.",
    content: `# Mastering React Hooks: Advanced Patterns and Best Practices

React Hooks have revolutionized how we write React components, making functional components more powerful and eliminating the need for class components in most cases.

## Understanding the Hook Rules

Before diving into advanced patterns, it's crucial to understand the fundamental rules:

1. **Only call Hooks at the top level** - Never inside loops, conditions, or nested functions
2. **Only call Hooks from React functions** - Either React components or custom Hooks

## Advanced Hook Patterns

### Custom Hooks for Data Fetching

\`\`\`jsx
function useApi(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}
\`\`\`

### useReducer for Complex State

When state logic becomes complex, useReducer is often better than useState:

\`\`\`jsx
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text, done: false }]
    case 'TOGGLE_TODO':
      return state.map(todo => 
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      )
    default:
      return state
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, [])
  
  return (
    // Your component JSX
  )
}
\`\`\`

## Performance Optimization

### useMemo and useCallback

Use these hooks to prevent unnecessary re-renders:

\`\`\`jsx
function ExpensiveComponent({ items, filter }) {
  const filteredItems = useMemo(() => 
    items.filter(item => item.category === filter),
    [items, filter]
  )

  const handleClick = useCallback((id) => {
    // Handle click logic
  }, [])

  return (
    // Component JSX
  )
}
\`\`\`

## Conclusion

Mastering React Hooks takes practice, but the patterns shown here will help you write more efficient and maintainable React applications.`,
    author: "Wali Ahmed",
    publishedAt: "2024-01-10",
    readTime: "12 min read",
    tags: ["React", "Hooks", "JavaScript", "Performance"],
    image: "/hooks.png",
  },
  "building-scalable-apis": {
    title: "Building Scalable APIs with Node.js and Express",
    excerpt:
      "Learn how to design and build robust, scalable APIs using Node.js, Express, and modern best practices.",
    content: `# Building Scalable APIs with Node.js and Express

Building scalable APIs is crucial for modern web applications. This guide covers essential patterns and practices for creating robust backend services.

## Project Structure

A well-organized project structure is the foundation of maintainable code:

\`\`\`
src/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
└── app.js
\`\`\`

## Essential Middleware

### Error Handling
\`\`\`javascript
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500
  res.status(statusCode).json({
    success: false,
    error: err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  })
}
\`\`\`

### Rate Limiting
\`\`\`javascript
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})

app.use('/api/', limiter)
\`\`\`

## Database Integration

### Using Mongoose with MongoDB
\`\`\`javascript
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', userSchema)
\`\`\`

## Authentication & Authorization

Implement JWT-based authentication:

\`\`\`javascript
const jwt = require('jsonwebtoken')

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' })
}

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '')
  
  if (!token) {
    return res.status(401).json({ error: 'Access denied' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.userId = decoded.userId
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' })
  }
}
\`\`\`

## Testing Your API

Use Jest and Supertest for comprehensive testing:

\`\`\`javascript
const request = require('supertest')
const app = require('../app')

describe('POST /api/users', () => {
  it('should create a new user', async () => {
    const userData = {
      name: 'John Doe',
      email: 'john@example.com'
    }

    const response = await request(app)
      .post('/api/users')
      .send(userData)
      .expect(201)

    expect(response.body.name).toBe(userData.name)
  })
})
\`\`\`

## Deployment Considerations

- Use environment variables for configuration
- Implement proper logging with Winston
- Set up monitoring with tools like New Relic or DataDog
- Use PM2 for process management in production

## Conclusion

Building scalable APIs requires careful planning and adherence to best practices. Focus on clean architecture, proper error handling, and comprehensive testing to create robust backend services.`,
    author: "Wali Ahmed",
    publishedAt: "2024-01-05",
    readTime: "15 min read",
    tags: ["Node.js", "Express", "API", "Backend", "JavaScript"],
    image: "/nodeapis.png",
  },
};

export default function ArticleClientPage({ params }) {
  const article = articles[params.slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link href="/articles">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/articles">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Articles
            </Button>
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Article Header */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="px-2 py-1">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#747474] flex items-center justify-center text-white font-medium">
                W
              </div>
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden mb-12">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          <div
            className="article-content"
            dangerouslySetInnerHTML={{
              __html: article.content
                .replace(/\n/g, "<br>")
                .replace(
                  /#{3}\s(.+)/g,
                  '<h3 class="text-lg font-semibold mt-6 mb-3">$1</h3>'
                )
                .replace(
                  /#{2}\s(.+)/g,
                  '<h2 class="text-xl font-semibold mt-8 mb-4">$1</h2>'
                )
                .replace(
                  /#{1}\s(.+)/g,
                  '<h1 class="text-2xl font-bold mt-10 mb-5">$1</h1>'
                )
                .replace(
                  /```(\w+)?\n([\s\S]*?)```/g,
                  '<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-6"><code class="text-sm">$2</code></pre>'
                )
                .replace(
                  /`([^`]+)`/g,
                  '<code class="bg-muted px-2 py-1 rounded text-sm">$1</code>'
                )
                .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                .replace(/\*(.+?)\*/g, "<em>$1</em>")
                .replace(/^\d+\.\s(.+)/gm, '<li class="ml-4">$1</li>')
                .replace(/^-\s(.+)/gm, '<li class="ml-4">$1</li>'),
            }}
          />
        </div>

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#747474] flex items-center justify-center text-white font-medium text-lg">
                W
              </div>
              <div>
                <p className="font-medium">{article.author}</p>
                <p className="text-sm text-muted-foreground">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">More Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(articles)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 2)
              .map(([slug, relatedArticle]) => (
                <Card
                  key={slug}
                  className="group hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {relatedArticle.tags.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs px-2 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-[#747474] transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{relatedArticle.readTime}</span>
                      <Link href={`/articles/${slug}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-auto p-0 text-[#747474]"
                        >
                          Read More →
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </article>

      <style jsx>{`
        .article-content h1,
        .article-content h2,
        .article-content h3 {
          color: #1a1a1a;
        }
        .article-content p {
          margin-bottom: 1.5rem;
          line-height: 1.7;
          color: #4a4a4a;
        }
        .article-content ul,
        .article-content ol {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }
        .article-content li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        .article-content pre {
          font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
        }
        .article-content code {
          font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
