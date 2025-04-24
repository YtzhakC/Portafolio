"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hover-trigger")
      ) {
        setCursorVariant("hover")
      } else {
        setCursorVariant("default")
      }
    }

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 20,
      width: 20,
      backgroundColor: "rgba(59, 130, 246, 0.5)",
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 60,
      width: 60,
      backgroundColor: "rgba(139, 92, 246, 0.3)",
      mixBlendMode: "screen" as "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity",
    },
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    />
  )
}
