import React, { useState } from 'react'
import '../Styles/test.css'
import quizdata from './data.json'
const Test = () => {
const [index,setindex] = useState(0)
 let quizarr =  quizdata.data
 console.log(quizarr)
 const onedoc = quizarr[index]
let options = onedoc.incorrect_answers
let answer = onedoc.correct_answer
options = [...options,answer]


const handlprev=()=>{
    setindex(index-1)
}
const handlnext=()=>{
    setindex(index+1)

}

const handleoption=(e:React.MouseEvent<HTMLParagraphElement>)=>{
    // console.log(e.target.classList.add("active"))

}


  return (
    <div>
        <h1 style={{fontSize:"30px",color:"black"}}>{index+1}/{quizarr.length}</h1>
        <div className="card2">
  <span className="small-text">Quiz from Teachme</span>
  <span id="title2">Q{index+1}. {onedoc.question}</span>
  <span className="desc">Category : {onedoc.category}</span>
<div className='options'>
    {options.map((e)=>{

return <p onClick={handleoption}>{e}</p>
    })}

</div>
<div className='buttons'>
    <button className='prev'disabled={index==0} onClick={handlprev}>Prev</button>
    <button className='next' disabled={index==9} onClick={handlnext}>{index<9?"Next":"Submit"}</button>
</div>
</div>
    </div>
  )
}

export default Test