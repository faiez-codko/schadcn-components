import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  MoreHorizontal,
  Calendar as CalendarIcon
} from "lucide-react"
import { 
  format, 
  addDays, 
  startOfWeek, 
  addWeeks, 
  subWeeks, 
  isSameDay,
  isToday
} from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Event {
  id: string
  title: string
  time: string
  duration: string
  type: 'meeting' | 'work' | 'personal'
  attendees?: string[]
}

const DEMO_EVENTS: Record<string, Event[]> = {
  [format(new Date(), 'yyyy-MM-dd')]: [
    { id: '1', title: 'Team Standup', time: '10:00 AM', duration: '30m', type: 'meeting', attendees: ['JD', 'AS', 'MK'] },
    { id: '2', title: 'Deep Work', time: '11:00 AM', duration: '2h', type: 'work' },
    { id: '3', title: 'Lunch Break', time: '01:00 PM', duration: '1h', type: 'personal' },
    { id: '4', title: 'Project Review', time: '02:30 PM', duration: '1h', type: 'meeting', attendees: ['AS', 'MK'] },
  ],
  [format(addDays(new Date(), 1), 'yyyy-MM-dd')]: [
    { id: '5', title: 'Client Call', time: '09:00 AM', duration: '1h', type: 'meeting', attendees: ['JD'] },
    { id: '6', title: 'Design Review', time: '02:00 PM', duration: '1h 30m', type: 'work' },
  ]
}

export function CalendarSchedule() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [direction, setDirection] = useState(0)

  const startDate = startOfWeek(currentDate, { weekStartsOn: 1 })
  const weekDays = Array.from({ length: 7 }).map((_, i) => addDays(startDate, i))

  const handlePrevWeek = () => {
    setDirection(-1)
    setCurrentDate(subWeeks(currentDate, 1))
  }

  const handleNextWeek = () => {
    setDirection(1)
    setCurrentDate(addWeeks(currentDate, 1))
  }

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
  }

  const selectedDateKey = format(selectedDate, 'yyyy-MM-dd')
  const events = DEMO_EVENTS[selectedDateKey] || []

  return (
    <div className="w-full max-w-md mx-auto bg-card border rounded-3xl overflow-hidden shadow-xl">
      {/* Header */}
      <div className="p-6 bg-primary/5 border-b">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">
            {format(currentDate, 'MMMM yyyy')}
          </h2>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={handlePrevWeek} className="h-8 w-8 rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleNextWeek} className="h-8 w-8 rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Week Calendar */}
        <div className="grid grid-cols-7 gap-1">
          {weekDays.map((day, i) => {
            const isSelected = isSameDay(day, selectedDate)
            const isCurrentDay = isToday(day)
            
            return (
              <motion.button
                key={day.toISOString()}
                layout
                onClick={() => handleDateClick(day)}
                className={cn(
                  "flex flex-col items-center justify-center py-3 rounded-2xl text-sm transition-colors relative overflow-hidden",
                  isSelected ? "bg-primary text-primary-foreground shadow-lg" : "hover:bg-muted",
                  !isSelected && isCurrentDay && "text-primary font-bold"
                )}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-[10px] opacity-70 font-medium mb-1">
                  {format(day, 'EEE')}
                </span>
                <span className="text-lg font-semibold">
                  {format(day, 'd')}
                </span>
                {DEMO_EVENTS[format(day, 'yyyy-MM-dd')] && (
                  <div className={cn(
                    "absolute bottom-1.5 w-1 h-1 rounded-full",
                    isSelected ? "bg-white/50" : "bg-primary"
                  )} />
                )}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Schedule List */}
      <div className="p-6 min-h-[400px]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-muted-foreground" />
            {isToday(selectedDate) ? 'Today' : format(selectedDate, 'EEEE, MMM d')}
          </h3>
          <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
            {events.length} Events
          </span>
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {events.length > 0 ? (
              events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-muted/60 border border-transparent hover:border-border transition-all cursor-pointer"
                >
                  <div className="flex flex-col items-center pt-1">
                    <span className="text-sm font-bold text-foreground">
                      {event.time.split(' ')[0]}
                    </span>
                    <span className="text-[10px] text-muted-foreground uppercase font-medium">
                      {event.time.split(' ')[1]}
                    </span>
                    <div className="w-px h-full bg-border mt-2 group-last:hidden" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {event.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {event.duration}
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                      <span className={cn(
                        "text-[10px] px-2 py-0.5 rounded-full font-medium border",
                        event.type === 'meeting' && "bg-blue-500/10 text-blue-600 border-blue-200 dark:border-blue-900",
                        event.type === 'work' && "bg-orange-500/10 text-orange-600 border-orange-200 dark:border-orange-900",
                        event.type === 'personal' && "bg-green-500/10 text-green-600 border-green-200 dark:border-green-900",
                      )}>
                        {event.type}
                      </span>
                      {event.attendees && (
                        <div className="flex -space-x-2 ml-auto">
                          {event.attendees.map((initials, i) => (
                            <div 
                              key={i}
                              className="w-6 h-6 rounded-full bg-background border flex items-center justify-center text-[10px] font-medium text-muted-foreground"
                            >
                              {initials}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <CalendarIcon className="w-8 h-8 text-muted-foreground/50" />
                </div>
                <h3 className="text-lg font-medium text-foreground">No events</h3>
                <p className="text-sm text-muted-foreground max-w-[200px]">
                  You have no events scheduled for this day.
                </p>
                <Button variant="outline" className="mt-6">
                  Add Event
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
