"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "../context/language-context"
import Image from "next/image"
import { Calendar, MapPin, Mail, Phone } from 'lucide-react'

export default function AboutMe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])
  const { language, translations } = useLanguage()

  const personalInfo = [
    {
      icon: <Calendar className="w-5 h-5 text-blue-400" />,
      label: language === "en" ? "Experience" : "Experiencia",
      value: language === "en" ? "3 months" : "3 meses",
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-400" />,
      label: language === "en" ? "Location" : "Ubicación",
      value: "Bucaramanga, Santander",
    },
    {
      icon: <Mail className="w-5 h-5 text-blue-400" />,
      label: language === "en" ? "Email" : "Correo",
      value: "ytzhakcc@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-blue-400" />,
      label: language === "en" ? "Phone" : "Teléfono",
      value: "+57 319 4700704",
    },
  ]

  return (
    <section id="about-me" className="py-20 px-6 bg-slate-900/50 relative overflow-hidden">
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
            {language === "en" ? "About Me" : "Sobre Mí"}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-md mx-auto"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-2xl blur-lg opacity-70 animate-pulse"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-blue-900/20 border-2 border-blue-800/50">
  <Image
    src="/images/Profile.jpeg"
    alt="Ytzhak Carvajal"
    width={400}
    height={400}
    className="object-cover"
    priority
  />
</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-blue-200 mb-4">
              {language === "en" ? "Who am I?" : "¿Quién soy yo?"}
            </h3>

            <p className="text-blue-100 mb-6">
              {language === "en"
                ? "I am a passionate full-stack developer dedicated to creating innovative digital solutions that solve real-world problems. My mission is to develop tools that make people's lives easier and connect them in meaningful ways."
                : "Soy un desarrollador full-stack apasionado dedicado a crear soluciones digitales innovadoras que resuelvan problemas reales. Mi misión es desarrollar herramientas que faciliten la vida de las personas y las conecten de manera significativa."}
            </p>

            <p className="text-blue-100 mb-6">
              {language === "en"
                ? "My vision is to continue growing both professionally and personally, learning from each experience and challenging myself to step out of my comfort zone. I value teamwork, continuous learning, and creating real impact in every project I undertake."
                : "Mi visión es seguir creciendo tanto profesional como personalmente, aprendiendo de cada experiencia y desafiándome a salir de mi zona de confort. Valoro el trabajo en equipo, el aprendizaje continuo y crear un impacto real en cada proyecto que emprendo."}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {personalInfo.map((item, index) => (
                <div key={index} className="flex items-start mb-4">
                  <div className="mr-3 bg-blue-900/30 p-2 rounded-full">{item.icon}</div>
                  <div>
                    <h4 className="text-sm font-medium text-blue-400">{item.label}</h4>
                    <p className="text-blue-100">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
