import React from 'react'

const TodoItem = ({ itemProp }) => {
    return (
      <ul>
        {itemProp.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    );
  };
  

export default TodoItem
