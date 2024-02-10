import React from 'react'
import './ForgePasswordButton.css'
import { Link } from 'react-router-dom'
function ForgePasswordButton() {
    return (
        <Link to="/forget_password" className='ForgePasswordButton_style'>Forget Password?</Link>
    )
}

export default ForgePasswordButton