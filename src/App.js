import Header from './Header';
import './App.css';
import './index.css';
import Books from './Books';
import { useState ,useEffect } from 'react'
import AddBooks from './AddBooks';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Details from './Details';


function App() {
  const[showAddBooks ,setShowAddBooks]=useState(false)
  const[fil_books]=useState('')
   const [books ,setBooks]=useState([
     {
     id: 9781593275846,
     title: "Eloquent JavaScript, Second Edition",
     author: "Marijn Haverbeke",
     
   },
   {
     id: 9781449331818,
     title: "Learning JavaScript Design Patterns",
     
     author: "Addy Osmani",
     
   },
   {
     id: 9781449365035,
     title: "Speaking JavaScript",
     
     author: "Axel Rauschmayer",
     
   },
   {
     id: 9781491950296,
     title: "Programming JavaScript Applications",
    
     author: "Eric Elliott",
     
   },
   {
     id: 9781593277574,
     title: "Understanding ECMAScript 6",
   
     author: "Nicholas C. Zakas",
     
   },
   {
     id: 9781491904244,
     title: "You Don't Know JS",
     
     author: "Kyle Simpson",
     
   },
   {
     id: 9781449325862,
     title: "Git Pocket Guide",
     
     author: "Richard E. Silverman",
     
   },
   {
     id: 9781449337711,
     title: "Designing Evolvable Web APIs with ASP.NET",
     
     author: "Glenn Block, et al.",
     
   }]);
   const addBooks =(book) =>{
      const id = Math.floor(Math.random() * 10000) + 1
      
    const newBook = { id, ...book }
    setBooks([...books, newBook])
   }
 
  return (
      <Router>
        <div className="container">
        <Routes>
           <Route exact path='/' element={
            <>
           
               {<Header />}
               {<Books books={books} />}
               {/* {<Books/} */}
               
            </>
            } / >
            <Route path='/AddBooks' element={
            <>
               {<AddBooks onAdd={addBooks}/>}
            </>
            } / >
               
               <Route path="details">
        <Route path=":id" element={<Details books={books}   key={books.id}/>} />
       
      </Route>
             

          {/* <Route path="/Details/:id" element={
              <>
              {<Details books={books} />}
          </>

          } 
             
            /> */}
         
           
  
         </Routes>
         </div>
      </Router>
);

}
export default App;

