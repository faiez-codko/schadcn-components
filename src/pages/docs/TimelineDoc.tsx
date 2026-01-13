import { Timeline } from "@/components/patterns/timeline"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Rocket, Star, CheckCircle, Flag } from "lucide-react"

export default function TimelineDoc() {
  const items = [
    {
      title: "Project Kickoff",
      date: "Jan 2024",
      description: "Initial meeting with the stakeholders to define project scope and requirements.",
      icon: <Rocket className="w-4 h-4 text-primary" />,
    },
    {
      title: "Design Phase",
      date: "Feb 2024",
      description: "Creating wireframes, high-fidelity mockups, and getting design approval.",
      icon: <Star className="w-4 h-4 text-primary" />,
    },
    {
      title: "Development",
      date: "Mar - Apr 2024",
      description: "Frontend and backend development cycles with bi-weekly sprints.",
      icon: <CheckCircle className="w-4 h-4 text-primary" />,
    },
    {
      title: "Launch",
      date: "May 2024",
      description: "Deploying to production servers and monitoring initial user feedback.",
      icon: <Flag className="w-4 h-4 text-primary" />,
    },
  ]

  const basicCode = `import { Timeline } from "@/components/patterns/timeline"
import { Rocket, Star, CheckCircle, Flag } from "lucide-react"

const items = [
  {
    title: "Project Kickoff",
    date: "Jan 2024",
    description: "Initial meeting with the stakeholders...",
    icon: <Rocket className="w-4 h-4 text-primary" />,
  },
  // ... more items
]

export function Example() {
  return (
    <Timeline items={items} />
  )
}`

  const leftAlignedCode = `import { Timeline } from "@/components/patterns/timeline"

export function Example() {
  return (
    <Timeline 
      items={items} 
      mode="left" 
    />
  )
}`

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Timeline</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Timeline</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A vertical timeline component to display a sequence of events with animations.
        </p>
      </div>

      <div className="grid gap-12">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Alternate Layout (Default)</h2>
          <p className="mb-4 text-muted-foreground">
            Items alternate between left and right sides of the central line. Best for desktop views.
          </p>
          <PreviewCodeTabs code={basicCode}>
            <div className="rounded-lg border bg-zinc-50 dark:bg-zinc-900">
              <Timeline items={items} />
            </div>
          </PreviewCodeTabs>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Left Aligned</h2>
          <p className="mb-4 text-muted-foreground">
            All items are aligned to the right of the timeline. Great for sidebar-like lists or mobile.
          </p>
          <PreviewCodeTabs code={leftAlignedCode}>
            <div className="rounded-lg border bg-zinc-50 dark:bg-zinc-900">
              <Timeline items={items} mode="left" />
            </div>
          </PreviewCodeTabs>
        </section>

         <section>
          <h2 className="mb-4 text-2xl font-semibold">Right Aligned</h2>
          <p className="mb-4 text-muted-foreground">
             All items are aligned to the left of the timeline.
          </p>
          <PreviewCodeTabs code={`<Timeline items={items} mode="right" />`}>
            <div className="rounded-lg border bg-zinc-50 dark:bg-zinc-900">
              <Timeline items={items} mode="right" />
            </div>
          </PreviewCodeTabs>
        </section>
      </div>
    </div>
  )
}
