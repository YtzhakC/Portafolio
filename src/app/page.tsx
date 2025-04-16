"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import About from "../components/about"
import Services from "../components/services"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Aurora from "../components/backgrounds/aurora"
import { useLanguage } from "../context/language-context"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Aurora />
      </div>

      <div className="relative z-10">
        <Navbar />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </motion.div>
      </div>
    </main>
  )
}
