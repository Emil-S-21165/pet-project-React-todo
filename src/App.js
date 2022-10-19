import React from 'react';
import { useState } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import TodoAddTask from './components/todoAddTask';
import TodoList from './components/todoList';
import './style.css';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useLocalStorage('task', []);

  const onSubmit = (e) => {
    e.preventDefault()

    if (todo.length < 1) {
      return false
    }

    setTodos([{id: Date.now(), task: todo, done: false}, ...todos])
  }

  const onDone = (todoId) => {
    const updatedTodos = [...todos].map((todo) => {
      if(todo.id === todoId) {
        todo.done = !todo.done
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const onDelete = (todoId) => {
    const deletedTodos = todos.filter(item => item.id !== todoId)

    setTodos(deletedTodos)
  }

  return (
    <main>
    <div className="todo-form-container">
        <h1 className="form-title">
            Todo App: {todos.length} {todos.length === 1 ? 'task' : 'tasks'}
        </h1>
        <TodoAddTask 
        todo={todo} 
        change={(e) => setTodo(e.target.value)}
        submit={onSubmit}/>
        <TodoList 
        done={onDone} 
        del={onDelete}
        todos={todos}
        />
    </div>
</main>
  )
}

export default App;