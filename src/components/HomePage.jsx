import React from 'react'
import HomeHeader from './HomeHeader';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';
import EmployeeListItem from './EmployeeListItem';

function HomePage() {
  return (
    <div className='HomePage'>
        <HomeHeader />
        <SearchBar />
        <EmployeeList />
        <EmployeeListItem />
    </div>
  )
}

export default HomePage