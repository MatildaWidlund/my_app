import './App.css';
import React, { useEffect, useState} from 'react';
import Axios from 'axios';
import Todolist from './Todolist';
import Pagination from './Pagination';

function App() {
  const [todos, setTodos] = useState([]);
/*  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10);*/


  const fetchTodos = async () => {
    const { data } = await Axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const todos = data;
    setTodos(todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId))
  }

  const completedTodo = (todoId) => {
    setTodos(
      todos.map((todo) => 
        todo.id == todoId ? 
        {...todo, completed: !todo.completed}
        : todo))
  }
/*
  const indexLastTodo = currentPage * todosPerPage; 
  const indexFirstTodo = indexLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexFirstTodo, indexLastTodo);
  const paginate = pageNumber => setCurrentPage(pageNumber);
*/
    /*  <Pagination todosPerPage={todosPerPage} todos={todos.length} paginate={paginate}/>*/

  return (
    <div className="App">
      <header> TODO - LIST </header>
      <Todolist 
      todos={todos}
      onDelete={deleteTodo}
      onCompleted={completedTodo}
      />
    </div>
  );
}

export default App;
