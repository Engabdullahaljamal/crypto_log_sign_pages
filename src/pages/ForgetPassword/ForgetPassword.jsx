import React from 'react'
import './ForgetPassword.css'
import ForgetPasswordCard from '../../component/ForgetPasswordCard/ForgetPasswordCard'
import LogSignContainer from '../../component/LogSignContainer/LogSignContainer'
import BarcodeContainer from '../../component/BarcodeContainer/BarcodeContainer'
const title = 'Forgot password?'
const desc = 'Enter your email below, you will receive an email with password reset link.'
const to = "/confirmation"
function ForgetPassword() {
    return (
        <div className='background'>
            <LogSignContainer first_card={<ForgetPasswordCard title={title} desc={desc} to={to} />} sec_card={<BarcodeContainer />} />
        </div>

    )
}

export default ForgetPassword