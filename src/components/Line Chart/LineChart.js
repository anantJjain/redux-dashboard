import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import { connect } from 'react-redux'
import Ellipse from '../../assets/Ellipse125.png'
import graph from '../../assets/graph.png'
import '../Line Chart/styles.css'

function LineChart(props) {
  return (
    <div>
      <div className='GraphBox'>
        <h1 className='GraphHead'>Comparison Graph</h1>
        <p className='GraphData'>
          <div>
          { 
            props.percentile<72?<p className='PercentileShow'>You scored {props.percentile}% percentile which is lower than 72% which is the average percentile of all  those who took this test</p>:<p className='PercentileShow'>You scored {props.percentile}% percentile which is higher than 72% which is the average percentile of all those who took this test</p>
          }
          </div> 
          <div className='GraphIcon'>
            <div className='Ellipse1'>
              <img src={Ellipse} alt='Sorry'></img>
              <div className='Trophy1'>
                <img src={graph} alt='Sorry'></img>
              </div>
            </div>
          </div>
        </p>
        <Line 
          value={props.percentile}
          className='LinePercentile'
          options={{
                      scales:{x:{ grid:{display:false,drawBorder:false}},y:{ grid:{display:false,drawBorder:false},ticks:{display:false}  }},
                      legend:{display:false},
                      responsive:true,
                      plugins:{
                        tooltip:{
                          callbacks: {
                                        label: function(context) {
                                          let label = context.dataset.label;
                                          label = '';
                                          return label;
                                        } 
                                  },   
                          // enabled:false,
                          // backgroundColor:'red',
                          backgroundColor: '#1E272E',
                          // borderWidth:'2px',
                          padding:20,
                          titleFont:{weight:'700',family:'DM Sans',size:18},
                          titleColor:'#FFFFFF',
                          cornerRadius:5,
                          caretPadding:5,
                          caretSize:10,
                          // yAlign:100
                          // border-radius: 5px,
                        }
                      }
                    }} 
          data={{
                labels: ['0%', '20%', '40%' ,'60%','80%','100%'],
                datasets: [{
                    label:' ',
                    data:[5,66,9,42,5,95,5],
                    borderColor:'#C8D6E5',
                    tension:0.5
                  }],
                }}
        />
      </div>  
    </div>
  )
}

const mapStatetoProps = (state) =>{
    return {
        percentile : state.percentile
    }
}

export default connect(mapStatetoProps)(LineChart)