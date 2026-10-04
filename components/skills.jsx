"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  Film, 
  Flame, 
  TrendingUp, 
  Users, 
  Bot, 
  Mic, 
  Palette, 
  FileEdit, 
  Repeat, 
  Camera,
  CheckCircle2,
  Sparkles
} from "lucide-react"

const skills = [
  {
    icon: <Film className="w-8 h-8" />,
    name: "Video Editing",
    description: "Premiere Pro, After Effects & CapCut for high-impact visual cuts",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Flame className="w-8 h-8" />,
    name: "Short-Form & Viral Hooks",
    description: "Reels, Shorts, high-retention opening hooks & kinetic pacing",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    name: "Social Media Strategy",
    description: "Organic page growth (0 to 250K+), algorithm mastery & viral distribution",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: <Bot className="w-8 h-8" />,
    name: "AI Prompt Engineering",
    description: "AI image generation, script generation & cutting-edge AI editing tools",
    color: "from-indigo-500 to-cyan-500",
  },
  {
    icon: <Mic className="w-8 h-8" />,
    name: "Podcast & Long-Form",
    description: "Multi-cam syncing, narrative pacing, audio cleanup & sound design",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <FileEdit className="w-8 h-8" />,
    name: "Content Scripting",
    description: "Awareness-led scripts in Hindi, Urdu, English & Hinglish (1.5M+ views)",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <Repeat className="w-8 h-8" />,
    name: "Content Repurposing",
    description: "Extracting high-performing short clips from podcasts and long videos",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: <Users className="w-8 h-8" />,
    name: "Team & Production Oversight",
    description: "Managing editing teams, shoot scheduling, and content pipelines",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    name: "Camera Handling & Shoots",
    description: "DSLR & mobile cinematography, lighting setup & on-location shoot management",
    color: "from-red-500 to-amber-500",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    name: "Graphic Design & Thumbnails",
    description: "Canva & Photoshop click-through rate (CTR) optimized assets",
    color: "from-cyan-500 to-teal-500",
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
        staggerChildren: 0.08,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-3">
            <Sparkles className="w-4 h-4" />
            <span>CORE COMPETENCIES & TOOLKIT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            Skills & Technical Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Combining creative storytelling, viral algorithms, and AI-accelerated editing pipelines
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4)",
              }}
              className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/80 rounded-2xl p-5 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 text-white shadow-lg`}
                >
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-gray-900/90 to-gray-800/80 backdrop-blur-md border border-gray-700 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span>Software & Tools Proficiency</span>
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Adobe Premiere Pro", percentage: 95 },
                  { name: "After Effects", percentage: 90 },
                  { name: "CapCut & Filmora", percentage: 98 },
                  { name: "Canva & Photoshop", percentage: 92 },
                  { name: "AI Workflows (Prompts / Scripts / Gen AI)", percentage: 94 },
                  { name: "DaVinci Resolve", percentage: 85 },
                  { name: "Camera Handling (DSLR & Mobile)", percentage: 90 },
                ].map((software, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1.5 text-sm font-medium">
                      <span className="text-gray-200">{software.name}</span>
                      <span className="text-cyan-400">{software.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${software.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.1 + index * 0.08 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Production & Growth Pipeline</h3>
              <ul className="space-y-3.5">
                {[
                  "Niche Research & Viral Trend Analysis",
                  "Awareness-Led Scripting & Hook Crafting",
                  "Multi-Cam Shoot Setup & Lighting Direction",
                  "High-Retention Assembly & Pacing Cuts",
                  "Motion Graphics, Kinetic Captions & Color Grading",
                  "AI Upscaling, Noise Removal & Sound Design",
                  "Multi-Platform Distribution (IG, YT, FB, LinkedIn)",
                  "Retention Analytics & Iterative Optimization",
                ].map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                    className="flex items-center gap-3 text-sm text-gray-300 bg-black/40 p-2.5 rounded-xl border border-white/5"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-xs">{index + 1}</span>
                    </div>
                    <span>{step}</span>
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

