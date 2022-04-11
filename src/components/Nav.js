import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <header className='header-container'>
            <Link to="/home">
                <h1 className='store-name'><u>FakeStore</u></h1>
            </Link>
            <nav className='nav-container'>
                <ul className='navigation'>
                    <Link to ='/home'>
                        <li>Home</li>
                    </Link>
                    <Link to ='/shop'>
                        <li>Shop</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}
