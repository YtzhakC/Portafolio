"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Objectives from "../components/objectives"
import MissionVision from "../components/mission-vision"
import Certifications from "../components/certifications"
import Services from "../components/services"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Aurora from "../components/backgrounds/aurora"
import CursorEffect from "../components/cursor-effect"
import { useLanguage } from "../context/language-context"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    setMounted(true)

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        e.preventDefault()
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href")?.substring(1)
        if (targetId) {
          const targetElement = document.getElementById(targetId)
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            })
          }
        }
      })
    })

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", (e) => {})
      })
    }
  }, [])

  if (!mounted) return null

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Aurora />
      </div>

      <CursorEffect />

      <div className="relative z-10">
        <Navbar />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Hero />
          <Objectives />
          <MissionVision />
          <Certifications />
          <Services />
          <Projects />
          <Contact />

          {/* Footer */}
          <div className="py-6 text-center text-blue-100/60 text-sm">
            <p>
              © {new Date().getFullYear()} Ytzhak Carvajal.{" "}
              {language === "en" ? "All rights reserved." : "Todos los derechos reservados."}
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
