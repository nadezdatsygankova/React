import React from "react"
import AirbnbLogo from "../images/airbnb_logo.svg";

export default function Navbar() {
    return (
        <nav>
            <img src={AirbnbLogo} className="nav--logo" alt='logo' />
        </nav>
    )
}