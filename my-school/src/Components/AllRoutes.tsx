import React from 'react'
import {Routes,Route} from "react-router-dom"
import LoginForm from '../SignupLogin/Login'
import SignupForm from '../SignupLogin/Signup'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Services from '../Pages/Services'

import Admin from '../Admin/Admin'
import ForgetPasswordForm from '../SignupLogin/ForgetPassword'

import ContactUs from '../Pages/ContactUs'
import DashBoard from '../Pages/DashBoard'
import Assignment from './Assignment'
import Attendence from './Attendence'
import ChartData from './ChartData'
import AppStatus from './AppStatus'
import Form from './FormComp'
import MainDashBoard from '../UserDashboard/MainDashBoard'
import PrivateRoute from '../PrivateRoute'

const AllRoutes = () => {
  return (
    <div style={{minHeight:"100vh"}}>
   <Routes>
   <Route path='/' element={<Home/>} />
    <Route path='/login' element={<LoginForm/>} />
    <Route path='/signup' element={<SignupForm/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
    <Route path='/services' element={<Services/>}/>
    {/* <Route path='/dashboard' element={<DashBoard/>}/> */}
    <Route path='/dashboard' element={
      <PrivateRoute>
        <MainDashBoard/>
      </PrivateRoute>

    
    }/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path="/forgetpasswordform" element={<ForgetPasswordForm/>}/>
   </Routes>
    </div>
  )
}

export default AllRoutes
