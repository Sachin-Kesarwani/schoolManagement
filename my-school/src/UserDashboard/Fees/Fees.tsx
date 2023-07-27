import React, { useState } from 'react'
import { useAppSelector } from '../../Redux/Store';
import { inidatainter } from '../../Redux/Dashboard/reducer.dash';
import SingleStudentFees from './SingleStudentFees';
import AssignmentPagination from '../AssignmentPagination';

const Fees = () => {
    let studentdata = useAppSelector(
        (store) => (store.Dashreducer as inidatainter).allStudentsdata
      );
      let [maxStudent,setmaxstudent]=useState(5)
      let [page,setPage]=useState(1)
  return (
    <>
    {
        studentdata&& studentdata.length>0&&studentdata .filter(
            (e, i) =>
              i >= maxStudent * (page - 1) &&
              i < maxStudent * (page - 1) +maxStudent
          ).map((e:any)=>{
                return  <SingleStudentFees data={e}/>
        })
      
    }
    {
   studentdata&&studentdata.length>0&&<AssignmentPagination page ={page} setPage={setPage}  data={studentdata} maxlimit={maxStudent}/>
 
    }
    </>
  )
}

export default Fees
