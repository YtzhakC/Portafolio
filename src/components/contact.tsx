"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useLanguage } from "../context/language-context"
import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { language, translations } = useLanguage()

  const contactInfo = [
    {
      icon: <Linkedin className="w-6 h-6 text-blue-400" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ytzhak-carvajal",
      link: "https://linkedin.com/in/ytzhak-carvajal",
    },
    {
      icon: <Github className="w-6 h-6 text-blue-400" />,
      label: "GitHub",
      value: "github.com/ytzhak",
      link: "https://github.com/ytzhak",
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      label: translations[language].email,
      value: "ytzhak.carvajal@example.com",
      link: "mailto:ytzhak.carvajal@example.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-400" />,
      label: translations[language].phone,
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-400" />,
      label: translations[language].location,
      value: translations[language].locationValue,
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900/50">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-300 mb-4">{translations[language].contact}</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-6 text-blue-100 max-w-2xl mx-auto">{translations[language].contactDescription}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-blue-200 mb-6">{translations[language].getInTouch}</h3>

            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-blue-300 mb-2">
                  {translations[language].name}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-slate-700/50 border border-blue-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-blue-300 mb-2">
                  {translations[language].email}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-slate-700/50 border border-blue-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-blue-300 mb-2">
                  {translations[language].message}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-slate-700/50 border border-blue-900/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                {translations[language].send}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-blue-200 mb-6">{translations[language].contactInfo}</h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-slate-800/30 hover:bg-slate-800/50 rounded-lg transition-colors"
                >
                  <div className="mr-4">{item.icon}</div>
                  <div>
                    <p className="text-sm font-medium text-blue-400">{item.label}</p>
                    <p className="text-blue-100">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
