import React, {useState} from 'react';
//import {useState} from 'react/cjs/react.development';
import Todoform from './Todoform';
import Todo from './Todo';

export default function Todolist() {

    // state Array which hold all TODOS
    const [todos, setTodos]= useState([]);

    // Add todo to list
    const addTask = task => {
        if (!task.text){
            return
        }
     const newTodos = [task,...todos];
     setTodos(newTodos) ;

    }

    // Remove todo from list
    const removeTask = id => {
        let updatedTask = [...todos].filter(task=> task.id !== id)
        setTodos(updatedTask)
    }

    // Task is Completed

    const completeTask = id => {
        let updatedTask = todos.map (todo => {
        if(todo.id=== id){
            todo.isComplete=true;
        }
        return todo;
        })
        setTodos(updatedTask);
    }

  return (
    <div>
      <Todoform addTask={addTask}></Todoform>
      <Todo todos={todos} completeTask={completeTask} removeTask={removeTask} ></Todo>
    </div>
  )
}
