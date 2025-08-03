import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
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

export default function About() {
  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Me
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Senior Software Developer
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Left column with image */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Image
                  src="/my-dp-cropped-smaller.png"
                  alt="Wali Ahmed"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>

            {/* Right column with description and skills */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Who I Am</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I transform bold business ideas into powerful,
                    production‑ready digital solutions. With a strong foundation
                    in full‑stack development, I specialize in crafting custom
                    software that not only drives growth but also streamlines
                    complex operations and elevates user experiences across web
                    and mobile platforms.
                    <br />
                    <br />
                    Beyond writing clean and scalable code, I bring a DevOps
                    mindset—managing version control with Git, setting up CI/CD
                    pipelines, and deploying applications seamlessly on VPS
                    servers or modern cloud environments like AWS (including S3
                    for storage and delivery).
                    <br />
                    <br />
                    Whether it’s building high‑performance frontend interfaces
                    with React and Next.js, architecting robust backends with
                    Node.js or Laravel, or optimizing infrastructures for
                    reliability and speed, I take pride in delivering solutions
                    that empower businesses of all sizes to thrive in the
                    digital landscape.
                  </p>
                </CardContent>
              </Card>

              {/* Dynamic skill cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {skillCategories.map((category) => (
                  <Card key={category.title} className="bg-card">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        {category.title}
                      </CardTitle>
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
          </div>
        </div>
      </div>
    </div>
  );
}
