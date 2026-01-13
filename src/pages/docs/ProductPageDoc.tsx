import { ProductMinimal } from "@/components/templates/product/ProductMinimal"
import { ProductRetro } from "@/components/templates/product/ProductRetro"
import { Separator } from "@/components/ui/separator"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPageDoc() {
  const minimalCode = `import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Minus, Plus, ShoppingBag, Heart, Share2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ProductMinimal() {
  // ... implementation
}`

  const retroCode = `import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Minus, Plus, ShoppingCart, Heart, Zap, ArrowRight, MousePointer2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function ProductRetro() {
  // ... implementation
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
            <BreadcrumbLink to="/docs/templates/product-page">Templates</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Product Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="mt-2 text-3xl font-bold text-left">Product Page</h1>
      <p className="mt-2 text-muted-foreground text-left">Versatile product page templates in different styles.</p>
      <Separator className="my-6" />
      
      <Tabs defaultValue="minimal" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="minimal">Minimalistic</TabsTrigger>
          <TabsTrigger value="retro">Retro / Brutalist</TabsTrigger>
        </TabsList>
        
        <TabsContent value="minimal">
          <PreviewCodeTabs code={minimalCode}>
            <div className="w-full border rounded-xl overflow-hidden">
              <ProductMinimal />
            </div>
          </PreviewCodeTabs>
        </TabsContent>
        
        <TabsContent value="retro">
          <PreviewCodeTabs code={retroCode}>
            <div className="w-full border rounded-xl overflow-hidden">
              <ProductRetro />
            </div>
          </PreviewCodeTabs>
        </TabsContent>
      </Tabs>
    </div>
  )
}
