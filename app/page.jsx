import SmoothScroll from "@/components/smooth-scroll"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black">
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
