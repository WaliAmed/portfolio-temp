import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import TechIcon from "@/components/TechIcon"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with React.js and Node.js featuring user authentication, payment integration, and admin dashboard.",
    technologies: ["React JS", "Node.js", "MongoDB", "Stripe"],
    date: "2024",
    demoLink: "https://demo.example.com",
    projectLink: "https://github.com/example",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, built using Next.js and Laravel backend.",
    technologies: ["Next JS", "Laravel", "MySQL", "Socket.io"],
    date: "2023",
    demoLink: "https://demo.example.com",
    projectLink: "https://github.com/example",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing modern web development practices with Tailwind CSS and shadcn/ui.",
    technologies: ["Next JS", "Tailwind CSS", "Shad CN"],
    date: "2024",
    demoLink: "https://demo.example.com",
    projectLink: "https://github.com/example",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Some of my recent work that showcases my skills and experience
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="bg-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs flex items-center gap-1 border-border/50">
                      <TechIcon tech={tech} className="h-3 w-3" />
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
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
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/projects">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
