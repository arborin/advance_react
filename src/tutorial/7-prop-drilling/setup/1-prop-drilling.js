import React, { useState } from 'react';
import { data } from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  // 1. init people with data
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    console.log(removePerson)
    setPeople((people)=>{
      return people.filter((person) => person.id !== id )
    })
  }
  
  // 2. return 
  // pass data to component
  return (<section>
    <h3>prop drilling</h3>
    <List people={people} removePerson={removePerson}/>
    </section>)
};


const List = ({people, removePerson}) => {
  return <>
    {
      people.map((person) => {
        return <SinglePerson key={person.id} {...person} removePerson={removePerson}/>
      })
    }
  </>
}

const SinglePerson = ({id, name, removePerson}) => {
  return <div className='item'>
    <h4>{id} -- {name} </h4>
    <button type='button' onClick={() => removePerson(id)}>Remove</button>
  </div>
}


export default PropDrilling;
