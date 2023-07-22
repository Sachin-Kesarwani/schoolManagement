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
import { Button } from 'antd';
// class CustomFile extends File {
//   constructor(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag) {
//     super(fileBits, fileName, options);
//   }
// }

function App() {
  let url = document.URL;
  let param = url.includes("admin");
  console.log(param)
  // const [image, setImage] = useState<File | null>(null);

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     const selectedFile = e.target.files[0];
  //     const customFile = new CustomFile([selectedFile], selectedFile.name, {
  //       type: selectedFile.type,
  //     });
  //     setImage(customFile);
  //   }
  // };

  // const handleUpload = async () => {
  //   console.log("Selected image:", image);

  //   try {
  //     if (image) {
  //       const formData = new FormData();
  //       formData.append('image', image, image.name);

  //       const response = await axios.post('http://localhost:8080/upload', formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       });

  //       console.log('Image uploaded successfully:', response.data.imageUrl);
  //       // You can handle the image URL from the response as per your application requirements.
  //     } else {
  //       console.log('No image selected.');
  //     }
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //   }
  // };
  return (
    <div className="App">
      {!param&&  <Navbar/>}

      {/* <input type="file" accept="image/*" onChange={handleFileChange} />
      <Button onClick={handleUpload}>Upload Image</Button> */}
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
