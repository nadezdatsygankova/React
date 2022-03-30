import React from "react"
import Logo from '../airbnb_logo.svg'


export default function Navbar() {
    return (
        <nav>
            <img src={Logo} className="nav--logo" alt='logo' />
        </nav>
    )
}