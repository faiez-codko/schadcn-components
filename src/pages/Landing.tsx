import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Sparkles, LayoutGrid, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

function Landing() {
  return (
    <>
      <motion.section
        className="mx-auto max-w-5xl px-6 min-h-screen flex flex-col items-center justify-center relative"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.div
          className="absolute -z-10 top-[-10%] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 blur-3xl"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
        />
        <div className="text-center">
          <motion.div
            className="mx-auto inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          >
            <span className="text-muted-foreground">Introducing</span>
            <span className="font-medium">Component Gallery</span>
          </motion.div>
          <motion.h1
            className="mt-6 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            UI library for builders
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            150+ composable, accessible, and themeable components with Tailwind CSS and Radix—perfect companions for shadcn-style apps.
          </motion.p>
          <div className="mt-7 flex items-center justify-center gap-3">
            <Link to="/components">
              <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-md">
                <motion.span
                  className="inline-flex items-center gap-2"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Sparkles className="size-4" />
                  Browse Components
                </motion.span>
              </Button>
            </Link>
            <Link to="/docs">
              <Button variant="outline">
                <motion.span
                  className="inline-flex items-center gap-2"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <LayoutGrid className="size-4" />
                  Browse Templates
                </motion.span>
              </Button>
            </Link>
          </div>
          <motion.div
            className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
          >
            <motion.span className="rounded-full border px-2 py-1" variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>React</motion.span>
            <motion.span className="rounded-full border px-2 py-1" variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>TypeScript</motion.span>
            <motion.span className="rounded-full border px-2 py-1" variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>Tailwind</motion.span>
            <motion.span className="rounded-full border px-2 py-1" variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>Radix</motion.span>
          </motion.div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-5xl px-6">
        <Separator className="my-10" />

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="relative overflow-hidden border transition hover:border-primary/40 hover:shadow-md before:absolute before:inset-x-0 before:-top-12 before:h-24 before:bg-gradient-to-b before:from-primary/15 before:to-transparent before:opacity-0 before:transition before:duration-500 group-hover:before:opacity-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LayoutGrid className="size-4 text-primary" />
                Composable
              </CardTitle>
              <CardDescription>Built on Radix primitives</CardDescription>
            </CardHeader>
            <CardContent>Flexible building blocks for accessible UI.</CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="relative overflow-hidden border transition hover:border-primary/40 hover:shadow-md before:absolute before:inset-x-0 before:-top-12 before:h-24 before:bg-gradient-to-b before:from-fuchsia-500/15 before:to-transparent before:opacity-0 before:transition before:duration-500 group-hover:before:opacity-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="size-4 text-fuchsia-500" />
                Themed
              </CardTitle>
              <CardDescription>Tailwind utilities</CardDescription>
            </CardHeader>
            <CardContent>Use utility classes and tokens to style quickly.</CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="relative overflow-hidden border transition hover:border-primary/40 hover:shadow-md before:absolute before:inset-x-0 before:-top-12 before:h-24 before:bg-gradient-to-b before:from-emerald-500/15 before:to-transparent before:opacity-0 before:transition before:duration-500 group-hover:before:opacity-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="size-4 text-emerald-500" />
                Practical
              </CardTitle>
              <CardDescription>Real-world examples</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-2">
              <Rocket className="size-4" />
              <span>Grab and use patterns for forms, overlays, more.</span>
            </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <Separator className="my-12" />

        <section>
          <h2 className="text-2xl font-semibold">Showcase</h2>
          <p className="mt-2 text-muted-foreground">
            Companies choose this library to build beautiful landing pages.
          </p>
          <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
            <motion.div className="min-w-[280px] rounded-xl border bg-gradient-to-br from-black/5 to-transparent p-4" whileHover={{ scale: 1.03, y: -4 }}>
              <div className="h-40 rounded-lg bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30" />
              <p className="mt-3 text-sm">shawn</p>
            </motion.div>
            <motion.div className="min-w-[280px] rounded-xl border bg-gradient-to-br from-black/5 to-transparent p-4" whileHover={{ scale: 1.03, y: -4 }}>
              <div className="h-40 rounded-lg bg-gradient-to-r from-emerald-500/30 to-teal-500/30" />
              <p className="mt-3 text-sm">anara.com</p>
            </motion.div>
            <motion.div className="min-w-[280px] rounded-xl border bg-gradient-to-br from-black/5 to-transparent p-4" whileHover={{ scale: 1.03, y: -4 }}>
              <div className="h-40 rounded-lg bg-gradient-to-r from-indigo-500/30 to-cyan-500/30" />
              <p className="mt-3 text-sm">aomni.com</p>
            </motion.div>
            <motion.div className="min-w-[280px] rounded-xl border bg-gradient-to-br from-black/5 to-transparent p-4" whileHover={{ scale: 1.03, y: -4 }}>
              <div className="h-40 rounded-lg bg-gradient-to-r from-orange-500/30 to-yellow-500/30" />
              <p className="mt-3 text-sm">more…</p>
            </motion.div>
          </div>
        </section>

        <Separator className="my-12" />

        <section>
          <h2 className="text-2xl font-semibold">What People Are Saying</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6 text-sm">
                “Beautiful. Well done.”
                <div className="mt-2 text-muted-foreground">@rauchg</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-sm">
                “This is amazing. Just bought one!”
                <div className="mt-2 text-muted-foreground">@chronark</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-sm">
                “It’s like shadcn supercharged.”
                <div className="mt-2 text-muted-foreground">@mckaywrigley</div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}

export default Landing
