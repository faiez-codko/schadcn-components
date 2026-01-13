import { DashboardTemplate } from "@/components/dashboard/DashboardTemplate"
import { Separator } from "@/components/ui/separator"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb"

export default function DashboardTemplateDoc() {
  const code = `import { OverviewChart } from "@/components/dashboard/OverviewChart"
import { RecentActivityChart } from "@/components/dashboard/RecentActivityChart"
import { KanbanWidget } from "@/components/dashboard/KanbanWidget"
import { 
  Users, 
  DollarSign, 
  CreditCard, 
  Activity, 
  Download,
  Calendar,
  Bell
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardTemplate() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      {/* ... Dashboard Content ... */}
      {/* (See full implementation in source) */}
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
            <BreadcrumbLink to="/docs/templates/dashboard">Templates</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Admin Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="mt-2 text-3xl font-bold text-left">Admin Dashboard</h1>
      <p className="mt-2 text-muted-foreground text-left">A complete dashboard template with charts, stats, and drag-and-drop tasks.</p>
      <Separator className="my-6" />
      
      <PreviewCodeTabs code={code}>
        <div className="border rounded-xl overflow-hidden bg-background">
            <DashboardTemplate />
        </div>
      </PreviewCodeTabs>
    </div>
  )
}
