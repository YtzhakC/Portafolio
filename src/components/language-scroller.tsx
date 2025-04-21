"use client"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

interface Language {
  name: string
  icon: string
}

interface LanguageScrollerProps {
  languages: Language[]
}

export default function LanguageScroller({ languages }: LanguageScrollerProps) {
  // Triple the languages array to create a seamless loop
  const tripleLanguages = [...languages, ...languages, ...languages]
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  // Pause animation on hover
  const handleMouseEnter = () => {
    controls.stop()
  }

  const handleMouseLeave = () => {
    controls.start({
      x: "-33.333%",
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    })
  }

  useEffect(() => {
    controls.start({
      x: "-33.333%",
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    })
  }, [controls])

  return (
    <div
      ref={containerRef}
      className="relative w-full py-8 bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-slate-900/80 to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-slate-900/80 to-transparent pointer-events-none"></div>

      <motion.div className="flex" animate={controls} initial={{ x: "0%" }}>
        <div className="flex space-x-16 px-8">
          {tripleLanguages.map((language, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group"
              whileHover={{
                scale: 1.1,
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="w-20 h-20 flex items-center justify-center bg-slate-800/50 rounded-full p-3 shadow-lg"
                whileHover={{
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.img
                  src={language.icon || "/placeholder.svg"}
                  alt={language.name}
                  className="w-12 h-12 object-contain"
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
              <motion.p
                className="mt-3 text-sm font-medium text-blue-200 opacity-80 group-hover:opacity-100"
                whileHover={{ scale: 1.05 }}
              >
                {language.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
