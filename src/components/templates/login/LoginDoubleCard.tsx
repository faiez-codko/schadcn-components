import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LoginDoubleCard() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-50 dark:bg-slate-900 p-4">
      <div className="relative w-full max-w-[400px]">
        {/* Background Card */}
        <div className="absolute top-4 left-4 w-full h-full bg-zinc-900 dark:bg-zinc-800 rounded-xl shadow-lg -rotate-2 scale-[0.98] z-0 opacity-20 dark:opacity-50"></div>
        
        {/* Main Card */}
        <Card className="relative z-10 w-full shadow-2xl border-none">
          <CardHeader>
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>
              Login to your account to continue
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="@peduarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Login</Button>
          </CardFooter>
          <div className="px-6 pb-6 text-center text-xs text-muted-foreground">
             By clicking login, you agree to our Terms.
          </div>
        </Card>
      </div>
    </div>
  )
}
