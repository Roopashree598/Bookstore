import React from 'react'
import './Detail.css'
import { useParams } from 'react-router-dom'
import { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'

const Details = ({books}) => {
  
  const [bookDetails, setBookDetails] = useState({});
  let { dog } = useParams();

  const filltered = (id) => {
    const newItem = books.filter((book) => {
      return book.id.toString() === id;
    });
    setBookDetails(...newItem);
    console.log(bookDetails)
  };

  useEffect(() => {
    filltered(dog);
  }, [dog]);
  return (
    <div className='detail_page'>
      <div className='detail_row'>
         <div className='detail_info'>
              {/* {books && books.filter ((book)=> book.id == id ).map ((book)=> book.author )} */}
              <h3>{bookDetails.title}</h3>
              <p><b>Author: </b>{bookDetails.author}</p>
              <p>{bookDetails.description}</p>
              <p><b>Pages: </b>{bookDetails.pages} pg</p>
              <p><b>Published By:  </b>{bookDetails.publisher} <b> On </b>{bookDetails.published}</p>
              
              
              
         </div>  
         <div className='detail_image'>
         <img src={bookDetails.image} alt="" />
         </div>  
        
         </div>
         <div>
          <Link  to='/'>
            <button className='btn'> Close</button>
          </Link>
      </div>
      </div>
  )
}

export default Details