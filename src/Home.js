import React from 'react'
import './Home.css'

const Home = ({title,author}) => {
  return (
    <div className='home'>
        <div className='home_info'>
            <p>{title}</p>
            <p className='author'>{author}</p>
           
            <button className='details'>details</button>
            
           

        </div>
    </div>
  )
}

export default Home