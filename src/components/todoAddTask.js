import '../style.css';

const TodoAddTask = ({todo, change, submit}) => {
   
        return (
            <form onSubmit={submit}>
                <div className="form-fields">
                    <div className="form-field">
                        <input type="text" placeholder="Add task" 
                        value={todo} 
                        onChange={change}
                        required />
                    </div>
                    <div className="form-buttons">
                        <button className="button">Add</button>
                    </div>
                </div>
            </form>
        )
}

export default TodoAddTask;