import React from 'react'
import { useParams } from 'react-router-dom'
import { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'

const Details = ({books}) => {
  
  const [bookDetails, setBookDetails] = useState({});
  let { id } = useParams();

  const filltered = (id) => {
    const newItem = books.filter((book) => {
      return book.id.toString() === id;
    });
    setBookDetails(...newItem);
    console.log(bookDetails)
  };

  useEffect(() => {
    filltered(id);
  }, [id]);
  return (
    <div>
      <div>
          <Link className='btn' to='/'>Close
          </Link>
      </div>
         <div>
              {/* {books && books.filter ((book)=> book.id == id ).map ((book)=> book.author )} */}
              <h3>{bookDetails.title}</h3>
              <p>{bookDetails.author}</p>
              <p>{bookDetails.published}</p>
              <p>{bookDetails.publisher}</p>
              <p>{bookDetails.pages}</p>
              <p>{bookDetails.description}</p>
         </div>  
      </div>
  )
}

export default Details