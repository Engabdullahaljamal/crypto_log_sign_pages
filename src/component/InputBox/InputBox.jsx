import React from 'react'
import './InputBox.css'


function InputBox({ type, placeholder, icon, sec_icon }) {
    return (
        <div className='icon_input_box'>
            <div className='icon_style'>{icon}</div>
            <span className='break'>|</span>
            <input className='input_box' type={type} placeholder={placeholder} >

            </input>
            <div className='sec_icon'>{sec_icon}</div>
        </div>

    )
}

export default InputBox