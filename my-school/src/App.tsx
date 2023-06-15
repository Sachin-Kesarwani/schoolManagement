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
import CardsComp from './Components/CardsComp';
import Footer from './Components/Footer';


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
