import React from 'react'
import Login from './pages/Login'
import {useSelector} from "react-redux"
import {Routes , Route, Navigate} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Admin from './pages/Admin'

// admin ? <Dashboard/> : <Navigate to="/login" />

const App = () => {

  const admin = useSelector((state)=>state.admin.admin)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={ admin ? <Dashboard/> : <Navigate to="/login" />} />
        <Route path='/login' element={admin ? <Navigate to="/"/> : <Login/> } />
        
      </Routes>
     
    </>
  )
}

export default App