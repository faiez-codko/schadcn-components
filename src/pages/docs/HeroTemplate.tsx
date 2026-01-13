import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { PreviewCodeTabs } from '@/components/ui/preview-code-tabs'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from '@/components/ui/breadcrumb'

function HeroTemplate() {
  const code =
`import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Hero() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Build faster</h2>
          <p className="mt-2 text-muted-foreground">Drop-in hero section for landing pages</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </CardContent>
    </Card>
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
            <BreadcrumbLink to="/docs/templates/hero">Templates</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Hero</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="mt-2 text-3xl font-bold text-left">Hero Template</h1>
      <p className="mt-2 text-muted-foreground text-left">Drop-in hero section for landing pages.</p>
      <Separator className="my-6" />
      <PreviewCodeTabs code={code}>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold">Build faster</h2>
              <p className="mt-2 text-muted-foreground">Drop-in hero section for landing pages</p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </PreviewCodeTabs>
    </div>
  )
}

export default HeroTemplate
