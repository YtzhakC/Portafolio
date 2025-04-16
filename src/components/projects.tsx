"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "../context/language-context"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { language, translations } = useLanguage()

  const projects = [
    {
      title: translations[language].projectTitle1,
      description: translations[language].projectDesc1,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: translations[language].projectTitle2,
      description: translations[language].projectDesc2,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Tailwind CSS", "Supabase"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: translations[language].projectTitle3,
      description: translations[language].projectDesc3,
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "Django", "PostgreSQL"],
      liveLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-300 mb-4">{translations[language].projects}</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-blue-100 max-w-2xl mx-auto">{translations[language].projectsDescription}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-blue-900/20 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-200 mb-2">{project.title}</h3>
                <p className="text-blue-100/80 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-blue-900/50 text-blue-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center text-blue-300 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    <span className="text-sm">{translations[language].liveDemo}</span>
                  </a>

                  <a
                    href={project.githubLink}
                    className="flex items-center text-blue-300 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    <span className="text-sm">{translations[language].sourceCode}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
