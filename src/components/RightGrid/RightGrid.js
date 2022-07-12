import React from 'react'
import PieChart from '../Pie Chart/PieChart';
import SyllabAnalysis from '../SyllabAnalysis/SyllabAnalysis';
import '../RightGrid/styles.css'

function RightGrid() {
  return (
    <div className='containerRight'>
      <div><SyllabAnalysis /></div>
      <div><PieChart /></div>
    </div>
  )
}

export default RightGrid