import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TechIcon from "@/components/TechIcon";

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Web-Tronix",
    period: "Jul 2024 - Present",
    description:
      "Leading full-stack development projects using Next.js and Node.js. Mentoring junior developers and implementing best practices.",
    technologies: [
      "Next JS",
      "Node.js",
      "AWS",
      "Clerk",
      "Stripe",
      "Postgres",
      "Tailwind CSS",
      "Shad CN",
      "Laravel",
      "MySql",
      "Git",
      "Vercel",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Lua",
    period: "2023 - 2024",
    description:
      "Developed and maintained multiple products and web applications using modern web technologies while my time in Lua (Numu).",
    technologies: ["React JS", "Next JS", "MySQL", "Tailwind CSS", "Sass"],
  },
  {
    title: "Frontend Web Developer",
    company: "QisstPay",
    period: "2022 - 2023",
    description:
      "Built responsive user interfaces and collaborated with design teams to create engaging user experiences.",
    technologies: [
      "JavaScript",
      "React JS",
      "CSS3",
      "HTML5",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Frontend Web Developer",
    company: "Codeaza Technologies",
    period: "Jan 2021 - Sep 2022",
    description:
      "Architected dynamic, responsive front‑end interfaces and partnered with UI/UX teams to craft seamless, visually engaging user experiences.",
    technologies: [
      "React JS",
      "Vue.js",
      "CSS3",
      "HTML5",
      "Ant Design",
      "Dnd Kit",
      "Chart Js",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Work Experience
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            My professional journey and career highlights
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="bg-card">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        {experience.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        {experience.company}
                      </CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 sm:mt-0">
                      {experience.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {experience.description}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs flex items-center gap-1.5 bg-muted/50 px-2 py-1"
                        >
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
  );
}
