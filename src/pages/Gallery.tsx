import { Separator } from '@/components/ui/separator'
import { VideoText } from '@/components/ui/video-text'

function Gallery() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-bold">Components</h1>
      <p className="mt-2 text-muted-foreground">
        A small gallery of ready-to-use pieces.
      </p>

      <Separator className="my-8" />

      <div className="grid gap-6 md:grid-cols-2">


        <div className="relative h-[500px] w-full overflow-hidden">
          <VideoText src="https://cdn.magicui.design/ocean-small.webm" fontSize='348px'>
            Q
          </VideoText>
        </div>
      </div>
    </div>
  )
}

export default Gallery

