import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = ({book,showDet}) => {
  return (
    
    <div className='home'>
        <div className='home_info'>
            
            <p>{book.title}</p>
            <p className='author'>By {book.author}</p>
            
            <Link to={`/Details/${book.id}`} >
            
           <button className='details' >Details</button>
           </Link>
            
            
           

        </div>
    </div>
  )
}

export default Home