import React from 'react'

const Addinput = ( {input}) => {

  return (
    <div>
      <input type="text" value={input} placeholder='Add todo...' />
      <button type='button'>Add List </button>
    </div>
  )
}

export default Addinput
