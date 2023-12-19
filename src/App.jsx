import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Listing from './pages/Listing'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/listing*" element={<Listing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
