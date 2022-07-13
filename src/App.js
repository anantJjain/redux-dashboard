import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

import Dashboard from './components/Dashboard/Dashboard'
import MainContainer from './components/MainContainer/MainContainer'
import Internships from './components/Internships/Internships'

import { connect } from 'react-redux';

import './App.css'
import Modal from './components/Modal/Modal';


function App(props) {
  return (
    <div>
      {props.isModalOpen ?<div style={{height:'100vh',borderRadius:'10px',backgroundColor:'rgba(67,138,246,0.5)'}}> <Modal /> </div>:<>
      <Navbar />
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
    isModalOpen:state.isModalOpen
  }
}

export default connect(mapStatetoProps)(App);

