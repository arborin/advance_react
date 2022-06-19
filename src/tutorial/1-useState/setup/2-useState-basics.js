import React, { useState } from 'react';

const UseStateBasics = () => {
 
  const handleClick = () => {
    setText('new text')
  }
  
  const [text, setText] = useState('random title')
  
  return (<React.Fragment>
      <h2>{text}</h2>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>)
};

export default UseStateBasics;
