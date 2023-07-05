import React, { useState } from 'react'
import Addinput from './Addinput'
import Itemscontainer from './Itemscontainer'
const Todocontainer = () => {
    const [todos, setTodos] = useState([
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
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


      const handleClick = () => {
        if(input != '') {
            setTodos((prev) => [...prev, input]);
            setInput('')
        }
      };

      const handleChange = (e) => {
        console.log(e.target.value)
        if(e.target.value != "") {
        setInput(e.target.value);
        }
    }
      
  return (
    <div>
      <Addinput handleClick={handleClick} input={input} handleChange={handleChange}></Addinput>
      <Itemscontainer todos={todos} setTodos={setTodos}></Itemscontainer>
    </div>
  )
}

export default Todocontainer
