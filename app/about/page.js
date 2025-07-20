import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Me</h1>
            <p className="mt-4 text-xl text-muted-foreground">Senior Software Developer</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Wali Ahmed"
                  width={400}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Who I Am</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-invert max-w-none">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I am a heavy frontend full-stack developer with expertise in React js. I have experience in building
                    scalable, secure and reliable web applications using various frameworks and technologies. I enjoy
                    solving complex problems and learning new skills. I am passionate about creating high-quality code
                    that follows best practices and industry standards. I am always looking for new challenges and
                    opportunities to grow as a developer.
                  </p>
                </CardContent>
              </Card>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Frontend Expertise</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">React JS</Badge>
                      <Badge variant="secondary">Next JS</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle>Backend Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Laravel</Badge>
                      <Badge variant="secondary">PHP</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
