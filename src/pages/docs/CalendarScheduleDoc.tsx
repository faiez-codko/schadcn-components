import { CalendarSchedule } from "@/components/patterns/calendar-schedule"
import { GridCalendar } from "@/components/patterns/grid-calendar"
import { Separator } from "@/components/ui/separator"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CalendarScheduleDoc() {
  const scheduleCode = `import { CalendarSchedule } from "@/components/patterns/calendar-schedule"

export function CalendarDemo() {
  return (
    <div className="flex items-center justify-center w-full p-8 bg-slate-50 dark:bg-slate-900/50">
      <CalendarSchedule />
    </div>
  )
}`

  const gridCode = `import { GridCalendar } from "@/components/patterns/grid-calendar"

export function GridCalendarDemo() {
  return (
    <div className="flex items-center justify-center w-full p-8 bg-slate-50 dark:bg-slate-900/50">
      <GridCalendar />
    </div>
  )
}`

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-8">
      <Breadcrumb className="text-left">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink to="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink to="/docs/patterns/calendar-schedule">Patterns</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Calendar Schedule</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="mt-2 text-3xl font-bold text-left">Calendar Schedule</h1>
      <p className="mt-2 text-muted-foreground text-left">Animated calendar components for different use cases.</p>
      <Separator className="my-6" />
      
      <Tabs defaultValue="schedule" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="schedule">Schedule View</TabsTrigger>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
        </TabsList>
        <TabsContent value="schedule">
          <PreviewCodeTabs code={scheduleCode}>
            <div className="flex items-center justify-center w-full p-8 bg-slate-50 dark:bg-slate-900/50 rounded-xl border">
              <CalendarSchedule />
            </div>
          </PreviewCodeTabs>
        </TabsContent>
        <TabsContent value="grid">
          <PreviewCodeTabs code={gridCode}>
            <div className="flex items-center justify-center w-full p-8 bg-slate-50 dark:bg-slate-900/50 rounded-xl border">
              <GridCalendar />
            </div>
          </PreviewCodeTabs>
        </TabsContent>
      </Tabs>
    </div>
  )
}
