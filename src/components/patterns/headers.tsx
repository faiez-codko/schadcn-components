import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Menu } from "lucide-react"

type HeaderLink = { label: string; to: string }
type Brand = { label: string; to: string }
type CTA = { label: string; to?: string; onClick?: () => void; variant?: "default" | "outline" | "secondary" | "ghost" | "link" }

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

function Brand({ label, to }: Brand) {
  return (
    <Link to={to} className="font-semibold">
      {label}
    </Link>
  )
}

type HeaderBasicProps = {
  brand: Brand
  links: HeaderLink[]
  cta?: CTA
  showThemeToggle?: boolean
  className?: string
}

export function HeaderBasic({ brand, links, cta, showThemeToggle = true, className }: HeaderBasicProps) {
  return (
    <header className={["border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80", className].filter(Boolean).join(" ")}>
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <MobileMenu>
              {links.map((l) => (
                <Link key={l.to} to={l.to}>{l.label}</Link>
              ))}
            </MobileMenu>
          </div>
          <Brand {...brand} />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.to} to={l.to}>{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {showThemeToggle && <ThemeToggle />}
          {cta && (
            cta.to ? (
              <Button asChild variant={cta.variant ?? "default"}>
                <Link to={cta.to}>{cta.label}</Link>
              </Button>
            ) : (
              <Button variant={cta.variant ?? "default"} onClick={cta.onClick}>{cta.label}</Button>
            )
          )}
        </div>
      </div>
    </header>
  )
}

type HeaderWithSearchProps = HeaderBasicProps & {
  searchPlaceholder?: string
  onSearchChange?: (value: string) => void
}

export function HeaderWithSearch({ brand, links, cta, showThemeToggle = true, searchPlaceholder = "Search…", onSearchChange, className }: HeaderWithSearchProps) {
  return (
    <header className={["border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80", className].filter(Boolean).join(" ")}>
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center gap-3">
        <div className="flex items-center gap-3 flex-1">
          <div className="md:hidden">
            <MobileMenu>
              {links.map((l) => (
                <Link key={l.to} to={l.to}>{l.label}</Link>
              ))}
            </MobileMenu>
          </div>
          <Brand {...brand} />
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link key={l.to} to={l.to}>{l.label}</Link>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <Input placeholder={searchPlaceholder} onChange={(e) => onSearchChange?.(e.target.value)} />
        </div>
        <div className="flex items-center gap-2">
          {showThemeToggle && <ThemeToggle />}
          {cta && (
            cta.to ? (
              <Button asChild variant={cta.variant ?? "default"}>
                <Link to={cta.to}>{cta.label}</Link>
              </Button>
            ) : (
              <Button variant={cta.variant ?? "default"} onClick={cta.onClick}>{cta.label}</Button>
            )
          )}
        </div>
      </div>
    </header>
  )
}

type HeaderWithCTAProps = HeaderBasicProps

export function HeaderWithCTA({ brand, links, cta, showThemeToggle = true, className }: HeaderWithCTAProps) {
  return (
    <header className={["border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80", className].filter(Boolean).join(" ")}>
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <MobileMenu>
              {links.map((l) => (
                <Link key={l.to} to={l.to}>{l.label}</Link>
              ))}
            </MobileMenu>
          </div>
          <Brand {...brand} />
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.to} to={l.to}>{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {showThemeToggle && <ThemeToggle />}
          {cta && (
            cta.to ? (
              <Button asChild variant={cta.variant ?? "default"}>
                <Link to={cta.to}>{cta.label}</Link>
              </Button>
            ) : (
              <Button variant={cta.variant ?? "default"} onClick={cta.onClick}>{cta.label}</Button>
            )
          )}
        </div>
      </div>
    </header>
  )
}
