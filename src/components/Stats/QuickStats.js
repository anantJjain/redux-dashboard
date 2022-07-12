import React from 'react'
import { connect } from 'react-redux'
import Ellipse from '../../assets/Ellipse125.png'
import score1 from '../../assets/score1.png'
import trophy from '../../assets/trophy.png'
import score from '../../assets/score.png'
import './styles.css'

function QuickStats(props) {
  return (
    <div>
        <div className='QuickStats' >
        <div className='QuickStatsHeading'>Quick Statistics</div>
        
        <div className='QuickStatsContent'>
          
          <div className='rankContent'>
            <div className='rankIcon'>
              <div className='Ellipse'>
                <img src={Ellipse} alt='Sorry'></img>
                <div className='Trophy'>
                  <img src={trophy} alt='Sorry'></img>
                </div>
              </div>
            </div>
            <div className='rank'>
              <span className='rankNum'>{props.rank}</span>
              <span className='rankName'>RANK</span>  
            </div>
          </div>
      
          <div className='Line'></div>

          <div className='percentileContent'>
            <div className='percentileIcon'>
              <div className='Ellipse'>
                <img src={Ellipse} alt='Sorry'></img>
                <div className='Trophy'>
                  <img src={score1} alt='Sorry'></img>
                </div>
              </div>
            </div>
            <div className='percentile'>
              <span className='PercentileNum'>{props.percentile}%</span>
              <span className='PercentileName'>PERCENTILE</span>  
            </div>
          </div>

          <div className='Line'></div>

          <div className='scoreContent'>
            <div className='scoreIcon'>
              <div className='Ellipse'>
                <img src={Ellipse} alt='Sorry'></img>
                  <div className='Trophy'>
                    <img src={score} alt='Sorry'></img>
                  </div>
              </div>
            </div>
            <div className='score'>
              <span className='ScoreNum'>{props.currentscore}/15</span>  
              <span className='ScoreName'>CORRECT ANSWERS</span>  
            </div>
          </div>          
        
        </div>
      
      </div>
    </div>
  )
}

const mapStatetoProps = (state) =>{
    return{
        rank:state.rank,
        percentile:state.percentile,
        currentscore:state.score
    }
}

export default connect(mapStatetoProps)(QuickStats)