import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../features/userSlice'

const Logout = () => {
    const displatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault()
        displatch(logout())
    }
    return (
        <div>
            <h1>
                Welcome
                <span className='user_name'>Prajwal kumar</span>
                <button className='logout_button' onClick={(e) => handleLogout(e)}>Logout</button>
            </h1>
        </div>
    )
}

export default Logout