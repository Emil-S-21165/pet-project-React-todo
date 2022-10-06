import '../style.css';
import TodoItem from './todoItem';

const TodoList = ({done, del, todos}) => {

  return (
    <div className="list-fields">
      <ul className="list-field">
          {todos.map(todo=> (
            <TodoItem 
            key={todo.id} 
            id={todo.id}
            task={todo.task} 
            onDelete={del} 
            onDone={done}
            done={todo.done} />
          ))}
        </ul>
    </div>
  )
}

export default TodoList;