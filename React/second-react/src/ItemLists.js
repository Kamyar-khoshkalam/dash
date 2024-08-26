import React from 'react'
import Listitems from './Listitems'

const ItemLists = ({item,handleCheck,handleDelete}) => {
  return (
    <ul>
          {item.map((item)=>(
            <Listitems
            item={item}
            handleCheck={handleCheck} 
            handleDelete={handleDelete}></Listitems>
          ))}
    </ul>
  )
}

export default ItemLists