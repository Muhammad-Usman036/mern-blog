import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
// 
const App = () => {
  return (
    <div className='text-3xl text-red-500'>
      <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/projects" element={<Projects/>} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
