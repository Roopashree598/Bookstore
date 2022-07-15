import Header from './Header';
import './App.css';
import './index.css';
import Books from './Books';
import { useState ,useEffect } from 'react'
import AddBooks from './AddBooks';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';



function App() {
  // const[showAddBooks ,setShowAddBooks]=useState(false)

  return (
    <Router>
        <div className="container">
        <Routes>
           <Route path='/' element={
            <>
           
               {<Header />}
               {<Books />}
            </>
            } / >
            <Route path='/AddBooks' element={
            <>
           
               
               {<AddBooks />}
            </>
            } / >
            
        </Routes>
      </div>
    </Router>
   );
}

export default App;

