import Aboutme from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Skill from "@/components/Skill";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="montserrat">
      <Hero />
      <Aboutme />
      <Skill />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact/>
    </div>
  );
}
