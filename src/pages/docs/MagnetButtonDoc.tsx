import { MagnetButton } from "@/components/patterns/magnet-button"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from '@/components/ui/breadcrumb'

export default function MagnetButtonDoc() {
  const basicCode = `import { MagnetButton } from "@/components/patterns/magnet-button"

export function Example() {
  return (
    <MagnetButton>
      Hover Me
    </MagnetButton>
  )
}`

  const customCode = `import { MagnetButton } from "@/components/patterns/magnet-button"

export function Example() {
  return (
    <div className="flex gap-4">
      <MagnetButton 
        particleCount={30} 
        particleColor="#ef4444" 
        variant="outline"
      >
        High Density
      </MagnetButton>
      
      <MagnetButton 
        attractionStrength={0.2} 
        className="bg-indigo-600 hover:bg-indigo-700"
      >
        Strong Magnet
      </MagnetButton>
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
            <BreadcrumbPage>Magnet Button</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Magnet Button</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A button with a particle effect that gets attracted to the cursor on hover.
        </p>
      </div>

      <div className="grid gap-12">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Basic Usage</h2>
          <PreviewCodeTabs code={basicCode}>
            <div className="flex h-32 items-center justify-center rounded-lg border bg-zinc-50 dark:bg-zinc-900">
              <MagnetButton>
                Hover Me
              </MagnetButton>
            </div>
          </PreviewCodeTabs>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Customization</h2>
          <p className="mb-4 text-muted-foreground">
            Customize particle count, color, and attraction physics.
          </p>
          <PreviewCodeTabs code={customCode}>
            <div className="flex h-32 items-center justify-center gap-4 rounded-lg border bg-zinc-50 dark:bg-zinc-900">
              <MagnetButton 
                particleCount={30} 
                particleColor="#ef4444" 
                variant="outline"
              >
                High Density
              </MagnetButton>
              
              <MagnetButton 
                attractionStrength={0.2} 
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Strong Magnet
              </MagnetButton>
            </div>
          </PreviewCodeTabs>
        </section>
      </div>
    </div>
  )
}
