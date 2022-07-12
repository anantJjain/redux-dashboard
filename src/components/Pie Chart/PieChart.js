import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import { connect } from 'react-redux'
import Arrow from '../../assets/QuesAir.png'
import '../Pie Chart/styles.css'



import React from 'react'

function PieChart(props) {
  return (
    <div>
      <div className='QuesPie'>
        <div className='PieHead'>
          <span className='QuesHead'>Question Analysis</span>
          <span className='QuesNumber'>{props.currentscore}/15</span>
        </div>
        <div className='QuesDesc'>      
          { 
            props.currentscore<15?<span className='QuesAnalysis'>You score {props.currentscore} questions correct out of 15. However it still needs improvements.</span>:<span className='QuesAnalysis'>You score {props.currentscore} correct out of 15.Congratulations!!</span>
          }
        </div>
          <div className='AnswerPie'>
            {/* <img className='Arrow' src={Arrow} alt='Sorry'></img> */}
            <Doughnut 
              className='PieGraph'
              data={{
                      datasets: [{
                                  data:[props.currentscore,15-props.currentscore],
                                  backgroundColor: [
                                                    '#438AF6',
                                                    'rgba(67, 138, 246, 0.1)'
                                                  ],

                                }],
                          }}
              options={{ 
                         
                          // cutout:400,
                          rotation:90,
                          radius:150,         
                        }}
            >
            </Doughnut>
          </div>
      </div>
    </div>
  )
}

const mapStatetoProps = (state) =>{
    return {
        currentscore : state.score
    }
}

export default connect(mapStatetoProps)(PieChart)