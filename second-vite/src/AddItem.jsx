import React from 'react'
import './AddItem.css'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="additem">Add Item</label>
        <input autoFocus 
        id='addItem' 
        type="text" 
        placeholder='add Item'
        required 
        value={newItem}
        onChange={(e)=>setNewItem(e.target.value)}
        />
        <button
        type='submit'
        aria-label='Add Item'
        className='shsh'
        >
        </button>
    </form>
  )
}

export default AddItem