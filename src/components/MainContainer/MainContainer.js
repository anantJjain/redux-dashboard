import React from 'react'
import CenterGrid from '../CenterGrid/CenterGrid'
import RightGrid from '../RightGrid/RightGrid'
import './styles.css'

function MainContainer() {
  return (
    <div className='MainContainer1'>
      
      <div className='CenterGrid'>
        <CenterGrid />
      </div>
      
      <div className='RightGrid'>
        <RightGrid />
      </div>
    
    </div>
  )
}

export default MainContainer