import { SlideTextButton } from "@/components/patterns/slide-text-button"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from '@/components/ui/breadcrumb'
import {Send, Check, Download } from "lucide-react"

export default function SlideTextButtonDoc() {
  const basicCode = `import { SlideTextButton } from "@/components/patterns/slide-text-button"

export function Example() {
  return (
    <SlideTextButton 
      initialText="Hover Me" 
      hoverText="Slide Up" 
    />
  )
}`

  const directionCode = `import { SlideTextButton } from "@/components/patterns/slide-text-button"

export function Example() {
  return (
    <div className="flex gap-4">
      <SlideTextButton 
        initialText="Slide Up" 
        hoverText="Success!" 
        direction="up" 
      />
      <SlideTextButton 
        initialText="Slide Down" 
        hoverText="Success!" 
        direction="down" 
      />
    </div>
  )
}`

  const iconCode = `import { SlideTextButton } from "@/components/patterns/slide-text-button"
import { ArrowRight, Send, Check } from "lucide-react"

export function Example() {
  return (
    <div className="flex gap-4">
      <SlideTextButton 
        initialText={<span className="flex items-center gap-2">Send <Send className="w-4 h-4" /></span>}
        hoverText={<span className="flex items-center gap-2">Sent <Check className="w-4 h-4" /></span>}
      />
      
      <SlideTextButton 
        variant="outline"
        initialText="Download"
        hoverText={<Download className="w-4 h-4" />}
        className="w-32"
      />
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
            <BreadcrumbPage>Slide Text Button</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Slide Text Button</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          An interactive button that slides text vertically on hover, perfect for call-to-actions.
        </p>
      </div>

      <div className="grid gap-12">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Basic Usage</h2>
          <PreviewCodeTabs code={basicCode}>
            <div className="flex h-32 items-center justify-center rounded-lg border bg-zinc-50 dark:bg-zinc-900">
              <SlideTextButton 
                initialText="Hover Me" 
                hoverText="Slide Up" 
              />
            </div>
          </PreviewCodeTabs>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Direction</h2>
          <p className="mb-4 text-muted-foreground">
            You can control the slide direction using the <code>direction</code> prop ("up" or "down").
          </p>
          <PreviewCodeTabs code={directionCode}>
            <div className="flex h-32 items-center justify-center gap-4 rounded-lg border bg-zinc-50 dark:bg-zinc-900">
              <SlideTextButton 
                initialText="Slide Up" 
                hoverText="Success!" 
                direction="up" 
              />
              <SlideTextButton 
                initialText="Slide Down" 
                hoverText="Success!" 
                direction="down" 
              />
            </div>
          </PreviewCodeTabs>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">With Icons</h2>
          <p className="mb-4 text-muted-foreground">
            Since the text props accept <code>ReactNode</code>, you can easily include icons or complex markup.
          </p>
          <PreviewCodeTabs code={iconCode}>
            <div className="flex h-32 items-center justify-center gap-4 rounded-lg border bg-zinc-50 dark:bg-zinc-900">
              <SlideTextButton 
                initialText={<span className="flex items-center gap-2">Send <Send className="w-4 h-4" /></span>}
                hoverText={<span className="flex items-center gap-2">Sent <Check className="w-4 h-4" /></span>}
              />
              <SlideTextButton 
                variant="outline"
                initialText="Download"
                hoverText={<Download className="w-4 h-4" />}
                className="w-32"
              />
            </div>
          </PreviewCodeTabs>
        </section>
      </div>
    </div>
  )
}
