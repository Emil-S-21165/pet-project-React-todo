import React from 'react';
import { useState } from 'react';
import TodoAddTask from './components/todoAddTask';
import TodoList from './components/todoList';
import './style.css';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault()

    if (todo.length < 1) {
      return false
    }

    setTodos([{id: Date.now(), task: todo, done: false}, ...todos])

    console.log(todos);
  }

  const onDone = (todoId) => {
    const index = todos.findIndex(item => item.id === todoId)
    const dublicateTodos = [...todos]

    dublicateTodos[index] = {
      id: todos[index].id, 
      task: todos[index].task,
      done: !todos[index].done,
    }

    setTodos(dublicateTodos)
    console.log(todos)
  }

  const onDelete = (todoId) => {
    const updatedTodos = todos.filter(item => item.id !== todoId)

    setTodos(updatedTodos)
    
  }

  return (
    <main>
    <div className="todo-form-container">
        <h1 className="form-title">
            Todo App
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