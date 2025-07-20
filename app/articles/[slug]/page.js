import ArticleClientPage from "./ArticleClientPage";

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

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const article = articles[resolvedParams.slug];

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }) {
  const resolvedParams = await params;
  return <ArticleClientPage params={resolvedParams} />;
}
