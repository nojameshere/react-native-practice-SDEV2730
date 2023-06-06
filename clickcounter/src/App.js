import React from 'react';
import CountButtons from './components/CountButton.js';
import './App.css'

const App = () => {
  return(
    <div className='counterContainer'>
      <h1>Click Counter</h1>
      <CountButtons />
    </div>
  )
}

export default App;
