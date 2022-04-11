import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <header className='header-container'>
            <Link to="/">
                <div className='logo-container'>
                    <img src="https://img.icons8.com/cotton/344/shop--v3.png" alt="logo" className='logo-img'/>
                    <h1 className='store-name'><u>FakeStore</u></h1>
                </div>
            </Link>
            <nav className='nav-container'>
                <ul className='navigation'>
                    <Link to ='/shop'>
                        <li>Shop</li>
                    </Link>
                    {/* <Link to ='/cart'>
                        <li>Cart</li>
                    </Link> */}
                </ul>
            </nav>
        </header>
    )
}