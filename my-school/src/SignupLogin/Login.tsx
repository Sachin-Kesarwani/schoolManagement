import React, { useEffect, useState } from 'react';
import './LoginForm.css'; // Import the CSS file
import { useAppDispatch } from '../Redux/Store';
import { UserLogin } from '../Redux/AuthRedux/action';
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom';
import { handleScrollToTop } from '../Important/scrollup';
import { Button, message, Space } from 'antd';

interface ObjectItem {
  tag: 'p' | 'h1' | 'h2' | 'h4'|"li";
  title: string;
}

const arrayOfObjects: ObjectItem[] = [
  { tag: 'p', title: 'Paragrapdddddddddddddddddddddddddddddddddddddddddh' },
  { tag: 'h1', title: 'Heading hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh1' },
  { tag: 'h2', title: 'Heading ppppppppppppppppppppppppppppppppppppppppppppppppp2' },
  { tag: 'li', title: 'Heading ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp4' }
];
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
let dispatch=useAppDispatch()
let navigate=useNavigate()
  const handleSubmit = (e:any) => {
    e.preventDefault();
    dispatch(UserLogin({email,password})).then((res:any)=>{
      console.log(res)
      if(res.request.status===200){
        messageApi.open({
          type: 'success',
          content: `${res.data.msg} , ${res.data.data.name}`,
        });
        setTimeout(()=>{
navigate("/")
        },2000)
      }else{
       
        messageApi.open({
          type: 'error',
          content: `${res.response.data.msg}`,
        });
      }

      // const cookieValue = Cookies.get('SchooleManagementAdminData');

// Parse the value if it's stored as a JSON string
// const parsedValue = cookieValue ? JSON.parse(cookieValue) : null;

    })
 
  };

  const handleForgotPassword = () => {
    // Handle "Forgot Password" logic here
    navigate("/forgetpasswordform")
  };


  useEffect(()=>{
handleScrollToTop()
  },[])
  return (<>
  {contextHolder}
    <div className="container">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
       
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
       
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
       
        />
        <div className="form-footer">
          <button type="submit">Log In</button>
          <a className='forgot' href="#" style={{float:"left",color:"blue"}} onClick={handleForgotPassword}>
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
    {arrayOfObjects.map((obj, index) => {
        let element: JSX.Element;
        switch (obj.tag) {
          case 'p':
            element = <p key={index}>{obj.title}</p>;
            break;
          case 'h1':
            element = <h1 key={index}>{obj.title}</h1>;
            break;
          case 'h2':
            element = <h2 key={index}>{obj.title}</h2>;
            break;
          case 'h4':
            element = <h4 key={index}>{obj.title}</h4>;
            break;
            case 'li':
              element = <li key={index}>{obj.title}</li>;
              break;
          default:
            element = <div key={index}>{obj.title}</div>;
        }
        return element;
      })}
    </>
  );
};

export default LoginForm;
