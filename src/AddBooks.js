import React, { useState } from 'react'

const AddBooks = () => {
    
   
  return (
   
        <form>
            <div>
            <label>Book  name</label>
            <input type= "text"/>
            </div>
            <div>
            <label>author  name</label>
            <input type= "text"/>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block' />
            
        </form>
   
  )
}

export default AddBooks