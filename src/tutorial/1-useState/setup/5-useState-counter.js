import React, { useState } from 'react';

const UseStateCounter = () => {
  
  const [value, setValue] = useState(0)
  
  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevState)=>{
        return prevState + 1;
      })
    }, 2000)
  }
  
  
  const reset = () => {
    setValue(0)
  }
  return (
    <>
      <section style={{ margin: '4rem 0'  }}>
        <h2>Recular counter</h2>
        <h2>{value}</h2>
        <button className='btn' onClick={()=>setValue(value - 1 )}>Decrease</button>
        <button className='btn' onClick={reset}>Reset</button>
        <button className='btn' onClick={()=>setValue(value + 1 )}>Increase</button>
      </section>
      
      <section style={{ margin: '4rem 0'  }}>
        <h2>More Complex Counter</h2>
        <h2>{value}</h2>
        <button className='btn' onClick={complexIncrease}>Increase later</button>
      </section>
    </>
  )
};

export default UseStateCounter;
