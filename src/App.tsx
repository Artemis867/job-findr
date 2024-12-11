import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {

  const routesMarkup = (
    <Router>
        <Routes>
          {/* Your routes go here */}
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  );

  return (
    <>
      {routesMarkup}
    </>
  )
}

export default App
