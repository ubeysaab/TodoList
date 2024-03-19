import { useEffect, useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import Content from "./Components/Content";
import Footer from "./Footer";
import AddComponent from "./Components/AddComponent";
import SearchComponent from "./SearchComponent";
import ColorRender from "./Components/ColorRender";
import apiRequest from "./apiRequest.js";
function App() {

  const API_URL = "http://localhost:3000/items"
  const [items, setItems] = useState([])
  const [todo, setTodo] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError,setFetchError] = useState(null);
  const [isLoading,setIsLoading] = useState(true)


useEffect(()=>{
  // * load the data from RESTAPI and after that we can manage it  in state but then we wil send messages back  to the  RESTAPI  to keep that database in sync with our current state of the application now because we gonna use Async Await it's important to know  that we canno do `async ()=>{}`  with useEffect

//  * we can use fetchApi like this 
  // fetch(API_URL)
  // .then(res=> res.json())
  // .then(data => setItems(data))

// * or define async function that we can call inside of useEffect  we can define that function outside of useEffect and call it if we want to  use that function else where because that it would make it available to the rest  of the application 


const fetchItems = async() => { 
  try {
    const response = await fetch(API_URL)
    if(!response.ok) throw Error("Did Not Receive the Expected Data")
    const listItems = await response.json()
    setItems(listItems)
    setFetchError(null)
  } catch (error) {
    console.log(error)
    setFetchError(error.message)

  }
  finally{
    setIsLoading(false)
  }
}
// //(async()=> await fetchItems())(); *IIFE*


setTimeout(() => {
fetchItems()
  
}, (2000));

},[])


async function  handleAdd(e) {
    e.preventDefault();
    const newItem = {
      id: items.length + 1,
      checked: false,
      title: todo.toLowerCase(),
    };
    if (newItem.title) {
      let newItems = [...items,newItem]
      setItems(newItems)
      const postMethod = {
        method:"POST",
        headers:{
          'Content-Type': "application/json",
          
        },
        body:JSON.stringify(newItem)
      }

      const result = await apiRequest(API_URL,postMethod)
      
      if(result) setFetchError(result)
  
    }
    setTodo("");
  }

  function handleTextChange(e) {
    setTodo(e.target.value);
  }

   async function handleChange(id) {
    let newItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    // * take the item need to update but it will return an array so we used [0]
    let newItem = newItems.filter(item => item.id == id )

    const updateMethod =  {
      method:"PATCH",
      headers:{
        "Content-type":"application/json",

      },
      body: JSON.stringify({checked : newItem[0].checked})
    }

     let result = await apiRequest(`${API_URL}/${id}`,updateMethod) 
     if(result) setFetchError(result)


    setItems(newItems);

  }

  async function handleDelete(id) {
    
    let newItems = items.filter((item) => item.id != id);
    setItems(newItems);

    const deleteMethod = {
      method:"DELETE"
    }

    const result = await apiRequest(`${API_URL}/${id}`,deleteMethod)

    if(result) setFetchError(result)
    

  }

  return (
    <>
      <Header title="Todo List " />
      <AddComponent
        handleAdd={handleAdd}
        handleTextChange={handleTextChange}
        todo={todo}
      />

      { !isLoading  && !fetchError? (
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
        <p style={{ backgroundColor: "blue" }}> Is Loading</p>
      )}

      {/* <ColorRender color={color}  setColor={setColor}/> */}
        {
          fetchError&&
      <p style={{color:"red"}}>
          {fetchError}
      </p>
        }

      <Footer length={items.length} />
    </>
  );
}

export default App;
