import React from 'react'
import './content.css'
import ItemLists from './ItemLists'

const Content = ({item,handleCheck,handleDelete} ) => {

  return (
    <main>
      { (item.length) !== 0 ?(
        <ItemLists
        item={item}
        handleCheck={handleCheck}
        handleDelete={handleDelete}></ItemLists>
      ):<p style={{fontSize: "2rem"}}>nothing to show</p>}
    </main>

  )
}

export default Content