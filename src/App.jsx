import React from 'react'
import HomePage from './Pages/HomePage'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Models_3d from './Pages/Models_3d';


const App = () => {
  return (
   <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/3D-Models" element={ <Models_3d/> } />
    
    </Routes>

  )
}

export default App