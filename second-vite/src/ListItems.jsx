import React from 'react'

const ListItems = ({item,handleCheck,handleDelete}) => {
  return (
    <li className='item'>
              <input
                type='checkbox'
                checked={item.checked}
                onChange={()=>handleCheck(item.id)}
              >
              </input>
              <label style={(item.checked) ? {textDecoration:'line-through'}:null}>{item.item}</label>
              <button onClick={()=>handleDelete(item.id)}>delete</button>
            </li>
  )
}

export default ListItems