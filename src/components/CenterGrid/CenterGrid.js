import React from 'react'
import Test from '../Test/Test';
import QuickStats from '../Stats/QuickStats'
import LineChart from '../Line Chart/LineChart';
import '../CenterGrid/styles.css'

function CenterGrid() {
  return (
    <div className='container'>
        <Test />
        <QuickStats />
        <LineChart />
    </div>
  )
}

export default CenterGrid