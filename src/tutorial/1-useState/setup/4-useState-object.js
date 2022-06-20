import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name: "nikooo", age: 12, message: "gamarjoba"})
  
  console.log(person)
  
  const changeName = () => {
    

    setPerson({...person, message: 'jemal'})
  }
  
  return (<div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeName}>changeName</button>
  </div>)
};

export default UseStateObject;
