"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "../context/language-context"
import { Target, TrendingUp, Lightbulb } from "lucide-react"

export default function Objectives() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])
  const { language, translations } = useLanguage()

  const objectives = [
    {
      icon: <Target className="w-12 h-12 text-blue-400" />,
      title: "Crecimiento Profesional",
      description:
        "Seguir creciendo profesionalmente, aprendiendo nuevas tecnologías y metodologías para mejorar mis habilidades como desarrollador.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-400" />,
      title: "Colaboración y Trabajo en Equipo",
      description:
        "Trabajar en equipo, colaborar con otros profesionales y construir soluciones que tengan un impacto real en la vida de las personas.",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-400" />,
      title: "Innovación y Mejora Continua",
      description:
        "Desafiarme a salir de mi zona de confort, seguir sumando logros y disfrutar del proceso de aprendizaje en cada paso del camino.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="objectives" className="py-20 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-900/80 to-transparent pointer-events-none z-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      <motion.div ref={ref} style={{ y }} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-300 mb-4 gradient-text">{translations[language].objectives}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="mt-6 text-blue-100 max-w-2xl mx-auto">{translations[language].objectivesDescription}</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover-card card-container"
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="mb-6 bg-blue-900/30 p-4 rounded-full inline-block"
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 },
                }}
              >
                {objective.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-blue-200 mb-3">{objective.title}</h3>
              <p className="text-blue-100/80">{objective.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
