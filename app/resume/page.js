import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Phone, MapPin, Globe, Calendar, Award } from "lucide-react"
import TechIcon from "@/components/TechIcon"

const personalInfo = {
  name: "Wali Ahmed",
  title: "Senior Software Developer",
  email: "wali@example.com",
  phone: "+1 (555) 123-4567",
  location: "New York, NY",
  website: "waliahmed.dev",
}

const summary =
  "Experienced Senior Software Developer with 5+ years of expertise in building scalable, secure, and reliable web applications. Proven track record of transforming business requirements into innovative digital solutions that drive growth and enhance user experiences. Strong background in full-stack development, team leadership, and modern software architecture."

const experience = [
  {
    title: "Senior Software Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    period: "Jan 2022 - Present",
    type: "Full-time",
    achievements: [
      "Led development of enterprise-level SaaS platform serving 10,000+ users",
      "Improved application performance by 40% through code optimization and architecture redesign",
      "Mentored team of 5 junior developers, resulting in 30% faster project delivery",
      "Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes",
      "Collaborated with product managers to define technical requirements for new features",
    ],
    technologies: ["React JS", "Node.js", "AWS", "TypeScript", "Docker", "MongoDB"],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Agency Pro",
    location: "New York, NY",
    period: "Mar 2020 - Dec 2021",
    type: "Full-time",
    achievements: [
      "Delivered 15+ client projects on time and within budget, maintaining 98% client satisfaction",
      "Developed reusable component library reducing development time by 35%",
      "Integrated third-party APIs and payment gateways for e-commerce solutions",
      "Optimized database queries resulting in 50% faster page load times",
      "Conducted code reviews and established coding standards for the development team",
    ],
    technologies: ["React JS", "Laravel", "MySQL", "Tailwind CSS", "Vue.js", "PHP"],
  },
  {
    title: "Frontend Developer",
    company: "StartUp Ventures",
    location: "San Francisco, CA",
    period: "Jun 2019 - Feb 2020",
    type: "Full-time",
    achievements: [
      "Built responsive web applications for 10+ startup clients",
      "Implemented accessibility standards achieving WCAG 2.1 AA compliance",
      "Collaborated with UX/UI designers to create pixel-perfect implementations",
      "Reduced website loading times by 60% through performance optimization",
      "Participated in agile development processes and sprint planning",
    ],
    technologies: ["JavaScript", "React JS", "CSS3", "HTML5", "Sass", "Webpack"],
  },
]

const skills = {
  "Frontend Development": ["React JS", "Next JS", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  "Backend Development": ["Node.js", "Laravel", "PHP", "Python", "Express.js"],
  Databases: ["MySQL", "MongoDB", "PostgreSQL", "Redis"],
  "Cloud & DevOps": ["AWS", "Docker", "GitHub CI/CD", "Vercel", "Digital Ocean"],
  "UI/UX Tools": ["Tailwind CSS", "Sass", "Figma", "Adobe XD"],
  "Other Technologies": ["Git", "REST APIs", "GraphQL", "Socket.io", "Stripe API"],
}

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Technology",
    location: "New York, NY",
    period: "2015 - 2019",
    gpa: "3.8/4.0",
  },
]

const certifications = [
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
  },
  {
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2022",
  },
]

export default function Resume() {
  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Resume</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Comprehensive overview of my professional experience and skills
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 mx-auto">
            <Download className="h-4 w-4" />
            Download PDF Resume
          </Button>
        </div>

        <div className="space-y-8">
          {/* Personal Information */}
          <Card className="bg-card">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">{personalInfo.name}</CardTitle>
              <CardDescription className="text-xl text-primary font-semibold">{personalInfo.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">{personalInfo.email}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="text-sm">{personalInfo.website}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{summary}</p>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Work Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {job.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {job.type}
                        </Badge>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1 text-xs">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs flex items-center gap-1">
                            <TechIcon tech={tech} className="h-3 w-3" />
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="font-semibold mb-3">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs flex items-center gap-1">
                          <TechIcon tech={skill} className="h-3 w-3" />
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-2xl">Education</CardTitle>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-primary">{edu.school}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                      <span>•</span>
                      <span>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-2xl">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-semibold">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground">{cert.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
