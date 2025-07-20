import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar } from "lucide-react"
import TechIcon from "@/components/TechIcon"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution built with React.js and Node.js. Features include user authentication, payment processing, inventory management, and an admin dashboard. The platform handles thousands of products and supports multiple payment gateways.",
    technologies: ["React JS", "Node.js", "MongoDB", "Stripe", "AWS"],
    date: "2024-01-15",
    demoLink: "https://demo.example.com",
    projectLink: "https://github.com/example",
    featured: true,
  },
  {
    title: "Task Management Application",
    description:
      "A collaborative task management tool with real-time updates, team collaboration features, and project tracking. Built using Next.js for the frontend and Laravel for the backend API.",
    technologies: ["Next JS", "Laravel", "MySQL", "Socket.io", "Redis"],
    date: "2023-12-10",
    demoLink: "https://demo.example.com",
    projectLink: "https://github.com/example",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing web development projects. Built with Next.js and styled using Tailwind CSS with shadcn/ui components.",
    technologies: ["Next JS", "Tailwind CSS", "Shad CN", "Vercel"],
    date: "2024-01-20",
    demoLink: "https://demo.example.com",
    projectLink: "https://github.com/example",
    featured: false,
  },
  {
    title: "Blog Management System",
    description:
      "A full-featured blog platform with content management, user roles, and SEO optimization. Includes a rich text editor and media management system.",
    technologies: ["React JS", "Node.js", "PostgreSQL", "AWS S3"],
    date: "2023-11-05",
    demoLink: "https://demo.example.com",
    projectLink: "https://github.com/example",
    featured: false,
  },
  {
    title: "Real Estate Platform",
    description:
      "A property listing and management platform with advanced search filters, virtual tours, and agent management. Integrated with mapping services and payment processing.",
    technologies: ["Next JS", "Laravel", "MySQL", "Google Maps API"],
    date: "2023-10-15",
    demoLink: "https://demo.example.com",
    projectLink: "https://github.com/example",
    featured: false,
  },
  {
    title: "Learning Management System",
    description:
      "An educational platform with course management, student progress tracking, and interactive learning modules. Features video streaming and quiz functionality.",
    technologies: ["React JS", "Node.js", "MongoDB", "Video.js"],
    date: "2023-09-20",
    demoLink: "https://demo.example.com",
    projectLink: "https://github.com/example",
    featured: false,
  },
]

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">My Projects</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            A collection of projects that showcase my skills and experience
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.title} className="bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(project.date).toLocaleDateString()}
                      </div>
                    </div>
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <CardDescription className="text-base mt-4">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs flex items-center gap-1 border-border/50">
                        <TechIcon tech={tech} className="h-3 w-3" />
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card key={project.title} className="bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(project.date).toLocaleDateString()}
                  </div>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs flex items-center gap-1 border-border/50">
                        <TechIcon tech={tech} className="h-3 w-3" />
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
