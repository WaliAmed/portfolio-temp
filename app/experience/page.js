import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    period: "2022 - Present",
    type: "Full-time",
    description:
      "Leading full-stack development projects using React.js and Node.js. Responsible for architecting scalable web applications, mentoring junior developers, and implementing best practices across the development team.",
    achievements: [
      "Led a team of 5 developers in building a multi-tenant SaaS platform",
      "Improved application performance by 40% through code optimization",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored 3 junior developers, helping them advance their careers",
    ],
    technologies: ["React JS", "Node.js", "AWS", "TypeScript", "Docker", "MongoDB"],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Agency Pro",
    location: "New York, NY",
    period: "2020 - 2022",
    type: "Full-time",
    description:
      "Developed and maintained multiple client websites and web applications using modern web technologies. Collaborated with design teams to create engaging user experiences and worked directly with clients to understand their requirements.",
    achievements: [
      "Successfully delivered 15+ client projects on time and within budget",
      "Increased client satisfaction scores by 25% through improved communication",
      "Developed a reusable component library used across multiple projects",
      "Reduced development time by 30% through process improvements",
    ],
    technologies: ["React JS", "Laravel", "MySQL", "Tailwind CSS", "Vue.js", "PHP"],
  },
  {
    title: "Frontend Developer",
    company: "StartUp Ventures",
    location: "San Francisco, CA",
    period: "2019 - 2020",
    type: "Full-time",
    description:
      "Built responsive user interfaces and collaborated with design teams to create engaging user experiences. Focused on frontend development using modern JavaScript frameworks and ensuring cross-browser compatibility.",
    achievements: [
      "Converted 10+ design mockups into responsive web applications",
      "Improved website loading speed by 50% through optimization techniques",
      "Implemented accessibility standards achieving WCAG 2.1 compliance",
      "Collaborated with UX team to improve user engagement by 35%",
    ],
    technologies: ["JavaScript", "React JS", "CSS3", "HTML5", "Sass", "Webpack"],
  },
  {
    title: "Junior Web Developer",
    company: "Creative Web Studio",
    location: "Austin, TX",
    period: "2018 - 2019",
    type: "Full-time",
    description:
      "Started my professional journey as a junior developer, learning modern web development practices and contributing to various client projects. Gained experience in both frontend and backend technologies.",
    achievements: [
      "Completed 20+ small to medium-sized web projects",
      "Learned and implemented responsive design principles",
      "Contributed to team knowledge sharing sessions",
      'Received "Rising Star" award for exceptional learning and contribution',
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "PHP", "WordPress"],
  },
]

export default function Experience() {
  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Work Experience</h1>
          <p className="mt-4 text-xl text-muted-foreground">My professional journey and career highlights</p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="bg-card">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl">{experience.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary mt-1">
                        {experience.company}
                      </CardDescription>
                      <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {experience.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {experience.location}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {experience.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{experience.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
