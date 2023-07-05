import React, { useState } from 'react'
import Addinput from './Addinput'
import Itemscontainer from './Itemscontainer'
const Todocontainer = () => {
    const [todos, setTodos] = useState([
        {
          id: 1,
          title: 'Setup development environment',
          completed: false,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ]);
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const addTodoItem = (title) => {
        const newItem = {
            id: 4 , 
            title,
            completed:false,
        };
        setTodos((prevState) => [...prevState,newItem])
        setInput('')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodoItem(input)
    }

    const handleChange = (id) => {
        setTodos((prevState) => {
          return prevState.map((todo) => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
              };
            }
            return todo;
          });
        });
      };

    const delTodo = (id) => {
        setTodos((prevState) => {
            return prevState.filter(todo => todo.id !== id)
        })
    }


      
  return (
    <div>
      <Addinput  input={input} handleInput = {handleInput} handleSubmit={handleSubmit}></Addinput>
      <Itemscontainer todos={todos} delTodo={delTodo}  handleChange={handleChange}></Itemscontainer>
    </div>
  )
}

export default Todocontainer
