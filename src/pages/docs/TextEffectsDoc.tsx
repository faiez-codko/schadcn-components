import { Separator } from "@/components/ui/separator"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { 
  GlitchText, 
  TypewriterText, 
  MatrixText, 
  ScrollText, 
  FadeText,
  TextEffectsStyles
} from "@/components/ui/text-effects"

function TextEffectsDoc() {
  const glitchCode = 
`import { GlitchText } from "@/components/ui/text-effects"

export function Example() {
  return (
    <div className="text-4xl font-bold">
      <GlitchText text="CYBERPUNK 2077" />
    </div>
  )
}`

  const typewriterCode = 
`import { TypewriterText } from "@/components/ui/text-effects"

export function Example() {
  return (
    <div className="text-2xl font-mono">
      <TypewriterText text="Hello, World! Welcome to my portfolio." />
    </div>
  )
}`

  const matrixCode = 
`import { MatrixText } from "@/components/ui/text-effects"

export function Example() {
  return (
    <div className="text-2xl font-mono text-green-500">
      <MatrixText text="WAKE UP NEO..." speed={100} />
    </div>
  )
}`

  const scrollCode = 
`import { ScrollText } from "@/components/ui/text-effects"

export function Example() {
  return (
    <div className="w-full max-w-md bg-secondary p-4 rounded-lg overflow-hidden">
      <ScrollText speed={10}>
        <span className="mx-4 font-bold">BREAKING NEWS</span>
        <span className="mx-4">Stock market hits all time high</span>
        <span className="mx-4 font-bold">WEATHER</span>
        <span className="mx-4">Sunny with a chance of rain</span>
      </ScrollText>
    </div>
  )
}`

  const fadeCode = 
`import { FadeText } from "@/components/ui/text-effects"

export function Example() {
  return (
    <div className="space-y-2 text-xl">
      <FadeText text="Fade In Up" direction="up" delay={0} />
      <br />
      <FadeText text="Fade In Right" direction="right" delay={500} />
      <br />
      <FadeText text="Fade In Down" direction="down" delay={1000} />
    </div>
  )
}`

  return (
    <div className="space-y-10 pb-10">
      <TextEffectsStyles />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink to="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink to="/docs">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Text Effects</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Text Effects
        </h1>
        <p className="leading-7 text-muted-foreground">
          A collection of animated text components for landing pages and creative sections.
        </p>
      </div>

      <Separator />

      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Glitch Text</h2>
          <p className="text-muted-foreground">
            A cyberpunk-style glitch animation effect on hover.
          </p>
          <PreviewCodeTabs code={glitchCode}>
            <div className="p-10 flex justify-center items-center bg-neutral-950 text-white rounded-lg">
              <div className="text-5xl font-black tracking-tighter">
                <GlitchText text="GLITCH_EFFECT" />
              </div>
            </div>
          </PreviewCodeTabs>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Typewriter</h2>
          <p className="text-muted-foreground">
            Simulates typing text with a blinking cursor. Loops by default.
          </p>
          <PreviewCodeTabs code={typewriterCode}>
            <div className="p-10 flex justify-center items-center rounded-lg border">
              <div className="text-2xl font-mono text-primary">
                {">"} <TypewriterText text="npm install schadcn-components" />
              </div>
            </div>
          </PreviewCodeTabs>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Matrix Reveal</h2>
          <p className="text-muted-foreground">
            Reveals text by cycling through random characters.
          </p>
          <PreviewCodeTabs code={matrixCode}>
            <div className="p-10 flex justify-center items-center rounded-lg bg-black">
              <div className="text-3xl font-mono font-bold text-green-500">
                <MatrixText text="SYSTEM_BREACH_DETECTED" />
              </div>
            </div>
          </PreviewCodeTabs>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Auto Scroll</h2>
          <p className="text-muted-foreground">
            Infinite marquee scrolling effect. Supports any content.
          </p>
          <PreviewCodeTabs code={scrollCode}>
            <div className="p-10 rounded-lg border">
              <div className="w-full max-w-lg mx-auto bg-muted/50 p-4 rounded-xl overflow-hidden border">
                <ScrollText speed={15}>
                  <div className="flex gap-4 items-center">
                    <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">React</span>
                    <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">TypeScript</span>
                    <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Tailwind</span>
                    <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Framer Motion</span>
                    <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Vite</span>
                    <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Next.js</span>
                  </div>
                </ScrollText>
              </div>
            </div>
          </PreviewCodeTabs>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Fade In</h2>
          <p className="text-muted-foreground">
            Smooth fade-in animations with directional offset.
          </p>
          <PreviewCodeTabs code={fadeCode}>
            <div className="p-10 flex flex-col items-center gap-4 rounded-lg border h-64 justify-center">
              <FadeText className="text-4xl font-bold" text="Fade In Up" direction="up" delay={200} />
              <FadeText className="text-muted-foreground" text="With a slight delay..." direction="up" delay={600} />
            </div>
          </PreviewCodeTabs>
        </div>
      </div>
    </div>
  )
}

export default TextEffectsDoc
