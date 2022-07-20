import React from 'react'
import './Books.css';
import Home from './Home';

const Books = ({books,showDet}) => {
  
  return (
    <div>
      <div className="books">
          <div className="home_container">
              {books.map((book)=>(
                  <div className='books_row'>
                    <Home key={book.id} book ={book} showDet={showDet}/>

                  </div>
              ))} 
          </div>
      </div>
    </div>
  )
}

export default Books