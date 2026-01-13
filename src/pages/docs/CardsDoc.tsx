import { Separator } from '@/components/ui/separator'
import { PreviewCodeTabs } from '@/components/ui/preview-code-tabs'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { CardGeneric, CardBlogPost, CardSocial, CardProduct, CardBento, CardProductBento, CardRetro } from '@/components/patterns/cards'
import { BarChart, Activity, Users } from 'lucide-react'

function CardsDoc() {
  const genericCode = `import { CardGeneric } from "@/components/patterns/cards"

export function Example() {
  return (
    <CardGeneric
      title="Simple Card"
      description="This is a basic card component."
    >
      <p className="text-sm text-muted-foreground">
        It includes a title, description, content area, and a footer action.
      </p>
    </CardGeneric>
  )
}`

  const blogPostCode = `import { CardBlogPost } from "@/components/patterns/cards"

export function Example() {
  return (
    <CardBlogPost
      title="The Future of AI in Design"
      description="How artificial intelligence is reshaping the way we approach user interface and experience design."
      category="Technology"
      readTime="6 min read"
      image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
    />
  )
}`

  const socialPostCode = `import { CardSocial } from "@/components/patterns/cards"

export function Example() {
  return (
    <CardSocial
      author={{
        name: "Alex Johnson",
        handle: "@alexj_design",
        avatar: "https://github.com/shadcn.png"
      }}
      timestamp="4h ago"
      likes={342}
      comments={56}
      shares={28}
      image="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop"
      title="Just finished my new workspace setup! What do you think? 🖥️✨ #setup #workspace #developer"
    />
  )
}`

  const productCode = `import { CardProduct } from "@/components/patterns/cards"

export function Example() {
  return (
    <CardProduct
      title="Mechanical Keyboard"
      description="Custom built 65% mechanical keyboard with Gateron switches and PBT keycaps."
      price={149.99}
      originalPrice={199.99}
      rating={4.9}
      reviews={86}
      image="https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1000&auto=format&fit=crop"
      onAddToCart={() => console.log("Added to cart")}
    />
  )
}`

  const bentoCode = `import { CardBento } from "@/components/patterns/cards"
import { BarChart, Activity, Users } from "lucide-react"

export function Example() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px]">
      <CardBento
        title="Total Revenue"
        description="+12.5% from last month"
        icon={<BarChart className="h-5 w-5" />}
        variant="default"
        className="md:col-span-2"
      />
      <CardBento
        title="Active Users"
        description="2,400 currently online"
        icon={<Users className="h-5 w-5" />}
        variant="dark"
      />
      <CardBento
        title="System Health"
        description="All systems operational"
        icon={<Activity className="h-5 w-5" />}
        variant="gradient"
        className="md:col-span-3"
      />
    </div>
  )
}`

  const bentoProductCode = `import { CardProductBento } from "@/components/patterns/cards"

export function Example() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[400px]">
      <CardProductBento
        title="Ergonomic Chair"
        description="The ultimate comfort for your workspace with premium lumbar support and breathable mesh."
        price={299}
        image="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1000&auto=format&fit=crop"
      />
      <CardProductBento
        title="Modern Lamp"
        description="Minimalist design lighting for your modern desk setup. Adjustable brightness and color temperature."
        price={89}
        image="https://images.unsplash.com/photo-1507473888900-52e1ad14592d?q=80&w=1000&auto=format&fit=crop"
      />
    </div>
  )
}`

  const retroCode = `import { CardRetro } from "@/components/patterns/cards"

export function Example() {
  return (
    <CardRetro
      title="Neo-Brutalism"
      description="Bold borders, high contrast, and raw aesthetic defining the new retro web design trend."
      tag="TRENDING"
      date="NOW"
      image="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop"
    />
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
            <BreadcrumbLink to="/docs/patterns/cards">Patterns</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Cards</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="mt-2 text-3xl font-bold text-left">Cards</h1>
      <p className="mt-2 text-muted-foreground text-left">Versatile card components for various use cases.</p>

      <Separator className="my-6" />

      <h2 className="text-xl font-semibold">Generic Card</h2>
      <p className="mt-1 text-muted-foreground">A simple card for general content.</p>
      <div className="mt-4">
        <PreviewCodeTabs code={genericCode}>
          <div className="flex justify-center">
            <CardGeneric
              title="Simple Card"
              description="This is a basic card component."
            >
              <p className="text-sm text-muted-foreground">
                It includes a title, description, content area, and a footer action.
              </p>
            </CardGeneric>
          </div>
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Blog Post Card</h2>
      <p className="mt-1 text-muted-foreground">Perfect for article previews and blog listings.</p>
      <div className="mt-4">
        <PreviewCodeTabs code={blogPostCode}>
          <div className="flex justify-center">
            <CardBlogPost
              title="The Future of AI in Design"
              description="How artificial intelligence is reshaping the way we approach user interface and experience design."
              category="Technology"
              readTime="6 min read"
              image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
            />
          </div>
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Social Media Post</h2>
      <p className="mt-1 text-muted-foreground">A social feed style card with interaction buttons.</p>
      <div className="mt-4">
        <PreviewCodeTabs code={socialPostCode}>
          <div className="flex justify-center">
            <CardSocial
              author={{
                name: "Alex Johnson",
                handle: "@alexj_design",
                avatar: "https://github.com/shadcn.png"
              }}
              timestamp="4h ago"
              likes={342}
              comments={56}
              shares={28}
              image="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop"
              title="Just finished my new workspace setup! What do you think? 🖥️✨ #setup #workspace #developer"
            />
          </div>
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Product Card</h2>
      <p className="mt-1 text-muted-foreground">E-commerce style card with price, rating, and add to cart action.</p>
      <div className="mt-4">
        <PreviewCodeTabs code={productCode}>
          <div className="flex justify-center">
            <CardProduct
              title="Mechanical Keyboard"
              description="Custom built 65% mechanical keyboard with Gateron switches and PBT keycaps."
              price={149.99}
              originalPrice={199.99}
              rating={4.9}
              reviews={86}
              image="https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1000&auto=format&fit=crop"
              onAddToCart={() => console.log("Added to cart")}
            />
          </div>
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Bento Grid Cards</h2>
      <p className="mt-1 text-muted-foreground">Flexible cards designed for dashboard layouts and bento grids.</p>
      <div className="mt-4">
        <PreviewCodeTabs code={bentoCode}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px] w-full max-w-4xl mx-auto">
            <CardBento
              title="Total Revenue"
              description="+12.5% from last month"
              icon={<BarChart className="h-5 w-5" />}
              variant="default"
              className="md:col-span-2"
            />
            <CardBento
              title="Active Users"
              description="2,400 currently online"
              icon={<Users className="h-5 w-5" />}
              variant="dark"
            />
            <CardBento
              title="System Health"
              description="All systems operational"
              icon={<Activity className="h-5 w-5" />}
              variant="gradient"
              className="md:col-span-3"
            />
          </div>
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Bento Product Card</h2>
      <p className="mt-1 text-muted-foreground">Immersive product cards ideal for bento grids and featured collections.</p>
      <div className="mt-4">
        <PreviewCodeTabs code={bentoProductCode}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[400px] w-full max-w-4xl mx-auto">
            <CardProductBento
              title="Ergonomic Chair"
              description="The ultimate comfort for your workspace with premium lumbar support and breathable mesh."
              price={299}
              image="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1000&auto=format&fit=crop"
            />
            <CardProductBento
              title="Modern Lamp"
              description="Minimalist design lighting for your modern desk setup. Adjustable brightness and color temperature."
              price={89}
              image="https://images.unsplash.com/photo-1507473888900-52e1ad14592d?q=80&w=1000&auto=format&fit=crop"
            />
          </div>
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Retro Card</h2>
      <p className="mt-1 text-muted-foreground">A neo-brutalism inspired card with bold borders and shadows.</p>
      <div className="mt-4">
        <PreviewCodeTabs code={retroCode}>
          <div className="flex justify-center p-8 bg-neutral-100 dark:bg-neutral-900 rounded-xl">
            <CardRetro
              title="Neo-Brutalism"
              description="Bold borders, high contrast, and raw aesthetic defining the new retro web design trend."
              tag="TRENDING"
              date="NOW"
              image="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop"
            />
          </div>
        </PreviewCodeTabs>
      </div>
    </div>
  )
}

export default CardsDoc
