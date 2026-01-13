import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface SlideTextButtonProps extends ButtonProps {
  initialText: React.ReactNode
  hoverText: React.ReactNode
  direction?: "up" | "down"
  duration?: number
}

export function SlideTextButton({
  initialText,
  hoverText,
  direction = "up",
  duration = 0.25,
  className,
  ...props
}: SlideTextButtonProps) {
  return (
    <Button
      className={cn("relative overflow-hidden", className)}
      {...props}
      asChild={false}
    >
      <motion.span
        className="relative flex items-center justify-center w-full h-full"
        initial="initial"
        whileHover="hover"
      >
        <motion.span
          className="flex items-center justify-center"
          variants={{
            initial: { y: 0, opacity: 1 },
            hover: { y: direction === "up" ? "-150%" : "150%", opacity: 0 },
          }}
          transition={{ duration, ease: "easeInOut" }}
        >
          {initialText}
        </motion.span>
        
        <motion.span
          className="absolute flex items-center justify-center inset-0"
          variants={{
            initial: { y: direction === "up" ? "150%" : "-150%", opacity: 0 },
            hover: { y: 0, opacity: 1 },
          }}
          transition={{ duration, ease: "easeInOut" }}
        >
          {hoverText}
        </motion.span>
      </motion.span>
    </Button>
  )
}
