import React from 'react'
import './Header.css'
import './Button.js'
import Button from './Button.js'
import AddBooks from './AddBooks'
import { useState } from 'react'

const Header = () => {

  return (
    <div className='header'>
      <h1 >Book store</h1>
        <Button  />
    </div>
  )
}

export default Header;