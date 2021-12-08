import './App.css';
import Todo from './Todo';
import { useMemo, useState} from 'react';
import { sortTodos, paginateTodos } from './helpers'
import Pagination from './Pagination'

function Todolist({todos, onDelete, onCompleted}) {  
  const [sort, setSort] = useState({order: 'asc', orderBy: 'id'})
  const sortedTodos = useMemo(()=> sortTodos(todos, sort), [todos, sort])

  const handleSort = (type) => {
    setActivePage(1)
    setSort(() => ({
      order: 'asc',
      orderBy: type,
    }))
  }

  const [activePage, setActivePage] = useState(1)
  const todosPerPage = 10
  const calculatedTodos = paginateTodos(sortedTodos, activePage, todosPerPage)
  const totalPages = Math.ceil(todos.length / todosPerPage)

  return (
    <div className="Box">

      <select onChange={(e) => handleSort(e.target.value)}> 
        <option value="userId">User ID</option>
        <option value="id">ID</option>
        <option value="title">Title</option>
      </select>

      <div className="ListOfTodos">   
        { calculatedTodos.map((todo) => (
          <Todo 
          key={todo.id} 
          todo={todo} 
          onDelete={onDelete} 
          onCompleted={onCompleted} />
        ))}  
      </div>
      { todos.length > 0 ? (
        <Pagination
        activePage={activePage}
        totalPages={totalPages}
        setActivePage={setActivePage} />
      ): 
        <p> No Todo's left</p>
      }
    </div>
  );
}

export default Todolist;

