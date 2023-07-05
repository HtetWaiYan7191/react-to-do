import React from 'react'

const Addinput = ({handleClick, input, handleChange}) => {

  return (
    <div>
      <input type="text" value={input} placeholder='Add todo...' onChange={handleChange} />
      <button type='button' onClick={handleClick}>Add List </button>
    </div>
  )
}

export default Addinput
