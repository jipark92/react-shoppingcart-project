import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="home-container">
            <div className='motto-container'>
                <div className='motto'>
                    <h1>More</h1>
                    <h1>Ways</h1>
                    <h1>To</h1>
                    <h1>Be</h1>
                    <h1>You</h1>
                    <Link to = '/shop'>
                        <button className='shopnow-btn'>Shop Now</button>
                    </Link>
                </div>
                <div className='motto-img-container'>
                    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="motto pic" className='motto-image'/>
                </div>
            </div>
        </div>
    )
}