import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AuroraBackground from "@/components/AuroraBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Journey from "@/components/sections/Journey";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import CurrentWork from "@/components/sections/CurrentWork";
import SocialLinks from "@/components/sections/SocialLinks";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Achievements />
        <Certifications />
        <Projects />
        <CurrentWork />
        <SocialLinks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
