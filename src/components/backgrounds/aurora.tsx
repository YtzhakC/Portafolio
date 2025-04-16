"use client"

import { useEffect, useRef } from "react"

export default function Aurora() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Aurora parameters
    const particles: {
      x: number
      y: number
      radius: number
      color: string
      speed: number
    }[] = []

    const colors = [
      "rgba(54, 162, 235, 0.7)", // Light blue
      "rgba(24, 116, 205, 0.7)", // Medium blue
      "rgba(25, 25, 112, 0.7)", // Dark blue
    ]

    // Create particles
    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 10)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 0.5 + 0.1,
        })
      }
    }

    createParticles()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(10, 20, 40, 1)")
      gradient.addColorStop(1, "rgba(5, 10, 20, 1)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Move particles
        particle.y -= particle.speed

        // Reset particles that go off screen
        if (particle.y < -particle.radius) {
          particle.y = canvas.height + particle.radius
          particle.x = Math.random() * canvas.width
        }
      })

      // Draw aurora effect
      ctx.globalCompositeOperation = "screen"

      for (let i = 0; i < 5; i++) {
        const gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          0,
          canvas.width / 2,
          canvas.height / 2,
          canvas.width * 0.5,
        )

        gradient.addColorStop(0, `rgba(54, 162, 235, ${0.1 - i * 0.02})`)
        gradient.addColorStop(1, "rgba(24, 116, 205, 0)")

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      ctx.globalCompositeOperation = "source-over"

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
