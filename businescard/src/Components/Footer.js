import React from 'react'
import TwitterLogo from '../images/twitter_icon.svg';
import FacebookLogo from '../images/facebook_icon.svg';
import InstagramLogo from '../images/instagram_icon.svg';
import GitHubLogo from '../images/gitHub_icon.svg';

export default function Footer() {
    return (
        <div className='footer'>
            <img src={TwitterLogo} alt="React Logo" />
            <img src={FacebookLogo} alt="React Logo" />
            <img src={InstagramLogo} alt="React Logo" />
            <img src={GitHubLogo} alt="React Logo" />
        </div>
    )
}