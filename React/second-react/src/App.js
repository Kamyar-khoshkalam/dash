import './App.css';
import Header from './header';
import Content from './content';
import Footer from './footer';
import { useState } from "react"

function App() {

  const [item , setItem]=useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted"
  },
  {
      id: 2,
      checked: false,
      item: "Item 2"
  },
  {
      id: 3,
      checked: false,
      item: "Item 3"
  }
  ])

  const handleCheck = (id)=>{
    const newItem = item.map((item)=> id === item.id ? { ...item , checked: !item.checked} : item);
    setItem(newItem)
    localStorage.setItem("shoppingList",JSON.stringify(newItem))
  }

  const handleDelete = (id)=>{
    const newItem = item.filter((item)=>(
      id !== item.id 
    ));
    setItem(newItem)
    localStorage.setItem("shoppingList",JSON.stringify(newItem))
  }

  return (
    <div className="App">
      <Header  title="Groceries"/>
      <Content 
      item ={item}
      handleCheck={handleCheck}
      handleDelete={handleDelete}></Content>
      <Footer length={item.length}></Footer>
    </div>
  );
}

export default App;
