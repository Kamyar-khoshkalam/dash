import React from 'react';
import './content.css';
import ItemList from './ItemList';

const Content = ({item,handleCheck,handleDelete}) => {



  return (
    <main>
      {(item.length)!==0 ? (
        <ItemList 
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}></ItemList>
      ):(<p>done</p>)}
      
    </main>

  )
}

export default Content