"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../context/language-context"
import Orb from "./backgrounds/orb"

export default function Hero() {
  const { language, translations } = useLanguage()

  const languages = [
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "ReactJS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "NextJS",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ]

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-blue-100 mb-6">Ytzhak Carvajal</h1>

        <h2 className="text-2xl md:text-3xl text-blue-300 mb-8">{translations[language].heroTitle}</h2>

        <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">{translations[language].heroDescription}</p>

        <div className="mb-12">
          <Orb languages={languages} />
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="inline-block px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
        >
          {translations[language].learnMore}
        </motion.a>
      </motion.div>
    </section>
  )
}
