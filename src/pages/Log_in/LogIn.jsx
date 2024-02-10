import React from 'react'
import './LogIn.css'
import LogSignContainer from '../../component/LogSignContainer/LogSignContainer'
import LogSignCard from '../../component/LogSignCard/LogSignCard'
import BarcodeContainer from '../../component/BarcodeContainer/BarcodeContainer'
import ForgePasswordButton from "../../component/ForgePasswordButton/ForgePasswordButton";
const title = 'Welcome back'
const desc = 'Please Enter your email and password'
const green_button = 'log_sign_card_sign_up_button'
const not_green_button = 'log_sign_card_log_in_button'
const button_one = 'Login'
const button_two = 'SignUp'
const sec_to = "/"
const yes = 1;
const to = "/confirmation"
function LogIn({ ForgePasswordButton }) {
    return (
        <div className='background'>

            <LogSignContainer first_card={<LogSignCard title={title} desc={desc} green_button={not_green_button} not_green_button={green_button} button_one={button_one} button_two={button_two} y={yes} to={to} sec_to={sec_to} />} sec_card={<BarcodeContainer />} />





        </div>

    )
}

export default LogIn