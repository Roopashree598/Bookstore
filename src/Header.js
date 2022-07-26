import React from 'react'
import './Header.css'
import AddBooks from './AddBooks'
import { Link } from 'react-router-dom'


const Header = () => {
  return(
    <div className='header'>
    <h1 >Book store</h1>
    
    <Link to='/AddBooks'>
    
      <button  className='btn' >Add Books</button>
    </Link>
   </div>
   )
}

export default Header;