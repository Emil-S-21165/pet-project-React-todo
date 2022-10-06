import '../style.css';

const TodoItem = ({id, task, onDelete, onDone, done}) => {

  return (
      <>
      <li className="list-item">
        {done === true ? <input type="checkbox" className="check" checked onChange={() => onDone(id)}/> : 
        <input type="checkbox" className="check" onChange={() => onDone(id)}/>}
      
        {task}
        <div className="form-buttons">
            <button className="button button-delete" onClick={() => onDelete(id)}>Delete</button>
        </div>
      </li>
      <div className="divider"></div>
      </>
      
  )
}

export default TodoItem;