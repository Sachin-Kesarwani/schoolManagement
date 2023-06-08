import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import SignupForm from './SignupLogin/Signup';
import LoginForm from './SignupLogin/Login';
import AllRoutes from './Components/AllRoutes';
import Test1 from './Pages/Test1';
import SimpleSlider from './Pages/Test1';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
     <AllRoutes/>
     
  
    </div>
  );
}

export default App;
