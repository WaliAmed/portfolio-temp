import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import TechIcon from "@/components/TechIcon"

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description:
      "Leading full-stack development projects using React.js and Node.js. Mentoring junior developers and implementing best practices.",
    technologies: ["React JS", "Node.js", "AWS", "TypeScript"],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Agency Pro",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client websites and web applications using modern web technologies.",
    technologies: ["React JS", "Laravel", "MySQL", "Tailwind CSS"],
  },
  {
    title: "Frontend Developer",
    company: "StartUp Ventures",
    period: "2019 - 2020",
    description:
      "Built responsive user interfaces and collaborated with design teams to create engaging user experiences.",
    technologies: ["JavaScript", "React JS", "CSS3", "HTML5"],
  },
]

export default function ExperienceSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">My professional journey and career highlights</p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="bg-card">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">{experience.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 sm:mt-0">{experience.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{experience.description}</p>
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs flex items-center gap-1.5 bg-muted/50">
                          <TechIcon tech={tech} className="h-3 w-3" />
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
    </section>
  )
}
