import React from 'react'
import type { Todo } from '../../common/types/todo'
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

const TodoItem = ({ todo }: { todo: Todo }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between p-4 mb-3 border rounded-xl shadow-sm bg-white hover:shadow-md transition-all">

        {/* Left Section */}
        <div className="flex items-center gap-3">
          <Checkbox checked={todo.isCompleted} />

          <div>
            <p className={`text-lg font-medium ${todo.isCompleted ? "line-through text-gray-400" : ""}`}>
              {todo.task}
            </p>
            <p className="text-sm text-gray-500">ID: {todo.id}</p>
          </div>
        </div>

        {/* Status Badge */}
        <Badge variant={todo.isCompleted ? "default" : "secondary"}>
          {todo.isCompleted ? "Done" : "Pending"}
        </Badge>
      </div>
    </div>
  )
}

export default TodoItem
