import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import CenterGrid from './components/CenterGrid/CenterGrid'
import RightGrid from './components/RightGrid/RightGrid'
import Dashboard from './components/Dashboard/Dashboard'
import Internships from './components/Internships/Internships'


function App() {
  return (
    <div>
      <Navbar />
      <div className='Grid'>
        <Sidebar />
        <Routes>
          <Route path='Dashboard'   element={<Dashboard />} />
          <Route path='/'           element={<><CenterGrid /><RightGrid /></>} />
          <Route path='Internships' element={<Internships />} />
        </Routes>
      </div>     
    </div>


  );
}

export default App;

