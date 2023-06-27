import React, { useRef,useState } from "react";
import "../Styles/form.css";
import ModalComp from "./Modal";
// interface alldettype {
//   name: String;
//   fatherName: String;
//   motherName: String;
//   class: String;
//   address: String;
//   aadhar: Number;
//   contact: Number;
//   DOB: Number;
//   transport: String;
//   test_score: Number;
//   transport_from: String;
//   transport_to: String;
// }
const Form = () => {
  const [name ,setname] = useState<string>()
  const [fathername ,setfathername] = useState<string>()
  const [mothername ,setmothername] = useState<string>();
  const [className,setclassName] = useState<string>()
  const [test_score,settest_score]=useState<number>()
  const [aadhar ,setaadhar] = useState<number>()
  const [contact ,setcontact] = useState<number>()
  const [DOB ,setDOB] = useState<number>()
  const [transport ,settransport] = useState<string>()
  const [transport_from ,settransportfrom] = useState<number>()
  const [transport_to ,settransportto] = useState<number>()
  const [address ,setaddress] = useState<string>()
  const [photo ,setphoto] = useState<string>()

  const handlesubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    let obj={name,fathername,mothername,class:className,
      test_score,aadhar,contact,DOB,transport,transport_from,
      transport_to,address,photo};
      console.log(obj)
  };

  return (
    <div>
      <form className="form">
        <p id="title">Register for Admission </p>
        <p className="message">Signup now and get full access to our app. </p>
        <label>
          <input
            placeholder="Enter your FirstName"
            type="text"
            className="input"
            onChange={(e: any) => (setname(e.target.value))}
          />
          <span>Firstname</span>
        </label>
        {/* </div>   */}
        <div className="flex">
          <label>
            <input
              placeholder="Enter your FatherName"
              type="text"
              className="input"
              onChange={(e: any) => (setfathername(e.target.value))}
            />
            <span>FatherName</span>
          </label>

          <label>
            <input
              placeholder="Enter your MotherName"
              type="text"
              className="input"
              onChange={(e: any) => (setmothername(e.target.value))}
            />
            <span>MotherName</span>
          </label>
        </div>
        <div className="flex">
          <label>
            <input
              placeholder="Enter Your Adhaar No."
              type="number"
              className="input"
              onChange={(e: any) => (setaadhar(e.target.value))}
            />
            <span>Adhaar No.</span>
          </label>

          <label>
            <input
              placeholder="Enter your DOB"
              type="date"
              className="input"
              onChange={(e: any) => (setDOB(e.target.value))}
            />
            <span>DOB</span>
          </label>
        </div>
        <div className="flex">
          <label>
            <input
              placeholder="Enter your Mobile No."
              type="Number"
              className="input"
              onChange={(e: any) => (setcontact(e.target.value))}
            />
            <span>Mobile No.</span>
          </label>

          <label>
            <input
              placeholder="Enter your Class"
              type="text"
              className="input"
              onChange={(e: any) => (setclassName(e.target.value))}
            />

            <span>Class</span>
          </label>
        </div>
        <div className="flex">
          <label>
            <input
              placeholder="Enter your Transport Vehicle"
              type="text"
              className="input"
              onChange={(e: any) => (settransport(e.target.value))}
            />
            <span>Transport</span>
          </label>

          <label>
            <input
              placeholder="Enter Test Score"
              type="Number"
              className="input"
              onChange={(e: any) => (settest_score(e.target.value))}
            />
            <span>Test_score</span>
          </label>
        </div>
        <div className="flex">
          <label>
            <input
              placeholder="Enter Transport from in Numbers"
              type="Number"
              className="input"
              onChange={(e: any) => (settransportfrom(e.target.value))}
            />
            <span>Transport_from</span>
          </label>

          <label>
            <input
              placeholder="Enter Transport to in Numbers"
              type="Number"
              className="input"
              onChange={(e: any) => (settransportto(e.target.value))}
            />
            <span>Transport_to</span>
          </label>
        </div>

        <label>
          <input
            placeholder="Enter your Address"
            type="email"
            className="input"
            onChange={(e: any) => (setaddress(e.target.value))}
          />
          <span>Address</span>
        </label>

        <label>
          <input
            placeholder="Upload your Passport size photo"
            type="file"
            className="input"
            onChange={(e: any) => (setphoto(e.target.value))}
          />
          <span>Upload your Passport size photo</span>
        </label>

        <button className="submit" onClick={(e) => handlesubmit(e)}>
          <ModalComp />
        </button>
        {/* <p className="signin">Already have an acount ? <a href="#">Signin</a> </p> */}
      </form>
    </div>
  );
};

export default Form;
