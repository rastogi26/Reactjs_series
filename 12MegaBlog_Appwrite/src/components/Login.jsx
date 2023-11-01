import React, { useState } from 'react'
import {login as authLogin} from '../store/authSlice'
import {Logo,Input,Button} from './index'
import {Link,useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error,setError] = useState("")


    const login= async(data)=>{
         setError("")
         
         try {
             const session = await authService.login(data)
             if(session)
             {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData))
                    navigate('/')
                }
             }
         } catch (error) {
            setError(error.message)
         }

    }
  return (


    <div
      className='flex items-center justify-center w-full ' 
    >
        <div className={`mx-auto w-full  max-w-lg  bg-gray-100 rounded-xl p-10 border border-black/10 `}>
          <div className=' mb-2 flex justify-center'>
              
          </div>
              
        </div>
    </div>
  )
}

export default Login