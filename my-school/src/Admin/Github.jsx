import { Button } from 'antd'
import axios from 'axios'
import React, { useEffect } from 'react'
let clientid="84065dd2cc85f9e31eea"
const Github = () => {
    function handlegithubauth(){
       window.location.assign(`https://github.com/login/oauth/authorize?client_id=${clientid}`)
      
    }


    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        console.log(code)
        if(code&&!localStorage.getItem("githubaccess")){
            console.log("hii")
            let getaccesstoken=async()=>{
                await fetch(`http://localhost:8080/gettoken?code=${code}`,{
                    method:"GET"
                }).then((re)=>re.json())
                .then((res)=>{
                    console.log(res)
                    localStorage.setItem("githubtoken",res.access_token)
                    getdata()
                }).catch((er)=>{
                    console.log(er)
                })
             
            }
            getaccesstoken()
        }
    },[])



  async  function getdata(){
await axios.get("http://localhost:8080/getuserdata",{
    headers:{
        Authorization:`Bearer ${localStorage.getItem("githubtoken")}`
    }
}).then((res)=>{
    console.log(res)
}).catch((er)=>{
    console.log(er)
})
    }
  return (
    <div>
      <Button onClick={handlegithubauth}>Login With Github</Button>
    </div>
  )
}

export default Github
