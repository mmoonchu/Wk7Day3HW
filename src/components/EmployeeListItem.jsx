import React from 'react'

function EmployeeListItem(props) {
  return (
    <div className='EmployeeListItem'>
        <img src='' />
        <div className='EmployeeInfoHeader'>
          <h4>{props.EmployeeName}</h4>
          <p>{props.EmployeeTitle}</p>
        </div>
    </div>
  )
}

export default EmployeeListItem