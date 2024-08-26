import React from 'react'
import ListItems from './ListItems'

const ItemList = ({item,handleCheck,handleDelete}) => {
  return (
    <ul>
          {item.map((item)=>(
            <ListItems 
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}></ListItems>
          ))}
    </ul>
  )
}

export default ItemList