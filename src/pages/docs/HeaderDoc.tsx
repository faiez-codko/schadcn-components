import { Separator } from '@/components/ui/separator'
import { PreviewCodeTabs } from '@/components/ui/preview-code-tabs'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { HeaderBasic, HeaderWithSearch, HeaderWithCTA } from '@/components/patterns/headers'

function HeaderDoc() {
  const basicCode =
`import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Menu } from "lucide-react"

function MobileMenu({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu">
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex flex-col gap-3">{children}</div>
      </SheetContent>
    </Sheet>
  )
}

function Brand() {
  return (
    <Link to="/" className="font-semibold">
      Brand
    </Link>
  )
}

export function HeaderBasic() {
  return (
    <header className="border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <MobileMenu>
              <Link to="/docs">Docs</Link>
              <Link to="/components">Components</Link>
              <Link to="/pricing">Pricing</Link>
            </MobileMenu>
          </div>
          <Brand />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/docs">Docs</Link>
          <Link to="/components">Components</Link>
          <Link to="/pricing">Pricing</Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button>Sign in</Button>
        </div>
      </div>
    </header>
  )
}`

  const searchCode =
`import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Menu } from "lucide-react"

function MobileMenu({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu">
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex flex-col gap-3">{children}</div>
      </SheetContent>
    </Sheet>
  )
}

function Brand() {
  return (
    <Link to="/" className="font-semibold">
      Brand
    </Link>
  )
}

export function HeaderWithSearch() {
  return (
    <header className="border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center gap-3">
        <div className="flex items-center gap-3 flex-1">
          <div className="md:hidden">
            <MobileMenu>
              <Link to="/docs">Docs</Link>
              <Link to="/components">Components</Link>
              <Link to="/pricing">Pricing</Link>
            </MobileMenu>
          </div>
          <Brand />
          <div className="hidden md:flex items-center gap-6">
            <Link to="/docs">Docs</Link>
            <Link to="/components">Components</Link>
            <Link to="/pricing">Pricing</Link>
          </div>
        </div>
        <div className="flex-1">
          <Input placeholder="Search…" />
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button>Sign up</Button>
        </div>
      </div>
    </header>
  )
}`

  const ctaCode =
`import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Menu } from "lucide-react"

function MobileMenu({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu">
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex flex-col gap-3">{children}</div>
      </SheetContent>
    </Sheet>
  )
}

function Brand() {
  return (
    <Link to="/" className="font-semibold">
      Brand
    </Link>
  )
}

export function HeaderWithCTA() {
  return (
    <header className="border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <MobileMenu>
              <Link to="/docs">Docs</Link>
              <Link to="/components">Components</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/blog">Blog</Link>
            </MobileMenu>
          </div>
          <Brand />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/docs">Docs</Link>
          <Link to="/components">Components</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/pricing">Pricing</Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button>Start free</Button>
        </div>
      </div>
    </header>
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
            <BreadcrumbLink to="/docs/components/header">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Header</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="mt-2 text-3xl font-bold text-left">Header</h1>
      <p className="mt-2 text-muted-foreground text-left">Clean, responsive headers/navigation with multiple variants.</p>

      <Separator className="my-6" />

      <h2 className="text-xl font-semibold">Basic</h2>
      <p className="mt-1 text-muted-foreground">Brand, center nav, and actions.</p>
      <div className="mt-4">
        <PreviewCodeTabs
          code={basicCode}
          usageCode={`import { HeaderBasic } from "@/components/patterns/headers"

export function Example() {
  return (
    <HeaderBasic
      brand={{ label: "Brand", to: "/" }}
      links={[
        { label: "Docs", to: "/docs" },
        { label: "Components", to: "/components" },
        { label: "Pricing", to: "/pricing" },
      ]}
      cta={{ label: "Sign in" }}
    />
  )
}`}
        >
          <HeaderBasic
            brand={{ label: 'Brand', to: '/' }}
            links={[
              { label: 'Docs', to: '/docs' },
              { label: 'Components', to: '/components' },
              { label: 'Pricing', to: '/pricing' },
            ]}
            cta={{ label: 'Sign in' }}
          />
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">With Search</h2>
      <p className="mt-1 text-muted-foreground">Inline search input with navigation.</p>
      <div className="mt-4">
        <PreviewCodeTabs
          code={searchCode}
          usageCode={`import { HeaderWithSearch } from "@/components/patterns/headers"

export function Example() {
  return (
    <HeaderWithSearch
      brand={{ label: "Brand", to: "/" }}
      links={[
        { label: "Docs", to: "/docs" },
        { label: "Components", to: "/components" },
        { label: "Pricing", to: "/pricing" },
      ]}
      searchPlaceholder="Search…"
      cta={{ label: "Sign up" }}
    />
  )
}`}
        >
          <HeaderWithSearch
            brand={{ label: 'Brand', to: '/' }}
            links={[
              { label: 'Docs', to: '/docs' },
              { label: 'Components', to: '/components' },
              { label: 'Pricing', to: '/pricing' },
            ]}
            searchPlaceholder="Search…"
            cta={{ label: 'Sign up' }}
          />
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">With CTA</h2>
      <p className="mt-1 text-muted-foreground">Prominent action on the right.</p>
      <div className="mt-4">
        <PreviewCodeTabs
          code={ctaCode}
          usageCode={`import { HeaderWithCTA } from "@/components/patterns/headers"

export function Example() {
  return (
    <HeaderWithCTA
      brand={{ label: "Brand", to: "/" }}
      links={[
        { label: "Docs", to: "/docs" },
        { label: "Components", to: "/components" },
        { label: "Blog", to: "/blog" },
        { label: "Pricing", to: "/pricing" },
      ]}
      cta={{ label: "Start free" }}
    />
  )
}`}
        >
          <HeaderWithCTA
            brand={{ label: 'Brand', to: '/' }}
            links={[
              { label: 'Docs', to: '/docs' },
              { label: 'Components', to: '/components' },
              { label: 'Blog', to: '/blog' },
              { label: 'Pricing', to: '/pricing' },
            ]}
            cta={{ label: 'Start free' }}
          />
        </PreviewCodeTabs>
      </div>
    </div>
  )
}

export default HeaderDoc
