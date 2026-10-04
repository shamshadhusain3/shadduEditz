"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  Briefcase, 
  GraduationCap, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Users, 
  Video, 
  Sparkles,
  Languages,
  BadgeCheck
} from "lucide-react"

const experiences = [
  {
    role: "Social Media Manager & Video Editor",
    company: "Priti Srivastava (@unscriptedpreeti)",
    tagline: "Astrology, Vastu & Spirituality Creator",
    period: "06/2026 – Present",
    location: "Lucknow, India",
    type: "Leadership & Growth",
    color: "from-cyan-500 to-blue-600",
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    stats: [
      { label: "Instagram Followers", value: "250K+ in 3 Months" },
      { label: "Monthly Reach", value: "95M+ Reach" },
      { label: "Facebook & YouTube", value: "55K FB / 16K YT" },
    ],
    highlights: [
      "Built and launched the Instagram page @unscriptedpreeti from scratch, scaling it to 250,000+ followers in just 3 months while driving 95M+ monthly organic reach.",
      "Grew the account's Facebook page to 55,000+ followers (10M+ monthly reach) and YouTube channel to 16,000+ subscribers in the same 3-month timeline.",
      "Hired initially as Video Editor; quickly promoted to Manager in recognition of outstanding channel growth and leadership performance.",
      "Oversee the complete content pipeline: arranging multi-cam shoots, scripting hooks, managing editing team workflows, and steering overall viral content strategy.",
      "Write high-retention, awareness-led scripts across astrology, health, and spirituality that consistently exceed 1.5M+ views per post.",
      "End-to-end long-form YouTube & podcast production (multi-cam syncing, pacing, audio cleanup) repurposed into high-converting short-form reels."
    ]
  },
  {
    role: "Video Editor & Camera Operator",
    company: "MrHighThink — YouTube Channel",
    tagline: "Mayank Kushwaha",
    period: "04/2024 – 05/2026",
    location: "Lucknow, India",
    type: "Production & Post",
    color: "from-purple-500 to-pink-600",
    badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    stats: [
      { label: "Channel Views", value: "53M+ Monthly Views" },
      { label: "Content Formats", value: "Reels, Shorts & Long-form" },
      { label: "Pacing & Retention", value: "90%+ Retention Rate" },
    ],
    highlights: [
      "Edited and produced high-retention Reels, Shorts, documentary-style videos, and podcast interviews for a YouTube channel pulling 53M+ monthly views.",
      "Managed full post-production end-to-end: precision cutting, sequencing, kinetic typography, transitions, color grading, sound design, and motion graphics.",
      "Handled camera operation (DSLR & mobile), shoot setup, lighting arrangements, and on-location shoots to ensure cinema-grade footage.",
      "Integrated AI-powered workflows for color correction, audio noise cleanup, resolution upscaling, auto-captioning, and fast content repurposing.",
      "Optimized retention hooks and editing pacing across shorts and long-form formats to maximize average view duration (AVD)."
    ]
  }
]

const education = [
  {
    degree: "Bachelor of Arts (B.A.)",
    institution: "University of Lucknow",
    period: "2023 – 2026",
    location: "Lucknow, India",
    icon: <GraduationCap className="w-5 h-5 text-cyan-400" />
  },
  {
    degree: "Intermediate (12th)",
    institution: "Kendriya Vidyalaya",
    period: "2024",
    location: "Lucknow, India",
    icon: <GraduationCap className="w-5 h-5 text-purple-400" />
  },
  {
    degree: "High School (10th)",
    institution: "Kendriya Vidyalaya",
    period: "2021",
    location: "Lucknow, India",
    icon: <GraduationCap className="w-5 h-5 text-pink-400" />
  }
]

export default function Experience() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 })

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium mb-3">
            <Briefcase className="w-4 h-4" />
            <span>TRACK RECORD & EXPERIENCE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
            Professional Experience
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Proven track record of building 0-to-250K+ creator channels and scaling video content to 95M+ reach.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="max-w-5xl mx-auto space-y-8 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-900/80 via-gray-900/50 to-gray-800/40 backdrop-blur-xl border border-gray-800 hover:border-gray-700 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-800">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${exp.badgeColor}`}>
                      {exp.type}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-lg font-medium text-cyan-400 mt-1">
                    {exp.company} <span className="text-gray-400 text-sm font-normal">• {exp.tagline}</span>
                  </p>
                </div>

                {/* Micro Stats Pill */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-black/40 border border-white/5 rounded-xl p-3">
                  {exp.stats.map((s, sIdx) => (
                    <div key={sIdx} className="text-center px-2 py-1">
                      <div className="text-xs text-gray-400">{s.label}</div>
                      <div className="text-sm font-bold text-white tracking-tight">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bullet Points */}
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Key Achievements & Responsibilities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed bg-gray-950/40 p-3 rounded-lg border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education, Certifications & Languages Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 bg-gray-900/50 border border-gray-800 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">Education & Academics</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-800/80">{edu.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base">{edu.degree}</h4>
                      <p className="text-xs text-gray-400">{edu.institution} • {edu.location}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-800 text-gray-300">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            {/* Certifications */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <BadgeCheck className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-white">Certifications</h3>
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Course on Computer Concepts (CCC)</h4>
                  <p className="text-xs text-gray-400">Certified Technical Competency</p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Languages className="w-5 h-5 text-pink-400" />
                <h3 className="text-lg font-bold text-white">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Hindi (Native)", "English (Fluent)", "Urdu (Fluent)", "Hinglish (Scripting)"].map((lang, lIdx) => (
                  <span
                    key={lIdx}
                    className="px-3 py-1.5 rounded-lg bg-black/50 border border-white/10 text-xs font-medium text-gray-200"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
