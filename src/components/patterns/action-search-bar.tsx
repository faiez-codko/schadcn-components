import * as React from "react"
import { Search,  Calculator, User, CreditCard, Settings, Smile, Calendar} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface ActionItem {
  id: string
  label: string
  icon: React.ReactNode
  shortcut?: string[]
  action?: () => void
}

interface ActionGroup {
  group: string
  items: ActionItem[]
}

interface ActionSearchBarProps {
  className?: string
  placeholder?: string
  groups?: ActionGroup[]
  onSearch?: (query: string) => void
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const defaultGroups: ActionGroup[] = [
  {
    group: "Suggestions",
    items: [
      { id: "cal", label: "Calendar", icon: <Calendar className="mr-2 h-4 w-4" />, shortcut: ["⌘", "C"] },
      { id: "emoji", label: "Search Emoji", icon: <Smile className="mr-2 h-4 w-4" />, shortcut: ["⌘", "E"] },
      { id: "calc", label: "Calculator", icon: <Calculator className="mr-2 h-4 w-4" /> },
    ],
  },
  {
    group: "Settings",
    items: [
      { id: "profile", label: "Profile", icon: <User className="mr-2 h-4 w-4" />, shortcut: ["⌘", "P"] },
      { id: "billing", label: "Billing", icon: <CreditCard className="mr-2 h-4 w-4" />, shortcut: ["⌘", "B"] },
      { id: "settings", label: "Settings", icon: <Settings className="mr-2 h-4 w-4" />, shortcut: ["⌘", "S"] },
    ],
  },
]

export function ActionSearchBar({
  className,
  placeholder = "Type a command or search...",
  groups = defaultGroups,
  onSearch,
  open: controlledOpen,
  onOpenChange,
}: ActionSearchBarProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const [focusedIndex, setFocusedIndex] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const isControlled = controlledOpen !== undefined
  const show = isControlled ? controlledOpen : isOpen

  // Filter items based on query
  const filteredGroups = React.useMemo(() => {
    if (!query) return groups
    return groups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.label.toLowerCase().includes(query.toLowerCase())
        ),
      }))
      .filter((group) => group.items.length > 0)
  }, [groups, query])

  const allItems = React.useMemo(() => {
    return filteredGroups.flatMap((group) => group.items)
  }, [filteredGroups])

  React.useEffect(() => {
    if (show && inputRef.current) {
      inputRef.current.focus()
    }
  }, [show])

  // Reset focus when query changes
  React.useEffect(() => {
    setFocusedIndex(0)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!show) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        if (isControlled) onOpenChange?.(true)
        else setIsOpen(true)
      }
      return
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setFocusedIndex((prev) => (prev + 1) % allItems.length)
        break
      case "ArrowUp":
        e.preventDefault()
        setFocusedIndex((prev) => (prev - 1 + allItems.length) % allItems.length)
        break
      case "Enter":
        e.preventDefault()
        const item = allItems[focusedIndex]
        if (item) {
          item.action?.()
          console.log("Action triggered:", item.label)
          if (!isControlled) setIsOpen(false)
          else onOpenChange?.(false)
        }
        break
      case "Escape":
        e.preventDefault()
        if (!isControlled) setIsOpen(false)
        else onOpenChange?.(false)
        break
    }
  }

  // Handle outside click
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        if (!isControlled) setIsOpen(false)
        else onOpenChange?.(false)
      }
    }

    if (show) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [show, isControlled, onOpenChange])

  // Global shortcut to open
  React.useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        if (isControlled) onOpenChange?.(!show)
        else setIsOpen((prev) => !prev)
      }
    }

    document.addEventListener("keydown", handleGlobalKeyDown)
    return () => document.removeEventListener("keydown", handleGlobalKeyDown)
  }, [isControlled, onOpenChange, show])

  return (
    <div className={cn("relative w-full max-w-lg", className)} ref={containerRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          className="h-12 w-full rounded-lg border bg-background px-10 py-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            onSearch?.(e.target.value)
            if (!show) {
               if (isControlled) onOpenChange?.(true)
               else setIsOpen(true)
            }
          }}
          onFocus={() => {
            if (!show) {
               if (isControlled) onOpenChange?.(true)
               else setIsOpen(true)
            }
          }}
          onKeyDown={handleKeyDown}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </div>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full z-50 mt-2 w-full overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-lg"
          >
            <motion.div
              layout
              className="max-h-[300px] overflow-y-auto p-2"
            >
              {filteredGroups.length === 0 ? (
                <div className="py-6 text-center text-sm text-muted-foreground">
                  No results found.
                </div>
              ) : (
                filteredGroups.map((group, groupIndex) => (
                  <div key={group.group} className="mb-2 last:mb-0">
                    <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                      {group.group}
                    </div>
                    {group.items.map((item, itemIndex) => {
                      // Calculate global index for keyboard navigation
                      let globalIndex = 0;
                      for (let i = 0; i < groupIndex; i++) {
                        globalIndex += filteredGroups[i].items.length;
                      }
                      globalIndex += itemIndex;
                      
                      const isFocused = globalIndex === focusedIndex;

                      return (
                        <div
                          key={item.id}
                          className={cn(
                            "relative flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none transition-colors",
                            isFocused ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"
                          )}
                          onMouseEnter={() => setFocusedIndex(globalIndex)}
                          onClick={() => {
                            item.action?.()
                            if (!isControlled) setIsOpen(false)
                            else onOpenChange?.(false)
                          }}
                        >
                          {item.icon}
                          <span className="ml-2 flex-1">{item.label}</span>
                          {item.shortcut && (
                            <div className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                              {item.shortcut.map((key, k) => (
                                <kbd
                                  key={k}
                                  className="pointer-events-none inline-flex h-5 select-none items-center rounded border bg-muted px-1.5 font-mono font-medium opacity-100"
                                >
                                  {key}
                                </kbd>
                              ))}
                            </div>
                          )}
                          {isFocused && (
                            <motion.div
                              layoutId="active-item-indicator"
                              className="absolute left-0 w-[2px] h-full bg-primary"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            />
                          )}
                        </div>
                      )
                    })}
                  </div>
                ))
              )}
            </motion.div>
            
            <div className="border-t bg-muted/50 px-3 py-2 text-xs text-muted-foreground flex justify-between">
              <div>
                 Use <kbd className="font-sans font-medium">↑</kbd> <kbd className="font-sans font-medium">↓</kbd> to navigate
              </div>
              <div>
                 <kbd className="font-sans font-medium">Esc</kbd> to close
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
