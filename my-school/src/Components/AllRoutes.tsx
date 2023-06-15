import React from 'react'
import {Routes,Route} from "react-router-dom"
import LoginForm from '../SignupLogin/Login'
import SignupForm from '../SignupLogin/Signup'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Admin from '../Admin/Admin'
const AllRoutes = () => {
  return (
    <div>
   <Routes>
   <Route path='/' element={<Home/>} />
    <Route path='/login' element={<LoginForm/>} />
    <Route path='/signup' element={<SignupForm/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<SignupForm/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/admin' element={<Admin/>}/>
   </Routes>
    </div>
  )
}

export default AllRoutes
