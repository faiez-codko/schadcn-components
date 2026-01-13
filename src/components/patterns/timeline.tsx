import * as React from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export interface TimelineItem {
  id?: string | number
  title: React.ReactNode
  date?: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
}

interface TimelineProps {
  items: TimelineItem[]
  mode?: "alternate" | "left" | "right"
  className?: string
  lineColor?: string
}

export function Timeline({
  items,
  mode = "alternate",
  className,
  lineColor = "bg-primary",
}: TimelineProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full max-w-4xl mx-auto py-12 px-4", className)}
    >
      {/* Central Line */}
      <div
        className={cn(
          "absolute top-0 bottom-0 w-0.5 bg-muted",
          mode === "alternate" ? "left-1/2 -translate-x-1/2" : 
          mode === "left" ? "left-8" : "right-8"
        )}
      />
      <motion.div
        className={cn(
          "absolute top-0 bottom-0 w-0.5 origin-top",
          lineColor,
          mode === "alternate" ? "left-1/2 -translate-x-1/2" : 
          mode === "left" ? "left-8" : "right-8"
        )}
        style={{ scaleY }}
      />

      {items.map((item, index) => {
        const isEven = index % 2 === 0
        
        return (
          <TimelineCard
            key={item.id || index}
            item={item}
            index={index}
            mode={mode}
            isEven={isEven}
          />
        )
      })}
    </div>
  )
}

function TimelineCard({
  item,
  index,
  mode,
  isEven,
}: {
  item: TimelineItem
  index: number
  mode: "alternate" | "left" | "right"
  isEven: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative flex items-center mb-12 last:mb-0",
        mode === "alternate"
          ? isEven
            ? "justify-start"
            : "justify-end"
          : mode === "left"
          ? "justify-start pl-20"
          : "justify-end pr-20"
      )}
    >
      {/* Icon/Dot */}
      <div
        className={cn(
          "absolute w-4 h-4 rounded-full border-4 border-background bg-primary z-10",
          mode === "alternate"
            ? "left-1/2 -translate-x-1/2"
            : mode === "left"
            ? "left-[30px]"
            : "right-[30px]"
        )}
      >
        {item.icon && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-1 rounded-full">
            {item.icon}
          </div>
        )}
      </div>

      {/* Content Card */}
      <div
        className={cn(
          "w-full rounded-lg border bg-card p-6 shadow-sm",
          mode === "alternate" ? "md:w-[calc(50%-30px)]" : "w-full"
        )}
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold leading-none tracking-tight">
            {item.title}
          </h3>
          {item.date && (
            <time className="text-sm text-muted-foreground">{item.date}</time>
          )}
        </div>
        {item.description && (
          <div className="text-sm text-muted-foreground">
            {item.description}
          </div>
        )}
      </div>
    </motion.div>
  )
}
