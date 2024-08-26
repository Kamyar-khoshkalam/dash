import React from 'react'
import { useState } from 'react';

const Header = () => {
  const hdstyle ={
    color : "blue",
    backgroundColor: "royalBlue",
    
  };

  const [adad , setAdad]=useState(50)

  const multiply = ()=>{
    setAdad (adad * 2)
  }
  return (
    <div style={hdstyle}>
      <p>{adad}</p>
      <button onClick={()=>multiply()}> sadkkaldjs</button>
    </div>
  )
}

export default Header