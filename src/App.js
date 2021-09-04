import React,{useState} from 'react';
import './App.css';
import Form from './component/Form';
import TodoList from './component/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const[inputText,SetInputText]=useState("")
  const[todos,setTodos]=useState([]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      
      <Form inputText={inputText} todos={todos} setTodos={setTodos} SetInputText={SetInputText}/>
      <TodoList todos={todos} SetInputText={SetInputText}  setTodos={setTodos}/>
    </div>
  );
}

export default App;
