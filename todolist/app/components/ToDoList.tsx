import { ITask } from '@/types/task'
import Task from './Task';
import React from 'react'

interface TodoListProps {
  tasks: ITask[];
}

const ToDoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
<div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Tasks</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {tasks.map((task) => (<Task key={task.id} task={task} />))}
    </tbody>
  </table>
</div>
  )
}

export default ToDoList
