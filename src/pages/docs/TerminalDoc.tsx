import { Terminal, TerminalLine, AnimatedTerminalLine } from "@/components/ui/terminal"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"

export default function TerminalDoc() {
  const code = `import { Terminal, TerminalLine, AnimatedTerminalLine } from "@/components/ui/terminal"

export function TerminalDemo() {
  return (
    <Terminal>
      <TerminalLine>npm install @radix-ui/react-icons</TerminalLine>
      <TerminalLine className="text-muted-foreground">Installing dependencies...</TerminalLine>
      <TerminalLine className="text-blue-400">
        + @radix-ui/react-icons@1.3.0
      </TerminalLine>
      <TerminalLine className="text-muted-foreground">
        added 1 package, and audited 2 packages in 3s
      </TerminalLine>
      <TerminalLine>
        <span className="text-green-500">found</span> 0 vulnerabilities
      </TerminalLine>
    </Terminal>
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
            <BreadcrumbLink to="/docs/components/terminal">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Terminal</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-8">
        <h1 className="text-3xl font-bold">Terminal</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A MacOS-style terminal component for showcasing command line interfaces.
        </p>
      </div>

      <Separator className="my-8" />

      <div className="space-y-8">
        <PreviewCodeTabs code={code}>
          <div className="w-full max-w-2xl mx-auto">
            <Terminal>
              <TerminalLine>npm install @radix-ui/react-icons</TerminalLine>
              <TerminalLine className="text-zinc-500">Installing dependencies...</TerminalLine>
              <TerminalLine className="text-blue-400">
                + @radix-ui/react-icons@1.3.0
              </TerminalLine>
              <TerminalLine className="text-zinc-500">
                added 1 package, and audited 2 packages in 3s
              </TerminalLine>
              <TerminalLine>
                <span className="text-green-500">found</span> 0 vulnerabilities
              </TerminalLine>
            </Terminal>
          </div>
        </PreviewCodeTabs>

        <div className="space-y-4">
            <h3 className="text-xl font-semibold">Animated Typing</h3>
            <div className="w-full max-w-2xl mx-auto">
                <Terminal>
                    <AnimatedTerminalLine>git clone https://github.com/shadcn/ui.git</AnimatedTerminalLine>
                </Terminal>
            </div>
        </div>
      </div>
    </div>
  )
}
