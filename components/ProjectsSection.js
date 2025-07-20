import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import TechIcon from "@/components/TechIcon";

const projects = [
  {
    title: "Food Delivery App",
    description:
      "Food Delivery App is a food delivery app designed for a single business, providing a seamless experience for customers to order their favorite meals and have them delivered right to their doorstep. Built with React Native and Expo, this app is tailored to enhance the customer experience by offering a user-friendly interface, real-time order tracking, and efficient delivery management.",
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
    date: "2024",
    projectLink: "https://github.com/WaliAmed/food-delivery-app",
  },
  {
    title: "Virtu Vault",
    description:
      "A multi-role dashboard developed with Vue.js and CSS3, designed to enhance engagement in crypto gaming while streamlining data and payment interactions for users and brands.",
    technologies: ["Vue.js", "MySQL", "Sass"],
    date: "2023",
    demoLink: "https://virtu-vault.vercel.app/",
    projectLink: "https://github.com/WaliAmed/virtu-vault",
  },
  {
    title: "Energy Tubs",
    description:
      "A React JS and Node JS-powered e-commerce web app, designed with React Styled Components, offering inventory management for the store and a user-friendly purchase history dashboard.",
    technologies: ["React JS", "Node Js", "Postgres"],
    date: "2024",
    demoLink: "https://energytubs.com",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
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
                  <span className="text-sm text-muted-foreground">
                    {project.date}
                  </span>
                </div>
                <CardDescription
                  className="text-base line-clamp-5"
                  title={project.description}
                >
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs flex items-center gap-1 border-border/50 p-1 px-2"
                    >
                      <TechIcon tech={tech} className="h-3 w-3" />
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.demoLink && (
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}

                  {project.projectLink && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/projects">
            <Button variant="outline" size="lg" className="px-12 py-1">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
