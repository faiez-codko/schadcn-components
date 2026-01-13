import { LoginWithImage } from "@/components/templates/login/LoginWithImage"
import { LoginWithProviders } from "@/components/templates/login/LoginWithProviders"
import { LoginMagicLink } from "@/components/templates/login/LoginMagicLink"
import { LoginDoubleCard } from "@/components/templates/login/LoginDoubleCard"
import { Separator } from "@/components/ui/separator"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginTemplateDoc() {
  const codeImage = `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Command } from "lucide-react"

export function LoginWithImage() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      {/* ... Form Section ... */}
      <div className="hidden bg-muted lg:block">
        {/* ... Image/Branding Section ... */}
      </div>
    </div>
  )
}`

  const codeProviders = `import { Button } from "@/components/ui/button"
import { Github, Mail, Twitter } from "lucide-react"

export function LoginWithProviders() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      {/* ... */}
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline">
          <Github className="mr-2 h-4 w-4" />
          Github
        </Button>
        <Button variant="outline">
          <Twitter className="mr-2 h-4 w-4" />
          Twitter
        </Button>
      </div>
      {/* ... */}
    </div>
  )
}`

  const codeMagic = `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Wand2 } from "lucide-react"

export function LoginMagicLink() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-muted/40">
       {/* ... Minimal Card ... */}
    </div>
  )
}`

  const codeDouble = `import { Card } from "@/components/ui/card"

export function LoginDoubleCard() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="relative w-full max-w-[400px]">
        {/* Background Card Effect */}
        <div className="absolute top-4 left-4 w-full h-full bg-zinc-900 rounded-xl -rotate-2 scale-[0.98] z-0 opacity-20"></div>
        {/* Main Card */}
        <Card className="relative z-10 w-full shadow-2xl">
           {/* ... */}
        </Card>
      </div>
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
            <BreadcrumbLink to="/docs/templates/login">Templates</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Login</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="mt-2 text-3xl font-bold text-left">Login Templates</h1>
      <p className="mt-2 text-muted-foreground text-left">Authentication forms for various use cases.</p>
      <Separator className="my-6" />
      
      <Tabs defaultValue="image" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="image">Split Image</TabsTrigger>
          <TabsTrigger value="providers">Providers</TabsTrigger>
          <TabsTrigger value="magic">Magic Link</TabsTrigger>
          <TabsTrigger value="double">Double Card</TabsTrigger>
        </TabsList>
        
        <TabsContent value="image">
            <PreviewCodeTabs code={codeImage}>
                <div className="border rounded-xl overflow-hidden bg-background h-[600px]">
                    <LoginWithImage />
                </div>
            </PreviewCodeTabs>
        </TabsContent>

        <TabsContent value="providers">
            <PreviewCodeTabs code={codeProviders}>
                <div className="border rounded-xl overflow-hidden bg-background min-h-[500px] flex items-center justify-center">
                    <LoginWithProviders />
                </div>
            </PreviewCodeTabs>
        </TabsContent>

        <TabsContent value="magic">
            <PreviewCodeTabs code={codeMagic}>
                <div className="border rounded-xl overflow-hidden bg-background min-h-[500px] relative">
                    <LoginMagicLink />
                </div>
            </PreviewCodeTabs>
        </TabsContent>

        <TabsContent value="double">
            <PreviewCodeTabs code={codeDouble}>
                <div className="border rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 min-h-[600px] relative">
                    <LoginDoubleCard />
                </div>
            </PreviewCodeTabs>
        </TabsContent>
      </Tabs>
    </div>
  )
}
