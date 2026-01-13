import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Copy, Check } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { Monitor, Tablet, Smartphone, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'
import Editor from '@monaco-editor/react'

type TabKind = 'preview' | 'code'
type Viewport = 'desktop' | 'tablet' | 'mobile'



function PreviewCodeTabs({
  code,
  children,
  className,
  defaultTab = 'preview',
  usageCode,
}: {
  code: string
  children: React.ReactNode
  className?: string
  defaultTab?: TabKind
  usageCode?: string
}) {
  const [tab, setTab] = React.useState<TabKind>(defaultTab)
  const [copied, setCopied] = React.useState(false)
  const [viewport, setViewport] = React.useState<Viewport>('desktop')
  const [fullBleed] = React.useState(false)
  const [refreshKey, setRefreshKey] = React.useState(0)

  async function handleCopy() {
    try {
      const text = tab === 'code' ? code : tab === 'preview' && usageCode ? usageCode : ''
      if (!text) return
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  function viewportClass(v: Viewport, full: boolean) {
    if (full) return 'w-[1024px]'
    if (v === 'mobile') return 'w-[375px]'
    if (v === 'tablet') return 'w-[768px]'
    return 'w-[1024px]'
  }

  return (
    <div className={['rounded-xl border min-w-[320px]', className].filter(Boolean).join(' ')}>
      <Tabs value={tab} onValueChange={(v) => setTab(v as TabKind)} className="w-full">
        <div className="flex items-center justify-between gap-2 p-2">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
            {usageCode && <TabsTrigger value="usage">Usage</TabsTrigger>}
          </TabsList>
          {tab === 'preview' && (
            <>
              <span className="mx-2 h-5 border-l" />
              <div className="flex items-center gap-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm" variant={viewport === 'desktop' ? 'default' : 'ghost'} onClick={() => setViewport('desktop')}>
                      <Monitor className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Desktop</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm" variant={viewport === 'tablet' ? 'default' : 'ghost'} onClick={() => setViewport('tablet')}>
                      <Tablet className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Tablet</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm" variant={viewport === 'mobile' ? 'default' : 'ghost'} onClick={() => setViewport('mobile')}>
                      <Smartphone className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Mobile</TooltipContent>
                </Tooltip>
                <span className="mx-2 h-5 border-l" />
             
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm" variant="ghost" onClick={() => setRefreshKey((k) => k + 1)}>
                      <RotateCcw className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Refresh preview</TooltipContent>
                </Tooltip>
              </div>
            </>
          )}
          {(tab === 'code' || tab === 'usage') && (
            <div className="ml-auto">
              <Button size="sm" variant="ghost" onClick={handleCopy}>
                {copied ? <Check className="mr-2 size-4" /> : <Copy className="mr-2 size-4" />}
                {copied ? 'Copied' : 'Copy'}
              </Button>
            </div>
          )}
        </div>
        <div className="p-6">
          <TabsContent value="preview">
            <div className="flex justify-center">
              <div className={cn('rounded-lg', viewportClass(viewport, fullBleed))} key={refreshKey}>
                {children}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="code">
            <div className="rounded-lg overflow-hidden border">
              <Editor
                height="400px"
                defaultLanguage="typescript"
                theme="vs-dark"
                value={code}
                options={{ readOnly: true, fontSize: 14, minimap: { enabled: false } }}
              />
            </div>
          </TabsContent>
          {usageCode && (
            <TabsContent value="usage">
              <div className="rounded-lg overflow-hidden border">
                <Editor
                  height="280px"
                  defaultLanguage="typescript"
                  theme="vs-dark"
                  value={usageCode}
                  options={{ readOnly: true, fontSize: 14, minimap: { enabled: false } }}
                />
              </div>
            </TabsContent>
          )}
        </div>
      </Tabs>
    </div>
  )
}

export { PreviewCodeTabs }
