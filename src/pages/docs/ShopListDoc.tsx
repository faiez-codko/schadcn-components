import { ShopMinimal } from "@/components/templates/shop/ShopMinimal"
import { ShopRetro } from "@/components/templates/shop/ShopRetro"
import { ShopMonochrome } from "@/components/templates/shop/ShopMonochrome"
import { ShopScandinavian } from "@/components/templates/shop/ShopScandinavian"
import { ShopPlayful } from "@/components/templates/shop/ShopPlayful"
import { Separator } from "@/components/ui/separator"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ShopListDoc() {
  const minimalCode = `import { ShopMinimal } from "@/components/templates/shop/ShopMinimal"

export function ShopMinimalDemo() {
  return <ShopMinimal />
}`

  const retroCode = `import { ShopRetro } from "@/components/templates/shop/ShopRetro"

export function ShopRetroDemo() {
  return <ShopRetro />
}`

  const monochromeCode = `import { ShopMonochrome } from "@/components/templates/shop/ShopMonochrome"

export function ShopMonochromeDemo() {
  return <ShopMonochrome />
}`

  const scandiCode = `import { ShopScandinavian } from "@/components/templates/shop/ShopScandinavian"

export function ShopScandinavianDemo() {
  return <ShopScandinavian />
}`

  const playfulCode = `import { ShopPlayful } from "@/components/templates/shop/ShopPlayful"

export function ShopPlayfulDemo() {
  return <ShopPlayful />
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
            <BreadcrumbLink to="/docs/templates/shop-list">Templates</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Shop List</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="mt-2 text-3xl font-bold text-left">Shop List</h1>
      <p className="mt-2 text-muted-foreground text-left">Diverse shop listing templates for various brand identities.</p>
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
            <div className="w-full border rounded-xl overflow-hidden h-[600px] overflow-y-auto">
              <ShopMinimal />
            </div>
          </PreviewCodeTabs>
        </TabsContent>
        
        <TabsContent value="retro">
          <PreviewCodeTabs code={retroCode}>
            <div className="w-full border rounded-xl overflow-hidden h-[600px] overflow-y-auto">
              <ShopRetro />
            </div>
          </PreviewCodeTabs>
        </TabsContent>
        
        <TabsContent value="monochrome">
          <PreviewCodeTabs code={monochromeCode}>
            <div className="w-full border rounded-xl overflow-hidden h-[600px] overflow-y-auto">
              <ShopMonochrome />
            </div>
          </PreviewCodeTabs>
        </TabsContent>
        
        <TabsContent value="scandinavian">
          <PreviewCodeTabs code={scandiCode}>
            <div className="w-full border rounded-xl overflow-hidden h-[600px] overflow-y-auto">
              <ShopScandinavian />
            </div>
          </PreviewCodeTabs>
        </TabsContent>

        <TabsContent value="playful">
          <PreviewCodeTabs code={playfulCode}>
            <div className="w-full border rounded-xl overflow-hidden h-[600px] overflow-y-auto">
              <ShopPlayful />
            </div>
          </PreviewCodeTabs>
        </TabsContent>
      </Tabs>
    </div>
  )
}
