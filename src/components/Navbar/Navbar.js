import React,{useState} from 'react'
import { connect } from 'react-redux'
import { Squeeze as Hamburger } from 'hamburger-react'
import { NavbarOpen } from '../../actions/stateChange'
import '../Navbar/styles.css'

function Navbar(props) {
  
  const openNavbar = () => {
    console.log(props)
    props.openNavbar(props,props.isNavbarOpen)
  }

  return (
    <div className='NavContainer'>
        {/* <h1>Navbar</h1> */}
        <div style={{paddingTop:'10px'}}><Hamburger rounded hideOutline={true} toggled={props.isNavbarOpen} toggle={openNavbar} duration={0.6} color="#fff" /></div>
    </div> 
  )
}

const mapStateToProps = (state) => {
  return {
      isNavbarOpen : state.isNavbarOpen
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    openNavbar : (state,navbarState) => { dispatch(NavbarOpen(state,navbarState)) }
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Navbar)