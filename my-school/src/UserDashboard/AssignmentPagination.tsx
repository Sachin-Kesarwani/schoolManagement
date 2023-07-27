import React from 'react'
import { SingleAssignment, studentData } from '../utils/data.types'
import { Button } from 'antd'

interface datainter{
    page:number,
    setPage:(page:number)=>void
    data:SingleAssignment[]|studentData[],
    maxlimit:number
}

const AssignmentPagination = ({page,setPage,data,maxlimit}:datainter) => {
    console.log(data,maxlimit)
    const options = Array.from({ length:Math.ceil(data.length/maxlimit) }, (_, index) => index + 1);
    console.log(options)
  return (
    <div style={{margin:"15px"}}>
        <Button disabled={page===1} onClick={()=>setPage(page-1)}>Prev</Button>
      {
      options && options.length>0 &&options.map((e)=>{
        return <Button  onClick={()=>setPage(e)} style={{backgroundColor:page===e?"blue":"white",color:page===e?"white":"black",margin:"2px"}} >
            {e}
        </Button>
      })
      }
      <Button disabled={page===Math.ceil(data.length/maxlimit)} onClick={()=>setPage(page+1)}>Next</Button>
    </div>
  )
}

export default AssignmentPagination
