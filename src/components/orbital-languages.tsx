"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Language {
  name: string
  icon: string
}

interface OrbitalLanguagesProps {
  languages: Language[]
  centerSize?: number
}

export default function OrbitalLanguages({ languages, centerSize = 256 }: OrbitalLanguagesProps) {
  const [rotation, setRotation] = useState(0)
  const radius = centerSize / 2 + 40 // Radius is half the center size plus some padding

  // Continuous rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.2) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative" style={{ width: centerSize + radius * 2, height: centerSize + radius * 2 }}>
      {languages.map((language, index) => {
        // Calculate position based on index and current rotation
        const angle = rotation + index * (360 / languages.length)
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius

        return (
          <motion.div
            key={index}
            className="absolute w-12 h-12 rounded-full bg-slate-800/70 backdrop-blur-sm flex items-center justify-center shadow-lg"
            animate={{
              x,
              y,
              rotate: angle,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            style={{
              top: "50%",
              left: "50%",
              marginLeft: "-24px",
              marginTop: "-24px",
            }}
            whileHover={{
              scale: 1.2,
              zIndex: 10,
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
            }}
          >
            <motion.img
              src={language.icon}
              alt={language.name}
              className="w-8 h-8"
              animate={{ rotate: 0 }} // Counter-rotate to keep icon upright
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
            />

            <motion.div
              className="absolute top-full mt-2 bg-slate-800 text-blue-200 text-xs py-1 px-2 rounded opacity-0 pointer-events-none whitespace-nowrap"
              whileHover={{ opacity: 1 }}
            >
              {language.name}
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}
