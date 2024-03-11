import React from 'react'
import { FaSearch } from 'react-icons/fa'
function SearchComponent({search,setSearch,handleSearch}) {
  return (
    <form action="" onSubmit={e=> e.preventDefault()}>
      <input type="text" name="" id=""  value={search}  onChange={e=> setSearch(e.target.value)}/>
      <button>
        <FaSearch/>
      </button>
    </form>
  )
}

export default SearchComponent