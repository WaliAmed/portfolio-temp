import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "waliamedvd@gmail.com",
    href: "mailto:waliamedvd@gmail.com",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    description: "Primary contact method",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    description: "Available during business hours",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New York, NY",
    href: "#",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    description: "Based in New York",
  },
]

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/waliahmed",
    color: "text-blue-400 hover:text-blue-300",
    bgColor: "hover:bg-blue-900/20",
    description: "Professional networking and updates",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/waliahmed",
    color: "text-gray-300 hover:text-white",
    bgColor: "hover:bg-gray-800/20",
    description: "Code repositories and projects",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/waliahmed",
    color: "text-sky-400 hover:text-sky-300",
    bgColor: "hover:bg-sky-900/20",
    description: "Tech insights and thoughts",
  },
]

export default function Contact() {
  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get In Touch</h1>
          <p className="mt-4 text-xl text-muted-foreground">Let's connect and discuss opportunities</p>
        </div>

        <div className="space-y-8">
          {/* Personal Message */}
          <Card className="bg-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Message from Wali</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Thank you for your interest in reaching out to me. I value your feedback, inquiries, and suggestions.
                  For any specific questions or comments, please feel free to directly email me at{" "}
                  <a
                    href="mailto:waliamedvd@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    waliamedvd@gmail.com
                  </a>
                  . I make every effort to respond to all messages within 24 hours, although it might take longer during
                  busy periods.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Alternatively, you can reach me on LinkedIn for further communication. Moreover, if you prefer
                  connecting via social media, you can find me on LinkedIn, where I regularly share updates and engage
                  with my followers.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Thank you once again for your interest, and I eagerly await hearing from you.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
              <CardDescription>Here's how you can reach me</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${info.bgColor} mb-4`}
                    >
                      <info.icon className={`h-8 w-8 ${info.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{info.label}</h3>
                    {info.href !== "#" ? (
                      <a
                        href={info.href}
                        className="text-primary hover:text-primary/80 transition-colors font-medium block mb-2"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium mb-2">{info.value}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Connect on Social Media</CardTitle>
              <CardDescription>Follow me for updates and professional insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {socialLinks.map((social) => (
                  <div key={social.label} className="text-center">
                    <a href={social.href} target="_blank" rel="noopener noreferrer" className="group block">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-border/50 group-hover:border-primary/50 transition-all duration-300 mb-4 ${social.bgColor}`}
                      >
                        <social.icon className={`h-8 w-8 transition-colors ${social.color}`} />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {social.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">{social.description}</p>
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Response Time & Availability */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-xl">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Email: Within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm">LinkedIn: Within 48 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm">Social Media: 2-3 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-xl">Best Times to Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Monday - Friday</span>
                    <span className="text-sm text-muted-foreground">9 AM - 6 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Weekend</span>
                    <span className="text-sm text-muted-foreground">Limited availability</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Emergency</span>
                    <span className="text-sm text-muted-foreground">Email preferred</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="bg-card text-center">
            <CardContent className="pt-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Start a Conversation?</h3>
              <p className="text-muted-foreground mb-6">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="mailto:waliamedvd@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <a href="https://linkedin.com/in/waliahmed" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
