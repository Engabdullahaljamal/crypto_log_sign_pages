import React from 'react'
import './LogSignButton.css'
import { Link } from 'react-router-dom'
function LogSignButton({ green_button, not_green_button, button_one, button_two, first_to, sec_to }) {
    return (
        <div className='log_sign_card_big_button'>
            <button className={not_green_button}> <Link to={first_to}>{button_one}</Link></button>
            <button className={green_button}><Link to={sec_to}> {button_two}</Link>

            </button>

        </div>
    )
}

export default LogSignButton