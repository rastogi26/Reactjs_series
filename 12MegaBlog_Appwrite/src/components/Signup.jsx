import React, { useState } from 'react'
import {login} from "../store/authSlice";
import { useDispatch } from 'react-redux';
import {Button,Logo,Input} from './index';
import { Link,useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import authService from '../appwrite/auth'



const Signup = () => {
        const navigate = useNavigate()
        const dispatch = useDispatch()
        const [error,setError] = useState("")
        const {register,handleSubmit} = useForm()

        const create = async(data)=>{
            setError("")

             try {
                  const userData = await authService.createAccount(data)
                  if (userData) {
                           const UserData = await authService.getCurrentUser()
                           if (userData) {
                               dispatch(login(userData))
                               navigate("/") 
                           }
                  }

             } catch (error) {
                setError(error.message)
             }
        }
        
  return (
    <div>
      
    </div>
  )
}

export default Signup
