import React from 'react'
import './ContinueButton.css'
import { GrFormNextLink } from "react-icons/gr";
import { Link } from 'react-router-dom';
function ContinueButton({ to }) {
    return (
        <div className='icon_button_box'>
            <Link to={to} className='continue_icon_con' >

                <GrFormNextLink className='continue_icon' />
            </Link>
            <Link to={to} className='button_box'>Continue</Link>
        </div>

    )
}

export default ContinueButton