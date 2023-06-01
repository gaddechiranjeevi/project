import React, { useState } from 'react';

const Button = () => {
  const [isTrue, setIsTrue] = useState(true);

  const handleClick = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div className='third'>
    <h2>{isTrue ? 'True' : 'False'}</h2>
    <p>Click on Button to change the value of variable</p>
    <button
      style={{ backgroundColor: isTrue ? 'blue' : 'red' }}
      onClick={handleClick}
    >
      {isTrue ? 'True' : 'False'}
    </button>
    </div>
  );
};

export default Button;
