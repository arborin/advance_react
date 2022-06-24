import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const reducer = (state, action) => {
  
}

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: 'Hello world'
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer)
  const [showModal, setShowModal] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(name){
      setShowModal(true)
      // setPeople([...people, {id:new Date().getTime().toString(), name}])
      // setName('')
    }else{
      setShowModal(true)
    }
    console.log("SUBMIT!")
  }
  
  
  return <>
    {showModal && <Modal/>}
    <form onSubmit={handleSubmit}>
      <div>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        
      </div>
      <button type='submit'>add</button>
    </form>
    {
      people.map((person)=>{
        return (
          <h4>{person.name}</h4>
        )
      })
    }
  </>
};

export default Index;
