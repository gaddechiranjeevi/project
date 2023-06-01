import React, { useState } from 'react';
import ComponentB from './ComponentB';


const ComponentA = () => {
  const [cendol, setCendol] = useState(2);

  const handleButtonClick = () => {
    setCendol(cendol + 10);
  };

  return (
    <div className='componentA'>
      <ComponentB cendol={cendol} />
      <button onClick={handleButtonClick}>Increment</button>
    </div>
  );
};

export default ComponentA;
