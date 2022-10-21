import React from 'react'
import TodoList from './TodoList'

const Todo = ({ todo }) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} />
        {todo.name}
      </label>
    </div>
  )
}

export default Todo