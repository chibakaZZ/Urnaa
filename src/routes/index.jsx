import React from 'react'
import Home from '../pages/Home'
import Products from '../pages/Products'

export default () => (
    <BrowserRouter>
    <Routes/>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
    </BrowserRouter>
)