import React from 'react'
import { Link } from " react-router-dom";
import { useNavigate } from " react-router-dom";
import {useSelector  } from "react-redux";



const Header = () => {
  const authStatus = useSelector((state)=>state.auth.status)
  const navigate = useNavigate()
  return (
    <div>
      Header
    </div>
  )
}

export default Header
