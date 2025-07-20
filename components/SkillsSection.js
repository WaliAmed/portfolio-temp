import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TechIcon from "@/components/TechIcon";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React JS", "Next JS", "Vue.js", "jQuery"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Laravel", "Nest Js"],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "PHP"],
  },
  {
    title: "Frontend UI Development",
    skills: ["Tailwind CSS", "Shad CN", "Ant Design", "CSS3", "HTML5", "Sass"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Neon Postgres"],
  },
  {
    title: "DevOps",
    skills: [
      "VPS servers",
      "AWS",
      "AWS S3",
      "Docker",
      "GitHub CI/CD",
      "Deployments",
      "Vercel",
    ],
  },
  {
    title: "Version Control & CI/CD",
    skills: ["GitHub CI/CD", "Git"],
  },
  {
    title: "APIs & Services",
    skills: ["Clerk", "Socket.io", "Stripe", "Google Maps API"],
  },
  {
    title: "Other Tools",
    skills: ["Chart Js", "Dnd Kit"],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title} className="bg-card">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm flex items-center gap-1.5 bg-muted/50 p-2"
                    >
                      <TechIcon tech={skill} className="h-3 w-3" />
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
