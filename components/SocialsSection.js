import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const socials = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
    color: "text-gray-300 hover:text-white",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    color: "text-blue-400 hover:text-blue-300",
    bgColor: "hover:bg-blue-900/20",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter,
    color: "text-sky-400 hover:text-sky-300",
    bgColor: "hover:bg-sky-900/20",
  },
  {
    name: "Email",
    href: "mailto:wali@example.com",
    icon: Mail,
    color: "text-gray-300 hover:text-gray-200",
    bgColor: "hover:bg-gray-800/20",
  },
]

export default function SocialsSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Connect With Me</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Let's connect and collaborate on exciting projects
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl justify-center gap-8">
          {socials.map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="group">
              <Button
                variant="outline"
                size="lg"
                className={`h-16 w-16 rounded-full p-0 group-hover:scale-110 transition-all duration-300 border-border/50 ${social.bgColor} bg-transparent`}
              >
                <social.icon className={`h-6 w-6 transition-colors ${social.color}`} />
                <span className="sr-only">{social.name}</span>
              </Button>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
