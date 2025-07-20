const techIcons = {
  "React JS": { src: "/icons/react.svg", color: "#61DAFB" },
  "Next JS": { src: "/icons/nextdotjs.svg", color: "#000000" },
  "Vue.js": { src: "/icons/vuedotjs.svg", color: "#42B883" },
  jQuery: { src: "/icons/jquery.svg", color: "#0769AD" },
  "Node.js": { src: "/icons/nodedotjs.svg", color: "#339933" },
  Laravel: { src: "/icons/laravel.svg", color: "#FF2D20" },
  "Nest Js": { src: "/icons/nestjs.svg", color: "#E0234E" },
  JavaScript: { src: "/icons/javascript.svg", color: "#F7DF1E" },
  TypeScript: { src: "/icons/typescript.svg", color: "#3178C6" },
  PHP: { src: "/icons/php.svg", color: "#777BB4" },
  "Tailwind CSS": { src: "/icons/tailwindcss.svg", color: "#06B6D4" },
  "Shad CN": { src: "/icons/shadcnui.svg", color: "#6366F1" },
  "Ant Design": { src: "/icons/antdesign.svg", color: "#1677FF" },
  CSS3: { src: "/icons/css.svg", color: "#1572B6" },
  HTML5: { src: "/icons/html5.svg", color: "#E34F26" },
  Sass: { src: "/icons/sass.svg", color: "#CC6699" },
  MySQL: { src: "/icons/mysql.svg", color: "#00758F" },
  MongoDB: { src: "/icons/mongodb.svg", color: "#47A248" },
  PostgreSQL: { src: "/icons/postgresql.svg", color: "#336791" },
  Redis: { src: "/icons/redis.svg", color: "#DC382D" },
  "Neon Postgres": { src: "/icons/neon-postgres.svg", color: "#04D9FF" },
  "VPS servers": { src: "/placeholder-logo.png", color: "#4B5563" },
  AWS: { src: "/icons/aws.svg", color: "#FF9900" },
  "AWS S3": { src: "/icons/aws.svg", color: "#569A31" },
  Docker: { src: "/icons/docker.svg", color: "#2496ED" },
  "GitHub CI/CD": { src: "/icons/github.svg", color: "#181717" },
  Deployments: { src: "/placeholder-logo.png", color: "#10B981" },
  Vercel: { src: "/icons/vercel.svg", color: "#000000" },
  Git: { src: "/icons/git.svg", color: "#F05032" },
  Clerk: { src: "/icons/clerk.svg", color: "#6C47FF" },
  "Socket.io": { src: "/icons/socketdotio.svg", color: "#010101" },
  Stripe: { src: "/icons/stripe.svg", color: "#635BFF" },
  "Google Maps API": { src: "/icons/googlemaps.svg", color: "#4285F4" },
  "Chart Js": { src: "/icons/chartdotjs.svg", color: "#FF6384" },
  "Dnd Kit": { src: "/icons/dnd.svg", color: "#FF4785" },
};

export default function TechIcon({ tech, className = "h-6 w-6" }) {
  const techInfo = techIcons[tech] || {
    src: "/placeholder-logo.png",
    color: "#9CA3AF",
  };

  return (
    <div className="inline-flex items-center justify-center" title={tech}>
      <img
        src={techInfo.src}
        alt={tech}
        className={className}
        style={{ color: techInfo.color, fill: techInfo.color }}
      />
    </div>
  );
}
