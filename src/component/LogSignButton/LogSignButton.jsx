import React from 'react'
import './LogSignButton.css'
function LogSignButton({ green_button, not_green_button, button_one, button_two }) {
    return (
        <div className='log_sign_card_big_button'>
            <button className={not_green_button}>{button_one}</button>
            <button className={green_button}><a href=""></a>
                {button_two}
            </button>

        </div>
    )
}

export default LogSignButton