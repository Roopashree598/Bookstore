import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AddBooks.css'


const AddBooks = () => {
  return (
        <div>
          <div>
            <Link className='btn' to='/'>Close
            </Link>
          </div>
            <form className='add-form'>
            <div className='form-control'>
            <label>Book  name</label>
            <input type= "text"/>
            </div>
            <div className='form-control'>
            <label>Author  name</label>
            <input type= "text"/>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block' />
            
        </form>
        </div>
       
   
  )
}

export default AddBooks