import React from 'react'
import './ContinueButton.css'
import { GrFormNextLink } from "react-icons/gr";
function ContinueButton() {
    return (
        <div className='icon_button_box'>
            <button className='continue_icon_con' >

                <GrFormNextLink className='continue_icon' />
            </button>
            <button className='button_box'>Continue</button>
        </div>

    )
}

export default ContinueButton