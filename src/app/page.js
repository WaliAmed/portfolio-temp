import { Navbar } from "./navbar/page";

// Assets
import bgImage from "../../public/main_bg.png";

export default function Main() {
  return (
    <div
      className={`bg-[#F5F5F5] bg-cover min-h-screen`}
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Navbar */}
        <Navbar />
      </div>
    </div>
  );
}
