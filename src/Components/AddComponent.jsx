import { React, useRef, useState } from "react";
import { MdAdd } from "react-icons/md";
function AddComponent({ handleAdd, handleTextChange, todo }) {
  let inputRef = useRef()
  return (
    <form action="" className="addcom" onSubmit={handleAdd}>
      <input
        ref={inputRef}
        required
        type="text"
        value={todo}
        onChange={handleTextChange}
        placeholder="Add new task to the list"
        pattern="[a-z A-z0-0]{6,50}"
      />
      <button aria-label={`add new item`}
          // onClick={() => handleAdd(todo)}
          type="submit"
          onClick={()=> inputRef.current.focus()}
          className="addIcon">
          
        <MdAdd
          
        />
      </button>
    </form>
  );
}

export default AddComponent;
