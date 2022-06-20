import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  // WITHOUT IMPORT
  const [people, setPeople] = React.useState(data)
  
  console.log(people)
  
  const removeItem = (id) => {
    let newPeople = people.filter((person)=>person.id !== id)
    
    setPeople(newPeople)
  }
  
  return (<div>
          {
            people.map((person) => {
              const {id, name} = person;
              console.log(person)
              
              return (<div key={id} className='item'>
                          {name} <button className='' onClick={() => removeItem(id)}>Remove</button>
                      </div>)
              
            }) 
          }
          
        </div>)
};

export default UseStateArray;
