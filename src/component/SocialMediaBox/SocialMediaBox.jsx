import React from 'react'
import './SocialMediaBox.css'
import { FaApple } from "react-icons/fa";
import facebook_logo from '../../assets/facebook.png'
import google_logo from '../../assets/google.png'
import { Link } from 'react-router-dom';
function SocialMediaBox({ y }) {
    if (y != 1) {
        return (
            <div className='social_media_Box'>
                <div className='or_continue'>  <span></span> Or Continue with </div>
                <div className='social_media_icon_container'>
                    <a href='https://www.facebook.com'><img className='facebook_google_icon' src={facebook_logo} alt="" /></a>
                    <a href='https://www.apple.com'><FaApple className='apple_icon' /></a>
                    <a href='https://www.google.com/?client=safari'><img className='facebook_google_icon' src={google_logo} alt="" /></a>
                </div>

            </div>
        )
    }
    else {
        return (
            <div className='social_media_Box_two'>
                <div className='or_continue'>  <span></span> Or Continue with </div>
                <div className='social_media_icon_container'>
                    <a href='https://www.facebook.com'><img className='facebook_google_icon' src={facebook_logo} alt="" /></a>
                    <a href='https://www.apple.com'><FaApple className='apple_icon' /></a>
                    <a href='https://www.google.com/?client=safari'><img className='facebook_google_icon' src={google_logo} alt="" /></a>
                </div>

            </div>
        )
    }

}

export default SocialMediaBox