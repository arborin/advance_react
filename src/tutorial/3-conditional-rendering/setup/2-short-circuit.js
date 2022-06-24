import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  
    const [text, setText] = useState('k')
    const [isError, setIsError] = useState(true)
    
  
    // const firstValue = text || 'hello world';
    // const secondValue = text && 'hello world';

    return <>
            <button className='btn' onClick={()=>setIsError(!isError)}>Toggle Error</button>
            
            <h1>{isError}{isError ? 'Error' : "No Error..."}</h1>
        </>
};

export default ShortCircuit;
