"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Play, 
  ExternalLink, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Sparkles, 
  Film, 
  ChevronLeft, 
  ChevronRight, 
  Radio, 
  X,
  Eye,
  Flame,
  Layers,
  Clock
} from "lucide-react"

// Curated Project Lineup with Real Assets
const projectsData = [
  {
    id: "rudra",
    youtubeId: "EfUnrESWY8g",
    title: "रुद्राक्ष का रहस्य | Real vs Fake Rudraksha",
    category: "Education",
    genre: "Mystery & Spirituality",
    thumbnail: "/img/rudra.jpg",
    videoUrl: "https://youtu.be/EfUnrESWY8g?si=0zxFPEfxD116lwHQ",
    stats: { views: "3.2M+", retention: "91%", duration: "14:20", fps: "60 FPS" },
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    accentColor: "#06b6d4",
    description: "Deep investigative documentary pacing with dynamic 3D asset integration, motion graphics, and hyper-immersive sound engineering."
  },
  {
    id: "suhagrat",
    youtubeId: "m6x6cg3JJWs",
    title: "Exposed Married Life Reality | ft. Sakshi Bhogal",
    category: "Education",
    genre: "Podcast & Reality",
    thumbnail: "/img/suhagratHD.jpg",
    videoUrl: "https://youtu.be/m6x6cg3JJWs?si=aZiOgWfxqzDJAioa",
    stats: { views: "4.8M+", retention: "89%", duration: "28:45", fps: "60 FPS" },
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    accentColor: "#f43f5e",
    description: "Viral multi-cam podcast cut with retention-focused dynamic zooms, micro-sound effects, and kinetic typography."
  },
  {
    id: "masturbation",
    youtubeId: "xU5e-5fo-9Y",
    title: "Gain Energy After MASTURBATION | Mindset & Health",
    category: "Motivation",
    genre: "Mindset & Science",
    thumbnail: "/img/1.jpg",
    videoUrl: "https://youtu.be/xU5e-5fo-9Y?si=S3QPbAC_p4M3zBPQ",
    stats: { views: "1.9M+", retention: "94%", duration: "11:15", fps: "60 FPS" },
    tools: ["Premiere Pro", "After Effects", "Audition"],
    accentColor: "#06b6d4",
    description: "High-octane dopamine-retaining edit packed with customized 2D animation explainers, speed ramps, and punchy audio hooks."
  },
  {
    id: "horror-1",
    youtubeId: "eNtVXqKfM2k",
    title: "10 आत्माओं के साथ संभोग PART 1 | Real Horror Story",
    category: "Horror",
    genre: "Paranormal Audio-Visual",
    thumbnail: "/img/3.jpg",
    videoUrl: "https://youtu.be/eNtVXqKfM2k?si=R_scwbLjyGZBmk1j",
    stats: { views: "2.7M+", retention: "96%", duration: "22:10", fps: "60 FPS" },
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    accentColor: "#a855f7",
    description: "Atmospheric dark horror narrative crafted with eerie volumetric color grading, 8D binaural sound design, and glitch VFX."
  },
  {
    id: "tantra",
    youtubeId: "l03cy9YGtFU",
    title: "कर्ण पिशाचिनी और डायन | Reality of Tantra-Mantra",
    category: "Horror",
    genre: "Occult Podcast",
    thumbnail: "/img/6.jpg",
    videoUrl: "https://youtu.be/l03cy9YGtFU?si=FfxziBvujIUInfPe",
    stats: { views: "5.1M+", retention: "93%", duration: "35:00", fps: "60 FPS" },
    tools: ["Premiere Pro", "After Effects", "Blender"],
    accentColor: "#10b981",
    description: "Masterclass occult podcast visual edit with dark ambient smoke overlays and cinematic suspense builds."
  },
  {
    id: "psychology",
    youtubeId: "EfUnrESWY8g",
    title: "Dark Psychology & Manipulation Tactics Exposed",
    category: "Education",
    genre: "Mind & Strategy",
    thumbnail: "/img/4.jpg",
    videoUrl: "https://youtu.be/EfUnrESWY8g?si=0zxFPEfxD116lwHQ",
    stats: { views: "1.4M+", retention: "88%", duration: "16:40", fps: "60 FPS" },
    tools: ["Premiere Pro", "After Effects"],
    accentColor: "#6366f1",
    description: "Ultra clean documentary styling with clean grid motion typography, smooth map graphics, and sound design."
  },
  {
    id: "cinematic-vfx",
    youtubeId: "xU5e-5fo-9Y",
    title: "Visual FX & Cinematic Speed Ramping Mastercut",
    category: "Cinematic",
    genre: "VFX & Commercial",
    thumbnail: "/img/26.jpg",
    videoUrl: "https://youtu.be/xU5e-5fo-9Y?si=S3QPbAC_p4M3zBPQ",
    stats: { views: "850K+", retention: "97%", duration: "03:30", fps: "120 FPS" },
    tools: ["After Effects", "DaVinci Resolve"],
    accentColor: "#ec4899",
    description: "Heavy VFX workflow featuring planar tracking, rotoscoping, chromatic transitions, and film grain emulation."
  },
  {
    id: "retention-doc",
    youtubeId: "m6x6cg3JJWs",
    title: "High-Retention YouTube Documentaries Suite",
    category: "Motivation",
    genre: "Docu-Style Reel",
    thumbnail: "/img/10.jpg",
    videoUrl: "https://youtu.be/m6x6cg3JJWs?si=aZiOgWfxqzDJAioa",
    stats: { views: "3.6M+", retention: "92%", duration: "19:10", fps: "60 FPS" },
    tools: ["Premiere Pro", "After Effects"],
    accentColor: "#06b6d4",
    description: "Story-first editing pipeline designed to maximize audience average view duration with pacing loops."
  }
]

const categories = ["All", "Education", "Horror", "Motivation", "Cinematic"]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isMuted, setIsMuted] = useState(true)
  const [isAutoPlayRunning, setIsAutoPlayRunning] = useState(true)
  const [autoPlayProgress, setAutoPlayProgress] = useState(0)
  const [modalProject, setModalProject] = useState(null)
  const [soundFeedback, setSoundFeedback] = useState("")

  const bgIframeRef = useRef(null)
  const sliderScrollRef = useRef(null)

  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory)

  // Safe fallback if activeIndex is out of range when switching category
  const safeIndex = activeIndex >= filteredProjects.length ? 0 : activeIndex
  const activeProject = filteredProjects[safeIndex] || projectsData[0]

  // Handle Mute/Unmute
  const toggleMute = () => {
    const newMutedState = !isMuted
    setIsMuted(newMutedState)

    if (bgIframeRef.current && bgIframeRef.current.contentWindow) {
      try {
        bgIframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func: newMutedState ? "mute" : "unMute",
            args: []
          }),
          "*"
        )
        if (!newMutedState) {
          bgIframeRef.current.contentWindow.postMessage(
            JSON.stringify({
              event: "command",
              func: "setVolume",
              args: [100]
            }),
            "*"
          )
        }
      } catch (e) {
        console.error("Iframe audio toggle error", e)
      }
    }

    setSoundFeedback(newMutedState ? "Audio Muted" : "Audio Playing (100%)")
    setTimeout(() => setSoundFeedback(""), 2200)
  }

  // Ensure volume sync on video change
  useEffect(() => {
    const timer = setTimeout(() => {
      if (bgIframeRef.current && bgIframeRef.current.contentWindow && !isMuted) {
        bgIframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "unMute", args: [] }),
          "*"
        )
        bgIframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "setVolume", args: [100] }),
          "*"
        )
      }
    }, 800)
    return () => clearTimeout(timer)
  }, [activeProject, isMuted])

  // Auto-play timer for smooth video switching
  useEffect(() => {
    if (!isAutoPlayRunning || filteredProjects.length <= 1) return

    const duration = 8000 // 8s per video
    const intervalTime = 100
    let elapsed = 0

    const timer = setInterval(() => {
      elapsed += intervalTime
      const pct = Math.min(100, (elapsed / duration) * 100)
      setAutoPlayProgress(pct)

      if (elapsed >= duration) {
        elapsed = 0
        setAutoPlayProgress(0)
        setActiveIndex((prev) => (prev + 1) % filteredProjects.length)
      }
    }, intervalTime)

    return () => clearInterval(timer)
  }, [isAutoPlayRunning, filteredProjects.length, safeIndex])

  // Scroll active thumbnail smoothly into view inside slider
  useEffect(() => {
    if (sliderScrollRef.current) {
      const activeEl = sliderScrollRef.current.children[safeIndex]
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        })
      }
    }
  }, [safeIndex])

  const handleSelectProject = (index) => {
    setActiveIndex(index)
    setAutoPlayProgress(0)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1))
    setAutoPlayProgress(0)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length)
    setAutoPlayProgress(0)
  }

  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Hide top header when scrolling down, reveal when scrolling up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHeaderVisible(false)
      } else {
        setIsHeaderVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <section 
      id="projects" 
      className="relative w-full h-screen min-h-[700px] max-h-[1080px] bg-black text-white overflow-hidden select-none"
    >
      {/* ========================================================================= */}
      {/* 1. CRYSTAL CLEAR FULLSCREEN ALWAYS-PLAYING BACKGROUND VIDEO               */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Active YouTube Iframe Stream */}
        <div className="absolute inset-0 w-full h-full transform scale-110 pointer-events-none">
          <iframe
            ref={bgIframeRef}
            key={activeProject.youtubeId}
            className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.06] saturate-[1.08] transition-opacity duration-700"
            src={`https://www.youtube.com/embed/${activeProject.youtubeId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&showinfo=0&rel=0&loop=1&playlist=${activeProject.youtubeId}&enablejsapi=1&playsinline=1&modestbranding=1&iv_load_policy=3&disablekb=1`}
            title="Full Screen Active Background Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Minimal clean cinematic gradients (ensures perfect text readability without darkening video) */}
        <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
      </div>

      {/* ========================================================================= */}
      {/* 2. TOP HUD: AUTO-HIDING SECTION TITLE & MUTE AUDIO TOGGLE                 */}
      {/* ========================================================================= */}
      <motion.div 
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: isHeaderVisible ? 0 : -100, opacity: isHeaderVisible ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="relative z-20 container mx-auto px-6 sm:px-10 pt-20 sm:pt-24 flex items-center justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400">
              SHADDU EDITZ // 4K 60FPS BACKGROUND STREAM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-cyan-300">
            Featured Projects
          </h2>
        </div>

        {/* Sound Toggle & Cinema HUD */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMute}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-xs font-bold backdrop-blur-2xl border transition-all duration-300 shadow-xl ${
              !isMuted 
                ? "bg-cyan-500 text-black border-cyan-400 shadow-glow-cyan scale-105" 
                : "bg-black/70 text-white border-white/20 hover:border-cyan-400 hover:bg-black/90"
            }`}
          >
            {!isMuted ? (
              <>
                <Volume2 className="w-4 h-4 text-black" />
                <span>SOUND ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-gray-300" />
                <span>UNMUTE VIDEO</span>
              </>
            )}
          </button>

          <button
            onClick={() => setModalProject(activeProject)}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full font-mono text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-2xl transition-all"
          >
            <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>CINEMA MODE</span>
          </button>
        </div>
      </motion.div>

      {/* Sound Feedback Toast */}
      <AnimatePresence>
        {soundFeedback && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-36 right-10 z-40 px-4 py-2 rounded-xl bg-cyan-500 text-black font-mono text-xs font-bold shadow-glow-cyan backdrop-blur-md flex items-center gap-2"
          >
            {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <span>{soundFeedback}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 3. BOTTOM LEFT: CINEMATIC ACTIVE PROJECT SPOTLIGHT BANNER                */}
      {/* ========================================================================= */}
      <div className="absolute bottom-8 left-6 sm:left-10 z-20 max-w-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-3"
          >
            {/* Badges Row */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-glow-cyan">
                <Sparkles className="w-3 h-3" />
                {activeProject.category}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-black/60 border border-white/15 text-gray-300 backdrop-blur-md">
                {activeProject.genre}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-black/60 border border-white/15 text-purple-300 backdrop-blur-md">
                {activeProject.stats.fps}
              </span>
            </div>

            {/* Bold Cinematic Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
              {activeProject.title}
            </h3>

            {/* Short Narrative Description */}
            <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 max-w-lg leading-relaxed drop-shadow-md">
              {activeProject.description}
            </p>

            {/* Metrics & Action Row */}
            <div className="flex items-center gap-4 pt-1">
              <div className="flex items-center gap-3 text-xs font-mono text-gray-300 bg-black/60 border border-white/15 px-3 py-1.5 rounded-xl backdrop-blur-md">
                <span className="flex items-center gap-1 text-cyan-300 font-bold">
                  <Eye className="w-3.5 h-3.5 text-cyan-400" /> {activeProject.stats.views}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-orange-400 font-bold">
                  <Flame className="w-3.5 h-3.5" /> {activeProject.stats.retention} Ret.
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-gray-300">
                  <Clock className="w-3.5 h-3.5 text-gray-400" /> {activeProject.stats.duration}
                </span>
              </div>

              <a
                href={activeProject.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-cyan-500 hover:text-black text-white font-mono text-xs font-bold flex items-center gap-2 backdrop-blur-md border border-white/20 transition-all duration-200"
              >
                Watch on YouTube <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ========================================================================= */}
      {/* 4. BOTTOM RIGHT: ULTRA-PREMIUM CATEGORY-BASED SLIDER DECK               */}
      {/* ========================================================================= */}
      <div 
        onMouseEnter={() => setIsAutoPlayRunning(false)}
        onMouseLeave={() => setIsAutoPlayRunning(true)}
        className="absolute bottom-6 right-6 sm:right-10 z-30 w-[92vw] sm:w-[480px] md:w-[540px] bg-black/85 backdrop-blur-3xl border border-cyan-500/40 p-4 rounded-3xl shadow-glow-cyan transition-all duration-300"
      >
        {/* Slider Header: Category Tabs & Prev/Next Controls */}
        <div className="flex flex-col gap-2.5 mb-3">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-black text-white tracking-wider uppercase">
                PROJECT REEL SLIDER
              </span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/20 px-2 py-0.5 rounded-full border border-cyan-500/30">
                {safeIndex + 1} / {filteredProjects.length}
              </span>
            </div>

            {/* Countdown Progress Bar & Arrows */}
            <div className="flex items-center gap-2.5">
              <div className="w-20 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  style={{ width: `${autoPlayProgress}%` }}
                />
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-105 active:scale-95"
                  title="Previous Project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-105 active:scale-95"
                  title="Next Project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Integrated Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat)
                    setActiveIndex(0)
                    setAutoPlayProgress(0)
                  }}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wide transition-all duration-200 whitespace-nowrap ${
                    isSelected
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-glow-cyan scale-105"
                      : "bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-white/25"
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

        </div>

        {/* Beautiful Sliding Cards Carousel */}
        <div 
          ref={sliderScrollRef}
          className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1 scroll-smooth"
        >
          {filteredProjects.map((project, idx) => {
            const isActive = idx === safeIndex
            return (
              <motion.button
                key={project.id}
                onClick={() => handleSelectProject(idx)}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative flex-shrink-0 w-32 sm:w-36 rounded-2xl overflow-hidden transition-all duration-300 text-left border ${
                  isActive 
                    ? "ring-2 ring-cyan-400 border-cyan-400 shadow-glow-cyan scale-105 bg-gray-900" 
                    : "opacity-60 hover:opacity-100 border-white/10 bg-black/60 hover:border-white/30"
                }`}
              >
                {/* Thumbnail Preview */}
                <div className="relative aspect-video w-full overflow-hidden bg-gray-950">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Active Play Icon Overlay */}
                  {isActive && (
                    <div className="absolute inset-0 flex items-center justify-center bg-cyan-950/40 backdrop-blur-[1px]">
                      <div className="w-7 h-7 rounded-full bg-cyan-400 flex items-center justify-center shadow-lg animate-pulse">
                        <Play className="w-3.5 h-3.5 text-black fill-black ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Duration Tag */}
                  <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-black/80 text-gray-200">
                    {project.stats.duration}
                  </span>
                </div>

                {/* Card Title & Genre */}
                <div className="p-2 bg-gradient-to-b from-gray-900/90 to-black">
                  <p className={`text-[11px] font-bold truncate transition-colors ${
                    isActive ? "text-cyan-300" : "text-white group-hover:text-cyan-400"
                  }`}>
                    {project.title}
                  </p>
                  <div className="flex items-center justify-between mt-0.5 text-[9px] font-mono text-gray-400">
                    <span className="text-cyan-400">{project.category}</span>
                    <span>{project.stats.views}</span>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Slider Bottom Action Bar */}
        <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-400">
          <button
            onClick={toggleMute}
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
          >
            {!isMuted ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>{isMuted ? "Click to Unmute BG" : "Audio Active"}</span>
          </button>

          <button
            onClick={() => setModalProject(activeProject)}
            className="text-white hover:text-cyan-300 flex items-center gap-1.5 font-bold transition-colors"
          >
            Full Cinema Mode <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 5. FULLSCREEN CINEMA PLAYER MODAL                                         */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4 sm:p-6"
            onClick={() => setModalProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-3xl bg-gray-950 border border-white/20 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-gray-900/80">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      {modalProject.category}
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      {modalProject.genre}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {modalProject.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={modalProject.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs flex items-center gap-1.5 transition-colors border border-white/15"
                  >
                    Open YouTube <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setModalProject(null)}
                    className="p-2 rounded-xl bg-white/10 hover:bg-rose-500/20 hover:text-rose-400 text-gray-300 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Video Player Frame */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full object-cover"
                  src={`https://www.youtube.com/embed/${modalProject.youtubeId}?autoplay=1&controls=1&rel=0&modestbranding=1`}
                  title={modalProject.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Modal Details Breakdown */}
              <div className="p-4 sm:p-6 overflow-y-auto bg-gray-950/90 text-sm">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] font-mono text-gray-400 uppercase">Estimated Views</p>
                    <p className="text-base font-bold text-cyan-400">{modalProject.stats.views}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] font-mono text-gray-400 uppercase">Audience Retention</p>
                    <p className="text-base font-bold text-purple-400">{modalProject.stats.retention}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] font-mono text-gray-400 uppercase">Format</p>
                    <p className="text-base font-bold text-pink-400">{modalProject.stats.fps}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[10px] font-mono text-gray-400 uppercase">Runtime</p>
                    <p className="text-base font-bold text-amber-400">{modalProject.stats.duration}</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4 text-xs sm:text-sm">
                  {modalProject.description}
                </p>

                <div>
                  <h5 className="text-xs font-mono uppercase text-gray-400 mb-2">Software Stack</h5>
                  <div className="flex flex-wrap gap-2">
                    {modalProject.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-gradient-to-r from-gray-800 to-gray-900 border border-white/15 text-cyan-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
