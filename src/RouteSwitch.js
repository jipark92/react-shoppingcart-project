import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav'
import Home from './components/Home';
import Shop from './components/Shop';

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}/> 
                <Route path='/home' element={<Home/>}/> 
                <Route path='/shop' element={<Shop/>}/>
            </Routes>
        </BrowserRouter>
    )
}
