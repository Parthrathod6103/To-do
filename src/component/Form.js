import React from 'react'
import { Button } from 'react-bootstrap';


const Form= ({SetInputText,setTodos,todos,inputText})=> {

    const inputTextHandler =(e)=>{
        console.log(e.target.value);
        SetInputText(e.target.value);
    };
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([...todos,{text:inputText,completed:false,id:Math.random()*1000}]);
        SetInputText('');
    };
    return (
      <div>
        <form>
          <input type="text" value={inputText} onChange={inputTextHandler} className="todo-input" placeholder="Enter the Todo" />
          <Button className="todo-button" onClick={submitTodoHandler} type="submit">
            {/* <span>&#62;</span> */}
            <span>Submit</span>
          </Button>
          <div className="select">
            <select name="todos" className="filter-todo">
              <option value="all">all</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>
      </div>
    );
};

export default Form
