import * as React from "react"
import { Separator } from "@/components/ui/separator"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { 
  FooterGrid, 
  FooterRetro, 
  FooterBold, 
  FooterMonochrome, 
  FooterPlayful, 
  FooterGlass, 
  FooterScandinavian 
} from "@/components/patterns/footer"
import { Twitter, Instagram, Linkedin, Github } from "lucide-react"

function FooterDoc() {
  const sampleColumns = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
  ]

  const sampleSocial = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  const usageCode =
`import { FooterGrid } from "@/components/patterns/footer"
import { Twitter, Github, Linkedin, Instagram } from "lucide-react"

export function Example() {
  const columns = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Documentation", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
  ]

  const social = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  return (
    <FooterGrid 
      brand={{ name: "Acme Inc", description: "Building the future." }}
      columns={columns}
      social={social}
    />
  )
}`

  const gridCode =
`export function FooterGrid({ 
  brand = { name: "Acme Inc", description: "Building the future, one component at a time." },
  columns = [],
  social = [],
  copyright = "© 2024 Acme Inc. All rights reserved.",
  newsletter = true,
  className 
}: FooterVariantProps) {
  return (
    <footer className={cn("bg-[oklch(0.985_0_0)] dark:bg-[oklch(0.205_0_0)] pt-16 pb-8 border-t", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              {brand.logo && <brand.logo className="size-6" />}
              <span className="text-xl font-bold">{brand.name}</span>
            </div>
            <p className="text-[oklch(0.556_0_0)] dark:text-[oklch(0.70_0_0)] mb-6 max-w-sm">
              {brand.description}
            </p>
            {newsletter && (
              <div className="max-w-sm">
                <h4 className="font-semibold mb-2">Subscribe to our newsletter</h4>
                <div className="flex gap-2">
                  <Input placeholder="Enter your email" className="bg-background" />
                  <Button>Subscribe</Button>
                </div>
              </div>
            )}
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-3">
            {columns.map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2 text-sm text-[oklch(0.556_0_0)] dark:text-[oklch(0.70_0_0)]">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href={link.href} className="hover:text-primary transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[oklch(0.556_0_0)] dark:text-[oklch(0.70_0_0)]">{copyright}</p>
          <div className="flex gap-4">
            {social.map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                className="text-[oklch(0.556_0_0)] hover:text-primary transition-colors"
                aria-label={item.label}
              >
                <item.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}`

  const retroCode =
`export function FooterRetro({ 
  brand = { name: "Retro", description: "Old school cool." },
  columns = [],
  social = [],
  copyright = "© 2024 Retro Inc.",
  className 
}: FooterVariantProps) {
  return (
    <footer className={cn("bg-[oklch(0.985_0_0)] dark:bg-[oklch(0.205_0_0)] py-12 border-t-2 border-[oklch(0.205_0_0)] dark:border-[oklch(0.985_0_0)]", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-xl border-2 border-[oklch(0.205_0_0)] bg-[oklch(0.96_0.02_60)] p-8 shadow-[8px_8px_0_0_oklch(0.205_0_0)] dark:border-[oklch(0.985_0_0)] dark:bg-[oklch(0.25_0_0)] dark:shadow-[8px_8px_0_0_oklch(0.985_0_0)]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{brand.name}</h3>
              <p className="font-medium text-sm mb-4">{brand.description}</p>
              <div className="flex gap-3">
                {social.map((item, i) => (
                  <a 
                    key={i} 
                    href={item.href}
                    className="p-2 border-2 border-[oklch(0.205_0_0)] bg-white hover:bg-[oklch(0.85_0.1_80)] transition-colors dark:border-[oklch(0.985_0_0)] dark:bg-black dark:hover:bg-[oklch(0.3_0_0)]"
                  >
                    <item.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {columns.map((col, i) => (
                <div key={i}>
                  <h4 className="font-bold border-b-2 border-[oklch(0.205_0_0)] dark:border-[oklch(0.985_0_0)] pb-2 mb-4 inline-block">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.links.map((link, j) => (
                      <li key={j}>
                        <a href={link.href} className="text-sm font-medium hover:underline decoration-2">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-4 border-t-2 border-[oklch(0.205_0_0)] dark:border-[oklch(0.985_0_0)] text-center font-bold text-sm">
            {copyright}
          </div>
        </div>
      </div>
    </footer>
  )
}`

  const boldCode =
`export function FooterBold({ 
  brand = { name: "BOLD", description: "Make a statement." },
  columns = [],
  social = [],
  copyright = "© 2024 Bold Inc.",
  newsletter = true,
  className 
}: FooterVariantProps) {
  return (
    <footer className={cn("bg-[oklch(0.205_0_0)] text-[oklch(0.985_0_0)] py-16", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">{brand.name}</h2>
            <p className="text-xl font-light text-[oklch(0.70_0_0)] max-w-md">{brand.description}</p>
          </div>
          {newsletter && (
            <div className="flex flex-col justify-end">
              <h3 className="text-2xl font-bold mb-4">Stay in the loop</h3>
              <div className="flex gap-0">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-transparent border-b-2 border-[oklch(0.985_0_0)] px-0 py-4 w-full focus:outline-none placeholder:text-[oklch(0.5_0_0)] text-lg"
                />
                <button className="border-b-2 border-[oklch(0.985_0_0)] px-4 py-4 hover:bg-[oklch(0.985_0_0)] hover:text-[oklch(0.205_0_0)] transition-colors font-bold uppercase">
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[oklch(0.35_0_0)] pt-12">
          {columns.map((col, i) => (
            <div key={i}>
              <h4 className="font-bold text-lg mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className="text-[oklch(0.70_0_0)] hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[oklch(0.35_0_0)] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[oklch(0.5_0_0)]">{copyright}</p>
          <div className="flex gap-6">
            {social.map((item, i) => (
              <a key={i} href={item.href} className="hover:text-[oklch(0.70_0_0)] transition-colors">
                <item.icon className="size-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}`

  const monochromeCode =
`export function FooterMonochrome({ 
  brand = { name: "Mono", description: "Simple. Clean." },
  columns = [],
  social = [],
  copyright = "© 2024 Mono.",
  className 
}: FooterVariantProps) {
  return (
    <footer className={cn("bg-white text-black dark:bg-black dark:text-white border-t border-neutral-200 dark:border-neutral-800", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-xs">
            <h3 className="text-lg font-semibold tracking-wide uppercase mb-2">{brand.name}</h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">{brand.description}</p>
          </div>
          <div className="flex gap-4">
            {social.map((item, i) => (
              <a 
                key={i} 
                href={item.href} 
                className="size-10 flex items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                <item.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-12 border-t border-b border-neutral-200 dark:border-neutral-800">
          {columns.map((col, i) => (
            <div key={i}>
              <h4 className="font-medium mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className="text-sm text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between items-center text-xs text-neutral-500 dark:text-neutral-400">
          <p>{copyright}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}`

  const playfulCode =
`export function FooterPlayful({ 
  brand = { name: "Play", description: "Have fun." },
  columns = [],
  social = [],
  copyright = "© 2024 Play Inc.",
  newsletter = true,
  className 
}: FooterVariantProps) {
  return (
    <footer className={cn("bg-[oklch(0.96_0.01_90)] dark:bg-[oklch(0.25_0.02_260)] pt-16 pb-8", className)}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="bg-white dark:bg-[oklch(0.205_0_0)] rounded-[2rem] p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="inline-block px-4 py-1 bg-[oklch(0.85_0.15_100)] dark:bg-[oklch(0.7_0.15_100)] text-[oklch(0.4_0.1_100)] dark:text-[oklch(0.2_0.1_100)] rounded-full text-sm font-bold mb-6 rotate-[-2deg]">
                  {brand.name}
                </div>
                <h2 className="text-3xl font-bold mb-4">Let's build something amazing together.</h2>
                <p className="text-[oklch(0.556_0_0)] dark:text-[oklch(0.70_0_0)] mb-8">{brand.description}</p>
              </div>
              
              {newsletter && (
                <div className="relative">
                  <Input 
                    placeholder="hello@example.com" 
                    className="h-14 rounded-2xl pl-6 pr-32 bg-[oklch(0.985_0_0)] dark:bg-[oklch(0.25_0_0)] border-0 ring-2 ring-transparent focus-visible:ring-[oklch(0.6_0.15_250)] transition-all" 
                  />
                  <Button className="absolute right-2 top-2 h-10 rounded-xl bg-[oklch(0.6_0.15_250)] hover:bg-[oklch(0.5_0.15_250)] text-white font-bold">
                    Join
                  </Button>
                </div>
              )}
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {columns.map((col, i) => (
                <div key={i}>
                  <h4 className="font-bold text-[oklch(0.6_0.15_250)] mb-4">{col.title}</h4>
                  <ul className="space-y-3">
                    {col.links.map((link, j) => (
                      <li key={j}>
                        <a 
                          href={link.href} 
                          className="font-medium text-[oklch(0.4_0_0)] dark:text-[oklch(0.8_0_0)] hover:text-[oklch(0.6_0.15_250)] transition-colors block hover:translate-x-1 duration-200"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-dashed border-[oklch(0.85_0_0)] dark:border-[oklch(0.35_0_0)] flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-sm font-medium text-[oklch(0.6_0_0)]">{copyright}</p>
            <div className="flex gap-3">
              {social.map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  className="size-10 rounded-full bg-[oklch(0.97_0_0)] dark:bg-[oklch(0.3_0_0)] flex items-center justify-center text-[oklch(0.4_0_0)] dark:text-[oklch(0.8_0_0)] hover:scale-110 hover:bg-[oklch(0.6_0.15_250)] hover:text-white transition-all duration-300 shadow-sm"
                >
                  <item.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}`

  const glassCode =
`export function FooterGlass({ 
  brand = { name: "Glass", description: "Crystal clear." },
  columns = [],
  social = [],
  copyright = "© 2024 Glass.",
  className 
}: FooterVariantProps) {
  return (
    <footer className={cn("relative overflow-hidden bg-[oklch(0.2_0.05_260)] text-white py-16", className)}>
      {/* Abstract Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[oklch(0.5_0.2_280)] rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[oklch(0.6_0.2_320)] rounded-full blur-[100px] opacity-40"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">{brand.name}</h2>
              <p className="text-white/70 mb-8 max-w-sm">{brand.description}</p>
              <div className="flex gap-4">
                {social.map((item, i) => (
                  <a 
                    key={i} 
                    href={item.href} 
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                  >
                    <item.icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {columns.map((col, i) => (
                <div key={i}>
                  <h4 className="font-semibold mb-4 text-white/90">{col.title}</h4>
                  <ul className="space-y-3">
                    {col.links.map((link, j) => (
                      <li key={j}>
                        <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>{copyright}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}`

  const scandiCode =
`export function FooterScandinavian({ 
  brand = { name: "Scandi", description: "Less is more." },
  columns = [],
  social = [],
  copyright = "© 2024 Scandi.",
  newsletter = true,
  className 
}: FooterVariantProps) {
  return (
    <footer className={cn("bg-[#F2F1F0] dark:bg-[#1c1c1c] text-[#2c2c2c] dark:text-[#e0e0e0] py-20", className)}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-2xl font-serif italic mb-4">{brand.name}</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mb-8">{brand.description}</p>
          
          {newsletter && (
            <div className="w-full max-w-sm flex border-b border-neutral-300 dark:border-neutral-700 pb-2">
              <input 
                type="email" 
                placeholder="Email for newsletter" 
                className="bg-transparent flex-grow focus:outline-none text-sm placeholder:text-neutral-400"
              />
              <button className="text-xs uppercase tracking-widest font-semibold hover:text-neutral-500 transition-colors">
                Sign Up
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {columns.map((col, i) => (
            <div key={i} className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold text-xs uppercase tracking-widest mb-6 text-neutral-400 dark:text-neutral-500">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className="text-sm hover:text-neutral-500 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4 order-2 md:order-1">
            {social.map((item, i) => (
              <a key={i} href={item.href} className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors">
                <item.icon className="size-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-neutral-400 order-1 md:order-2">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}`

  return (
    <div className="space-y-10 pb-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink to="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink to="/docs">Templates</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Footer</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Footer
        </h1>
        <p className="leading-7 text-muted-foreground">
          A collection of responsive footer components with different visual styles.
        </p>
      </div>

      <Separator />

      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Grid</h2>
          <p className="text-muted-foreground">
            A clean, grid-based layout suitable for most SaaS applications.
          </p>
          <PreviewCodeTabs code={gridCode} usageCode={usageCode}>
            <FooterGrid columns={sampleColumns} social={sampleSocial} />
          </PreviewCodeTabs>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Retro</h2>
          <p className="text-muted-foreground">
            Neo-brutalism style with high contrast borders and shadows.
          </p>
          <PreviewCodeTabs code={retroCode} usageCode={usageCode}>
            <FooterRetro columns={sampleColumns} social={sampleSocial} />
          </PreviewCodeTabs>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Bold</h2>
          <p className="text-muted-foreground">
            High impact design with large typography and strong contrast.
          </p>
          <PreviewCodeTabs code={boldCode} usageCode={usageCode}>
            <FooterBold columns={sampleColumns} social={sampleSocial} />
          </PreviewCodeTabs>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Monochrome</h2>
          <p className="text-muted-foreground">
            Minimalist black and white design focusing on typography.
          </p>
          <PreviewCodeTabs code={monochromeCode} usageCode={usageCode}>
            <FooterMonochrome columns={sampleColumns} social={sampleSocial} />
          </PreviewCodeTabs>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Playful</h2>
          <p className="text-muted-foreground">
            Friendly design with rounded corners and soft colors.
          </p>
          <PreviewCodeTabs code={playfulCode} usageCode={usageCode}>
            <FooterPlayful columns={sampleColumns} social={sampleSocial} />
          </PreviewCodeTabs>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Glass</h2>
          <p className="text-muted-foreground">
            Modern glassmorphism effect with background blur and transparency.
          </p>
          <PreviewCodeTabs code={glassCode} usageCode={usageCode}>
            <FooterGlass columns={sampleColumns} social={sampleSocial} />
          </PreviewCodeTabs>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Scandinavian</h2>
          <p className="text-muted-foreground">
            Clean, airy design with muted tones and serif accents.
          </p>
          <PreviewCodeTabs code={scandiCode} usageCode={usageCode}>
            <FooterScandinavian columns={sampleColumns} social={sampleSocial} />
          </PreviewCodeTabs>
        </div>
      </div>
    </div>
  )
}

export default FooterDoc
