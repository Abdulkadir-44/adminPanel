import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import {adminLogin} from "../redux/features/adminSlice"
import {message} from "antd"


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [mail,setMail]=useState('')
    const [password,setPassword]=useState('')
    

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const response = await fetch(
            `${import.meta.env.VITE_REACT_APP_API_ENDPOINT}/api/admin/login`,
            {
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mail, password }),
            }
        ) 

        if(response.status !== 200){
            message.error("Giriş Başarısız!");
        }
        if(response.ok)
        {
            const admin = await response.json();
            localStorage.setItem('admin',JSON.stringify(admin))
            dispatch(adminLogin(admin))
            navigate("/")
        }
    }

   
  return (
    <div className='h-[100%] flex justify-center items-center' style={{backgroundImage:"url('./10.png')",backgroundSize:"cover"}}>
        <div className='bg-[#22364E]  py-10 px-5 rounded-lg'>
            <h1 className='text-center text-white text-4xl mb-4'>Safe-<span className='text-5xl text-[#E19930]'>A</span>s</h1>
            <form onSubmit={handleSubmit}  className='flex flex-col w-[300px]'>
                <label htmlFor="mail" className='text-white mb-1'>E-posta Adresi</label>
                <input onChange={e=>setMail(e.target.value)}
                className='outline-none rounded-md px-2 py-2 placeholder:text-gray-600 mb-5' 
                type="email" 
                id="mail" 
                placeholder='E-posta adresi' />

                <label className='text-white mb-1' htmlFor="password">Şifre</label>
                <input onChange={e=>setPassword(e.target.value)}
                className='outline-none rounded-md px-2 py-2 placeholder:text-gray-600' 
                type="password" 
                id="password" 
                placeholder='Şifre' />

                <button type='submit' className='mt-5 text-white  hover:bg-yellow-600 duration-150 bg-yellow-700 py-2 rounded-md'>Gönder</button>
            </form>
        </div>
    </div>
  )
}

export default Login