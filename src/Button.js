import React from 'react'
import './Button.css'
import './AddBooks.js'
import AddBooks from './AddBooks.js'

const Button = ({onClick}) => {
   
  return (
    <button onClick={onClick} className="btn">Add Books</button>
  )
}

export default Button