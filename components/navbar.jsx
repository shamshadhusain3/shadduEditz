"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Determine if scrolled past initial threshold
      setScrolled(currentScrollY > 60)

      // Hide header when scrolling down, reveal when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling Down -> Hide Header
        setIsVisible(false)
      } else {
        // Scrolling Up or at top -> Show Header
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled 
          ? "bg-black/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-10 flex justify-between items-center">
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="#home">
            <img className="h-9 sm:h-10 w-auto object-contain" src="/shadduLogo.png" alt="Shaddu Editz Logo" />
          </Link>
        </motion.div>

        <nav className="flex items-center space-x-6 sm:space-x-8">
          <ul className="flex items-center space-x-5 sm:space-x-8">
            {["Home", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium text-gray-300 hover:text-cyan-300 relative group transition-colors"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="/Shadmaan_Mahmood_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 text-cyan-300 hover:text-white hover:border-cyan-400 transition-all"
          >
            Resume
          </motion.a>
        </nav>
      </div>
    </motion.header>
  )
}
