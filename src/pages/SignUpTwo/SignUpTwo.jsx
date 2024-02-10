import React from 'react'
import './SignUpTwo.css'
import LogSignContainer from '../../component/LogSignContainer/LogSignContainer'
import LogSignCard from '../../component/LogSignCard/LogSignCard'
import BarcodeContainer from '../../component/BarcodeContainer/BarcodeContainer'
const title = 'Create Your Account'
const desc = 'Setting up an account takes less than 1 minute.'
const big_button = 'log_sign_card_big_button'
const green_button = 'log_sign_card_sign_up_button'
const not_green_button = 'log_sign_card_log_in_button'
const button_one = 'Login'
const button_two = 'SignUp'
const x = 0;
const to = "/login"
const first_to = "/login"
function SignUpTwo() {
    return (
        <div className='background'>
            <LogSignContainer first_card={<LogSignCard title={title} desc={desc} green_button={green_button} not_green_button={not_green_button} button_one={button_one} button_two={button_two} x to={to} first_to={first_to} />} sec_card={<BarcodeContainer />} />
        </div>
    )
}

export default SignUpTwo