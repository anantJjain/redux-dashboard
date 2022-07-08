import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import CenterGrid from './components/CenterGrid/CenterGrid';
import RightGrid from './components/RightGrid/RightGrid';
import '../src/App.css'


function App() {
  return (
    <div style={{textAlign:'center'}}>
      <Navbar />
      <div className='Grid'>
        <Sidebar />
        <CenterGrid />
        <RightGrid /> 
      </div>     
    </div>
  );
}

export default App;
