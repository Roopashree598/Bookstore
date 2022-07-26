import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './AddBooks.css'


const AddBooks = ({onAdd}) => {
  const [title,SetName]=useState('')
  const [author,SetAuthor]=useState('') 

  const submit= (e)=> {
      e.preventDefault();

      if (!title) {
        alert('Please enter book details')
        return
      }
  
      onAdd({ title, author })
        
      SetName('')
        
      SetAuthor('')
  }

  return (
        <div className='addbooks_main'>
          <div>
            <Link to='/'>
              <button className='btn' >Close</button>
            </Link>
          </div>
            <form className='add-form' onSubmit={submit}>
            <div className='form-control'>
            <label >Book  name</label>
            <input type= "text"
            value={title} 
            onChange = {(e)=>SetName(e.target.value)}/>
            </div>
            <div className='form-control'>
            <label>Author  name</label>
            <input type= "text"
             value={author} 
             onChange ={(e) => SetAuthor(e.target.value)}/>
            </div>
            <input type='submit' value='Save Book' className='btn btn-block' />
            
        </form>
        </div>
       
   
  )
}

export default AddBooks