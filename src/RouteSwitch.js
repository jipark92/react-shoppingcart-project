import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav'

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/nav' element={<Nav />}/>
            </Routes>
        </BrowserRouter>
    )
}
