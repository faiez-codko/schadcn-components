import { useState } from "react"
import { ActionSearchBar } from "@/components/patterns/action-search-bar"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Button } from "@/components/ui/button"

export default function ActionSearchBarDoc() {
  const [open, setOpen] = useState(false)

  const basicUsageCode = `import { ActionSearchBar } from "@/components/patterns/action-search-bar"

export function Example() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <ActionSearchBar />
    </div>
  )
}`

  const controlledUsageCode = `import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ActionSearchBar } from "@/components/patterns/action-search-bar"

export function Example() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => setOpen(true)} variant="outline">
        Open Command Palette (⌘K)
      </Button>
      
      {/* This can be placed in a modal or overlay */}
      <div className={open ? "block" : "hidden"}>
        <ActionSearchBar 
          open={open} 
          onOpenChange={setOpen}
          placeholder="What do you need?" 
        />
      </div>
    </div>
  )
}`

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink to="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Action Search Bar</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Action Search Bar</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A command palette style search bar with keyboard shortcuts, grouping, and smooth animations.
        </p>
      </div>

      <div className="grid gap-12">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Basic Usage</h2>
          <p className="mb-4 text-muted-foreground">
            The action search bar handles its own open state and keyboard shortcuts (⌘K). 
            Try clicking the input or pressing ⌘K.
          </p>
          <PreviewCodeTabs code={basicUsageCode}>
            <div className="flex h-64 items-start justify-center pt-10 rounded-lg border bg-zinc-50 dark:bg-zinc-900">
              <ActionSearchBar className="w-full max-w-sm" />
            </div>
          </PreviewCodeTabs>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Controlled Mode</h2>
          <p className="mb-4 text-muted-foreground">
            You can control the open state externally, which is useful for triggering from other buttons or global events.
          </p>
          <PreviewCodeTabs code={controlledUsageCode}>
            <div className="flex flex-col h-64 items-center justify-start pt-10 gap-6 rounded-lg border bg-zinc-50 dark:bg-zinc-900">
              <Button onClick={() => setOpen(true)} variant="outline">
                Open Command Palette
              </Button>
              
              <div className="relative w-full max-w-sm">
                <ActionSearchBar 
                  open={open} 
                  onOpenChange={setOpen}
                  placeholder="Controlled search..." 
                />
              </div>
            </div>
          </PreviewCodeTabs>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Keyboard Navigation:</strong> Use Up/Down arrows to navigate, Enter to select.</li>
            <li><strong>Global Shortcut:</strong> Press ⌘K (or Ctrl+K) anywhere to focus/open.</li>
            <li><strong>Filtering:</strong> Filters items across groups as you type.</li>
            <li><strong>Smooth Animation:</strong> Uses Framer Motion for entrance and exit animations.</li>
            <li><strong>Keyboard Shortcuts:</strong> Displays shortcuts for individual actions (e.g., ⌘C).</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
