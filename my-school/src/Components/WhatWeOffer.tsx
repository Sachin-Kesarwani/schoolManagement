import React from 'react'
import '../Styles/why.css'
const Why = () => {
  return (
    <div className='why-cont'>
       <div className='heading'>
        <h1>
         WHY US
        </h1>
        </div>
        <div>
          <h1 style={{'color':"yellow",margin:"30px",fontFamily:"sans-serif"}}>
              We follow three Step Process
            </h1>
        </div>
        <div className='main-box'>

        <div>
            <img src="https://www.drupal.org/files/project-images/reg_confirm_email_with_button_0.png" alt="" />
            <h1>Register</h1>
        </div>
        {/* <div>

        <img src="https://www.nikahforever.com/arrow-red.jpg" alt="" />
        </div> */}
        <div>
            <img src="https://previews.123rf.com/images/designsells/designsells2302/designsells230200554/198389317-online-test-education-violet-gradient-concept-with-people-scene-in-the-flat-cartoon-design-student.jpg" alt="" />
            <h1>Test</h1>
        </div>
        {/* <div>

        <img src="https://www.nikahforever.com/arrow-red.jpg" alt="" />
        </div> */}
        <div>
            <img src="https://img.freepik.com/free-vector/expert-approved-cartoon-character-holding-checkmark-symbol-hand-finished-task-done-sign-satisfactory-official-sanction-acceptance_335657-2369.jpg?w=2000" alt="" />
            <h1>Approved</h1>
        </div>
        </div>

    </div>
  )
}

export default Why