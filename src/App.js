import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

import Dashboard from './components/Dashboard/Dashboard'
import MainContainer from './components/MainContainer/MainContainer'
import Internships from './components/Internships/Internships'

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'

import './App.css'
import Modal from './components/Modal/Modal';


function App(props) {
  const changeState = () =>{
    props.isNavbarOpen = !(props.isNavbarOpen)
  }

  return (
    <div>
      {props.isModalOpen ?<div style={{height:'100vh',borderRadius:'10px',backgroundColor:'rgba(67,138,246,0.5)'}}> <Modal /> </div>:<>
      <Navbar />
      <div className='NavbarSlider'>
      {
        props.isNavbarOpen ? 
        <div className='Open'>
          <NavLink
            // data-aos="fade-down"
            to={'/Dashboard'}
            onClick={changeState}
            style={({ isActive }) => ({
              textDecoration:'none',
              color: isActive ? '#438AF6' : '#fff',
            })} 
          >
            Dashboard
          </NavLink>
          <hr color='#FFF' width="80%" height="1px"></hr>
          <NavLink
            // data-aos="fade-down"
            to={'/'}
            onClick={changeState}
            style={({ isActive }) => ({
              textDecoration:'none',
              color: isActive ? '#438AF6' : '#fff',
            })} 
          >
            Skill Test
          </NavLink>
          <hr color='#FFF' width="80%" height="1px"></hr>
          <NavLink
            // data-aos="fade-down"
            to={'/Internships'}
            onClick={changeState}
            style={({ isActive }) => ({
              textDecoration:'none',
              color: isActive ? '#438AF6' : '#fff',
            })} 
          >
            Internships
          </NavLink>
        </div> : 
        <div className='Close'>BYE</div>
      }
      </div>
      <div className='Grid'>
        <div className='SidebarContainer'>
          <Sidebar />
        </div>
        <div className='MainContainer'>
        <Routes>
          <Route path='Dashboard'   element={<Dashboard />} />
          <Route path='/'           element={<MainContainer />} />
          <Route path='Internships' element={<Internships />} />
        </Routes>
        </div>
      </div>     
    </>
      
      }
</div>
  );
}

const mapStatetoProps = (state) =>{
  return{
    isModalOpen:state.isModalOpen,
    isNavbarOpen : state.isNavbarOpen
  }
}

export default connect(mapStatetoProps)(App);

