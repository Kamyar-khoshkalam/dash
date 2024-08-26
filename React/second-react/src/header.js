import React from 'react'


const Header = ({title}) => {
  return (
    <header className='ali'>
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps= {
  title: "defff"
}

export default Header