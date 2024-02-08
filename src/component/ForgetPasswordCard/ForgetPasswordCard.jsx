import React from 'react'
import './ForgetPasswordCard.css'
import forget_password_img from '../../assets/forget_password_img.jpg'
import InputBox from '../InputBox/InputBox'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import ContinueButton from '../ContinueButton/ContinueButton';
function ForgetPasswordCard({ title, desc }) {
    return (
        <div className='log_sign_card'>
            <h2 className='log_sign_card_title'>{title}</h2>
            <p className='log_sign_card_p '>{desc} </p>
            <img className='forget_password_img' src={forget_password_img} alt="" />
            <InputBox type='text' placeholder='Email Address' icon={<MdOutlineAlternateEmail />} sec_icon={<FaRegCircleCheck />} />
            <div className='continue_m_t'></div><ContinueButton />
        </div>

    )
}

export default ForgetPasswordCard