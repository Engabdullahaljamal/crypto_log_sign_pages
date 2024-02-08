import React from 'react'
import './LogSignCard.css'
import InputBox from '../InputBox/InputBox'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CgKeyhole } from "react-icons/cg";
import { PiKeyholeBold } from "react-icons/pi";
import { FaRegCircleCheck } from "react-icons/fa6";
import ContinueButton from '../ContinueButton/ContinueButton';
import SocialMediaBox from '../SocialMediaBox/SocialMediaBox';
import LogSignButton from '../LogSignButton/LogSignButton';
function LogSignCard({ title, desc, style_class, green_button, not_green_button, button_one, button_two }) {
    return (
        <div className='log_sign_card'>
            <h2 className='log_sign_card_title'>{title}</h2>
            <p className='log_sign_card_p'>{desc}
            </p>
            <LogSignButton style_class={style_class} green_button={green_button} not_green_button={not_green_button} button_one={button_one} button_two={button_two} />

            <div className='input_box_con'>
                <InputBox type='text' placeholder='Email Address' icon={<MdOutlineAlternateEmail />} sec_icon={<FaRegCircleCheck />} />
                <InputBox type='text' placeholder='Password' icon={<CgKeyhole />} />
                <InputBox type='text' placeholder='Referral code (Optional)' icon={<PiKeyholeBold />} />
                <ContinueButton />
            </div>
            <SocialMediaBox />
        </div>
    )
}

export default LogSignCard