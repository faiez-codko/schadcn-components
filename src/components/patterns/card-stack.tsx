import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardStackProps {
  items: {
    id: string | number
    name: string
    designation: string
    content: React.ReactNode
  }[]
  offset?: number
  scaleFactor?: number
}

export const CardStack = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
}: CardStackProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const CARD_HEIGHT = 200 // Fixed height for calculation in stacked mode

  return (
    <div 
      className="relative w-full max-w-md mx-auto" 
      style={{ height: isExpanded ? 'auto' : CARD_HEIGHT + items.length * offset }}
    >
      <div 
        className={cn(
            "relative w-full cursor-pointer transition-all duration-300",
            isExpanded ? "space-y-4" : "h-full"
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {items.map((card, index) => {
            // Stacked calculations
            const reverseIndex = items.length - 1 - index // 0 is top
            const stackedTop = index * offset
            const stackedScale = 1 - index * scaleFactor
            const stackedZIndex = items.length - index

          return (
            <motion.div
              key={card.id}
              layout
              className={cn(
                "rounded-3xl p-6 bg-card border shadow-xl flex flex-col justify-between",
                !isExpanded && "absolute top-0 left-0 w-full origin-top"
              )}
              initial={false}
              animate={isExpanded ? {
                top: 0,
                scale: 1,
                zIndex: 1,
                marginBottom: 16,
                height: "auto",
                opacity: 1
              } : {
                top: stackedTop,
                scale: stackedScale,
                zIndex: stackedZIndex,
                marginBottom: 0,
                height: CARD_HEIGHT,
                // Fade out cards deep in the stack
                opacity: index > 2 ? 0 : 1 
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut"
              }}
            >
              <div>
                <p className="text-card-foreground font-medium">
                  {card.content}
                </p>
              </div>
              <div>
                <p className="text-primary font-bold">
                  {card.name}
                </p>
                <p className="text-muted-foreground font-normal text-sm">
                  {card.designation}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
      
      {/* Helper text */}
      <motion.p 
        className="text-center text-muted-foreground text-sm mt-8"
        animate={{ opacity: isExpanded ? 0 : 1 }}
      >
        Click stack to expand
      </motion.p>
    </div>
  )
}
