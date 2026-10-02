"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Initialize Lenis smooth scrolling with cinematic easing
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      smoothTouch: false,
      touchMultiplier: 1.5,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    // Smooth scroll for in-page anchors (#home, #projects, #skills, #contact)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a")
      const href = anchor?.getAttribute("href")
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href)
        if (targetElement) {
          e.preventDefault()
          lenis.scrollTo(targetElement, {
            offset: 0,
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener("click", handleAnchorClick)
      lenis.destroy()
    }
  }, [])

  return children
}
