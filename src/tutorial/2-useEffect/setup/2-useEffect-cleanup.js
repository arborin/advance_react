import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  
  console.log(size)
  
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  
  useEffect(()=> {
    window.addEventListener('resize', checkSize)
    return () => {
      console.log("Cleanup")
      window.removeEventListener('resize', checkSize)
    }
  }, [])
  
  console.log("!!! render !!!")
  
  return (<>
    <h1>Window</h1>
    <h2>{size} px</h2>
  </>)
};

export default UseEffectCleanup;
