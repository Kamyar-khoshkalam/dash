import { useState } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import AddItem from './AddItem'

function App() {

  const [item  , setItem]=useState([
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
  ]);

  const [newItem,setNewItem]= useState('');

  const setAndSave= (newItem)=>{
    setItem(newItem)
    localStorage.setItem('shoppingList',JSON.stringify(newItem))
    };

  const handleCheck = (id) =>{
    const newItem = item.map((item)=>(item.id === id ? {...item, checked: !item.checked} : item))
    setAndSave(newItem);
  }
    
  const handleDelete = (id)=>  {
    const newItem = item.filter((item)=>(item.id !== id))
    setAndSave(newItem);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem)
    setNewItem('');
  }

  const addItem = (item) => {
    const id = item.length !==0 ? (item.length - 1).id + 1 : 1;
    const myNewItem = {id, checked:false, item,}
    const newItem = [...item , myNewItem]
    setAndSave(newItem)
  }

  return (
    <>
      <div className='App'>
        <Header/>
        <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        />
        <Content 
        item ={item}
        handleCheck={handleCheck}
        handleDelete={handleDelete}/>
        <Footer length={item.length}/>
      </div>
    </>
  )
}
export default App



// blood