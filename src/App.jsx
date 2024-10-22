import React,{useState,useEffect} from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./appwite/auth"
import { login,logout } from './Store/authSlice'
import {Header,Footer} from "./Component"

function App() {
    const [loading,setLoading]=useState(true)
    const dispatch=useDispatch()

    useEffect(() => {
      authService.getCurrentUser()
      .then((userData)=>{
        if (userData) {
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }

      })
      .finally(()=>setLoading(false))
      
    }, []);



   return !loading?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-500' > 
    <div className='w-full-block'>
      <Header/>
      <main>
        todo:    {/*<Ottlet/>   */}
      </main>
      <Footer/>
    </div>
       </div>
   ):null;


  // return (
  //   <>
  //     <h1>Mega blog </h1>
  //   </>
  // )
}

export default App
