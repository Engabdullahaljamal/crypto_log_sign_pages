import React from 'react'
import './EmailVerification.css'
import LogSignContainer from '../../component/LogSignContainer/LogSignContainer'
import EmailVerCard from '../../component/EmailVerCard/EmailVerCard'
import BarcodeContainer from '../../component/BarcodeContainer/BarcodeContainer'
const title = 'Email Verification'
const desc = 'Please enter the 4-digit verification code that was sent to your email'
function EmailVerification() {
    return (<div className='background'>
        <LogSignContainer first_card={<EmailVerCard title={title} desc={desc} />} sec_card={<BarcodeContainer />} />
    </div>

    )
}

export default EmailVerification