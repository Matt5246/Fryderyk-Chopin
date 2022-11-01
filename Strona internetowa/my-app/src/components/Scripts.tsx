import React, {useState} from 'react'

function Scripts(props: { onSubmit: (arg0: { id: number; text: string; }) => void; }) {
const [input, setInput] = useState('')
const handleSubmit = () =>{
    // preventsDefault();
    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    })
}
  return (
   <form className='todo-form' onSubmit={handleSubmit}>
    <input 
        type='text' 
        placeholder='Add a todo' 
        value={input}
        className='todo-input'
    />

    <button className='todo-button'>Add todo</button>
   </form>
  )
}

export default Scripts
