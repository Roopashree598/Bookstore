import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AddBooks.css'


const AddBooks = (onAdd) => {
  const [name,SetName]=useState('')
  const [author,SetAuthor]=useState('') 

  const submit= (e)=> {
      e.preventDefault();

      if (!name) {
        alert('Please add a task')
        return
      }
  
      onAdd({ name, author })
  
      SetName('')
      SetAuthor('')
     

  }

  return (
        <div>
          <div>
            <Link className='btn' to='/'>Close
            </Link>
          </div>
            <form className='add-form' onSubmit={submit}>
            <div className='form-control'>
            <label value={name} onChange = {(e)=>SetName(e.target.value)}>Book  name</label>
            <input type= "text"/>
            </div>
            <div className='form-control'>
            <label value={author} onChange ={(e) => SetAuthor(e.target.value)}>Author  name</label>
            <input type= "text"/>
            </div>
            <input type='submit' value='Save Book' className='btn btn-block' />
            
        </form>
        </div>
       
   
  )
}

export default AddBooks