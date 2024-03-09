import React from 'react'

function Header(props) {
  return (
    <header className='header'>
        {props.title}
    </header>
  )

}

Header.defaultProps ={
  title:"hello ubey"
}
export default Header