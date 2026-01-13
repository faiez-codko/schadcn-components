"use client";

import React, { useMemo, useState } from "react";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  defaultDropAnimationSideEffects,
  type DragStartEvent,
  type DragOverEvent,
  type DragEndEvent,
  type DropAnimation,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Plus, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

// Types
export type KanbanColumn = {
  id: string;
  title: string;
};

export type KanbanTask = {
  id: string;
  columnId: string;
  content: string;
};

// Mock Data
const defaultCols: KanbanColumn[] = [
  {
    id: "todo",
    title: "To Do",
  },
  {
    id: "in-progress",
    title: "In Progress",
  },
  {
    id: "done",
    title: "Done",
  },
];

const defaultTasks: KanbanTask[] = [
  {
    id: "1",
    columnId: "todo",
    content: "Analyze requirements",
  },
  {
    id: "2",
    columnId: "todo",
    content: "Create design mockups",
  },
  {
    id: "3",
    columnId: "in-progress",
    content: "Implement authentication",
  },
  {
    id: "4",
    columnId: "done",
    content: "Setup project structure",
  },
];

export function KanbanBoard() {
  const [columns, setColumns] = useState<KanbanColumn[]>(defaultCols);
  const [tasks, setTasks] = useState<KanbanTask[]>(defaultTasks);
  const [activeColumn, setActiveColumn] = useState<KanbanColumn | null>(null);
  const [activeTask, setActiveTask] = useState<KanbanTask | null>(null);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3, // 3px distance to start drag
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      return;
    }

    if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveTask = active.data.current?.type === "Task";
    const isOverTask = over.data.current?.type === "Task";

    if (!isActiveTask) return;

    // Dropping a Task over another Task
    if (isActiveTask && isOverTask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        if (tasks[activeIndex].columnId !== tasks[overIndex].columnId) {
          // Fix: Create a new array to avoid mutation
          const newTasks = [...tasks];
          newTasks[activeIndex].columnId = tasks[overIndex].columnId;
          return arrayMove(newTasks, activeIndex, overIndex - 1); // Adjust index if needed, but arrayMove usually handles it. 
          // Actually for cross column, simple arrayMove might not be enough if we just want to reorder visually in real time.
          // But usually we just update columnId.
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverColumn = over.data.current?.type === "Column";

    // Dropping a Task over a Column
    if (isActiveTask && isOverColumn) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);

        // Fix: Create a new array
        const newTasks = [...tasks];
        newTasks[activeIndex].columnId = overId.toString();
        // Move to the end of that column visually if we just hover the column? 
        // Or arrayMove isn't needed here if we just change columnId. 
        // But to prevent flickering we might want to keep it.
        
        return arrayMove(newTasks, activeIndex, activeIndex);
      });
    }
  }

  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null);
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveColumn = active.data.current?.type === "Column";
    if (isActiveColumn) {
        setColumns((columns) => {
            const activeColumnIndex = columns.findIndex((col) => col.id === activeId);
            const overColumnIndex = columns.findIndex((col) => col.id === overId);
    
            return arrayMove(columns, activeColumnIndex, overColumnIndex);
        });
        return;
    }

    // Task drag end is largely handled in dragOver for cross-column, 
    // but for same-column reordering we need to finalize it here if dragOver didn't catch it 
    // (though dragOver usually does).
    // However, arrayMove in dragOver might be temporary if we don't persist.
    // In this simple implementation, dragOver updates state directly so we might be good.
  }

  const dropAnimation: DropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };

  return (
    <div className="flex h-full w-full flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Kanban Board</h2>
        <Button variant="outline" onClick={() => {
            const id = Math.random().toString(36).substring(2, 9);
            setColumns([...columns, { id, title: `Column ${columns.length + 1}` }]);
        }}>
          <Plus className="mr-2 h-4 w-4" /> Add Column
        </Button>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
      >
        <div className="flex h-full gap-4 overflow-x-auto pb-4">
          <SortableContext items={columnsId}>
            {columns.map((col) => (
              <BoardColumn
                key={col.id}
                column={col}
                tasks={tasks.filter((task) => task.columnId === col.id)}
                createTask={(columnId) => {
                    const id = Math.random().toString(36).substring(2, 9);
                    setTasks([...tasks, { id, columnId, content: `Task ${tasks.length + 1}` }]);
                }}
                deleteTask={(taskId) => {
                    setTasks(tasks.filter(t => t.id !== taskId));
                }}
              />
            ))}
          </SortableContext>
        </div>

        {mounted && createPortal(
          <DragOverlay dropAnimation={dropAnimation}>
            {activeColumn && (
              <BoardColumn
                column={activeColumn}
                tasks={tasks.filter((task) => task.columnId === activeColumn.id)}
                createTask={() => {}}
                deleteTask={() => {}}
                isOverlay
              />
            )}
            {activeTask && <TaskCard task={activeTask} deleteTask={() => {}} isOverlay />}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );
}

interface BoardColumnProps {
  column: KanbanColumn;
  tasks: KanbanTask[];
  createTask: (columnId: string) => void;
  deleteTask: (taskId: string) => void;
  isOverlay?: boolean;
}

function BoardColumn({ column, tasks, createTask, deleteTask, isOverlay }: BoardColumnProps) {
  const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: isOverlay, // Disable drag on the overlay copy itself
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="flex h-[500px] w-[350px] flex-col rounded-md border-2 border-dashed border-primary/50 bg-secondary/50 opacity-40"
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "flex h-[500px] w-[350px] flex-col rounded-xl bg-gray-100/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700",
        isOverlay && "ring-2 ring-primary rotate-2 cursor-grabbing"
      )}
    >
      {/* Column Header */}
      <div
        {...attributes}
        {...listeners}
        className="flex items-center justify-between p-4 cursor-grab active:cursor-grabbing"
      >
        <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-700 dark:bg-gray-700 dark:text-gray-200">
                {tasks.length}
            </span>
            <h3 className="font-semibold text-foreground">{column.title}</h3>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Column Content */}
      <div className="flex flex-1 flex-col gap-4 p-2">
        <ScrollArea className="h-full px-2">
            <SortableContext items={tasksIds} strategy={verticalListSortingStrategy}>
            <div className="flex flex-col gap-2">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
                ))}
            </div>
            </SortableContext>
        </ScrollArea>
      </div>

      {/* Column Footer */}
      <div className="p-4 pt-0">
        <Button
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-foreground"
            onClick={() => createTask(column.id)}
        >
            <Plus className="mr-2 h-4 w-4" /> Add Task
        </Button>
      </div>
    </div>
  );
}

interface TaskCardProps {
  task: KanbanTask;
  deleteTask: (id: string) => void;
  isOverlay?: boolean;
}

function TaskCard({ task, deleteTask, isOverlay }: TaskCardProps) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: isOverlay,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="h-[100px] min-h-[100px] cursor-grabbing rounded-xl border-2 border-dashed border-primary/50 bg-secondary/50 opacity-50"
      />
    );
  }

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "cursor-grab active:cursor-grabbing hover:ring-2 hover:ring-primary/50 relative group touch-none",
        isOverlay && "ring-2 ring-primary rotate-2 shadow-xl"
      )}
    >
      <CardHeader className="p-4 space-y-0">
        <CardContent className="p-0 text-sm font-medium text-left">
          {task.content}
        </CardContent>
      </CardHeader>
    </Card>
  );
}
