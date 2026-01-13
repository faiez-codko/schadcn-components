import { PortfolioTemplate } from "@/components/templates/portfolio/PortfolioTemplate"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"

export default function PortfolioTemplateDoc() {
  const code = `import { PortfolioTemplate } from "@/components/templates/portfolio/PortfolioTemplate"

export default function Page() {
  return <PortfolioTemplate />
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
            <BreadcrumbLink to="/docs/templates/portfolio-landing">Templates</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Portfolio Landing</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-8">
        <h1 className="text-3xl font-bold">Portfolio Landing Page</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A comprehensive portfolio template featuring Hero, About, Work Experience, Education, Projects, Hackathons, Blog, and Contact sections.
        </p>
      </div>

      <Separator className="my-8" />

      <div className="space-y-8">
        <PreviewCodeTabs code={code}>
          <div className="border rounded-lg bg-background overflow-hidden h-[800px] w-full relative">
            <div className="absolute inset-0 overflow-y-auto">
                <PortfolioTemplate />
            </div>
          </div>
        </PreviewCodeTabs>
      </div>
    </div>
  )
}
