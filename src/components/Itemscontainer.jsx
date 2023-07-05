import React from 'react'
import Todoitem from './TodoItem'


const Itemscontainer = ({todos}) => {
  return (
    <div>
      <Todoitem itemProp={todos}></Todoitem>
    </div>
  )
}

export default Itemscontainer
