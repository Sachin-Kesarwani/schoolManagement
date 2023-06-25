import React from 'react'
import '../Styles/form.css'
import ModalComp from './Modal'

// name: {type:String,required:true},
//     fatherName: {type:String,required:true},
//     motherName: {type:String,required:true},
//     class: {type:Number,required:true},
//     address: {type:String,required:true},
//     aadhar: {type:Number,required:true},
//     contact:{type:Number,required:true},
//     DOB: {type:String,required:true},
//     transport: {type:Boolean,required:true},
//     test_score: {type:Number,required:false},
//     transport_from: {type:String,required:false},
//     transport_to: {type:String,required:false},
const Form = () => {

const handlesubmit =(e:React.FormEvent<HTMLButtonElement>)=>{
  e.preventDefault()
//   let obj={
//     name,
// fatherName,
// motherName,
// class,
// address,
// aadhar,
// contact,
// DOB,
// transport,
// test_score,
// transport_from,
// transport_to,
//   }

}





  return (
    <div>

<form className="form">
    <p id="title">Register for Admission </p>
    <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
        <label>
            <input  placeholder="Enter your FirstName" type="text" className="input" />
            <span>Firstname</span>
        </label>

        <label>
            <input  placeholder="Enter your LastName" type="text" className="input" />
            <span>Lastname</span>
        </label>
    </div>  
        <div className="flex">
        <label>
            <input  placeholder="Enter your FatherName" type="text" className="input" />
            <span>FatherName</span>
        </label>

        <label>
            <input  placeholder="Enter your MotherName" type="text" className="input" />
            <span>MotherName</span>
        </label>
    </div>  
        <div className="flex">
        <label>
            <input  placeholder="Enter Your Adhaar No." type="text" className="input" />
            <span>Adhaar No.</span>
        </label>

        <label>
            <input  placeholder="Enter your DOB" type="date" className="input" />
            <span>DOB</span>
        </label>
    </div>  
        <div className="flex">
        <label>
            <input  placeholder="Enter your Mobile No." type="Number" className="input" />
            <span>Mobile No.</span>
        </label>

        <label>
            <input  placeholder="Enter your Class" type="text" className="input" />
            {/* <select name="" id="">
              <option value="">6th</option>
              <option value="">6th</option>
              <option value="">6th</option>
              <option value="">6th</option>
              <option value="">6th</option>
              <option value="">6th</option>
            </select> */}
            <span>Class</span>
        </label>
    </div>  
        <div className="flex">
        <label>
            <input  placeholder="Enter your Transport Vehicle" type="text" className="input" />
            <span>Transport</span>
        </label>

        <label>
            <input  placeholder="Enter Test Score" type="Number" className="input" />
            <span>Test_score</span>
        </label>
    </div>  
    <label>
            <input type="file" placeholder="Upload one screenshot of testscore " className="input" />
            <span>Upload Photo of TestScore</span>
        </label>
        <div className="flex">
        <label>
            <input  placeholder="Enter Transport from in Numbers" type="Number" className="input" />
            <span>Transport_from</span>
        </label>

        <label>
            <input   placeholder="Enter Transport to in Numbers" type="Number" className="input" />
            <span>Transport_to</span>
        </label>
    </div>  
  
    <label>
        <input  placeholder="Enter your Address" type="email" className="input" />
        <span>Address line 1</span>
    </label> 
    <label>
        <input  placeholder="Enter your Address" type="email" className="input" />
        <span>Address line 2</span>
    </label> 
    <label>
        <input  placeholder="Upload your Passport size photo" type="file" className="input" />
        <span>Upload your Passport size photo</span>
    </label> 
        
    <button className="submit" onSubmit={handlesubmit}>
      <ModalComp/>
    </button>
    {/* <p className="signin">Already have an acount ? <a href="#">Signin</a> </p> */}
</form>



    </div>
  )
}

export default Form