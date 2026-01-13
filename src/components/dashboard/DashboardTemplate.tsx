import { OverviewChart } from "@/components/dashboard/OverviewChart"
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
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
             <Calendar className="mr-2 h-4 w-4" />
             Jan 20, 2024 - Feb 09, 2024
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Total Revenue</h3>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Subscriptions</h3>
            <Users className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">+2350</div>
          <p className="text-xs text-muted-foreground">+180.1% from last month</p>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Sales</h3>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">+12,234</div>
          <p className="text-xs text-muted-foreground">+19% from last month</p>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
          <div className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">Active Now</h3>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-muted-foreground">+201 since last hour</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Main Chart */}
        <div className="col-span-4 rounded-xl border bg-card text-card-foreground shadow-sm">
          <div className="p-6 flex flex-row items-center justify-between space-y-0">
            <div className="space-y-1">
               <h3 className="font-semibold leading-none tracking-tight">Overview</h3>
               <p className="text-sm text-muted-foreground">Monthly revenue breakdown.</p>
            </div>
          </div>
          <div className="p-6 pt-0 pl-2">
            <OverviewChart />
          </div>
        </div>

        {/* Sidebar / Recent Sales */}
        <div className="col-span-3 rounded-xl border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
             <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold leading-none tracking-tight">Recent Activity</h3>
                <Bell className="h-4 w-4 text-muted-foreground" />
             </div>
             <RecentActivityChart />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-3">
            <KanbanWidget />
        </div>
        <div className="col-span-4 rounded-xl border bg-card text-card-foreground shadow-sm p-6">
            <h3 className="font-semibold mb-4">Team Members</h3>
            <div className="space-y-4">
                {[1,2,3,4].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                TM
                            </div>
                            <div>
                                <p className="text-sm font-medium leading-none">Team Member {i}</p>
                                <p className="text-sm text-muted-foreground">member{i}@example.com</p>
                            </div>
                        </div>
                        <div className="text-sm text-muted-foreground">Active</div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}
