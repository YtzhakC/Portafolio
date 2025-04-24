"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "../context/language-context"
import { useRef } from "react"
import Image from "next/image"

export default function HeroV2() {
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
    {
      name: "SpringBoot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
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
        className="text-center max-w-4xl mx-auto z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative mb-8">
          {/* Central circle with photo */}
          <div className="relative mx-auto">
            <motion.div
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-lg shadow-blue-500/20 mx-auto relative z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image src="/placeholder.svg?height=400&width=400" alt="Ytzhak Carvajal" fill className="object-cover" />
            </motion.div>

            {/* Rotating languages */}
            {languages.map((language, index) => {
              const totalLanguages = languages.length
              const angle = index * (360 / totalLanguages) + scrollYProgress.get() * 360
              const radius = 180 // Distance from center

              return (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 rounded-full bg-slate-800/70 backdrop-blur-sm flex items-center justify-center shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    x: Math.cos((angle * Math.PI) / 180) * radius,
                    y: Math.sin((angle * Math.PI) / 180) * radius,
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: index * 0.1 },
                    x: { duration: 0.5, delay: index * 0.1 },
                    y: { duration: 0.5, delay: index * 0.1 },
                  }}
                  style={{
                    top: "50%",
                    left: "50%",
                    marginLeft: "-24px",
                    marginTop: "-24px",
                  }}
                  whileHover={{
                    scale: 1.2,
                    zIndex: 20,
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                  }}
                >
                  <motion.img
                    src={language.icon}
                    alt={language.name}
                    className="w-8 h-8"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 gradient-text text-transparent bg-clip-text"
          variants={itemVariants}
        >
          Ytzhak Carvajal
        </motion.h1>

        <motion.h2 className="text-2xl md:text-3xl text-blue-300 mb-4" variants={itemVariants}>
          {translations[language].heroTitle}
        </motion.h2>

        <motion.p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto" variants={itemVariants}>
          {translations[language].heroDescription}
        </motion.p>

        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#objectives"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 glow-button"
            >
              {translations[language].learnMore}
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
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
