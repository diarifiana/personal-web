import Aboutme from "@/components/Aboutme";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <div className="px-10">
      <Hero />
      <Aboutme />
      <Skill />
      <Portfolio />
    </div>
  );
}
