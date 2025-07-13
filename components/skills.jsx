"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Film, Scissors, Layers, Music, Camera, Palette, Wand2, Sparkles } from "lucide-react"

const skills = [
  {
    icon: <Film className="w-8 h-8" />,
    name: "Video Editing",
    description: "Professional editing with Adobe Premiere Pro and Final Cut Pro",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    name: "Color Grading",
    description: "Advanced color correction and grading with DaVinci Resolve",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    name: "Compositing",
    description: "Visual effects and compositing with Adobe After Effects",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Music className="w-8 h-8" />,
    name: "Sound Design",
    description: "Audio editing and sound design with Adobe Audition",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    name: "Cinematography",
    description: "Understanding of camera techniques and visual storytelling",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    name: "Motion Graphics",
    description: "Creating dynamic motion graphics and animations",
    color: "from-indigo-500 to-violet-500",
  },
  // {
  //   icon: <Wand2 className="w-8 h-8" />,
  //   name: "3D Integration",
  //   description: "Incorporating 3D elements into video projects",
  //   color: "from-blue-500 to-indigo-500",
  // },
  {
    icon: <Sparkles className="w-8 h-8" />,
    name: "Special Effects",
    description: "Creating and implementing special visual effects",
    color: "from-pink-500 to-rose-500",
  },
]

export default function Skills() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Mastering the tools and techniques that bring visual stories to life
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 mx-auto`}
              >
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">{skill.name}</h3>
              <p className="text-gray-400 text-center">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Software Proficiency</h3>
              <div className="space-y-4">
                {[
                  { name: "Adobe Premiere Pro", percentage: 95 },
                  { name: "After Effects", percentage: 90 },
                  { name: "DaVinci Resolve", percentage: 85 },
                  { name: "Final Cut Pro", percentage: 80 },
                  { name: "Cinema 4D", percentage: 70 },
                ].map((software, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{software.name}</span>
                      <span className="text-gray-400">{software.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${software.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Creative Process</h3>
              <ul className="space-y-4">
                {[
                  "Concept Development",
                  "Storyboarding & Planning",
                  "Footage Organization",
                  "Rough Cut Assembly",
                  "Fine Editing & Pacing",
                  "Color Grading & VFX",
                  "Sound Design & Music",
                  "Final Review & Delivery",
                ].map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mr-3">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-300">{step}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

