"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Play, Pause, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"

// All projects data
const allProjects = [
  {
    id: 4,
    title: "रुद्राक्ष का रहस्य | आपके लिए कौन सा रुद्राक्ष है शुभ ? Real vs Fake Rudraksha",
    category: "Education",
    thumbnail: "/img/rudra.jpg",
    videoUrl: "https://youtu.be/EfUnrESWY8g?si=0zxFPEfxD116lwHQ",
  },
  {
    id: 5,
    title: "Exposed Married Life Reality | शादी नहीं बर्बादी ! | ft. Sakshi Bhogal",
    category: "Education",
    thumbnail: "/img/suhagratHD.jpg",
    videoUrl: "https://youtu.be/m6x6cg3JJWs?si=aZiOgWfxqzDJAioa",
  },
  {
    id: 1,
    title: "Gain enrgy after MASTURBATION",
    category: "Motivation",
    thumbnail: "/img/1.jpg",
    videoUrl: "https://youtu.be/xU5e-5fo-9Y?si=S3QPbAC_p4M3zBPQ",
  },
  {
    id: 2,
    title: "10 आत्माओं के साथ संभोग PART 1 | Real Horror Story",
    category: "Horror",
    thumbnail: "/img/3.jpg",
    videoUrl: "https://youtu.be/eNtVXqKfM2k?si=R_scwbLjyGZBmk1j",
  },
  {
    id: 3,
    title: "कर्ण पिशाचिनी और डायन को कैसे सिद्ध करें ? | Reality of Tantra-Mantra | Horror Podcast",
    category: "Horror",
    thumbnail: "/img/6.jpg",
    videoUrl: "https://youtu.be/l03cy9YGtFU?si=FfxziBvujIUInfPe",
  },
  
 
]

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const videoRefs = useRef([])
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  // Display only first 4 projects initially, show all when button is clicked
  const displayedProjects = showAllProjects ? allProjects : allProjects.slice(0, 4)

  const handleVideoToggle = (index) => {
    if (activeVideo === index) {
      if (isPlaying) {
        videoRefs.current[index]?.pause()
        setIsPlaying(false)
      } else {
        videoRefs.current[index]?.play()
        setIsPlaying(true)
      }
    } else {
      // Pause previous video if any
      if (activeVideo !== null && videoRefs.current[activeVideo]) {
        videoRefs.current[activeVideo]?.pause()
      }

      setActiveVideo(index)
      videoRefs.current[index]?.play()
      setIsPlaying(true)
    }
  }

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects)

    // If we're hiding projects, make sure to pause any playing videos that will be hidden
    if (showAllProjects && activeVideo >= 4) {
      videoRefs.current[activeVideo]?.pause()
      setActiveVideo(null)
      setIsPlaying(false)
    }

    // Scroll back to projects section when toggling
    if (!showAllProjects) {
      setTimeout(() => {
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my best video editing work across various genres and styles
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              className="relative group overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
            >
              <div className="relative aspect-video overflow-hidden">
                {activeVideo === index ? (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={project.videoUrl}
                    className="w-full h-full object-cover"
                    onEnded={() => setIsPlaying(false)}
                  />
                ) : (
                  <img
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                <motion.button
                  onClick={() => handleVideoToggle(index)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {activeVideo === index && isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6 ml-1" />
                  )}
                </motion.button>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-cyan-400">{project.category}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-white"
                  >
                    <a href="https://youtu.be/xU5e-5fo-9Y?si=S3QPbAC_p4M3zBPQ" className=""><ExternalLink className="w-5 h-5" /></a>
                  </motion.button>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">
                  A captivating {project.category.toLowerCase()} showcasing creative editing techniques and visual
                  storytelling.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={toggleShowAllProjects}
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-full text-white font-medium text-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 flex items-center justify-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAllProjects ? (
              <>
                Show Less <ChevronUp className="ml-2 w-5 h-5" />
              </>
            ) : (
              <>
                View All Projects <ChevronDown className="ml-2 w-5 h-5" />
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

