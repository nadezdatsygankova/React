import React from 'react'
import GmailLogo from '../images/icon.svg';
import LinkedInLogo from '../images/linkedIn_icon.svg';

export default function Info() {
    return (
        <div>
            <div className='imageInfo'>
            </div>
            <div className='blockInfo'>
                <h1> Nadia Tsygankova </h1>
                <h3 className="nameInfo"> Frontend Developer</h3>
                <h5 className='WebInfo'>tsygankovnadia@gamil.com</h5>
                <div className='conteinerButtons'>
                    <button className="buttonEmail">
                        <img src={GmailLogo} alt="Gmail Logo" />
                        Email</button>
                    <button className="buttonLinkedIn">
                        <img src={LinkedInLogo} alt="LinkedIn Logo" />
                        LinkedIn</button>
                </div>
            </div>
        </div>
    )
}