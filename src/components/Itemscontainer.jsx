import React from 'react'
import Todoitem from './TodoItem'


const Itemscontainer = ({ todos, setTodos }) => {
    return (
      <ul>
        {todos.map((todo) => (
          <Todoitem key={todo.id} itemProp={todo} setTodos={setTodos} />
        ))}
      </ul>
    );
  };
  

export default Itemscontainer
