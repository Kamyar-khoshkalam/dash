import React from 'react'

const Listitems = ({item,handleCheck,handleDelete}) => {
  return (
    <li className='item' key={item.id}>
              <input
                type='checkbox'
                checked={item.checked}
                onClick={()=>handleCheck(item.id)}
              >
              </input>
              <label style={(item.checked) ? {textDecoration:"line-through"}:null }>{item.item}</label>
              <button onClick={()=>handleDelete(item.id)}>delete</button>
    </li>
  )
}

export default Listitems