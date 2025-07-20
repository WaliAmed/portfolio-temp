import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Smartphone, Server } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Creating responsive and interactive user interfaces using React.js, Next.js, and modern CSS frameworks.",
    icon: Code,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    title: "Backend Development",
    description:
      "Building robust server-side applications with Node.js and Laravel, including API development and database design.",
    icon: Database,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    title: "DevOps & Cloud Services",
    description:
      "Streamlining CI/CD pipelines with Git and GitHub Actions, deploying applications on VPS servers, and leveraging AWS and AWS S3 for scalable cloud solutions.",
    icon: Server,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    title: "Mobile-First Design",
    description:
      "Developing mobile-responsive applications that work perfectly across all devices and screen sizes.",
    icon: Smartphone,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
];

export default function WhatIDoSection() {
  return (
    <section className="py-24 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What I Do
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            I provide comprehensive web development services to bring your ideas
            to life
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="bg-card">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`rounded-lg p-3 ${service.bgColor}`}>
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
