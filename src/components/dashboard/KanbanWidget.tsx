import React, { useState } from 'react';
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Task {
  id: string;
  title: string;
  status: 'pending' | 'completed';
}

interface SortableItemProps {
  id: string;
  task: Task;
}

function SortableItem(props: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : 0,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "flex items-center gap-3 p-3 mb-2 bg-background border rounded-lg shadow-sm select-none",
        isDragging && "opacity-50 border-primary"
      )}
    >
      <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing text-muted-foreground hover:text-foreground">
        <GripVertical size={16} />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{props.task.title}</p>
      </div>
      <div className={cn(
        "w-2 h-2 rounded-full",
        props.task.status === 'completed' ? "bg-green-500" : "bg-orange-500"
      )} />
    </div>
  );
}

export function KanbanWidget() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Review PR #1234', status: 'pending' },
    { id: '2', title: 'Update documentation', status: 'completed' },
    { id: '3', title: 'Fix navigation bug', status: 'pending' },
    { id: '4', title: 'Deploy to production', status: 'pending' },
    { id: '5', title: 'Weekly team meeting', status: 'completed' },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setTasks((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <div className="p-4 border rounded-xl bg-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Priority Tasks</h3>
        <span className="text-xs text-muted-foreground">{tasks.length} tasks</span>
      </div>
      <DndContext 
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext 
          items={tasks.map(t => t.id)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((task) => (
            <SortableItem key={task.id} id={task.id} task={task} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
