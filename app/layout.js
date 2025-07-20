import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Wali Ahmed - Senior Software Developer",
  description:
    "Portfolio of Wali Ahmed, a Senior Software Developer and full-stack web developer specializing in React.js and modern web technologies.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground min-h-screen`}>
        <Navbar />
        <main className="pt-0">{children}</main>
      </body>
    </html>
  )
}
