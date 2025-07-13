"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between gap-2 items-center">
        <motion.div
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600"
          whileHover={{ scale: 1.05 }}
        >
          <img className="h-10" src="/shadduLogo.png" alt="" />
        </motion.div>
        <nav>
          <ul className="flex space-x-8">
            {["Home", "Projects", "Skills", "Contact"].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

