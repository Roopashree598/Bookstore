import React from 'react'
import { useParams } from 'react-router-dom'
import { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'

const Details = ({books}) => {
  
  const [newItem,setB] = useState('');
  let { id } = useParams();
  console.log(id)
  const filltered = () => {
      const newItem = books.filter((newVal) => {return newVal.id === id;}
    );
    console.log(newItem)
    setB(newItem);
  };
    useEffect(() => {
    filltered();
  }, [id]);
  return (
    <div>
      <div>
          <Link className='btn' to='/'>Close
          </Link>
      </div>
         <div>
              {/* {books && books.filter ((book)=> book.id === id ).map ((book)=> book.author )} */}
              <p>{newItem.title}</p>
         </div>  
      </div>
  )
}

export default Details