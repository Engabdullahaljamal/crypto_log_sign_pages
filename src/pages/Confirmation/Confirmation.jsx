import React from 'react'
import './Confirmation.css'
import LogSignContainer from '../../component/LogSignContainer/LogSignContainer'
import BarcodeContainer from '../../component/BarcodeContainer/BarcodeContainer'
import ConfirmCard from '../../component/ConfirmCard/ConfirmCard'

const title = 'Let’s Confrim it’s you!'
const desc = 'Complete verificaton process'
const green_button = 'log_sign_card_sign_up_button'
const not_green_button = 'log_sign_card_log_in_button'
const button_one = 'System'
const button_two = 'Google'
const to = "/email_verification"
function Confirmation() {
    return (
        <div className='background'>
            <LogSignContainer first_card={<ConfirmCard title={title} desc={desc} green_button={not_green_button} not_green_button={green_button} button_one={button_one} button_two={button_two} to={to} />} sec_card={<BarcodeContainer />} />


        </div>
    )
}

export default Confirmation