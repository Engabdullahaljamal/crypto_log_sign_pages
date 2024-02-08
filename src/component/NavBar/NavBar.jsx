import React from 'react'
import './NavBar.css'
import main_logo from '../../assets/main_logo.png'
import { IoAppsSharp } from "react-icons/io5";
import english_image from '../../assets/english.png'
import { IoIosArrowDown } from "react-icons/io";
// import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='navbar'>
            <div className='first_part'>
                <div className='first_li'>
                    <img className='main_logo' src={main_logo}></img>
                    <span>Whale.</span>
                </div>

                <li> <a href=""><IoAppsSharp className='app_logo' /></a>
                </li>
                <li> <a href=''>Buy Crypto</a></li>
                <li> <a href="">Market</a></li>
                <li><a href="">NFT</a></li>
                <li><a href="">Promotion</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>

            </div>
            <div className='second_part'>
                <li><img src={english_image} alt="" /> English <IoIosArrowDown /></li>
            </div>
        </div>
    )
}

export default NavBar