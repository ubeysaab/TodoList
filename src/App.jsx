import { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import Content from "./Components/Content";
import Footer from "./Footer";
import AddComponent from "./Components/AddComponent"

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      title: "talk to family",
    },
    {
      id: 2,
      checked: false,
      title: "buy milk",
    },
    {
      id: 3,
      checked: false,
      title: "buy a cake",
    },
  ]);
  // console.log(items);



function handleAdd(title){
  const newItem = {
    id : items.length+1,
    checked:false,
    title : title,
  }
  if(newItem.title){

    setItems(prev => [...prev,newItem])
  }
}







  function handleChange(id) {
    let newItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newItems);
  }

  function handleDelete(id) {
    let newItems = items.filter((item) => item.id != id);
    setItems(newItems);
  }

  return (
    <>
      <Header title="Todo List " />
      <AddComponent handleAdd={handleAdd}/>
      {items.length ? (
        <Content
          items={items}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{backgroundColor:"blue"}}> There is not thing to do </p>
      )}
      <Footer length={items.length} />
    </>
  );
}

export default App;
