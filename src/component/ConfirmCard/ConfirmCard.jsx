import React from 'react'
import './ConfirmCard.css'
import LogSignButton from '../LogSignButton/LogSignButton'
import ContinueButton from '../ContinueButton/ContinueButton';

function AbsCard({ sec_card, barcode_card, title, desc, green_button, not_green_button, button_one, button_two, to }) {
    return (
        <div className='log_sign_card'>
            <h2 className='log_sign_card_title'>{title}</h2>
            <p className='log_sign_card_p'>{desc} </p>
            <p className='select_style'>select  confirming method:</p>
            <LogSignButton green_button={green_button} not_green_button={not_green_button} button_one={button_one} button_two={button_two} />
            <div className='input_box_con for_radio'>
                <input className="radio_style" type="radio" name='confirm_method' id='confirm_method_one' />
                <label htmlFor="confirm_method_one">

                </label>
                <div className='radio_p'>  <span className='radio_first_p'>Get The code by  (SMS) at :</span>
                    <p className='radio_sec_p'>+1202****0151</p></div>

                <input className="radio_style" type="radio" name='confirm_method' id='confirm_method_two' checked />
                <label htmlFor="confirm_method_two"></label>

                <div className='radio_p_two'>  <span className='radio_first_p'>Get the code by email at  :</span>
                    <p className='radio_sec_p'>Er*****de@gmail.com</p></div>

            </div>
            <ContinueButton to={to} />
        </div>
    )
}

export default AbsCard