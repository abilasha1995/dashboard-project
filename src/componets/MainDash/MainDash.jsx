import React from 'react'
import Cards from '../Cards/Cards'
import './MainDash.css'
import BasicTable, { Table } from '../Table/Table'


const MainDash = () => {
  return (
    <div className="MainDash">
       <h1>DashBoard</h1>
       <Cards/>
      <BasicTable/>
    </div>
  )
}

export default MainDash