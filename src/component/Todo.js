import React from 'react'
import './Todo.css';


const Todo = ({text,setTodos,todos,todo})=> {

    const delteHandler =()=>{
        setTodos(todos.filter( (el) => el.id !== todo.id ));
    };
    const completeHanler = () =>{
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item,
                    completed:!item.completed,
                }
            }
            return item;
        }))
    };
    


   
    return ( 
        <div className="todo">
             <span >
            <input type="checkbox" className="checkb" />
            </span>
            <li className={`todo-item ${todo.completed ? "completed": ""}`}>{text}</li>
           <button className="complete-btn" onClick={completeHanler}>
               <i className="fas fa-check"></i>
           </button>
           <button className="trash-btn" onClick={delteHandler}>
               <i className="fas fa-trash"></i>
           </button>
        </div>
    );
};

export default Todo

