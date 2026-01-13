import { KanbanBoard } from "@/components/templates/kanban/KanbanBoard"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"

export default function KanbanBoardDoc() {
  const code = `"use client";

import React, { useMemo, useState } from "react";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
  defaultDropAnimationSideEffects,
  DropAnimation,
} from "@dnd-kit/core";
// ... (rest of the implementation)
`

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-8">
      <Breadcrumb className="text-left">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink to="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink to="/docs/templates/kanban">Templates</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Kanban Board</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-8">
        <h1 className="text-3xl font-bold">Kanban Board</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          A fully functional Kanban board with drag and drop capabilities using @dnd-kit.
        </p>
      </div>

      <Separator className="my-8" />

      <div className="space-y-8">
        <PreviewCodeTabs code={code}>
          <div className="h-[600px] w-full border rounded-lg bg-background p-4 overflow-hidden">
            <KanbanBoard />
          </div>
        </PreviewCodeTabs>
      </div>
    </div>
  )
}
