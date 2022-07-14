import React from 'react'
import './Books.css';
import Home from './Home';

const Books = () => {
  return (
    <div className="books">
    <div className="home_container">
    
            <div className='books_row'>
            <Home 
              title= "Eloquent JavaScript, Second Edition"
              
              author="-by Marijn Haverbeke"/>
               
               <Home 
              title= "Learning JavaScript Design Patterns"
              author="-by Addy Osmani"/>
            </div>
            <div className='books_row'>
            <Home 
              title= "Speaking JavaScript"
              author="-by Axel Rauschmayer"/>
            
            <Home 
              title= "Programming JavaScript Applications"
              author="-by O'Reilly Media"/>

            </div>
            <div className='books_row'>
            <Home 
              title= "Understanding ECMAScript 6"
              author="-by Nicholas C. Zakas"/>
            
            <Home 
              title= "You Don't Know JS"
              author="-by O'Reilly Media"/>

            </div>
            <div className='books_row'>
            <Home 
              title= "Git Pocket Guide"
              author="-by Richard E. Silverman"/>
            
            <Home 
              title= "Designing Evolvable Web APIs with ASP.NET"
              author="-by Glenn Block, et al."/>

            </div>

        </div>
    </div>
  )
}

export default Books