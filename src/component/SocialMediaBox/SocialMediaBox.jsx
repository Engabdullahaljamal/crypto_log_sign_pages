import React from 'react'
import './SocialMediaBox.css'
import { FaApple } from "react-icons/fa";
import facebook_logo from '../../assets/facebook.png'
import google_logo from '../../assets/google.png'
function SocialMediaBox() {
    return (
        <div className='social_media_Box'>
            <div className='or_continue'>  <span></span> Or Continue with </div>
            <div className='social_media_icon_container'>
                <a href='./'><img className='facebook_google_icon' src={facebook_logo} alt="" /></a>
                <a href='./'><FaApple className='apple_icon' /></a>
                <a href='./'><img className='facebook_google_icon' src={google_logo} alt="" /></a>
            </div>

        </div>
    )
}

export default SocialMediaBox