"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface Language {
  name: string
  icon: string
}

interface RotatingLanguagesProps {
  languages: Language[]
  radius?: number
}

export default function RotatingLanguages({ languages, radius = 150 }: RotatingLanguagesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="relative w-full h-full">
      {languages.map((language, index) => {
        const angle = (index * (360 / languages.length)) % 360
        const isHovered = hoveredIndex === index

        return (
          <motion.div
            key={index}
            className="absolute w-12 h-12 rounded-full bg-slate-800/70 backdrop-blur-sm flex items-center justify-center shadow-lg"
            initial={{
              x: Math.cos((angle * Math.PI) / 180) * radius,
              y: Math.sin((angle * Math.PI) / 180) * radius,
              opacity: 0,
            }}
            animate={{
              x: Math.cos((angle * Math.PI) / 180) * radius,
              y: Math.sin((angle * Math.PI) / 180) * radius,
              opacity: 1,
              scale: isHovered ? 1.2 : 1,
              boxShadow: isHovered ? "0 0 15px rgba(59, 130, 246, 0.5)" : "none",
            }}
            transition={{
              duration: 0.3,
            }}
            style={{
              top: "50%",
              left: "50%",
              marginLeft: "-24px",
              marginTop: "-24px",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.img
              src={language.icon}
              alt={language.name}
              className="w-8 h-8"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            />

            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-2 bg-slate-800 text-blue-200 text-xs py-1 px-2 rounded whitespace-nowrap z-20"
              >
                {language.name}
              </motion.div>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
