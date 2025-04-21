"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "../context/language-context"
import { Linkedin, Github, Mail, Phone, MapPin, MessageSquare } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"])
  const { language, translations } = useLanguage()

  const contactInfo = [
    {
      icon: <Linkedin className="w-6 h-6 text-blue-400" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ytzhakc",
      link: "https://www.linkedin.com/in/ytzhakc/",
    },
    {
      icon: <Github className="w-6 h-6 text-blue-400" />,
      label: "GitHub",
      value: "github.com/YtzhakC",
      link: "https://github.com/YtzhakC",
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      label: translations[language].email,
      value: "ytzhakcc@gmail.com",
      link: "mailto:ytzhakcc@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-400" />,
      label: translations[language].phone,
      value: "+57 319 4700704",
      link: "tel:+573194700704",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
      label: "WhatsApp",
      value: "+57 319 4700704",
      link: "https://wa.me/573194700704",
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-400" />,
      label: translations[language].location,
      value: "Bucaramanga, Santander",
      link: "https://maps.google.com/?q=Bucaramanga,Santander,Colombia",
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
    <section id="contact" className="py-20 px-6 bg-slate-900/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none"></div>

      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

      <motion.div ref={ref} style={{ y }} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-300 mb-4 gradient-text">{translations[language].contact}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="mt-6 text-blue-100 max-w-2xl mx-auto">{translations[language].contactDescription}</p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl w-full"
          >
            <h3 className="text-2xl font-semibold text-blue-200 mb-6 text-center">
              {translations[language].contactInfo}
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-slate-800/30 hover:bg-slate-800/50 rounded-lg transition-all duration-300 hover-card"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    x: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    className="mr-4 bg-blue-900/30 p-3 rounded-full"
                    whileHover={{
                      rotate: 20,
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium text-blue-400">{item.label}</p>
                    <p className="text-blue-100">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 flex justify-center space-x-6">
              <motion.a
                href="https://www.linkedin.com/in/ytzhakc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-blue-900/50 rounded-full hover:bg-blue-800 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-8 h-8 text-blue-200" />
              </motion.a>
              <motion.a
                href="https://github.com/YtzhakC"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-blue-900/50 rounded-full hover:bg-blue-800 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-8 h-8 text-blue-200" />
              </motion.a>
              <motion.a
                href="https://wa.me/573194700704"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-blue-900/50 rounded-full hover:bg-blue-800 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="w-8 h-8 text-blue-200" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
