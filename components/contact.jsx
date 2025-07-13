"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2, PhoneCall, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const socialLinks = [{ name: "Instagram", url: "https://www.instagram.com", icon: <Instagram className="w-5 h-5"/> },
  { name: "Facebook", url: "https://www.facebook.com",icon:<Facebook className="w-5 h-5" /> },
  { name: "Twitter", url: "https://www.twitter.com",icon:<Twitter className="w-5 h-5" /> },
  { name: "LinkedIn", url: "https://www.linkedin.com",icon:<Linkedin className="w-5 h-5" />
  }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "shaddueditz11@gmail.com",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon:<PhoneCall className="w-6 h-6"/>,
      title: "Phone",
      value: "+91 8840807195",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Daliganj Lucknow.",
      color: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's collaborate on your next video project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center mr-4`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-medium">{info.title}</h4>
                      <p className="text-white">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    target="_blank"
                    href={social.url}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gradient-to-r from-cyan-500 to-purple-600 transition-all duration-300"
                  >
                    
                    <span className="sr-only">{social.name}</span>
                    {/* <img src={`/placeholder.svg?height=24&width=24`} alt={social} className="w-5 h-5" /> */}
                  
                    {social.icon}
                    
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/50 rounded-lg p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-gray-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-cyan-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-cyan-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-gray-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subject of your message"
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-cyan-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-cyan-500 resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-2 px-4 rounded-md transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

