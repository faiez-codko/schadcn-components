"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function Terminal({ className, children, ...props }: TerminalProps) {
  return (
    <div
      className={cn(
        "w-full rounded-xl border bg-zinc-950 text-slate-50 shadow-xl overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/50 px-4 py-3">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
      </div>
      <div className="p-4 font-mono text-sm">
        {children}
      </div>
    </div>
  )
}

interface TerminalLineProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function TerminalLine({ className, children, ...props }: TerminalLineProps) {
  return (
    <div className={cn("min-h-[1.5em]", className)} {...props}>
      <span className="mr-2 text-green-500">$</span>
      {children}
    </div>
  )
}

interface AnimatedTerminalLineProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string
  delay?: number
}

export function AnimatedTerminalLine({ className, children, delay = 0, ...props }: AnimatedTerminalLineProps) {
  const [text, setText] = React.useState("")
  
  React.useEffect(() => {
    let timeout: NodeJS.Timeout
    let currentIndex = 0
    
    const startTyping = () => {
      const interval = setInterval(() => {
        if (currentIndex < children.length) {
          setText(prev => prev + children[currentIndex])
          currentIndex++
        } else {
          clearInterval(interval)
        }
      }, 30 + Math.random() * 50) // Random typing speed
      
      return () => clearInterval(interval)
    }

    if (delay > 0) {
      timeout = setTimeout(startTyping, delay)
    } else {
      startTyping()
    }

    return () => {
      clearTimeout(timeout)
      // Cleanup interval if needed (handled by startTyping return)
    }
  }, [children, delay])

  return (
    <div className={cn("min-h-[1.5em]", className)} {...props}>
      <span className="mr-2 text-green-500">$</span>
      {text}
      <span className="animate-pulse">_</span>
    </div>
  )
}
