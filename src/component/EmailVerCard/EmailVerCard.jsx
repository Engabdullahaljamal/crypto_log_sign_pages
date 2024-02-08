import React from 'react'
import './EmailVerCard.css'
import { LuPencilLine } from "react-icons/lu";
import ContinueButton from '../ContinueButton/ContinueButton';


function EmailVerCard({ title, desc, style_class, green_button, not_green_button, button_one, button_two }) {
    return (
        <div className='log_sign_card'>
            <h2 className='log_sign_card_title'>{title}</h2>
            <p className='log_sign_card_p '>{desc} </p>

            <div className='send_to_container'>
                <p>Send Verification Code to :</p>
                <p className='email_style'>example@mail.com <LuPencilLine /></p>

            </div>
            <form action="" className='ver_code'>
                <input type="text" maxLength="1" />
                <input type="text" maxLength="1" />
                <input type="text" maxLength="1" />
                <input type="text" maxLength="1" />
            </form>

            <ContinueButton />



        </div>
    )
}

export default EmailVerCard