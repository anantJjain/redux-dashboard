import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

import Dashboard from './components/Dashboard/Dashboard'
import MainContainer from './components/MainContainer/MainContainer'
import Internships from './components/Internships/Internships'

import './App.css'


function App() {
  return (
    <div>
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
    </div>


  );
}

export default App;

