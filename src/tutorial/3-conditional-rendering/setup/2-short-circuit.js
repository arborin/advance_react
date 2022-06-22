import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  
  const [text, setText] = useState('k')
  
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello w11orld';
  
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return <>
          <h1>{text&&123}</h1>
          
          </>
};

export default ShortCircuit;
