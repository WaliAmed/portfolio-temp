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
import Link from "next/link";
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
    demoLink: "https://www.needlematch.com/",
    featured: true,
    images: [
      "/needle/needle3.png",
      "/needle/needle8.png",
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
    demoLink: "https://www.vogoglobal.com/",
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
];

export default function ProjectsSection() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (src) => {
    setSelectedImage(src);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

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
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-2">
          {projects.map((project) => (
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
