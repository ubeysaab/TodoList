import { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import Content from "./Components/Content";
import Footer from "./Footer";
import AddComponent from "./Components/AddComponent";
import SearchComponent from "./SearchComponent";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todoList")))
  // console.log(items);

  const [todo, setTodo] = useState("");

  const [search, setSearch] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    const newItem = {
      id: items.length + 1,
      checked: false,
      title: todo.toLowerCase(),
    };
    if (newItem.title) {
      let newItems = [...items,newItem]
      setItems(newItems)
      localStorage.setItem("todoList",JSON.stringify(newItems))

    }
    setTodo("");
  }

  function handleTextChange(e) {
    setTodo(e.target.value);
  }

  function handleChange(id) {
    let newItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newItems);
    localStorage.setItem("todoList",JSON.stringify(newItems))

  }

  function handleDelete(id) {
    let newItems = items.filter((item) => item.id != id);
    setItems(newItems);
    localStorage.setItem("todoList",JSON.stringify(newItems))

  }


  // function handleSearch(e){
  //   e.preventDefault()
  //   let searchedItems = items.filter( item => item.title.includes(search.toLowerCase()))
  //   setItems(searchedItems)
  //   setSearch("")
  // }

  return (
    <>
      <Header title="Todo List " />
      <AddComponent
        handleAdd={handleAdd}
        handleTextChange={handleTextChange}
        todo={todo}
      />
      {items.length ? (
        <>
          <SearchComponent  
          // handleSearch={handleSearch}
          setSearch={setSearch}
          search={search}/>
          <Content
            items={items.filter(item => item.title.includes(search.toLowerCase()))}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />
        </>
      ) : (
        <p style={{ backgroundColor: "blue" }}> There is not thing to do </p>
      )}
      <Footer length={items.length} />
    </>
  );
}

export default App;
