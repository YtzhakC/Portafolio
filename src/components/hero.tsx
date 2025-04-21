"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "../context/language-context"
import LanguageScroller from "./language-scroller"
import { useRef } from "react"

export default function Hero() {
  const { language, translations } = useLanguage()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

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
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  // Scroll indicator animation
  const scrollIndicatorAnimation = {
    y: [0, 10, 0],
    opacity: [0.4, 1, 0.4],
  }

  const scrollIndicatorTransition = {
    duration: 2,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  }

  return (
    <section
      ref={ref}
      id="profile"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <motion.div
        style={{ y, opacity }}
        className="text-center max-w-3xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-transparent bg-clip-text"
          variants={itemVariants}
        >
          Ytzhak Carvajal
        </motion.h1>

        <motion.h2 className="text-2xl md:text-3xl text-blue-300 mb-8" variants={itemVariants}>
          {translations[language].heroTitle}
        </motion.h2>

        <motion.p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto" variants={itemVariants}>
          {translations[language].heroDescription}
        </motion.p>

        <motion.div className="mb-12 w-full overflow-hidden" variants={itemVariants}>
          <LanguageScroller languages={languages} />
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-8">
          {/* Left scroll indicator */}
          <motion.div
            className="hidden md:block"
            animate={scrollIndicatorAnimation}
            transition={scrollIndicatorTransition}
          >
            <div className="w-8 h-12 rounded-full border-2 border-blue-300/50 flex justify-center pt-2">
              <div className="w-1 h-2 bg-blue-300/50 rounded-full"></div>
            </div>
          </motion.div>

          {/* Learn More button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#objectives"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 glow-button"
            >
              {translations[language].learnMore}
            </a>
          </motion.div>

          {/* Right scroll indicator */}
          <motion.div
            className="hidden md:block"
            animate={scrollIndicatorAnimation}
            transition={scrollIndicatorTransition}
          >
            <div className="w-8 h-12 rounded-full border-2 border-blue-300/50 flex justify-center pt-2">
              <div className="w-1 h-2 bg-blue-300/50 rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile scroll indicator (only shown on mobile) */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:hidden"
        animate={scrollIndicatorAnimation}
        transition={scrollIndicatorTransition}
      >
        <div className="w-8 h-12 rounded-full border-2 border-blue-300/50 flex justify-center pt-2">
          <div className="w-1 h-2 bg-blue-300/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}
