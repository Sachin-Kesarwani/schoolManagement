import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import SignupForm from './SignupLogin/Signup';
import LoginForm from './SignupLogin/Login';
import AllRoutes from './Components/AllRoutes';
import Test1 from './Pages/Test1';
import SimpleSlider from './Pages/Test1';
import Navbar from './Components/Navbar';
import CardsComp from './Components/CardsComp';
import Footer from './Components/Footer';
import ExpensiveComponent from './Admin/Test';
import AssignmentForm from './Admin/Test';
import Github from './Admin/Github';
import Payment from './Admin/Payment';
import axios from 'axios';
import { Button, Collapse } from 'antd';
import ImageUploader from './UserDashboard/ImageUpload';
import Test from './UserDashboard/TestforAdmission';

// class CustomFile extends File {
//   constructor(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag) {
//     super(fileBits, fileName, options);
//   }
// }

const { Panel } = Collapse;


function App() {
  let url = document.URL;
  let param = url.includes("admin");
  console.log(param)
 
  return (
    <div className="App">
    
      {!param&&  <Navbar/>}
     
     <AllRoutes/>
     <Footer/>

    </div>
  );
}

export default App;
