import React from 'react'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import Details from './components/Details';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/details/:id' element={<Details />}/>
        <Route path='*' element={<h1>Error 404 !! Page Not Found</h1>}/>
      </Routes>
  
    </div>
  )
}

export default App


