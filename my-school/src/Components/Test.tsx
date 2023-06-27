import React, { useEffect, useState } from 'react'
import '../Styles/test.css'
import quizdata from './data.json'
import Congratulations from './Congratulations'
const Test = () => {

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array]; // Create a new array to avoid modifying the original array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
const [shuffledArray,setshuffledArray]=useState<string[]>()
const [index,setindex] = useState(0)
const [score,setscore] = useState<number>(0)
const [time, setTime] = useState<number>(300); 
let t = localStorage.getItem("testdone") || ""
const [testdone, settestdone] = useState<string>(t)
useEffect(() => {
    let timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
 let quizarr =  quizdata.data
 const onedoc = quizarr[index]
let options = onedoc.incorrect_answers
let answer = onedoc.correct_answer
options = [...options,answer]
useEffect(()=>{
const arr = shuffleArray(options)
  setshuffledArray(arr);
  
},[index])




const handlnext=()=>{
    let innervalue = document.querySelector(".next")?.innerHTML
    let optionsarr = document.querySelectorAll(".opt")
    if(innervalue=="Next"){
        setindex(index+1)
        
    }else{
    localStorage.setItem("testdone","testdone")
    settestdone("testdone")
    }
    for(let i=0;i<optionsarr.length;i++){

        optionsarr[i].classList.remove('disabled')
    }
    for(let i=0;i<optionsarr.length;i++){

        optionsarr[i].classList.remove("active")
        optionsarr[i].classList.remove("active2") 
    }
}

const handleoption=(i:number,e:string)=>{
   let answer = onedoc.correct_answer
    let optionsarr = document.querySelectorAll(".opt")
    if(e==answer){

        optionsarr[i].classList.add("active")
        setscore(score+1) 
        
    }else{
        
        optionsarr[i].classList.add("active2") 
    }
    for(let i=0;i<optionsarr.length;i++){

        optionsarr[i].classList.add('disabled')
    }
    

}




console.log(quizdata)
  return (
    
    testdone==="testdone"?<div style={{margin:"auto"}}>
      {score>=5?
      <div>
        <h1 style={{fontSize:"40px",color:"red"}}>Congratulations!🎉🎉🎉</h1>
        <h1 style={{fontSize:"40px",color:"blue"}} >You Passed The Test 🤩🤩🤩</h1>
        <h1 style={{fontSize:"40px",color:"white",backgroundColor:"black",fontFamily:"sans-serif"}} >Your Score is {score}/10 🚀</h1>
        </div>:<h1 style={{fontSize:"40px",color:"red",fontFamily:"sans-serif"}}>Sorry! You have not passed the test 😔</h1>}
      {score>=5?<div style={{overflowX:"hidden",maxWidth:"400px"}}>
         <Congratulations/>
        </div> :<h1 style={{fontSize:"40px",color:"blue"}} >Try Next Time 👍</h1>}
    </div>:<div>
        
        <div style={{display:"flex",justifyContent:"end"}}>
           <h1 style={{backgroundColor:"black",color:"white",fontSize:"25px",padding:"15px",borderRadius:"20px"}}>
             Score : {score}/10
            </h1>
             </div>
    <div>
        <div id={"timer"}>
            <h3 className='time'>Timer :  {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</h3>
        </div>
        <h1 style={{fontSize:"30px",color:"black"}}>{index+1}/{quizarr.length}</h1>
        <div className="card2">
  <span className="small-text">Quiz from Teachme</span>
  <span id="title2">Q{index+1}. {onedoc.question}</span>
  <span className="desc">Category : {onedoc.category}</span>
<div className='options'>
    {shuffledArray?.map((e:string,i:number)=>{

  return <p style={{fontFamily:"sans-serif"}} className={"opt"}  onClick={()=>handleoption(i,e)}>{e}</p>
    })}

</div>
<div className='buttons'>
    {/* <button className='prev'disabled={index==0} onClick={handlprev}>Prev</button> */}
    <button className='next' disabled={index==10} onClick={handlnext}>{index<9?"Next":"Submit"}</button>
</div>
</div>
    </div>
    </div>
  
  )
}

export default Test