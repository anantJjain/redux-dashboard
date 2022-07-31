import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Test from '../Test/Test';
import QuickStats from '../Stats/QuickStats'
import LineChart from '../Line Chart/LineChart';
import '../CenterGrid/styles.css'

function CenterGrid() {
  useEffect(() => {
    AOS.init({duration:1500});
    AOS.refresh();
  }, []);

  return (
    <div className='centerContainer'>
        <div data-aos="fade-right"><Test /></div>
        <div data-aos="fade-left"><QuickStats /></div>
        <div data-aos="fade-right"><LineChart /></div>
    </div>
  )
}

export default CenterGrid