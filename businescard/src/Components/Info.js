import React from 'react'

export default function Info() {
    return (
        <div>
            <div className='imageInfo'>
            </div>
            <div>
                <h1> Nadia Tsygankova </h1>
                <h3 className="nameInfo"> Frontend Developer</h3>
                <h5 className='WebInfo'>tsygankovnadia@gamil.com</h5>
                <div className='conteinerButtons'>
                    <button className="buttonEmail">
                        <img src='../images/icon.svg' />
                        Email</button>
                    <button className="buttonLinkedIn">
                        <img src='../images/linkedIn_icon.svg' alt='icon' />
                        LinkedIn</button>
                </div>
            </div>
        </div>
    )
}