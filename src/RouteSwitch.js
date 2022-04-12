import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav'
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}/> 
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/contact' element={<Contact/>}/> 
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}