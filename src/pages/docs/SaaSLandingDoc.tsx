import { SaaSLanding } from "@/components/templates/saas/SaaSLanding"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"

export default function SaaSLandingDoc() {
  const code = `import { SaaSLanding } from "@/components/templates/saas/SaaSLanding"

export default function Page() {
  return <SaaSLanding />
}
`

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-8">
      <Breadcrumb className="text-left">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink to="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink to="/docs/templates/saas">Templates</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>SaaS Landing Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-8">
        <h1 className="text-3xl font-bold">SaaS Landing Page</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          The ultimate landing page template for your SaaS product. Features a modern design, hero section, features grid, testimonials, pricing, FAQ, and more.
        </p>
      </div>

      <Separator className="my-8" />

      <div className="space-y-8">
        <PreviewCodeTabs code={code}>
          <div className="border rounded-lg bg-background overflow-hidden h-[800px] w-full relative">
            <div className="absolute inset-0 overflow-y-auto">
                <SaaSLanding />
            </div>
          </div>
        </PreviewCodeTabs>
      </div>
    </div>
  )
}
