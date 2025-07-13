"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 mb-4 md:mb-0"
          >
            SHaDDu EDITS
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-center md:text-right"
          >
            <p>© {new Date().getFullYear()}SHaDDu EDITS. All rights reserved.</p>
            <p className="text-sm mt-1">Professional Video Editing & Visual Storytelling</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

