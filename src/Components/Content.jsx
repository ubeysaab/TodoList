import {React,useState} from 'react'
import ItemLine from './ItemLine'
function Content({items,handleChange,handleDelete}) {

  return (
    <main className="content">
      {items.map(item => <ItemLine key={item.id} item={item}
      handleChange={handleChange} handleDelete={handleDelete}
      />)}

    </main>
  )
}

export default Content