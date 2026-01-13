import { Separator } from '@/components/ui/separator'

function Introduction() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-8">
      <div className="text-sm text-muted-foreground">Docs &gt; Introduction</div>
      <h1 className="mt-2 text-3xl font-bold">Introduction</h1>
      <p className="mt-2 text-muted-foreground">
        Create magical landing pages with components you can copy and paste into your apps.
      </p>

      <div className="prose prose-neutral dark:prose-invert max-w-none mt-6">
        <p>
          This library is a collection of re-usable components and page templates built with React, TypeScript,
          Tailwind CSS, and Radix primitives.
        </p>
        <p>
          It primarily features components, blocks, and templates geared towards creating landing pages and
          user-facing marketing materials.
        </p>

        <Separator className="my-6" />
        <h2>Philosophy</h2>
        <p>
          Good design contributes significant value to software. It establishes trust and clarity, and helps
          visitors answer key questions:
        </p>
        <ul>
          <li>Is this company legit?</li>
          <li>Who else is using it?</li>
          <li>Can I trust them with my personal data?</li>
        </ul>
        <p>
          Poor design reflects poorly on the team. Clean, thoughtful components indicate strong execution and
          care for users.
        </p>
      </div>
    </div>
  )
}

export default Introduction

