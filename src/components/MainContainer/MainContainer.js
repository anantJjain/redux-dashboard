import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import Aos from 'aos'
import 'aos/dist/aos.css'
import CenterGrid from '../CenterGrid/CenterGrid'
import RightGrid from '../RightGrid/RightGrid'
import './styles.css'

function MainContainer(props) {
  useEffect(()=>{
    Aos.init({duration:1500});
  },[])

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

const mapStateToProps = (state) => {
  return {
    isNavbarOpen : state.isNavbarOpen
  }
}

export default connect(mapStateToProps)(MainContainer)