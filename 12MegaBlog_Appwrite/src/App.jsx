import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import authService from './appwrite/auth';
import './App.css'
import {login,logout} from './store/authSlice'
import {Header,Footer} from './components';
import {Outlet} from 'react-router-dom'

function App() {
   const [loading, setLoading] = useState(true);
   const dispatch = useDispatch()

   //jase hi application load ho useEffect se pucho login ho ya nai
   useEffect(() => {
      authService.getCurrentUser()
      .then((userData)=>{
        if (userData) {
          dispatch(login({userData}))
        }
        else
        {  
          //state remains update either login or logout
          dispatch(logout())
        }
      })
      .catch((err)=>console.log(err))
      .finally(()=>setLoading(false))
   }, []);

 
   // conditional rendering (do some work in true part)
  //  return !loading?():()
  return !loading ? (
    <div className=' min-h-screen flex  flex-wrap content-between bg-gray-400'>
      <div className=' w-full  block'>
        <Header/>
        <main>
          ToDo: <Outlet/> 
        </main>
        <Footer/>

      </div>
    </div>
  ) : null
    
}

export default App
