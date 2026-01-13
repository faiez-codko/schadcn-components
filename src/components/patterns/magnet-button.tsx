import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface MagnetButtonProps extends ButtonProps {
  particleCount?: number
  particleColor?: string
  attractionRadius?: number
  attractionStrength?: number
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  originX: number
  originY: number
  size: number
}

export function MagnetButton({
  className,
  children,
  particleCount = 15,
  particleColor = "currentColor",
  attractionRadius = 100,
  attractionStrength = 0.05,
  ...props
}: MagnetButtonProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const [isHovering, setIsHovering] = React.useState(false)
  const mousePos = React.useRef({ x: 0, y: 0 })
  const particles = React.useRef<Particle[]>([])
  const animationFrameId = React.useRef<number>(0)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * window.devicePixelRatio
    canvas.height = rect.height * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    // Initialize particles
    particles.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      originX: Math.random() * rect.width,
      originY: Math.random() * rect.height,
      size: Math.random() * 2 + 1,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height)
      
      // Update and draw particles
      particles.current.forEach((p) => {
        if (isHovering) {
          // Attract to mouse
          const dx = mousePos.current.x - p.x
          const dy = mousePos.current.y - p.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < attractionRadius) {
            p.vx += dx * attractionStrength * 0.01
            p.vy += dy * attractionStrength * 0.01
          }
        } else {
            // Return to origin or float
            const dx = p.originX - p.x
            const dy = p.originY - p.y
            p.vx += dx * 0.005
            p.vy += dy * 0.005
        }

        // Apply damping
        p.vx *= 0.95
        p.vy *= 0.95

        // Move
        p.x += p.vx
        p.y += p.vy

        // Draw
        ctx.fillStyle = particleColor === "currentColor" 
          ? getComputedStyle(canvas).color 
          : particleColor
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId.current)
    }
  }, [particleCount, particleColor, attractionRadius, attractionStrength, isHovering])

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mousePos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }

  return (
    <Button
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{ width: "100%", height: "100%" }}
      />
      <span className="relative z-10">{children}</span>
    </Button>
  )
}
