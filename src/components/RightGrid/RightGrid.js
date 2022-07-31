import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import PieChart from '../Pie Chart/PieChart';
import SyllabAnalysis from '../SyllabAnalysis/SyllabAnalysis';
import '../RightGrid/styles.css'


function RightGrid() {
  useEffect(()=>{
    Aos.init({duration:1500});
    Aos.refresh();
  },[])

  return (
    <div className='containerRight'>
      <div data-aos="fade-up"><SyllabAnalysis /></div>
      <div data-aos="fade-up" data-aos-delay="500"><PieChart /></div>
    </div>
  )
}

export default RightGrid