import { ProfileMinimal } from "@/components/templates/profile/ProfileMinimal"
import { ProfileRetro } from "@/components/templates/profile/ProfileRetro"
import { ProfileMonochrome } from "@/components/templates/profile/ProfileMonochrome"
import { ProfileScandinavian } from "@/components/templates/profile/ProfileScandinavian"
import { ProfilePlayful } from "@/components/templates/profile/ProfilePlayful"
import { Separator } from "@/components/ui/separator"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfileTemplateDoc() {
  const minimalCode = `import { ProfileMinimal } from "@/components/templates/profile/ProfileMinimal"

export function ProfileMinimalDemo() {
  return <ProfileMinimal />
}`

  const retroCode = `import { ProfileRetro } from "@/components/templates/profile/ProfileRetro"

export function ProfileRetroDemo() {
  return <ProfileRetro />
}`

  const monochromeCode = `import { ProfileMonochrome } from "@/components/templates/profile/ProfileMonochrome"

export function ProfileMonochromeDemo() {
  return <ProfileMonochrome />
}`

  const scandiCode = `import { ProfileScandinavian } from "@/components/templates/profile/ProfileScandinavian"

export function ProfileScandinavianDemo() {
  return <ProfileScandinavian />
}`

  const playfulCode = `import { ProfilePlayful } from "@/components/templates/profile/ProfilePlayful"

export function ProfilePlayfulDemo() {
  return <ProfilePlayful />
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
            <BreadcrumbLink to="/docs/templates/profile">Templates</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>User Profile</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="mt-2 text-3xl font-bold text-left">User Profile</h1>
      <p className="mt-2 text-muted-foreground text-left">Versatile user profile templates for different brand identities.</p>
      <Separator className="my-6" />
      
      <Tabs defaultValue="minimal" className="w-full">
        <TabsList className="mb-4 flex-wrap h-auto gap-2">
          <TabsTrigger value="minimal">Minimalistic</TabsTrigger>
          <TabsTrigger value="retro">Retro</TabsTrigger>
          <TabsTrigger value="monochrome">Monochrome</TabsTrigger>
          <TabsTrigger value="scandinavian">Scandinavian</TabsTrigger>
          <TabsTrigger value="playful">Playful</TabsTrigger>
        </TabsList>
        
        <TabsContent value="minimal">
          <PreviewCodeTabs code={minimalCode}>
            <div className="w-full border rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900/50 p-8">
              <ProfileMinimal />
            </div>
          </PreviewCodeTabs>
        </TabsContent>
        
        <TabsContent value="retro">
          <PreviewCodeTabs code={retroCode}>
            <div className="w-full border rounded-xl overflow-hidden bg-black p-8">
              <ProfileRetro />
            </div>
          </PreviewCodeTabs>
        </TabsContent>
        
        <TabsContent value="monochrome">
          <PreviewCodeTabs code={monochromeCode}>
            <div className="w-full border rounded-xl overflow-hidden h-[800px] overflow-y-auto">
              <ProfileMonochrome />
            </div>
          </PreviewCodeTabs>
        </TabsContent>
        
        <TabsContent value="scandinavian">
          <PreviewCodeTabs code={scandiCode}>
            <div className="w-full border rounded-xl overflow-hidden bg-[#F0F0F0] p-8">
              <ProfileScandinavian />
            </div>
          </PreviewCodeTabs>
        </TabsContent>

        <TabsContent value="playful">
          <PreviewCodeTabs code={playfulCode}>
            <div className="w-full border rounded-xl overflow-hidden bg-white p-8">
              <ProfilePlayful />
            </div>
          </PreviewCodeTabs>
        </TabsContent>
      </Tabs>
    </div>
  )
}
