import React from 'react'
import "./App.css"

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from './components/Cart'
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/details' element={<ProductDetails />} />
        </Routes>

        <Footer />
      </BrowserRouter>


    </>

  )
}

export default App