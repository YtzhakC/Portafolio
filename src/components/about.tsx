"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "../context/language-context"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { language, translations } = useLanguage()

  return (
    <section id="about" className="py-20 px-6">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-300 mb-4">{translations[language].about}</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl shadow-blue-900/20"
          >
            <Image src="/images/Profile.jpeg" alt="Ytzhak Carvajal" fill className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-blue-200 mb-4">{translations[language].aboutTitle}</h3>

            <p className="text-blue-100 mb-6">{translations[language].aboutDescription1}</p>

            <p className="text-blue-100 mb-6">{translations[language].aboutDescription2}</p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: translations[language].name, value: "Ytzhak Carvajal" },
                { label: translations[language].experience, value: "5+ years" },
                { label: translations[language].location, value: translations[language].locationValue },
                { label: translations[language].availability, value: translations[language].availabilityValue },
              ].map((item, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-sm font-medium text-blue-400">{item.label}</h4>
                  <p className="text-blue-100">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
