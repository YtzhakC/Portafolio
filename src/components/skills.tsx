"use client"

import { useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useLanguage } from "../context/language-context"
import { Brain, Users, MessageSquare, Lightbulb } from "lucide-react"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])
  const { language, translations } = useLanguage()

  // Estado para controlar qué tipo de habilidades mostrar
  const [showTechnical, setShowTechnical] = useState(true)

  // Habilidades técnicas (lenguajes de programación)
  const technicalSkills = [
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

  // Habilidades blandas
  const softSkills = [
    {
      icon: <Brain className="w-12 h-12 text-blue-400" />,
      title: language === "en" ? "Problem Solving" : "Resolución de Problemas",
      description:
        language === "en"
          ? "Ability to analyze complex situations, identify root causes, and develop effective solutions."
          : "Capacidad para analizar situaciones complejas, identificar causas raíz y desarrollar soluciones efectivas.",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-400" />,
      title: language === "en" ? "Team Collaboration" : "Colaboración en Equipo",
      description:
        language === "en"
          ? "Strong ability to work collaboratively, share knowledge, and contribute to team success."
          : "Fuerte capacidad para trabajar de forma colaborativa, compartir conocimientos y contribuir al éxito del equipo.",
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-blue-400" />,
      title: language === "en" ? "Effective Communication" : "Comunicación Efectiva",
      description:
        language === "en"
          ? "Clear and concise communication skills, both written and verbal, adapting to different audiences."
          : "Habilidades de comunicación claras y concisas, tanto escritas como verbales, adaptándome a diferentes audiencias.",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-400" />,
      title: language === "en" ? "Adaptability & Learning" : "Adaptabilidad y Aprendizaje",
      description:
        language === "en"
          ? "Quick to adapt to new technologies and environments, with a passion for continuous learning."
          : "Rápida adaptación a nuevas tecnologías y entornos, con pasión por el aprendizaje continuo.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      <motion.div ref={ref} style={{ y }} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-300 mb-4 gradient-text">
            {language === "en" ? "Skills" : "Habilidades"}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="mt-6 text-blue-100 max-w-2xl mx-auto">
            {language === "en"
              ? "My technical and soft skills that I've developed throughout my career."
              : "Mis habilidades técnicas y blandas que he desarrollado a lo largo de mi carrera."}
          </p>
        </motion.div>

        {/* Toggle buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm p-1 rounded-full flex">
            <motion.button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                showTechnical
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-transparent text-blue-300 hover:bg-slate-700/50"
              }`}
              onClick={() => setShowTechnical(true)}
              whileHover={{ scale: showTechnical ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === "en" ? "Technical Skills" : "Habilidades Técnicas"}
            </motion.button>
            <motion.button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !showTechnical
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-transparent text-blue-300 hover:bg-slate-700/50"
              }`}
              onClick={() => setShowTechnical(false)}
              whileHover={{ scale: !showTechnical ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === "en" ? "Soft Skills" : "Habilidades Blandas"}
            </motion.button>
          </div>
        </div>

        {/* Content container with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          {showTechnical ? (
            <motion.div
              key="technical"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
            >
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center hover-card"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    className="w-16 h-16 mb-4 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                  >
                    <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="w-12 h-12" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-blue-200">{skill.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="soft"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover-card"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    className="mb-6 bg-blue-900/30 p-4 rounded-full inline-block"
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 0.8, ease: "easeInOut" },
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-blue-200 mb-3">{skill.title}</h3>
                  <p className="text-blue-100/80">{skill.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
