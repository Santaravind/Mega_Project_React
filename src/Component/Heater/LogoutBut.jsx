import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwite/auth'
import {logout} from '../../Store/authSlice'


function LogoutBut() {
    const dispatch=useDispatch()
    const logoutHandler=()=>{
        dispatch(logout()).then(()=>{

        })

    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100  rounded-full'>
        Logout
    </button>
  )
}

export default LogoutBut
