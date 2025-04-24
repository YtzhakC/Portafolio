"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "../context/language-context"
import { Brain, Users, MessageSquare, Lightbulb } from "lucide-react"

export default function SoftSkills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])
  const { language, translations } = useLanguage()

  const skills = [
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
    <section id="soft-skills" className="py-20 px-6 bg-slate-900/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-transparent to-slate-900/50 pointer-events-none"></div>

      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

      <motion.div ref={ref} style={{ y }} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-300 mb-4 gradient-text">
            {language === "en" ? "Soft Skills" : "Habilidades Blandas"}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="mt-6 text-blue-100 max-w-2xl mx-auto">
            {language === "en"
              ? "Key interpersonal and professional skills that complement my technical expertise."
              : "Habilidades interpersonales y profesionales clave que complementan mi experiencia técnica."}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
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
      </motion.div>
    </section>
  )
}
