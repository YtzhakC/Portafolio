"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "../context/language-context"
import { Code, Layout, Database, Smartphone } from "lucide-react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
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
      icon: <Smartphone className="w-12 h-12 text-blue-400" />,
      title: translations[language].mobileDevelopment,
      description: translations[language].mobileDevelopmentDesc,
    },
  ]

  return (
    <section id="services" className="py-20 px-6 bg-slate-900/50">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-300 mb-4">{translations[language].services}</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-blue-100 max-w-2xl mx-auto">{translations[language].servicesDescription}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-blue-900/20 hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-200 mb-3">{service.title}</h3>
              <p className="text-blue-100/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
