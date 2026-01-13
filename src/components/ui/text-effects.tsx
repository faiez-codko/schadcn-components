import * as React from "react"
import { cn } from "@/lib/utils"

// --- 1. Glitch Text ---
export const GlitchText = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  return (
    <div className={cn("relative inline-block group", className)}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-[oklch(0.6_0.2_320)] opacity-0 group-hover:opacity-100 group-hover:animate-glitch-1">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-[oklch(0.6_0.2_150)] opacity-0 group-hover:opacity-100 group-hover:animate-glitch-2">
        {text}
      </span>
    </div>
  )
}

// Add these to your tailwind.config.ts for the glitch animation to work fully
// or we can use style tags for portability
const glitchStyles = `
@keyframes glitch-1 {
  0% { transform: translate(0); clip-path: inset(0 0 0 0); }
  20% { transform: translate(-2px, 2px); clip-path: inset(20% 0 30% 0); }
  40% { transform: translate(-2px, -2px); clip-path: inset(60% 0 10% 0); }
  60% { transform: translate(2px, 2px); clip-path: inset(40% 0 50% 0); }
  80% { transform: translate(2px, -2px); clip-path: inset(80% 0 5% 0); }
  100% { transform: translate(0); clip-path: inset(0 0 0 0); }
}
@keyframes glitch-2 {
  0% { transform: translate(0); clip-path: inset(0 0 0 0); }
  20% { transform: translate(2px, -2px); clip-path: inset(30% 0 20% 0); }
  40% { transform: translate(2px, 2px); clip-path: inset(10% 0 60% 0); }
  60% { transform: translate(-2px, -2px); clip-path: inset(50% 0 40% 0); }
  80% { transform: translate(-2px, 2px); clip-path: inset(5% 0 80% 0); }
  100% { transform: translate(0); clip-path: inset(0 0 0 0); }
}
.animate-glitch-1 { animation: glitch-1 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite; }
.animate-glitch-2 { animation: glitch-2 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite; }
`

// --- 2. Typewriter Effect ---
export const TypewriterText = ({
  text,
  speed = 100,
  className,
  loop = true,
  delay = 1000,
}: {
  text: string
  speed?: number
  className?: string
  loop?: boolean
  delay?: number
}) => {
  const [displayText, setDisplayText] = React.useState("")
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isDeleting, setIsDeleting] = React.useState(false)

  React.useEffect(() => {
    let timeout: any

    if (!isDeleting && currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
    } else if (isDeleting && currentIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1))
        setCurrentIndex((prev) => prev - 1)
      }, speed / 2)
    } else if (!isDeleting && currentIndex === text.length && loop) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, delay)
    } else if (isDeleting && currentIndex === 0 && loop) {
      setIsDeleting(false)
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, text, speed, loop, delay])

  return (
    <span className={cn("inline-block border-r-2 border-primary pr-1 animate-pulse", className)}>
      {displayText}
    </span>
  )
}

// --- 3. Matrix Reveal Effect ---
export const MatrixText = ({
  text,
  className,
  speed = 50,
}: {
  text: string
  className?: string
  speed?: number
}) => {
  const [displayText, setDisplayText] = React.useState("")
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+"
  
  React.useEffect(() => {
    let iterations = 0
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return text[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )

      if (iterations >= text.length) {
        clearInterval(interval)
      }

      iterations += 1 / 3
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return <span className={cn("font-mono", className)}>{displayText}</span>
}

// --- 4. Auto Scroll (Marquee) ---
export const ScrollText = ({
  children,
  className,
  direction = "left",
  speed = 20,
}: {
  children: React.ReactNode
  className?: string
  direction?: "left" | "right"
  speed?: number
}) => {
  return (
    <div className={cn("flex overflow-hidden whitespace-nowrap mask-gradient", className)} style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <div 
        className={cn("flex shrink-0 gap-4 py-2", direction === "left" ? "animate-scroll-left" : "animate-scroll-right")}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}

// Add these keyframes to CSS
const scrollStyles = `
@keyframes scroll-left {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
@keyframes scroll-right {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}
.animate-scroll-left { animation: scroll-left linear infinite; }
.animate-scroll-right { animation: scroll-right linear infinite; }
`

// --- 5. Fade In/Out ---
export const FadeText = ({
  text,
  className,
  direction = "up",
  delay = 0,
}: {
  text: string
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
}) => {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up": return "translateY(20px)"
        case "down": return "translateY(-20px)"
        case "left": return "translateX(20px)"
        case "right": return "translateX(-20px)"
        default: return "none"
      }
    }
    return "none"
  }

  return (
    <span
      className={cn("inline-block transition-all duration-700 ease-out", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
      }}
    >
      {text}
    </span>
  )
}

// Helper to inject styles
export const TextEffectsStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: glitchStyles + scrollStyles }} />
)
