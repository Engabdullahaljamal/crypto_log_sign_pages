import React from 'react'
import './LogSignContainer.css'
import LogSignCard from '../LogSignCard/LogSignCard'
import LogSignSecCard from '../LogSignSecCard/LogSignSecCard'
function LogSignContainer({ first_card, sec_card }) {

    return (
        <div className='log_sign_container'>
            <div>{first_card}</div>
            <div>{sec_card}</div>
        </div>

    )
}

export default LogSignContainer