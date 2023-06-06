import React, { useState } from 'react';
import '../css/CountButton.css';

const CountButton = ({ buttonText, onButtonClick, id }) => {
  return <button className='countButton' id={id} onClick={onButtonClick}>{buttonText}</button>;
};

const CountButtons = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='countButtonContainer'>
      <CountButton buttonText="-" onButtonClick={handleDecrement} id='minus' />
      <p>{count}</p>
      <CountButton buttonText="+" onButtonClick={handleIncrement} id='plus'/>
    </div>
  );
};

export default CountButtons;
