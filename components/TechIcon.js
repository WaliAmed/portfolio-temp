import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Cloud,
  Palette,
  Zap,
  FileCode,
  Layers,
  Settings,
  GitBranch,
} from "lucide-react"

const techIcons = {
  "React JS": { icon: Code, color: "text-cyan-400" },
  "Next JS": { icon: Layers, color: "text-gray-300" },
  "Node.js": { icon: Server, color: "text-green-400" },
  Laravel: { icon: Globe, color: "text-red-400" },
  JavaScript: { icon: FileCode, color: "text-yellow-400" },
  TypeScript: { icon: FileCode, color: "text-blue-400" },
  PHP: { icon: Code, color: "text-purple-400" },
  MySQL: { icon: Database, color: "text-orange-400" },
  MongoDB: { icon: Database, color: "text-green-500" },
  PostgreSQL: { icon: Database, color: "text-blue-500" },
  AWS: { icon: Cloud, color: "text-orange-300" },
  Docker: { icon: Settings, color: "text-blue-400" },
  "Tailwind CSS": { icon: Palette, color: "text-teal-400" },
  CSS3: { icon: Palette, color: "text-blue-400" },
  HTML5: { icon: Globe, color: "text-orange-400" },
  "Vue.js": { icon: Zap, color: "text-green-400" },
  "Socket.io": { icon: Zap, color: "text-gray-300" },
  Redis: { icon: Database, color: "text-red-400" },
  Stripe: { icon: Settings, color: "text-purple-400" },
  Vercel: { icon: Cloud, color: "text-gray-300" },
  "GitHub CI/CD": { icon: GitBranch, color: "text-gray-300" },
  Sass: { icon: Palette, color: "text-pink-400" },
  Webpack: { icon: Settings, color: "text-blue-400" },
  jQuery: { icon: Code, color: "text-blue-300" },
  WordPress: { icon: Globe, color: "text-blue-400" },
  "Video.js": { icon: Smartphone, color: "text-red-400" },
  "Google Maps API": { icon: Globe, color: "text-green-400" },
  "AWS S3": { icon: Cloud, color: "text-orange-300" },
}

export default function TechIcon({ tech, className = "h-4 w-4" }) {
  const techInfo = techIcons[tech] || { icon: Code, color: "text-gray-400" }
  const IconComponent = techInfo.icon

  return <IconComponent className={`${className} ${techInfo.color}`} />
}
