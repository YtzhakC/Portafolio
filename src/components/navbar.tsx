"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../context/language-context"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, translations } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-slate-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-blue-300">
          Ytzhak Carvajal
        </a>

        <div className="hidden md:flex space-x-8">
          {["about", "services", "projects", "contact"].map((item) => (
            <a key={item} href={`#${item}`} className="text-blue-100 hover:text-blue-300 transition-colors">
              {translations[language][item]}
            </a>
          ))}
        </div>

        <button
          onClick={toggleLanguage}
          className="px-4 py-2 rounded-full bg-blue-800/50 hover:bg-blue-700/50 text-blue-100 transition-colors backdrop-blur-sm"
        >
          {language === "en" ? "ES" : "EN"}
        </button>
      </div>
    </motion.nav>
  )
}
