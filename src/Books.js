import React from 'react'
import './Books.css';
import Home from './Home';

const Books = ({books}) => {
  return (
    <div>
      <div className="books">
          <div className="home_container">
              {books.map((book)=>(
                  <div className='books_row'>
                      <Home key={book.id} book ={book}/>
                         
                      <Home key={book.id} book ={book}/>
                   </div>
              ))}
                     
          </div>
      </div>
    </div>
  )
}

export default Books