import * as React from "react"
import { Separator } from "@/components/ui/separator"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { 
  PricingGrid, 
  PricingRetro, 
  PricingBold, 
  PricingMonochrome, 
  PricingPlayful, 
  PricingGlass, 
  PricingScandinavian 
} from "@/components/patterns/pricing"

function PricingDoc() {
  const sampleTiers = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for individuals and small projects.",
      features: ["Up to 5 projects", "Basic analytics", "Community support", "1GB storage"],
      cta: "Get Started",
    },
    {
      name: "Pro",
      price: "$79",
      description: "For growing teams and scaling businesses.",
      features: ["Unlimited projects", "Advanced analytics", "Priority support", "10GB storage", "Custom domains"],
      cta: "Try Pro Free",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      description: "Dedicated support and infrastructure for large teams.",
      features: ["Unlimited everything", "Dedicated support", "SLA & Uptime", "SSO Authentication", "Audit logs", "Custom contracts"],
      cta: "Contact Sales",
    },
  ]

  const gridCode =
`import { PricingGrid } from "@/components/patterns/pricing"

export function Example() {
  return (
    <PricingGrid 
      tiers={[
        {
          name: "Starter",
          price: "$29",
          description: "Perfect for individuals and small projects.",
          features: ["Up to 5 projects", "Basic analytics", "Community support", "1GB storage"],
          cta: "Get Started",
        },
        {
          name: "Pro",
          price: "$79",
          description: "For growing teams and scaling businesses.",
          features: ["Unlimited projects", "Advanced analytics", "Priority support", "10GB storage", "Custom domains"],
          cta: "Try Pro Free",
          popular: true,
        },
        {
          name: "Enterprise",
          price: "$199",
          description: "Dedicated support and infrastructure for large teams.",
          features: ["Unlimited everything", "Dedicated support", "SLA & Uptime", "SSO Authentication", "Audit logs", "Custom contracts"],
          cta: "Contact Sales",
        },
      ]} 
    />
  )
}`

  const usageCode =
`import { PricingGrid } from "@/components/patterns/pricing"

export function Example() {
  return <PricingGrid tiers={tiers} />
}`

  const retroCode =
`import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingRetro({ label = "Pricing", tiers, className }: PricingVariantProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold tracking-[0.3em] text-center text-[color:oklch(0.556_0_0)] mb-8">
          {label.toUpperCase()}
        </p>
        
        <div className="relative rounded-2xl border bg-[oklch(0.985_0_0)] p-8 shadow-[0_0_0_1px_oklch(0.922_0_0)_inset,0_12px_0_0_oklch(0.97_0_0),0_12px_0_1px_oklch(0.922_0_0)] dark:bg-[oklch(0.205_0_0)] dark:shadow-[0_0_0_1px_oklch(1_0_0_/_.15)_inset,0_12px_0_0_oklch(0.269_0_0),0_12px_0_1px_oklch(1_0_0_/_.1)]">
          <div className="pointer-events-none absolute inset-x-10 -top-3 h-6 rounded-[50%] bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,oklch(0.922_0_0)_8px,oklch(0.922_0_0)_12px)] opacity-70 blur-[0.4px] dark:bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,oklch(1_0_0_/_.12)_8px,oklch(1_0_0_/_.12)_12px)]" />
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className="flex flex-col rounded-xl border bg-[oklch(1_0_0)] p-6 shadow-[0_3px_0_0_oklch(0.922_0_0)] dark:bg-[oklch(0.205_0_0)] dark:shadow-[0_3px_0_0_oklch(1_0_0_/_.12)]"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-[color:oklch(0.398_0_0)] dark:text-[oklch(0.708_0_0)]">{tier.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1 text-[color:oklch(0.398_0_0)] dark:text-[oklch(0.708_0_0)]">
                    <span className="text-3xl font-bold tracking-tight">{tier.price}</span>
                    <span className="text-sm font-medium opacity-60">/mo</span>
                  </div>
                  <p className="mt-2 text-sm text-[color:oklch(0.556_0_0)]">{tier.description}</p>
                </div>
                
                <ul className="mb-6 flex-1 space-y-3 text-sm text-[color:oklch(0.398_0_0)] dark:text-[oklch(0.708_0_0)]">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <div className="flex size-5 items-center justify-center rounded-full bg-[oklch(0.922_0_0)] text-[color:oklch(0.398_0_0)] dark:bg-[oklch(1_0_0_/_.1)]">
                        <Check className="size-3" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-[oklch(0.398_0_0)] text-[oklch(0.985_0_0)] hover:bg-[oklch(0.269_0_0)] dark:bg-[oklch(0.708_0_0)] dark:text-[oklch(0.145_0_0)]"
                  variant={tier.popular ? "default" : "secondary"}
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}`

  const retroUsage =
`import { PricingRetro } from "@/components/patterns/pricing"

export function Example() {
  return <PricingRetro tiers={tiers} />
}`

  const boldCode =
`import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingBold({ label = "Pricing", tiers, className }: PricingVariantProps) {
  return (
    <section className={cn("py-12 md:py-16 bg-gradient-to-br from-fuchsia-500/10 via-primary/5 to-amber-400/10", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold tracking-[0.35em] text-center text-primary mb-8">
          {label.toUpperCase()}
        </p>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Card
              key={i}
              className={cn(
                "relative overflow-hidden border-none bg-gradient-to-br from-primary to-fuchsia-600 text-primary-foreground shadow-xl",
                !tier.popular && "from-white to-slate-100 text-slate-900 dark:from-slate-900 dark:to-slate-950 dark:text-slate-100"
              )}
            >
              {tier.popular && (
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_55%)]" />
              )}
              
              <CardHeader className="relative">
                <CardTitle className="text-xl font-bold">{tier.name}</CardTitle>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight">{tier.price}</span>
                  <span className="text-sm font-medium opacity-80">/mo</span>
                </div>
                <CardDescription className={cn("mt-2", tier.popular ? "text-primary-foreground/90" : "text-muted-foreground")}>
                  {tier.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative flex-1">
                <ul className="space-y-3 text-sm font-medium">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className={cn("size-4", tier.popular ? "text-amber-300" : "text-primary")} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="relative border-t border-black/5 pt-6 dark:border-white/5">
                <Button 
                  className={cn(
                    "w-full font-bold shadow-lg",
                    tier.popular 
                      ? "bg-white text-primary hover:bg-white/90" 
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}`

  const boldUsage =
`import { PricingBold } from "@/components/patterns/pricing"

export function Example() {
  return <PricingBold tiers={tiers} />
}`

  const monoCode =
`import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingMonochrome({ label = "Pricing", tiers, className }: PricingVariantProps) {
  return (
    <section className={cn("py-12 md:py-16 bg-[oklch(0.97_0_0)] dark:bg-[oklch(0.145_0_0)]", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-medium tracking-[0.3em] text-center text-[oklch(0.398_0_0)] dark:text-[oklch(0.708_0_0)] mb-8">
          {label.toUpperCase()}
        </p>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Card
              key={i}
              className={cn(
                "flex flex-col border-dashed border-[oklch(0.556_0_0_/_.4)] bg-[oklch(1_0_0)] shadow-none dark:bg-[oklch(0.205_0_0)]",
                tier.popular && "border-solid border-2 border-[oklch(0.205_0_0)] dark:border-[oklch(0.922_0_0)]"
              )}
            >
              <CardHeader>
                <CardTitle className="text-lg font-bold uppercase tracking-wide text-[oklch(0.205_0_0)] dark:text-[oklch(0.922_0_0)]">
                  {tier.name}
                </CardTitle>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[oklch(0.205_0_0)] dark:text-[oklch(0.922_0_0)]">{tier.price}</span>
                  <span className="text-sm font-medium text-[oklch(0.556_0_0)] dark:text-[oklch(0.708_0_0)]">/mo</span>
                </div>
                <CardDescription className="text-[oklch(0.398_0_0)] dark:text-[oklch(0.708_0_0)]">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <ul className="space-y-3 text-sm text-[oklch(0.398_0_0)] dark:text-[oklch(0.8_0_0)]">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <div className="flex size-4 items-center justify-center rounded-sm bg-[oklch(0.205_0_0)] text-[oklch(0.985_0_0)] dark:bg-[oklch(0.922_0_0)] dark:text-[oklch(0.145_0_0)]">
                        <Check className="size-2.5" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={cn(
                    "w-full rounded-none border-2 border-[oklch(0.205_0_0)] font-bold uppercase tracking-wide shadow-none hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:border-[oklch(0.922_0_0)]",
                    tier.popular
                      ? "bg-[oklch(0.205_0_0)] text-[oklch(0.985_0_0)] hover:bg-[oklch(0.205_0_0)] dark:bg-[oklch(0.922_0_0)] dark:text-[oklch(0.145_0_0)] dark:hover:bg-[oklch(0.922_0_0)]"
                      : "bg-transparent text-[oklch(0.205_0_0)] hover:bg-transparent dark:text-[oklch(0.922_0_0)]"
                  )}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}`

  const monoUsage =
`import { PricingMonochrome } from "@/components/patterns/pricing"

export function Example() {
  return <PricingMonochrome tiers={tiers} />
}`

  const playfulCode =
`import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingPlayful({ label = "Pricing", tiers, className }: PricingVariantProps) {
  return (
    <section className={cn("py-12 md:py-16 bg-[oklch(0.985_0_0)] dark:bg-[oklch(0.205_0_0)]", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold tracking-[0.35em] text-center text-[oklch(0.577_0.245_27.325)] mb-10">
          {label.toUpperCase()}
        </p>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={cn(
                "relative flex flex-col rounded-3xl border-2 border-[oklch(0.828_0.189_84.429)] bg-[oklch(1_0_0)] p-6 shadow-[0_8px_0_0_oklch(0.769_0.188_70.08)] transition-transform hover:-translate-y-1 dark:bg-[oklch(0.205_0_0)]",
                i % 2 === 1 ? "rotate-1" : "-rotate-1"
              )}
            >
              {tier.popular && (
                <div className="absolute -right-3 -top-3 rotate-12 rounded-full border-2 border-[oklch(0.828_0.189_84.429)] bg-[oklch(0.769_0.188_70.08)] px-3 py-1 text-xs font-bold text-white shadow-sm">
                  POPULAR
                </div>
              )}
              
              <div className="mb-6 text-center">
                <h3 className="text-xl font-black text-[oklch(0.205_0_0)] dark:text-[oklch(0.985_0_0)]">{tier.name}</h3>
                <div className="mt-2 flex items-center justify-center gap-1">
                  <span className="text-4xl font-black text-[oklch(0.769_0.188_70.08)]">{tier.price}</span>
                  <span className="text-sm font-bold text-[oklch(0.556_0_0)]">/mo</span>
                </div>
                <p className="mt-2 text-sm font-medium text-[oklch(0.556_0_0)]">{tier.description}</p>
              </div>
              
              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-semibold text-[oklch(0.398_0_0)] dark:text-[oklch(0.8_0_0)]">
                    <div className="flex size-6 items-center justify-center rounded-full bg-[oklch(0.828_0.189_84.429_/_.2)] text-[oklch(0.769_0.188_70.08)]">
                      <Check className="size-3.5 stroke-[3px]" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full rounded-xl border-2 border-[oklch(0.828_0.189_84.429)] bg-[oklch(0.769_0.188_70.08)] font-black tracking-wide text-white shadow-[0_4px_0_0_oklch(0.6_0.188_70.08)] hover:translate-y-[2px] hover:shadow-[0_2px_0_0_oklch(0.6_0.188_70.08)] hover:bg-[oklch(0.769_0.188_70.08)]"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}`

  const playfulUsage =
`import { PricingPlayful } from "@/components/patterns/pricing"

export function Example() {
  return <PricingPlayful tiers={tiers} />
}`

  const glassCode =
`import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingGlass({ label = "Pricing", tiers, className }: PricingVariantProps) {
  return (
    <section className={cn("py-12 md:py-16 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-medium tracking-[0.3em] text-center text-slate-300 mb-8">
          {label.toUpperCase()}
        </p>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <Card
              key={i}
              className={cn(
                "flex flex-col border border-white/10 bg-white/5 text-slate-100 backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.6)]",
                tier.popular && "bg-white/10 border-white/20 shadow-[0_0_40px_rgba(56,189,248,0.1)]"
              )}
            >
              <CardHeader>
                <CardTitle className="text-xl font-medium tracking-wide text-white">{tier.name}</CardTitle>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-light tracking-tight text-white">{tier.price}</span>
                  <span className="text-sm text-slate-400">/mo</span>
                </div>
                <CardDescription className="text-slate-400">{tier.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <ul className="space-y-3 text-sm text-slate-300">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Check className="size-4 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={cn(
                    "w-full backdrop-blur-md",
                    tier.popular 
                      ? "bg-white/90 text-slate-900 hover:bg-white" 
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                  )}
                >
                  {tier.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}`

  const glassUsage =
`import { PricingGlass } from "@/components/patterns/pricing"

export function Example() {
  return <PricingGlass tiers={tiers} />
}`

  const scandiCode =
`import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingScandinavian({ label = "Pricing", tiers, className }: PricingVariantProps) {
  return (
    <section className={cn("py-12 md:py-16 bg-[oklch(0.985_0_0)]", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-medium tracking-[0.25em] text-center text-[oklch(0.398_0_0)] mb-8">
          {label.toUpperCase()}
        </p>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 rounded-2xl border border-[oklch(0.922_0_0)] bg-[oklch(1_0_0)] p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <h3 className="text-lg font-semibold text-[oklch(0.205_0_0)]">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-light text-[oklch(0.205_0_0)]">{tier.price}</span>
                  <span className="text-sm text-[oklch(0.556_0_0)]">/mo</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[oklch(0.398_0_0)]">
                  {tier.description}
                </p>
              </div>
              
              <ul className="flex-1 space-y-4 border-t border-[oklch(0.97_0_0)] pt-6 text-sm text-[oklch(0.398_0_0)]">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <Check className="size-4 text-[oklch(0.205_0_0)]" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                className={cn(
                  "w-full rounded-lg shadow-none",
                  tier.popular
                    ? "bg-[oklch(0.205_0_0)] text-[oklch(0.985_0_0)] hover:bg-[oklch(0.269_0_0)]"
                    : "bg-[oklch(0.97_0_0)] text-[oklch(0.205_0_0)] hover:bg-[oklch(0.922_0_0)]"
                )}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}`

  const scandiUsage =
`import { PricingScandinavian } from "@/components/patterns/pricing"

export function Example() {
  return <PricingScandinavian tiers={tiers} />
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
            <BreadcrumbLink to="/docs/templates/pricing">Templates</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Pricing</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="mt-2 text-3xl font-bold text-left">Pricing</h1>
      <p className="mt-2 text-muted-foreground text-left">Responsive pricing tables with multiple visual styles.</p>

      <Separator className="my-6" />

      <h2 className="text-xl font-semibold">Grid</h2>
      <p className="mt-1 text-muted-foreground">Standard responsive pricing grid using cards.</p>

      <div className="mt-4">
        <PreviewCodeTabs code={gridCode} usageCode={usageCode}>
          <PricingGrid tiers={sampleTiers} />
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Retro/Vintage</h2>
      <p className="mt-1 text-muted-foreground">Playful vintage styling with bold borders and warm colors.</p>

      <div className="mt-4">
        <PreviewCodeTabs code={retroCode} usageCode={retroUsage}>
          <PricingRetro tiers={sampleTiers} />
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Bold & Vibrant</h2>
      <p className="mt-1 text-muted-foreground">High-contrast gradients, bright accents, and confident typography.</p>
      <div className="mt-4">
        <PreviewCodeTabs code={boldCode} usageCode={boldUsage}>
          <PricingBold tiers={sampleTiers} />
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Monochrome</h2>
      <p className="mt-1 text-muted-foreground">Minimal black-and-white aesthetic with dashed borders.</p>
      <div className="mt-4">
        <PreviewCodeTabs code={monoCode} usageCode={monoUsage}>
          <PricingMonochrome tiers={sampleTiers} />
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Playful / Cartoon</h2>
      <p className="mt-1 text-muted-foreground">Rounded shapes, bold borders, and lively colors.</p>
      <div className="mt-4">
        <PreviewCodeTabs code={playfulCode} usageCode={playfulUsage}>
          <PricingPlayful tiers={sampleTiers} />
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Glassmorphism</h2>
      <p className="mt-1 text-muted-foreground">Blurred translucent cards over a dark gradient background.</p>
      <div className="mt-4">
        <PreviewCodeTabs code={glassCode} usageCode={glassUsage}>
          <PricingGlass tiers={sampleTiers} />
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Scandinavian</h2>
      <p className="mt-1 text-muted-foreground">Airy, neutral tones with minimal borders and lots of white space.</p>
      <div className="mt-4">
        <PreviewCodeTabs code={scandiCode} usageCode={scandiUsage}>
          <PricingScandinavian tiers={sampleTiers} />
        </PreviewCodeTabs>
      </div>
    </div>
  )
}

export default PricingDoc
