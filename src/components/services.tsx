"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "../context/language-context"
import { Code, Layout, Database, Server } from "lucide-react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])
  const { language, translations } = useLanguage()

  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-400" />,
      title: translations[language].webDevelopment,
      description: translations[language].webDevelopmentDesc,
    },
    {
      icon: <Layout className="w-12 h-12 text-blue-400" />,
      title: translations[language].uiUxDesign,
      description: translations[language].uiUxDesignDesc,
    },
    {
      icon: <Database className="w-12 h-12 text-blue-400" />,
      title: translations[language].databaseManagement,
      description: translations[language].databaseManagementDesc,
    },
    {
      icon: <Server className="w-12 h-12 text-blue-400" />,
      title: "Backend Development",
      description:
        "Building robust server-side applications and APIs that power web applications with efficient data processing and business logic.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="services" className="py-20 px-6 bg-slate-900/50 relative overflow-hidden">
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
          <h2 className="text-4xl font-bold text-blue-300 mb-4 gradient-text">{translations[language].services}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="mt-6 text-blue-100 max-w-2xl mx-auto">{translations[language].servicesDescription}</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
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
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-blue-200 mb-3">{service.title}</h3>
              <p className="text-blue-100/80">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
