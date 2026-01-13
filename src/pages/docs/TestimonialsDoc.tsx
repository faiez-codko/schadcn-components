import { Separator } from '@/components/ui/separator'
import { PreviewCodeTabs } from '@/components/ui/preview-code-tabs'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from '@/components/ui/breadcrumb'
import {
  TestimonialsGrid,
  TestimonialsMarquee,
  TestimonialsRetro,
  TestimonialsBold,
  TestimonialsMonochrome,
  TestimonialsPlayful,
  TestimonialsGlass,
  TestimonialsScandinavian,
} from '@/components/patterns/testimonials'

function TestimonialsDoc() {
  const gridCode =
`import * as React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export type Testimonial = {
  quote: string
  highlight?: string
  name: string
  role?: string
  avatarSrc?: string
  avatarAlt?: string
  rating?: number
}

export type TestimonialsProps = {
  label?: string
  items: Testimonial[]
  className?: string
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-3 fill-current" />
      ))}
    </div>
  )
}

export function TestimonialsGrid({ label = "Testimonials", items, className }: TestimonialsProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-medium tracking-[0.25em] text-muted-foreground text-center">
          {label.toUpperCase()}
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const highlight = item.highlight && item.quote.includes(item.highlight)
            const parts = highlight ? item.quote.split(item.highlight) : [item.quote]
            return (
              <Card
                key={index}
                className={cn(
                  "border-muted/70 bg-background/60 backdrop-blur-sm transition-transform transition-shadow hover:-translate-y-1 hover:shadow-md",
                  index >= 3 && "hidden lg:flex"
                )}
              >
                <CardContent className="pt-0">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {highlight ? (
                      <>
                        {parts[0]}
                        <span className="bg-primary/10 px-0.5 font-medium text-foreground underline decoration-primary/60 underline-offset-4">
                          {item.highlight}
                        </span>
                        {parts[1]}
                      </>
                    ) : (
                      item.quote
                    )}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between gap-4 pt-0">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-9">
                      {item.avatarSrc ? (
                        <AvatarImage src={item.avatarSrc} alt={item.avatarAlt ?? item.name} />
                      ) : (
                        <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
                      )}
                    </Avatar>
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium leading-none">{item.name}</div>
                      {item.role && (
                        <div className="text-xs text-muted-foreground leading-none">{item.role}</div>
                      )}
                    </div>
                  </div>
                  {item.rating && item.rating > 0 && <Stars count={item.rating} />}
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}`

  const usageCode =
`import { TestimonialsGrid } from "@/components/patterns/testimonials"

export function Example() {
  return (
    <TestimonialsGrid
      items={[
        {
          quote:
            "The AI-driven analytics from #QuantumInsights have revolutionized our product development cycle. Insights are now more accurate and faster than ever.",
          highlight: "more accurate and faster than ever",
          name: "Alex Rivera",
          role: "CTO at InnovateTech",
          rating: 5,
        },
        {
          quote:
            "Implementing #AIStream's customer prediction model improved our targeting strategy. Seeing a 50% increase in conversion rates!",
          highlight: "50% increase in conversion rates",
          name: "Samantha Lee",
          role: "Marketing Director at NextGen Solutions",
          rating: 5,
        },
        {
          quote:
            "#VoiceGen's AI-driven voice synthesis made global product localization a breeze. Localization is now seamless and efficient.",
          highlight: "Localization is now seamless and efficient",
          name: "Emily Chen",
          role: "Product Manager at Digital Wave",
          rating: 5,
        },
      ]}
    />
  )
}`

  const marqueeCode =
`import * as React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export type Testimonial = {
  quote: string
  highlight?: string
  name: string
  role?: string
  avatarSrc?: string
  avatarAlt?: string
  rating?: number
}

export type TestimonialsMarqueeProps = {
  label?: string
  items: Testimonial[]
  className?: string
  speed?: number
  pauseOnHover?: boolean
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-3 fill-current" />
      ))}
    </div>
  )
}

export function TestimonialsMarquee({
  label = "Testimonials",
  items,
  className,
  speed = 40,
  pauseOnHover = true,
}: TestimonialsMarqueeProps) {
  const row = React.useMemo(() => {
    const list = items.length < 6 ? [...items, ...items] : items
    return [...list, ...list]
  }, [items])

  const animationStyle: React.CSSProperties = {
    animationDuration: \`\${Math.max(20, 200 - speed)}s\`,
  }

  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-medium tracking-[0.25em] text-muted-foreground text-center">
          {label.toUpperCase()}
        </p>
      </div>
      <div
        className={cn(
          "group/marquee mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        )}
      >
        <div
          className={cn(
            "flex w-max min-w-full gap-4",
            "animate-[marquee_linear_infinite] motion-reduce:animate-none",
            pauseOnHover && "group-hover/marquee:[animation-play-state:paused]"
          )}
          style={animationStyle}
        >
          {row.map((item, idx) => {
            const key = \`\${item.name}-\${idx}\`
            const highlight = item.highlight && item.quote.includes(item.highlight)
            const parts = highlight ? item.quote.split(item.highlight) : [item.quote]
            return (
              <Card key={key} className="border-muted/70 bg-background/60 backdrop-blur-sm w-[280px] sm:w-[320px] shrink-0">
                <CardContent className="pt-0">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {highlight ? (
                      <>
                        {parts[0]}
                        <span className="bg-primary/10 px-0.5 font-medium text-foreground underline decoration-primary/60 underline-offset-4">
                          {item.highlight}
                        </span>
                        {parts[1]}
                      </>
                    ) : (
                      item.quote
                    )}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between gap-4 pt-0">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-9">
                      {item.avatarSrc ? (
                        <AvatarImage src={item.avatarSrc} alt={item.avatarAlt ?? item.name} />
                      ) : (
                        <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
                      )}
                    </Avatar>
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium leading-none">{item.name}</div>
                      {item.role && (
                        <div className="text-xs text-muted-foreground leading-none">{item.role}</div>
                      )}
                    </div>
                  </div>
                  {item.rating && item.rating > 0 && <Stars count={item.rating} />}
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}`

  const marqueeUsageCode =
`import { TestimonialsMarquee } from "@/components/patterns/testimonials"

export function Example() {
  return <TestimonialsMarquee items={/* same items as grid */} />
}`

  const retroCode =
`import * as React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export type Testimonial = {
  quote: string
  highlight?: string
  name: string
  role?: string
  avatarSrc?: string
  avatarAlt?: string
  rating?: number
}

export type TestimonialsRetroProps = {
  label?: string
  items: Testimonial[]
  className?: string
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-3 fill-current" />
      ))}
    </div>
  )
}

export function TestimonialsRetro({ label = "Testimonials", items, className }: TestimonialsRetroProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold tracking-[0.3em] text-center text-[color:oklch(0.556_0_0)]">
          {label.toUpperCase()}
        </p>

        <div className="relative mt-8 rounded-2xl border bg-[oklch(0.985_0_0)] p-6 shadow-[0_0_0_1px_oklch(0.922_0_0)_inset,0_12px_0_0_oklch(0.97_0_0),0_12px_0_1px_oklch(0.922_0_0)] dark:bg-[oklch(0.205_0_0)] dark:shadow-[0_0_0_1px_oklch(1_0_0_/_.15)_inset,0_12px_0_0_oklch(0.269_0_0),0_12px_0_1px_oklch(1_0_0_/_.1)]">
          <div className="pointer-events-none absolute inset-x-10 -top-3 h-6 rounded-[50%] bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,oklch(0.922_0_0)_8px,oklch(0.922_0_0)_12px)] opacity-70 blur-[0.4px] dark:bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,oklch(1_0_0_/_.12)_8px,oklch(1_0_0_/_.12)_12px)]" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => {
              const highlight = item.highlight && item.quote.includes(item.highlight)
              const parts = highlight ? item.quote.split(item.highlight) : [item.quote]
              return (
                <div
                  key={i}
                  className="rounded-xl border bg-[oklch(1_0_0)] p-5 shadow-[0_3px_0_0_oklch(0.922_0_0)] dark:bg-[oklch(0.205_0_0)] dark:shadow-[0_3px_0_0_oklch(1_0_0_/_.12)]"
                >
                  <div className="mb-3 text-[13px] leading-relaxed text-[color:oklch(0.398_0_0)] dark:text-[oklch(0.708_0_0)]">
                    <span className="mr-2 text-[oklch(0.577_0.245_27.325)]">“</span>
                    {highlight ? (
                      <>
                        {parts[0]}
                        <span className="bg-[oklch(0.828_0.189_84.429_/_.25)] px-0.5 font-semibold text-[oklch(0.205_0_0)] underline decoration-[oklch(0.828_0.189_84.429_/_.6)] underline-offset-4 dark:text-[oklch(0.985_0_0)]">
                          {item.highlight}
                        </span>
                        {parts[1]}
                      </>
                    ) : (
                      item.quote
                    )}
                    <span className="ml-1 text-[oklch(0.577_0.245_27.325)]">”</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-9 ring-2 ring-[oklch(0.922_0_0)] dark:ring-[oklch(1_0_0_/_.1)]">
                        {item.avatarSrc ? (
                          <AvatarImage src={item.avatarSrc} alt={item.avatarAlt ?? item.name} />
                        ) : (
                          <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
                        )}
                      </Avatar>
                      <div className="space-y-0.5">
                        <div className="text-sm font-semibold tracking-tight">{item.name}</div>
                        {item.role && (
                          <div className="text-xs text-[oklch(0.556_0_0)]">{item.role}</div>
                        )}
                      </div>
                    </div>
                    {item.rating && item.rating > 0 && (
                      <div className="text-[oklch(0.704_0.191_22.216)]">
                        <Stars count={item.rating} />
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}`

  const retroUsageCode =
`import { TestimonialsRetro } from "@/components/patterns/testimonials"

export function Example() {
  return <TestimonialsRetro items={/* same items as grid */} />
}`

  const vibrantCode =
`import * as React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export type Testimonial = {
  quote: string
  highlight?: string
  name: string
  role?: string
  avatarSrc?: string
  avatarAlt?: string
  rating?: number
}

export type TestimonialsBoldProps = {
  label?: string
  items: Testimonial[]
  className?: string
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-3 fill-current" />
      ))}
    </div>
  )
}

export function TestimonialsBold({ label = "Testimonials", items, className }: TestimonialsBoldProps) {
  return (
    <section className={cn("py-12 md:py-16 bg-gradient-to-br from-fuchsia-500/10 via-primary/5 to-amber-400/10", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold tracking-[0.35em] text-center text-primary">
          {label.toUpperCase()}
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const highlight = item.highlight && item.quote.includes(item.highlight)
            const parts = highlight ? item.quote.split(item.highlight) : [item.quote]
            return (
              <Card
                key={i}
                className="relative overflow-hidden border-none bg-gradient-to-br from-primary to-fuchsia-600 text-primary-foreground shadow-xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_55%)]" />
                <CardContent className="relative pt-4">
                  <p className="text-sm leading-relaxed">
                    {highlight ? (
                      <>
                        {parts[0]}
                        <span className="px-0.5 font-semibold text-amber-200 underline decoration-amber-200/80 underline-offset-4">
                          {item.highlight}
                        </span>
                        {parts[1]}
                      </>
                    ) : (
                      item.quote
                    )}
                  </p>
                </CardContent>
                <CardFooter className="relative flex items-center justify-between gap-4 border-t border-white/15 pt-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-9 border border-white/40 bg-background/40">
                      {item.avatarSrc ? (
                        <AvatarImage src={item.avatarSrc} alt={item.avatarAlt ?? item.name} />
                      ) : (
                        <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
                      )}
                    </Avatar>
                    <div className="space-y-0.5">
                      <div className="text-sm font-semibold tracking-tight">{item.name}</div>
                      {item.role && <div className="text-xs text-primary-foreground/80">{item.role}</div>}
                    </div>
                  </div>
                  {item.rating && item.rating > 0 && <Stars count={item.rating} />}
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}`

  const vibrantUsage =
`import { TestimonialsBold } from "@/components/patterns/testimonials"

export function Example() {
  return <TestimonialsBold items={/* same items as grid */} />
}`

  const monoCode =
`import * as React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export type Testimonial = {
  quote: string
  highlight?: string
  name: string
  role?: string
  avatarSrc?: string
  avatarAlt?: string
  rating?: number
}

export type TestimonialsMonochromeProps = {
  label?: string
  items: Testimonial[]
  className?: string
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-3 fill-current" />
      ))}
    </div>
  )
}

export function TestimonialsMonochrome({ label = "Testimonials", items, className }: TestimonialsMonochromeProps) {
  return (
    <section className={cn("py-12 md:py-16 bg-[oklch(0.97_0_0)] dark:bg-[oklch(0.145_0_0)]", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-medium tracking-[0.3em] text-center text-[oklch(0.398_0_0)] dark:text-[oklch(0.708_0_0)]">
          {label.toUpperCase()}
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const highlight = item.highlight && item.quote.includes(item.highlight)
            const parts = highlight ? item.quote.split(item.highlight) : [item.quote]
            return (
              <Card
                key={i}
                className="border-dashed border-[oklch(0.556_0_0_/_.4)] bg-[oklch(1_0_0)] shadow-none dark:bg-[oklch(0.205_0_0)]"
              >
                <CardContent className="pt-0">
                  <p className="text-sm leading-relaxed text-[oklch(0.205_0_0)] dark:text-[oklch(0.922_0_0)]">
                    {highlight ? (
                      <>
                        {parts[0]}
                        <span className="font-semibold uppercase tracking-wide">
                          {item.highlight}
                        </span>
                        {parts[1]}
                      </>
                    ) : (
                      item.quote
                    )}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between gap-4 pt-1">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-8 bg-[oklch(0.269_0_0)] text-[oklch(0.985_0_0)]">
                      <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-0.5">
                      <div className="text-xs font-semibold tracking-wide">{item.name}</div>
                      {item.role && (
                        <div className="text-[11px] uppercase text-[oklch(0.556_0_0)] dark:text-[oklch(0.708_0_0)]">
                          {item.role}
                        </div>
                      )}
                    </div>
                  </div>
                  {item.rating && item.rating > 0 && (
                    <div className="text-[oklch(0.205_0_0)] dark:text-[oklch(0.922_0_0)]">
                      <Stars count={item.rating} />
                    </div>
                  )}
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}`

  const monoUsage =
`import { TestimonialsMonochrome } from "@/components/patterns/testimonials"

export function Example() {
  return <TestimonialsMonochrome items={/* same items as grid */} />
}`

  const playfulCode =
`import * as React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export type Testimonial = {
  quote: string
  highlight?: string
  name: string
  role?: string
  avatarSrc?: string
  avatarAlt?: string
  rating?: number
}

export type TestimonialsPlayfulProps = {
  label?: string
  items: Testimonial[]
  className?: string
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-3 fill-current" />
      ))}
    </div>
  )
}

export function TestimonialsPlayful({ label = "Testimonials", items, className }: TestimonialsPlayfulProps) {
  return (
    <section className={cn("py-12 md:py-16 bg-[oklch(0.985_0_0)] dark:bg-[oklch(0.205_0_0)]", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold tracking-[0.35em] text-center text-[oklch(0.577_0.245_27.325)]">
          {label.toUpperCase()}
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const highlight = item.highlight && item.quote.includes(item.highlight)
            const parts = highlight ? item.quote.split(item.highlight) : [item.quote]
            return (
              <Card
                key={i}
                className="relative rotate-[-1deg] border-2 border-[oklch(0.828_0.189_84.429)] bg-[oklch(1_0_0)] px-5 pb-4 pt-6 shadow-[0_6px_0_0_oklch(0.769_0.188_70.08)] transition-transform hover:-translate-y-1 hover:rotate-0 dark:bg-[oklch(0.205_0_0)]"
              >
                <div className="pointer-events-none absolute -left-6 -top-4 size-6 rounded-full bg-[oklch(0.769_0.188_70.08)]" />
                <CardContent className="pt-0">
                  <p className="text-sm leading-relaxed text-[oklch(0.205_0_0)] dark:text-[oklch(0.985_0_0)]">
                    {highlight ? (
                      <>
                        {parts[0]}
                        <span className="rounded-full bg-[oklch(0.828_0.189_84.429_/_.2)] px-2 py-0.5 font-semibold text-[oklch(0.205_0_0)]">
                          {item.highlight}
                        </span>
                        {parts[1]}
                      </>
                    ) : (
                      item.quote
                    )}
                  </p>
                </CardContent>
                <CardFooter className="mt-3 flex items-center justify-between gap-4 pt-0">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-9 border-2 border-[oklch(0.828_0.189_84.429)] bg-[oklch(0.769_0.188_70.08)] text-[oklch(0.205_0_0)]">
                      <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-0.5">
                      <div className="text-sm font-semibold">{item.name}</div>
                      {item.role && (
                        <div className="text-xs text-[oklch(0.556_0_0)] dark:text-[oklch(0.708_0_0)]">
                          {item.role}
                        </div>
                      )}
                    </div>
                  </div>
                  {item.rating && item.rating > 0 && (
                    <div className="text-[oklch(0.769_0.188_70.08)]">
                      <Stars count={item.rating} />
                    </div>
                  )}
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}`

  const playfulUsage =
`import { TestimonialsPlayful } from "@/components/patterns/testimonials"

export function Example() {
  return <TestimonialsPlayful items={/* same items as grid */} />
}`

  const glassCode =
`import * as React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export type Testimonial = {
  quote: string
  highlight?: string
  name: string
  role?: string
  avatarSrc?: string
  avatarAlt?: string
  rating?: number
}

export type TestimonialsGlassProps = {
  label?: string
  items: Testimonial[]
  className?: string
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-3 fill-current" />
      ))}
    </div>
  )
}

export function TestimonialsGlass({ label = "Testimonials", items, className }: TestimonialsGlassProps) {
  return (
    <section className={cn("py-12 md:py-16 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-medium tracking-[0.3em] text-center text-slate-300">
          {label.toUpperCase()}
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const highlight = item.highlight && item.quote.includes(item.highlight)
            const parts = highlight ? item.quote.split(item.highlight) : [item.quote]
            return (
              <Card
                key={i}
                className="border border-white/10 bg-white/5 text-slate-100 backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.6)]"
              >
                <CardContent className="pt-0">
                  <p className="text-sm leading-relaxed text-slate-100/90">
                    {highlight ? (
                      <>
                        {parts[0]}
                        <span className="bg-white/10 px-1 font-medium text-white">
                          {item.highlight}
                        </span>
                        {parts[1]}
                      </>
                    ) : (
                      item.quote
                    )}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between gap-4 pt-0">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-9 border border-white/30 bg-white/10">
                      {item.avatarSrc ? (
                        <AvatarImage src={item.avatarSrc} alt={item.avatarAlt ?? item.name} />
                      ) : (
                        <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
                      )}
                    </Avatar>
                    <div className="space-y-0.5">
                      <div className="text-sm font-semibold">{item.name}</div>
                      {item.role && <div className="text-xs text-slate-300/80">{item.role}</div>}
                    </div>
                  </div>
                  {item.rating && item.rating > 0 && (
                    <div className="text-amber-300">
                      <Stars count={item.rating} />
                    </div>
                  )}
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}`

  const glassUsage =
`import { TestimonialsGlass } from "@/components/patterns/testimonials"

export function Example() {
  return <TestimonialsGlass items={/* same items as grid */} />
}`

  const scandiCode =
`import * as React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export type Testimonial = {
  quote: string
  highlight?: string
  name: string
  role?: string
  avatarSrc?: string
  avatarAlt?: string
  rating?: number
}

export type TestimonialsScandinavianProps = {
  label?: string
  items: Testimonial[]
  className?: string
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-500">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-3 fill-current" />
      ))}
    </div>
  )
}

export function TestimonialsScandinavian({
  label = "Testimonials",
  items,
  className,
}: TestimonialsScandinavianProps) {
  return (
    <section className={cn("py-12 md:py-16 bg-[oklch(0.985_0_0)]", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-medium tracking-[0.25em] text-center text-[oklch(0.398_0_0)]">
          {label.toUpperCase()}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {items.map((item, i) => {
            const highlight = item.highlight && item.quote.includes(item.highlight)
            const parts = highlight ? item.quote.split(item.highlight) : [item.quote]
            return (
              <div
                key={i}
                className="flex flex-col gap-4 rounded-2xl border border-[oklch(0.922_0_0)] bg-[oklch(1_0_0)] p-6 shadow-sm"
              >
                <p className="text-[15px] leading-relaxed text-[oklch(0.269_0_0)]">
                  {highlight ? (
                    <>
                      {parts[0]}
                      <span className="font-semibold text-[oklch(0.205_0_0)]">
                        {item.highlight}
                      </span>
                      {parts[1]}
                    </>
                  ) : (
                    item.quote
                  )}
                </p>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-9 bg-[oklch(0.97_0_0)]">
                      {item.avatarSrc ? (
                        <AvatarImage src={item.avatarSrc} alt={item.avatarAlt ?? item.name} />
                      ) : (
                        <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
                      )}
                    </Avatar>
                    <div className="space-y-0.5">
                      <div className="text-sm font-semibold text-[oklch(0.205_0_0)]">
                        {item.name}
                      </div>
                      {item.role && (
                        <div className="text-xs text-[oklch(0.556_0_0)]">{item.role}</div>
                      )}
                    </div>
                  </div>
                  {item.rating && item.rating > 0 && (
                    <div className="text-[oklch(0.704_0.191_22.216)]">
                      <Stars count={item.rating} />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}`

  const scandiUsage =
`import { TestimonialsScandinavian } from "@/components/patterns/testimonials"

export function Example() {
  return <TestimonialsScandinavian items={/* same items as grid */} />
}`

  const sampleItems = [
    {
      quote:
        "The AI-driven analytics from #QuantumInsights have revolutionized our product development cycle. Insights are now more accurate and faster than ever.",
      highlight: "more accurate and faster than ever",
      name: "Alex Rivera",
      role: "CTO at InnovateTech",
      rating: 5,
    },
    {
      quote:
        "Implementing #AIStream's customer prediction model improved our targeting strategy. Seeing a 50% increase in conversion rates!",
      highlight: "50% increase in conversion rates",
      name: "Samantha Lee",
      role: "Marketing Director at NextGen Solutions",
      rating: 5,
    },
    {
      quote:
        "#VoiceGen's AI-driven voice synthesis made global product localization a breeze. Localization is now seamless and efficient.",
      highlight: "Localization is now seamless and efficient",
      name: "Emily Chen",
      role: "Product Manager at Digital Wave",
      rating: 5,
    },
    {
      quote:
        "By integrating #GreenTech's sustainable energy solutions, we've seen a significant reduction in carbon footprint. Leading the way in eco-friendly business practices.",
      highlight: "eco-friendly business practices",
      name: "Carlos Gomez",
      role: "Head of R&D at Ecolinnovate",
      rating: 5,
    },
    {
      quote:
        "Leveraging #DataCrunch's AI for our financial models improved predictive accuracy. Our investment strategies are now powered by real-time data analytics.",
      highlight: "powered by real-time data analytics",
      name: "Michael Brown",
      role: "Data Scientist at FinTech Innovations",
      rating: 5,
    },
    {
      quote:
        "Implementing #MediCareAI in patient care systems improved outcomes significantly. Technology and healthcare working hand in hand for better health.",
      highlight: "working hand in hand for better health",
      name: "Tom Chen",
      role: "Director of IT at HealthTech Solutions",
      rating: 5,
    },
  ]

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-8">
      <Breadcrumb className="text-left">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink to="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink to="/docs/templates/testimonials">Templates</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Testimonials</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="mt-2 text-3xl font-bold text-left">Testimonials</h1>
      <p className="mt-2 text-muted-foreground text-left">Modern testimonials layouts with grid and auto-scrolling variants.</p>

      <Separator className="my-6" />

      <h2 className="text-xl font-semibold">Grid</h2>
      <p className="mt-1 text-muted-foreground">Responsive card grid with subtle highlight and rating stars.</p>

      <div className="mt-4">
        <PreviewCodeTabs code={gridCode} usageCode={usageCode}>
          <TestimonialsGrid items={sampleItems} />
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Auto-scrolling</h2>
      <p className="mt-1 text-muted-foreground">Horizontal marquee that continuously scrolls testimonials.</p>

      <div className="mt-4">
        <PreviewCodeTabs code={marqueeCode} usageCode={marqueeUsageCode}>
          <TestimonialsMarquee items={sampleItems} />
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Retro/Vintage</h2>
      <p className="mt-1 text-muted-foreground">Playful vintage card styling with bold borders and quote marks.</p>

      <div className="mt-4">
        <PreviewCodeTabs code={retroCode} usageCode={retroUsageCode}>
          <TestimonialsRetro items={sampleItems} />
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Bold & Vibrant</h2>
      <p className="mt-1 text-muted-foreground">High-contrast gradients, bright accents, and confident typography.</p>
      <div className="mt-4">
        <PreviewCodeTabs code={vibrantCode} usageCode={vibrantUsage}>
          <TestimonialsBold items={sampleItems} />
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Monochrome</h2>
      <p className="mt-1 text-muted-foreground">Minimal black-and-white aesthetic with dashed borders.</p>
      <div className="mt-4">
        <PreviewCodeTabs code={monoCode} usageCode={monoUsage}>
          <TestimonialsMonochrome items={sampleItems} />
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Playful / Cartoon</h2>
      <p className="mt-1 text-muted-foreground">Rounded shapes, dashed borders, and lively color pops.</p>
      <div className="mt-4">
        <PreviewCodeTabs code={playfulCode} usageCode={playfulUsage}>
          <TestimonialsPlayful items={sampleItems} />
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Glassmorphism</h2>
      <p className="mt-1 text-muted-foreground">Blurred translucent cards over a dark gradient background.</p>
      <div className="mt-4">
        <PreviewCodeTabs code={glassCode} usageCode={glassUsage}>
          <TestimonialsGlass items={sampleItems} />
        </PreviewCodeTabs>
      </div>

      <Separator className="my-8" />

      <h2 className="text-xl font-semibold">Scandinavian</h2>
      <p className="mt-1 text-muted-foreground">Airy, neutral tones with minimal borders and lots of white space.</p>
      <div className="mt-4">
        <PreviewCodeTabs code={scandiCode} usageCode={scandiUsage}>
          <TestimonialsScandinavian items={sampleItems} />
        </PreviewCodeTabs>
      </div>
    </div>
  )
}

export default TestimonialsDoc
