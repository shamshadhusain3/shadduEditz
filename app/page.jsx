import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

