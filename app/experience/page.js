import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Web-Tronix",
    location: "Islamabad",
    period: "Jul 2024 - Present",
    type: "Full-time",
    achievements: [
      "Led development of enterprise-level SaaS platform serving 10,000+ users",
      "Improved application performance by 40% through code optimization and architecture redesign",
      "Mentored teams of 10 developers, resulting in 30% faster project delivery",
      "Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes",
      "Collaborated with product managers to define technical requirements for new features",
    ],
    technologies: [
      "Next JS",
      "React JS",
      "Node.js",
      "Laravel",
      "Nest Js",
      "Tailwind CSS",
      "Shad CN",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "AWS",
      "Vercel",
      "Docker",
    ],
  },
  {
    title: "Lead Software Engineer",
    company: "Devingdom Technologies ",
    location: "Rawalpindi",
    period: "Feb 2024 - Present",
    type: "Remote",
    achievements: [
      "Delivered 15+ client projects on time and within budget, maintaining 98% client satisfaction",
      "Developed reusable component library reducing development time by 35%",
      "Integrated third-party APIs and payment gateways for e-commerce solutions",
      "Optimized database queries resulting in 50% faster page load times",
      "Conducted code reviews and established coding standards for the development team",
      "Manage team of 5 developers, leading them to advance their careers",
    ],
    technologies: [
      "Next JS",
      "React JS",
      "Node.js",
      "Laravel",
      "Vue.js",
      "Tailwind CSS",
      "Shad CN",
      "PostgreSQL",
      "Git",
      "AWS",
      "Vercel",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Lua (Numu)",
    location: "Islamabad",
    period: "May 2023 - Jul 2024",
    type: "Full-time",
    achievements: [
      "Developed and managed over 5 comprehensive full-stack web applications and products of Lua, leveraging the MERN stack (Express.js, React with TypeScript, Node.js)",
      "Proficiently crafted web applications using Next.js, encompassing both client-side and server-side components, enhancing their efficiency and performance",
    ],
    technologies: [
      "JavaScript",
      "React JS",
      "CSS3",
      "HTML5",
      "Next JS",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Sass",
    ],
  },
  {
    title: "Frontend Web Developer",
    company: "Qisstpay",
    location: "Islamabad",
    period: "Sep 2022 - May 2023",
    type: "Full-time",
    achievements: [
      "Wrote high-quality code using React JS and React TS, following best practices and coding standards",
      "Designed and implemented responsive UI using Tailwind CSS for 30+ pages",
      "Integrated 60+ backend APIs using React Query and Axios",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "React JS",
      "CSS3",
      "HTML5",
      "Tailwind CSS",
      "Sass",
    ],
  },
  {
    title: "Junioer Frontend Developer + Internship",
    company: "Codeaza Technologies",
    location: "Rawalpindi",
    period: "Jan 2021 - Sep 2022",
    type: "Full-time",
    achievements: [
      "Worked with React JS and Tailwind CSS to develop 10+ web applications",
      "Maintained high standards of code quality and performance for 10+ dashboard web applications",
      "Internship: Developed web and mobile applications using React JS and React Native",
    ],
    technologies: ["JavaScript", "React JS", "CSS3", "HTML5", "Tailwind CSS"],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Work Experience
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            My professional journey and career highlights
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="bg-card">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl">
                        {experience.title}
                      </CardTitle>
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
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          {experience.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {experience.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map(
                        (achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-1">•</span>
                            {achievement}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs px-2 py-1"
                        >
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
  );
}
