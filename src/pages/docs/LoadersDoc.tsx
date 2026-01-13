import { useState, useEffect } from "react"
import { Separator } from "@/components/ui/separator"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Button } from "@/components/ui/button"
import { LoaderSpinner, LoaderDots, LoaderPulse, LoaderSquare, FullScreenLoader } from "@/components/patterns/loaders"

export default function LoadersDoc() {
  const [showFullScreen, setShowFullScreen] = useState(false)
  const [activeVariant, setActiveVariant] = useState<"spinner" | "dots" | "pulse" | "square">("spinner")

  useEffect(() => {
    if (showFullScreen) {
      const timer = setTimeout(() => setShowFullScreen(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [showFullScreen])

  const handleShowLoader = (variant: "spinner" | "dots" | "pulse" | "square") => {
    setActiveVariant(variant)
    setShowFullScreen(true)
  }

  const spinnerCode = `import { LoaderSpinner } from "@/components/patterns/loaders"

export function Example() {
  return <LoaderSpinner size="lg" />
}`

  const dotsCode = `import { LoaderDots } from "@/components/patterns/loaders"

export function Example() {
  return <LoaderDots size="lg" />
}`

  const pulseCode = `import { LoaderPulse } from "@/components/patterns/loaders"

export function Example() {
  return <LoaderPulse size="lg" />
}`

  const squareCode = `import { LoaderSquare } from "@/components/patterns/loaders"

export function Example() {
  return <LoaderSquare size="lg" />
}`

  const fullScreenCode = `import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FullScreenLoader } from "@/components/patterns/loaders"

export function Example() {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 3000)
  }

  return (
    <>
      <Button onClick={handleClick}>Show Full Screen Loader</Button>
      <FullScreenLoader 
        loading={loading} 
        variant="spinner" 
        text="Loading content..." 
      />
    </>
  )
}`

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-8">
      <FullScreenLoader 
        loading={showFullScreen} 
        variant={activeVariant} 
        text={`Demonstrating ${activeVariant} loader...`} 
      />

      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Loaders</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Loaders</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Animated loading states and full-screen overlays for better user experience.
        </p>
      </div>

      <div className="grid gap-12">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Spinner</h2>
          <PreviewCodeTabs code={spinnerCode}>
            <div className="flex h-32 items-center justify-center rounded-lg border bg-zinc-50 dark:bg-zinc-900">
              <LoaderSpinner size="lg" />
            </div>
          </PreviewCodeTabs>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Bouncing Dots</h2>
          <PreviewCodeTabs code={dotsCode}>
            <div className="flex h-32 items-center justify-center rounded-lg border bg-zinc-50 dark:bg-zinc-900">
              <LoaderDots size="lg" />
            </div>
          </PreviewCodeTabs>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Pulse</h2>
          <PreviewCodeTabs code={pulseCode}>
            <div className="flex h-32 items-center justify-center rounded-lg border bg-zinc-50 dark:bg-zinc-900">
              <LoaderPulse size="lg" />
            </div>
          </PreviewCodeTabs>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Modern Square</h2>
          <PreviewCodeTabs code={squareCode}>
            <div className="flex h-32 items-center justify-center rounded-lg border bg-zinc-50 dark:bg-zinc-900">
              <LoaderSquare size="lg" />
            </div>
          </PreviewCodeTabs>
        </section>

        <Separator />

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Full Screen Loader</h2>
          <p className="mb-4 text-muted-foreground">
            A fixed overlay that covers the entire screen. Click the buttons below to test different variants.
            (Will close automatically after 3 seconds)
          </p>
          <PreviewCodeTabs code={fullScreenCode}>
            <div className="flex flex-wrap gap-4 p-8 justify-center rounded-lg border bg-zinc-50 dark:bg-zinc-900">
              <Button onClick={() => handleShowLoader("spinner")}>
                Test Spinner
              </Button>
              <Button onClick={() => handleShowLoader("dots")} variant="secondary">
                Test Dots
              </Button>
              <Button onClick={() => handleShowLoader("pulse")} variant="outline">
                Test Pulse
              </Button>
              <Button onClick={() => handleShowLoader("square")} variant="ghost" className="border">
                Test Square
              </Button>
            </div>
          </PreviewCodeTabs>
        </section>
      </div>
    </div>
  )
}
