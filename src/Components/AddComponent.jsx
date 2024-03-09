import {React, useState} from 'react'
import { MdAdd } from "react-icons/md";
function AddComponent({handleAdd}) {

  const [todo, setTodo] = useState("");
  function handleChange(e){
    setTodo(e.target.value)

  }
  return (
    <form action="" className='addcom' onSubmit={e=> e.preventDefault()}>
      <input  required type="text"  value={todo} onChange={handleChange} placeholder='Add new task to the list' pattern='[a-zA-z0-0]{6,50}'/>
      <MdAdd   aria-label ={`add new item`} role="button" onClick={()=>handleAdd(todo)} className='addIcon'/>
    </form>
  )
}

export default AddComponent