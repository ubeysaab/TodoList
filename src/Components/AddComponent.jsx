import { React, useState } from "react";
import { MdAdd } from "react-icons/md";
function AddComponent({ handleAdd, handleTextChange, todo }) {
  return (
    <form action="" className="addcom" onSubmit={handleAdd}>
      <input
        required
        type="text"
        value={todo}
        onChange={handleTextChange}
        placeholder="Add new task to the list"
        pattern="[a-zA-z0-0]{6,50}"
      />
      <button aria-label={`add new item`}
          // onClick={() => handleAdd(todo)}
          type="submit"
          className="addIcon">
        <MdAdd
          
        />
      </button>
    </form>
  );
}

export default AddComponent;
