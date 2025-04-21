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
    let mouseX = 0
    let mouseY = 0
    let time = 0

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth
      mouseY = e.clientY / window.innerHeight
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Aurora parameters
    const particles: {
      x: number
      y: number
      radius: number
      color: string
      speed: number
      angle: number
      amplitude: number
    }[] = []

    const colors = [
      "rgba(54, 162, 235, 0.7)", // Light blue
      "rgba(24, 116, 205, 0.7)", // Medium blue
      "rgba(25, 25, 112, 0.7)", // Dark blue
      "rgba(138, 43, 226, 0.5)", // Purple
      "rgba(72, 61, 139, 0.6)", // Dark slate blue
    ]

    // Create particles
    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 8)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2.5 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: Math.random() * 0.5 + 0.1,
          angle: Math.random() * Math.PI * 2,
          amplitude: Math.random() * 2 + 1,
        })
      }
    }

    createParticles()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(10, 20, 40, 1)")
      gradient.addColorStop(1, "rgba(5, 10, 20, 1)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach((particle) => {
        // Add some wave motion based on time and mouse position
        const waveX = Math.sin(time + particle.angle) * particle.amplitude * (mouseX * 2)
        const waveY = Math.cos(time + particle.angle) * particle.amplitude * (mouseY * 2)

        ctx.beginPath()
        ctx.arc(particle.x + waveX, particle.y + waveY, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Move particles
        particle.y -= particle.speed
        particle.x += Math.sin(time * 2 + particle.angle) * 0.3

        // Reset particles that go off screen
        if (particle.y < -particle.radius) {
          particle.y = canvas.height + particle.radius
          particle.x = Math.random() * canvas.width
        }
        if (particle.x < -particle.radius) {
          particle.x = canvas.width + particle.radius
        } else if (particle.x > canvas.width + particle.radius) {
          particle.x = -particle.radius
        }
      })

      // Draw aurora effect
      ctx.globalCompositeOperation = "screen"

      // Create multiple aurora waves
      for (let i = 0; i < 5; i++) {
        const centerX = canvas.width * (0.5 + (mouseX - 0.5) * 0.2)
        const centerY = canvas.height * (0.5 + (mouseY - 0.5) * 0.2)

        const gradient = ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          canvas.width * (0.4 + Math.sin(time * 0.2) * 0.1),
        )

        // Dynamic colors based on time
        const blueIntensity = 0.1 - i * 0.02 + Math.sin(time) * 0.02
        const purpleIntensity = 0.05 - i * 0.01 + Math.cos(time) * 0.01

        gradient.addColorStop(0, `rgba(54, 162, 235, ${blueIntensity})`)
        gradient.addColorStop(0.5, `rgba(138, 43, 226, ${purpleIntensity})`)
        gradient.addColorStop(1, "rgba(24, 116, 205, 0)")

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      // Add subtle noise texture
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 1.5
        const opacity = Math.random() * 0.05

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.fill()
      }

      ctx.globalCompositeOperation = "source-over"

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
