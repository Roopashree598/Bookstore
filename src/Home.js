import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = ({book}) => {
  return (
    <div className='home'>
        <div className='home_info'>
            
            <p>{book.title}</p>
            <p className='author'>{book.author}</p>
           <Link to='/Details'>
           <button className='details' >details</button>
           </Link>
            
            
           

        </div>
    </div>
  )
}

export default Home