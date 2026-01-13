import React from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface LoaderProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
  color?: string
}

const sizeClasses = {
  sm: "w-6 h-6",
  md: "w-10 h-10",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
}

// Variant 1: Modern Spinner
export function LoaderSpinner({ className, size = "md", color = "currentColor" }: LoaderProps) {
  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <motion.span
        className="absolute inset-0 rounded-full border-4 border-t-transparent"
        style={{ borderColor: `${color} transparent transparent transparent` }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.span
        className="absolute inset-0 rounded-full border-4 border-t-transparent opacity-30"
        style={{ borderColor: color }}
      />
    </div>
  )
}

// Variant 2: Bouncing Dots
export function LoaderDots({ className, size = "md", color = "currentColor" }: LoaderProps) {
  const dotSize = size === "sm" ? 6 : size === "md" ? 10 : size === "lg" ? 16 : 24
  
  return (
    <div className={cn("flex items-center justify-center space-x-1", className)}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="rounded-full bg-current"
          style={{ width: dotSize, height: dotSize, backgroundColor: color }}
          animate={{
            y: ["0%", "-100%", "0%"],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Variant 3: Pulse
export function LoaderPulse({ className, size = "md", color = "currentColor" }: LoaderProps) {
  return (
    <div className={cn("relative flex items-center justify-center", sizeClasses[size], className)}>
      <motion.div
        className="absolute rounded-full bg-current opacity-75"
        style={{ backgroundColor: color }}
        animate={{ scale: [1, 2], opacity: [0.7, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
      />
      <div className="rounded-full bg-current" style={{ width: "40%", height: "40%", backgroundColor: color }} />
    </div>
  )
}

// Variant 4: Rotating Square (Modern)
export function LoaderSquare({ className, size = "md", color = "currentColor" }: LoaderProps) {
  return (
    <motion.div
      className={cn("bg-current", sizeClasses[size], className)}
      style={{ backgroundColor: color }}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  )
}

// Full Screen Wrapper
interface FullScreenLoaderProps {
  loading?: boolean
  variant?: "spinner" | "dots" | "pulse" | "square"
  text?: string
  className?: string
  children?: React.ReactNode
}

export function FullScreenLoader({
  loading = true,
  variant = "spinner",
  text,
  className,
  children,
}: FullScreenLoaderProps) {
  const loaders = {
    spinner: LoaderSpinner,
    dots: LoaderDots,
    pulse: LoaderPulse,
    square: LoaderSquare,
  }

  const SelectedLoader = loaders[variant]

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm",
            className
          )}
        >
          {children || (
            <>
              <SelectedLoader size="lg" />
              {text && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 text-lg font-medium text-muted-foreground"
                >
                  {text}
                </motion.p>
              )}
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
