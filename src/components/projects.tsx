"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "../context/language-context"
import Image from "next/image"
import { Github } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])
  const { language, translations } = useLanguage()

  // Actualizar los proyectos para usar traducciones dinámicas
  const projects = [
    {
      title: language === "en" ? "Environmentalists Database" : "Base de Datos Ambientalistas",
      description:
        language === "en"
          ? "A database system for environmental research"
          : "Un sistema de base de datos para investigación ambiental",
      image: "/Portafolio/Environmentalists.jpeg",
      tags: ["MySQL"],
      githubLink: "https://github.com/YtzhakC/los-ambientales",
    },
    {
      title: language === "en" ? "KanBan Board" : "Tablero KanBan",
      description:
        language === "en"
          ? "A task management board with drag-and-drop"
          : "Un tablero de gestión de tareas con funcionalidad de arrastrar y soltar",
      image: "/Portafolio/KanBan.png",
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/YtzhakC/Test-JavaScript",
    },
    {
      title: language === "en" ? "Academic Attendance Management System" : "Sistema de Gestión de Asistencia Académica",
      description:
        language === "en"
          ? "A system to track student attendance"
          : "Un sistema para rastrear la asistencia de estudiantes",
      image: "/Portafolio/AAMS.png",
      tags: ["Python", "SHA-256"],
      githubLink: "https://github.com/YtzhakC/PROYECTO",
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
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      <motion.div ref={ref} style={{ y }} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-300 mb-4 gradient-text">{translations[language].projects}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="mt-6 text-blue-100 max-w-2xl mx-auto">{translations[language].projectsDescription}</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover-card group"
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-200 mb-2">{project.title}</h3>
                <p className="text-blue-100/80 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-blue-900/50 text-blue-200 rounded-full"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(59, 130, 246, 0.3)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex">
                  <motion.a
                    href={project.githubLink}
                    className="flex items-center text-blue-300 hover:text-blue-400 transition-colors animated-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    <span className="text-sm">{translations[language].sourceCode}</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
