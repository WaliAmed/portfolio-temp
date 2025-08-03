"use client";

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
import TechIcon from "@/components/TechIcon";
import { useState } from "react";

const projects = [
  {
    logo: "/needle.png",
    logoCss: "bg-[#1F2C45] p-2 rounded-full w-20 mb-4 ",
    title: "Needle",
    description:
      "Needle is an AI-powered candidate evaluation platform built specifically for founders, executive recruiters, and HR leaders who are hiring for strategic and leadership roles. The goal was to streamline the early-stage hiring process by reducing manual resume screening and surfacing the best-fit candidates faster. Users can upload resumes in bulk, and within minutes, Needle ranks candidates based on custom criteria and provides transparent justifications for each recommendation.\n\nWe built Needle using a modern web stack optimized for scalability, speed, and security. The frontend is built with Next.js, Tailwind CSS, and ShadCN UI for a fast and responsive user experience. On the backend, we used Postgres for structured data storage, with AWS services including S3 for file handling. User authentication and access control are managed via Clerk, payments are integrated through Stripe, and GitHub Actions handles continuous deployment. We also incorporated real-time visual analytics using Chart.js to help teams better understand candidate metrics and rankings.\n\nTechnologies: Next.js, JavaScript, Tailwind CSS, ShadCN UI, Postgres, AWS S3, Clerk, Stripe, GitHub CI/CD, Chart.js.",
    technologies: [
      "Next JS",
      "JavaScript",
      "Tailwind CSS",
      "Shad CN",
      "Postgres",
      "AWS",
      "AWS S3",
      "GitHub CI/CD",
      "Clerk",
      "Stripe",
      "Chart Js",
    ],
    date: "2025",
    demoLink: "https://dev.needlematch.com/",
    featured: true,
    images: [
      "/needle/needle3.png",
      "/needle/needle2.png",
      "/needle/needle4.png",
      "/needle/needle5.png",
      "/needle/needle6.png",
      "/needle/needle7.png",
      "/needle/needle1.png",
    ],
  },
  {
    logo: "/vogo.png",
    logoCss: "bg-[#3C373A] p-2 rounded-full w-16 mb-4 ",
    title: "Vogo",
    description:
      "Vogo is a vocation-focused job platform built on the belief that work should be deeply meaningful and purpose-driven. Inspired by the idea that each person is uniquely gifted, Vogo helps individuals find roles that align with their calling — not just their skills. For mission-minded organizations, it offers a powerful way to connect with people who don’t just fill a position, but fully embrace the vision.\n\nVogo goes beyond traditional job matching by fostering relationships between candidates ('Goers') and employers ('Growers'), enabling both sides to discern fit with clarity, confidence, and shared purpose. It’s built for people who desire more than a paycheck, and companies that prioritize long-term impact over short-term gain.\n\nTechnically, Vogo is powered by a modern full-stack architecture using Next.js for the frontend, styled with Tailwind CSS and ShadCN UI for design consistency and speed. It uses Postgres for reliable data management, with AWS infrastructure handling deployments and storage. Authentication and user sessions are managed via Clerk, and Stripe is integrated to enable flexible billing and monetization options. GitHub Actions is used for automated CI/CD pipelines, ensuring a fast and reliable deployment process.\n\nTechnologies: Next.js, JavaScript, Tailwind CSS, ShadCN UI, Postgres, AWS, Clerk, Stripe, GitHub CI/CD.",
    technologies: [
      "Next JS",
      "JavaScript",
      "Tailwind CSS",
      "Shad CN",
      "Postgres",
      "AWS",
      "GitHub CI/CD",
      "Clerk",
      "Stripe",
    ],
    date: "2025",
    demoLink: "https://dev.vogoglobal.com/",
    featured: true,
    images: [
      "/vogo/vogo1.png",
      "/vogo/vogo2.png",
      "/vogo/vogo3.png",
      "/vogo/vogo4.png",
      "/vogo/vogo5.png",
      "/vogo/vogo6.png",
      "/vogo/vogo7.png",
      "/vogo/vogo8.png",
    ],
  },
  {
    title: "Food Delivery App",
    description:
      "Food Delivery App is a food delivery app designed for a single business, providing a seamless experience for customers to order their favorite meals and have them delivered right to their doorstep. Built with React Native and Expo, this app is tailored to enhance the customer experience by offering a user-friendly interface, real-time order tracking, and efficient delivery management.",
    technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
    date: "2024",
    projectLink: "https://github.com/WaliAmed/food-delivery-app",
  },
  {
    title: "Energy Tubs",
    description:
      "A React JS and Node JS-powered e-commerce web app, designed with React Styled Components, offering inventory management for the store and a user-friendly purchase history dashboard.",
    technologies: ["React JS", "Node Js", "Postgres"],
    date: "2024",
    demoLink: "https://energytubs.com",
  },
  {
    title: "Semantic Graph - PageRank Demonstration",
    description:
      "A React JS and React-d3 semantic graph representation web app to demonstrate the Page Rank algorithm, designed with Tailwind CSS, offering an animated visualization of semantic graphs with Nodes and Edges to demonstrate page rank.",
    technologies: ["React JS", "Node Js", "Postgres"],
    date: "2024",
    demoLink: "https://semantic-graph-frontend.vercel.app",
    projectLink: "https://github.com/WaliAmed/semantic-graph",
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
];

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (src) => {
    setSelectedImage(src);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My Projects
          </h1>
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
                  {project.logo && (
                    <div>
                      <img
                        src={project.logo}
                        alt="logo"
                        className={`${project.logoCss}`}
                      />
                    </div>
                  )}
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

                  <div className="flex gap-2 mb-4">
                    {project.demoLink && (
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-1"
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
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent py-1"
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

                  {/* 🔲 Project Image Grid */}
                  {project.images?.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
                      {project.images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`Project image ${index + 1}`}
                          className="rounded-md object-cover w-full h-32 cursor-pointer transition hover:scale-105"
                          onClick={() => openImageModal(img)}
                        />
                      ))}
                    </div>
                  )}

                  {selectedImage && (
                    <div
                      className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
                      onClick={closeImageModal}
                    >
                      <img
                        src={selectedImage}
                        alt="Full view"
                        className="max-w-full max-h-full rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <button
                        onClick={closeImageModal}
                        className="absolute top-4 right-4 text-white text-2xl font-bold"
                      >
                        &times;
                      </button>
                    </div>
                  )}
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
                  {project.logo && (
                    <div>
                      <img src={project.logo} alt="logo" />
                    </div>
                  )}
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
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-1"
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
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent py-1"
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
        </div>
      </div>
    </div>
  );
}
