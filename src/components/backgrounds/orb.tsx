"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface OrbProps {
  languages: {
    name: string
    icon: string
  }[]
}

export default function Orb({ languages }: OrbProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % languages.length)
    }, 4000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [languages.length])

  return (
    <div className="relative w-32 h-32 mx-auto">
      <div className="absolute inset-0 rounded-full bg-blue-900/30 backdrop-blur-md"></div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 relative">
              <Image
                src={languages[currentIndex].icon || "/placeholder.svg"}
                alt={languages[currentIndex].name}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-blue-200">{languages[currentIndex].name}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
