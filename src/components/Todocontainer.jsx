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


      
  return (
    <div>
      <Addinput  input={input}></Addinput>
      <Itemscontainer todos={todos} setTodos={setTodos}></Itemscontainer>
    </div>
  )
}

export default Todocontainer
