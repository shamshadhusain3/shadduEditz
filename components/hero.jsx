"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import * as THREE from "three"

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Three.js setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000

    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x8a2be2,
      blending: THREE.AdditiveBlending,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Add lights
    const pointLight = new THREE.PointLight(0x00ffff, 0.5)
    pointLight.position.set(2, 3, 4)
    scene.add(pointLight)

    const pointLight2 = new THREE.PointLight(0xff00ff, 0.5)
    pointLight2.position.set(-2, -3, -4)
    scene.add(pointLight2)

    camera.position.z = 2

    // Mouse movement effect
    let mouseX = 0
    let mouseY = 0

    function onDocumentMouseMove(event) {
      mouseX = (event.clientX - window.innerWidth / 2) / 100
      mouseY = (event.clientY - window.innerHeight / 2) / 100
    }

    document.addEventListener("mousemove", onDocumentMouseMove)

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      particlesMesh.rotation.x += 0.001
      particlesMesh.rotation.y += 0.001

      particlesMesh.rotation.x += mouseY * 0.001
      particlesMesh.rotation.y += mouseX * 0.001

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("mousemove", onDocumentMouseMove)

      // Dispose resources
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Visual Storytelling Redefined
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional video editor crafting immersive visual experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-medium text-lg hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            className="w-1 h-2 bg-white rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

