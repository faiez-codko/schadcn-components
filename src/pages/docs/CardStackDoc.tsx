import { CardStack } from "@/components/patterns/card-stack"
import { Separator } from "@/components/ui/separator"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { cn } from "@/lib/utils"

export default function CardStackDoc() {
  const items = [
    {
      id: 1,
      name: "Manu Arora",
      designation: "Senior Software Engineer",
      content: (
        <p>
          These cards are amazing, <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-700/20 dark:text-emerald-500 px-1 py-0.5 rounded-sm">I want to use them</span> in my project. Framer motion is a godsend.
        </p>
      ),
    },
    {
      id: 2,
      name: "Elon Musk",
      designation: "Senior Shitposter",
      content: (
        <p>
          I dont like this Twitter thing, <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-700/20 dark:text-emerald-500 px-1 py-0.5 rounded-sm">deleting it right away</span> because yolo.
        </p>
      ),
    },
    {
      id: 3,
      name: "Tyler Durden",
      designation: "Manager Project Mayhem",
      content: (
        <p>
          The first rule of <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-700/20 dark:text-emerald-500 px-1 py-0.5 rounded-sm">Fight Club</span> is that you do not talk about fight club.
        </p>
      ),
    },
  ];

  const code = `import { CardStack } from "@/components/patterns/card-stack"

const items = [
  {
    id: 1,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, I want to use them in my project.
      </p>
    ),
  },
  {
    id: 2,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing, deleting it right away.
      </p>
    ),
  },
  {
    id: 3,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of Fight Club is that you do not talk about fight club.
      </p>
    ),
  },
];

export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={items} />
    </div>
  );
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
            <BreadcrumbLink to="/docs/patterns/card-stack">Patterns</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Card Stack</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="mt-2 text-3xl font-bold text-left">Card Stack</h1>
      <p className="mt-2 text-muted-foreground text-left">A stack of cards that reveals the full list on interaction.</p>
      <Separator className="my-6" />
      
      <PreviewCodeTabs code={code}>
        <div className="h-[400px] flex items-center justify-center w-full bg-slate-50 dark:bg-slate-900/50 rounded-xl border">
          <CardStack items={items} />
        </div>
      </PreviewCodeTabs>
    </div>
  )
}
