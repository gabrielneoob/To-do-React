import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  const LOCAL_STORAGE_KEY = 'todoApp.todos'

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos), [todos])
  }, [todos])

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return null
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null;

    console.log(todos)
  }

  return (
    <>
      <input ref={todoNameRef} type="text" />
      <button id="oi" onClick={handleAddTodo}>Add todo</button>
      <button>Clear Complete</button>
      <TodoList todos={todos} />
      <div>0 left to do</div>
    </>

  )
}

export default App;
