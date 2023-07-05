import React, { useState } from 'react'

const Addinput = ( {input, handleInput, handleSubmit, message}) => {

  return (
    <>
     <form>
      <input type="text" value={input} onChange={handleInput} placeholder='Add todo...' />
      <button type='button' onClick={handleSubmit}>Add List </button>
    </form>
    <span>{message}</span>
    </>
   
  )
}

export default Addinput
