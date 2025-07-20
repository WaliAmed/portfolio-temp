import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          {/* Text Section - Clean without background graphics */}
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">
                Senior Software Developer
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Hi, I'm <span className="text-primary">Wali Ahmed</span>
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I transform business ideas into powerful digital solutions.
                Specializing in building custom software that drives growth,
                streamlines operations, and delivers exceptional user
                experiences for businesses of all sizes.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link href="/projects">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
                    View My Work
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link
                  href={
                    "https://drive.google.com/file/d/19dy3rchBTPdzp-7Ax-bkdoska7z0ybpq/view?usp=sharing"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Image Section with Background Graphics */}
          <div className="flex items-center justify-center relative">
            {/* Background Graphics - Only behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Large background gradients */}
              <div className="absolute w-96 h-96 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-primary/10 rounded-full blur-2xl -z-10"></div>

              {/* Geometric shapes behind the image */}
              <div className="absolute w-80 h-80 border border-primary/20 rounded-3xl rotate-12 -z-10"></div>
              <div className="absolute w-72 h-72 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl rotate-6 -z-10"></div>
              <div className="absolute w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-primary/10 rounded-xl -rotate-3 -z-10"></div>

              {/* Floating dots */}
              <div className="absolute top-10 left-10 w-3 h-3 bg-primary/40 rounded-full -z-10"></div>
              <div className="absolute top-20 right-16 w-2 h-2 bg-cyan-400/40 rounded-full -z-10"></div>
              <div className="absolute bottom-16 left-20 w-4 h-4 bg-purple-400/40 rounded-full -z-10"></div>
              <div className="absolute bottom-10 right-10 w-2 h-2 bg-primary/40 rounded-full -z-10"></div>

              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-8 grid-rows-8 w-full h-full gap-4">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 bg-primary rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Image - Tilted Square with Rounded Edges */}
            <div className="relative z-10 transform rotate-3 hover:rotate-6 transition-transform duration-300">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-3xl blur-xl scale-110"></div>

                {/* Image container */}
                <div className="relative bg-gradient-to-br from-card to-muted p-2 rounded-3xl shadow-2xl">
                  <Image
                    src="/my-dp-cropped-smaller.png?height=350&width=350"
                    alt="Wali Ahmed"
                    width={350}
                    height={350}
                    className="rounded-2xl object-cover shadow-lg"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-2 bg-gradient-to-t from-background/20 to-transparent rounded-2xl pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
