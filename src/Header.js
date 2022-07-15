import React from 'react'
import './Header.css'
import AddBooks from './AddBooks'
import { Link } from 'react-router-dom'


const Header = () => {
  return(
    <div className='header'>
    <h1 >Book store</h1>
    {/* <h1>Add Books</h1> */}
    <Link className="btn" to='/AddBooks'>
      Add Books
    </Link>
   </div>
   )
}

export default Header;