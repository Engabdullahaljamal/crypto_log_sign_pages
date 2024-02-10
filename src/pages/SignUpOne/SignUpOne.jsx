import React from 'react'
import './SignUpOne.css'
import LogSignContainer from '../../component/LogSignContainer/LogSignContainer'
import LogSignSecCard from '../../component/LogSignSecCard/LogSignSecCard'
import LogSignCard from '../../component/LogSignCard/LogSignCard'
const title = 'Create Your Account'
const desc = 'Setting up an account takes less than 1 minute.'
const big_button = 'log_sign_card_big_button '
const green_button = 'log_sign_card_sign_up_button'
const not_green_button = 'log_sign_card_log_in_button'

const button_one = 'Login'
const button_two = 'SignUp'
const x = 0;
const to = "/signup_two"
const first_to = "/login"
const sec_to = "/signup_two"
function SignUpOne() {
    return (
        <div className='background'>
            <LogSignContainer first_card={<LogSignCard title={title} desc={desc} green_button={green_button} not_green_button={not_green_button} button_one={button_one} button_two={button_two} x to={to} first_to={first_to} sec_to={sec_to} />} sec_card={<LogSignSecCard />} />
        </div>
    )
}

export default SignUpOne