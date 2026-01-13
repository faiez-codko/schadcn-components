import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sparkles, ShieldCheck, Zap } from "lucide-react"
import { motion } from "framer-motion"

type Action = { label: string; to?: string; onClick?: () => void; variant?: "default" | "outline" | "secondary" | "ghost" | "link" }
type HeroProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  actions?: Action[]
  className?: string
}

function Actions({ actions }: { actions?: Action[] }) {
  if (!actions?.length) return null
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
      {actions.map((a, i) =>
        a.to ? (
          <Button key={i} asChild variant={a.variant ?? (i === 0 ? "default" : "outline")}>
            <a href={a.to}>{a.label}</a>
          </Button>
        ) : (
          <Button key={i} variant={a.variant ?? (i === 0 ? "default" : "outline")} onClick={a.onClick}>
            {a.label}
          </Button>
        )
      )}
    </div>
  )
}

export function HeroBackgroundAnimated({
  eyebrow,
  title,
  subtitle,
  actions,
  className,
  backgroundUrl,
  overlay = true,
}: HeroProps & { backgroundUrl?: string; overlay?: boolean }) {
  return (
    <section className={cn("min-h-[60vh] relative grid place-items-center overflow-hidden", className)}>
      {backgroundUrl && (
        <motion.div
          aria-hidden
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${backgroundUrl})` }}
          initial={{ scale: 1.05, opacity: 0.7 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      )}
      {overlay && <div aria-hidden className="absolute inset-0 bg-black/40" />}
      <div className="relative mx-auto max-w-4xl px-4 md:px-6 text-center">
        {eyebrow && (
          <motion.div
            className="text-primary font-medium"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="mt-3 text-white/80 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Actions actions={actions} />
        </motion.div>
      </div>
    </section>
  )
}

export function HeroCentered({ eyebrow, title, subtitle, actions, className }: HeroProps) {
  return (
    <section className={cn("min-h-[60vh] grid place-items-center text-center", className)}>
      <div className="mx-auto max-w-3xl">
        {eyebrow && <div className="text-primary font-medium">{eyebrow}</div>}
        <h1 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-3 text-muted-foreground text-lg">{subtitle}</p>}
        <div className="flex justify-center">
          <Actions actions={actions} />
        </div>
      </div>
    </section>
  )
}

export function HeroSplit({
  eyebrow,
  title,
  subtitle,
  actions,
  className,
  image,
}: HeroProps & { image?: React.ReactNode }) {
  return (
    <section className={cn("min-h-[60vh] grid items-center", className)}>
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:px-6 md:grid-cols-2">
        <div className="order-2 md:order-1">
          {eyebrow && <div className="text-primary font-medium">{eyebrow}</div>}
          <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
          {subtitle && <p className="mt-3 text-muted-foreground text-lg">{subtitle}</p>}
          <Actions actions={actions} />
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-video rounded-xl border bg-muted" />
          {image}
        </div>
      </div>
    </section>
  )
}

export function HeroGradient({ eyebrow, title, subtitle, actions, className }: HeroProps) {
  return (
    <section className={cn("min-h-[60vh] grid place-items-center", className)}>
      <div className="relative mx-auto max-w-4xl px-4 md:px-6 py-16 overflow-hidden rounded-2xl border">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-transparent to-emerald-500/10" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(transparent_1px,rgba(0,0,0,0)_1px)] [background-size:16px_16px]" />
        <div className="text-center">
          {eyebrow && <div className="text-primary font-medium">{eyebrow}</div>}
          <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
          {subtitle && <p className="mt-3 text-muted-foreground text-lg">{subtitle}</p>}
          <div className="flex justify-center">
            <Actions actions={actions} />
          </div>
        </div>
      </div>
    </section>
  )
}

export function HeroWithFeatures({
  eyebrow,
  title,
  subtitle,
  actions,
  className,
  features,
}: HeroProps & { features?: { icon?: React.ReactNode; label: string; desc?: string }[] }) {
  return (
    <section className={cn("min-h-[60vh] grid place-items-center", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center">
          {eyebrow && <div className="text-primary font-medium">{eyebrow}</div>}
          <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
          {subtitle && <p className="mt-3 text-muted-foreground text-lg">{subtitle}</p>}
          <div className="flex justify-center">
            <Actions actions={actions} />
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {(features ?? [
            { icon: <Sparkles className="size-4" />, label: "Beautiful", desc: "Modern, elegant design" },
            { icon: <ShieldCheck className="size-4" />, label: "Accessible", desc: "Built with best practices" },
            { icon: <Zap className="size-4" />, label: "Fast", desc: "Optimized for performance" },
          ]).map((f, i) => (
            <div key={i} className="rounded-xl border p-6">
              <div className="flex items-center gap-2 font-medium">
                {f.icon}
                <span>{f.label}</span>
              </div>
              {f.desc && <p className="mt-2 text-muted-foreground">{f.desc}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HeroAnimated({ eyebrow, title, subtitle, actions, className }: HeroProps) {
  return (
    <section className={cn("min-h-[60vh] grid place-items-center relative overflow-hidden", className)}>
      <motion.div
        aria-hidden
        className="absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />
      <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
        {eyebrow && (
          <motion.div
            className="text-primary font-medium"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="mt-3 text-muted-foreground text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          className="mt-6 flex justify-center"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Actions actions={actions} />
        </motion.div>
      </div>
    </section>
  )
}
