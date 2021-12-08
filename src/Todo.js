import './App.css';
import { FaTimes} from 'react-icons/fa';
import ReactTooltip from "react-tooltip";

function Todo({todo, onDelete, onCompleted}) {  
  return (
    <div>
      <ReactTooltip/>
      <div 
      className={`Todo ${todo.completed ? 'Completed' : ''}`} 
      onDoubleClick={() => onCompleted(todo.id)} 
      data-testid="todo" >
        <span 
        data-tip={`${todo.completed? '': 'Double click to complete'}`} > 
          {todo.id}. {todo.title} 
        </span>
        <FaTimes 
        onClick={() => onDelete(todo.id)} 
        className="DeleteTodo"
        data-testid="delete"
        data-tip="Delete Todo" />
      </div>
      
    </div>
  );
}

export default Todo;

