import React from 'react'

export default function Nav() {
    return (
        <header className='header-container'>
            <h1>FakeStore</h1>
            <nav className='nav-container'>
                <ul className='navigation'>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Contact</li>
                    {/* <li>Cart</li> */}
                </ul>
            </nav>
        </header>
    )
}
