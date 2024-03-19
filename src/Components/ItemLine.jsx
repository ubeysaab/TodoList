import React from 'react'
import {FaTrashAlt} from "react-icons/fa"

function ItemLine({item,handleChange,handleDelete}) {
  return (
    <li className='list__item'>
     
     <input id={item.id} type="checkbox" checked={item.checked} onChange={() => handleChange(item.id)} />
      <label htmlFor={item.id}>
        {item.title}
      </label>
   
      <FaTrashAlt className='icon' role='button' onClick={()=>handleDelete(item.id)}/>
    </li>
  )
}

export default ItemLine