import React from 'react'
import PieChart from '../Pie Chart/PieChart';
import SyllabAnalysis from '../SyllabAnalysis/SyllabAnalysis';
import '../RightGrid/styles.css'

function RightGrid() {
  return (
    <div className='container'>
        <SyllabAnalysis />
        <PieChart />
    </div>
  )
}

export default RightGrid