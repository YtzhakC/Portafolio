"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "../context/language-context"
import { Compass, Eye, Heart } from "lucide-react"

export default function MissionVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])
  const { language, translations } = useLanguage()

  const items = [
    {
      icon: <Compass className="w-16 h-16 text-blue-400" />,
      title: translations[language].mission,
      description:
        "Crear herramientas que no solo resuelvan problemas, sino que también hagan la vida de las personas más fácil y conecten a las personas de maneras significativas.",
    },
    {
      icon: <Eye className="w-16 h-16 text-blue-400" />,
      title: translations[language].vision,
      description:
        "Seguir creciendo tanto en lo profesional como en lo personal, aprendiendo de cada experiencia y desafiándome a salir de mi zona de confort.",
    },
    {
      icon: <Heart className="w-16 h-16 text-blue-400" />,
      title: translations[language].values,
      description: "Los principios que guían mi práctica profesional:",
      valuesList: [
        "Trabajo en equipo y colaboración",
        "Aprendizaje continuo",
        "Impacto real en cada proyecto",
        "Disfrutar el camino y aprender de cada paso",
      ],
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
    <section id="mission-vision" className="py-20 px-6 bg-slate-900/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-transparent to-slate-900/50 pointer-events-none"></div>

      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

      <motion.div ref={ref} style={{ y }} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-300 mb-4 gradient-text">
            {translations[language].missionVisionValues}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover-card card-3d"
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="mb-6 bg-blue-900/30 p-4 rounded-full"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-blue-200 mb-4">{item.title}</h3>
              <p className="text-blue-100/80 mb-4">{item.description}</p>

              {item.valuesList && (
                <ul className="text-left w-full space-y-2 stagger-fade-in">
                  {item.valuesList.map((value, valueIndex) => (
                    <li key={valueIndex} className="flex items-center text-blue-100/80">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2"></span>
                      {value}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
