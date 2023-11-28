import React from 'react'
import EmployeeListItem from './EmployeeListItem'
import EmployeeInfo from '../models/EmployeeInfo'

function EmployeeList() {
  return (
    <div className='EmployeeList'>
        <EmployeeListItem EmployeeName='James King' EmployeeTitle='President and CEO' />
        <EmployeeListItem EmployeeName='Julie Taylor' EmployeeTitle='VP of Marketing' />
        <EmployeeListItem EmployeeName='Eugene Lee' EmployeeTitle='CFO' />
        <EmployeeListItem EmployeeName='John Williams' EmployeeTitle='VP of Engineering' />
        <EmployeeListItem EmployeeName='Ray Moore' EmployeeTitle='VP of Sales' />
        <EmployeeListItem EmployeeName='Paul Jones' EmployeeTitle='QA Manager' />
    </div>
  )
}

export default EmployeeList