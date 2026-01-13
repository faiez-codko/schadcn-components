import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus,
  Clock,
  X
} from "lucide-react"
import { 
  format, 
  addMonths, 
  subMonths, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  addDays, 
  isSameMonth, 
  isSameDay,
  isToday
} from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface CalendarEvent {
  id: string
  title: string
  time: string
  type: 'meeting' | 'work' | 'personal'
}

export function GridCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [events, setEvents] = useState<Record<string, CalendarEvent[]>>({
    [format(new Date(), 'yyyy-MM-dd')]: [
      { id: '1', title: 'Project Kickoff', time: '10:00', type: 'meeting' },
    ]
  })
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newEvent, setNewEvent] = useState({ title: '', time: '09:00', type: 'meeting' as const })

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  const calendarDays = []
  let day = startDate

  while (day <= endDate) {
    calendarDays.push(day)
    day = addDays(day, 1)
  }

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1))
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1))

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
    setIsDialogOpen(true)
  }

  const handleAddEvent = () => {
    if (!selectedDate) return

    const dateKey = format(selectedDate, 'yyyy-MM-dd')
    const newEventObj: CalendarEvent = {
      id: Math.random().toString(36).substr(2, 9),
      title: newEvent.title || 'New Event',
      time: newEvent.time,
      type: newEvent.type
    }

    setEvents(prev => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), newEventObj]
    }))

    setIsDialogOpen(false)
    setNewEvent({ title: '', time: '09:00', type: 'meeting' })
  }

  const handleDeleteEvent = (e: React.MouseEvent, date: Date, eventId: string) => {
    e.stopPropagation()
    const dateKey = format(date, 'yyyy-MM-dd')
    setEvents(prev => ({
      ...prev,
      [dateKey]: prev[dateKey].filter(ev => ev.id !== eventId)
    }))
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-card border rounded-3xl overflow-hidden shadow-xl">
      {/* Header */}
      <div className="p-6 flex items-center justify-between border-b">
        <h2 className="text-2xl font-bold">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={handlePrevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Grid Header */}
      <div className="grid grid-cols-7 border-b bg-muted/40">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="py-3 text-center text-sm font-semibold text-muted-foreground">
            {day}
          </div>
        ))}
      </div>

      {/* Grid Body */}
      <div className="grid grid-cols-7 auto-rows-[minmax(120px,auto)]">
        {calendarDays.map((date, idx) => {
          const dateKey = format(date, 'yyyy-MM-dd')
          const dayEvents = events[dateKey] || []
          const isCurrentMonth = isSameMonth(date, monthStart)

          return (
            <motion.div
              key={date.toISOString()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.01 }}
              onClick={() => handleDateClick(date)}
              className={cn(
                "relative border-b border-r p-2 transition-colors hover:bg-muted/50 cursor-pointer group",
                !isCurrentMonth && "bg-muted/10 text-muted-foreground/50",
                isToday(date) && "bg-primary/5"
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={cn(
                  "text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full",
                  isToday(date) && "bg-primary text-primary-foreground"
                )}>
                  {format(date, 'd')}
                </span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>

              <div className="space-y-1">
                {dayEvents.map(event => (
                  <motion.div
                    key={event.id}
                    layoutId={event.id}
                    className={cn(
                      "text-xs p-1.5 rounded-md border flex items-center justify-between group/event",
                      event.type === 'meeting' && "bg-blue-500/10 text-blue-700 border-blue-200 dark:border-blue-900 dark:text-blue-300",
                      event.type === 'work' && "bg-orange-500/10 text-orange-700 border-orange-200 dark:border-orange-900 dark:text-orange-300",
                      event.type === 'personal' && "bg-green-500/10 text-green-700 border-green-200 dark:border-green-900 dark:text-green-300",
                    )}
                  >
                    <span className="truncate font-medium">{event.title}</span>
                    <button
                      onClick={(e) => handleDeleteEvent(e, date, event.id)}
                      className="opacity-0 group-hover/event:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 rounded p-0.5"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Event</DialogTitle>
            <DialogDescription>
              Create a new event for {selectedDate && format(selectedDate, 'MMMM d, yyyy')}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                className="col-span-3"
                placeholder="Event name"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="time" className="text-right">
                Time
              </Label>
              <Input
                id="time"
                type="time"
                value={newEvent.time}
                onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">
                Type
              </Label>
              <Select 
                value={newEvent.type} 
                onValueChange={(val: any) => setNewEvent({ ...newEvent, type: val })}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="meeting">Meeting</SelectItem>
                  <SelectItem value="work">Work</SelectItem>
                  <SelectItem value="personal">Personal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAddEvent}>Create Event</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
