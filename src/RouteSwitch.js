import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav'
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart'

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}/> 
                <Route path='/shop' element={<Shop/>}/>
                {/* <Route path='/cart' element={<Cart/>}/>  */}
            </Routes>
        </BrowserRouter>
    )
}