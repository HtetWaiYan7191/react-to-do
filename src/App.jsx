import React from 'react'
import './index.css';
import Header from './components/Header';
import Todocontainer from './components/Todocontainer';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Todocontainer></Todocontainer>
    </div>
  )
}

export default App
