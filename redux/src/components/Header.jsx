import React from 'react'
import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <nav className='navbar'>
                <h1><Link to="/">Logo</Link> </h1>
                <ul>
                    <li className='cart'><Link to="/cart">Cart</Link></li>
                    <li>Cart No = 3</li>
                </ul>
            </nav>
        </>
    )
}

export default Header