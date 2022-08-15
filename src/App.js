import React from 'react'
import Login from './components/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage';

const App = () => {

  return (
    <>
    
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/Dashboard' element={<Homepage/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App