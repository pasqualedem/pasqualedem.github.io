import React from 'react'
import TodoList from "./TodoList";
import {useState, useRef, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from 'react-bootstrap/Button';


const LOCAL_STORAGE_KEY = 'todoApp.todos'


export default function FirstApp() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos( prevTodos => [...prevTodos, ...storedTodos] );
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    todoNameRef.current.value = null
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
  }

  function handleClearCompleteTodo(e) {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function handleClearTodo(e) {
    setTodos([])
  }


  return (
    <>
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    <input ref={todoNameRef} type="text"></input>
    <button onClick={handleAddTodo}>Add to do</button>
    <button onClick={handleClearCompleteTodo}>Clear Complete</button>
    <button onClick={handleClearTodo}>Clear</button>
    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    <Button> CLick me</Button>
    </>
  )
}
