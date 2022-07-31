import React from 'react'
import { connect } from 'react-redux'
import { ModalClose } from '../../actions/stateChange'
import { increaseRank } from '../../actions/stateChange'
import { decreaseRank } from '../../actions/stateChange'
import { increasePercentile } from '../../actions/stateChange'
import { decreasePercentile } from '../../actions/stateChange'
import { increaseScore } from '../../actions/stateChange' 
import { decreaseScore } from '../../actions/stateChange'
import '../Modal/styles.css'
import Ellipse from '../../assets/Ellipse 77.png'
import b1 from '../../assets/1.png'
import b2 from '../../assets/2.png'
import b3 from '../../assets/3.png'
import logo from '../../assets/image4.png'
import arrow from '../../assets/saveArrow.png'

function Modal(props) {
    
      const closeModal = () => {
        props.closeModal(props,props.isModalOpen)
      }

      const increaseRank1 = () =>{
        props.rankIncrease(props,props.rank)
      }  
      const decreaseRank1 = () =>{
        props.rankDecrease(props,props.rank)
      }  
      const increasePercentile1 = () =>{
        props.percentileIncrease(props,props.percentile)
      }  
      const decreasePercentile1 = () =>{
        props.percentileDecrease(props,props.percentile)
      }  
      const increaseScore1 = () =>{
        props.scoreIncrease(props,props.score)
      }  
      const decreaseScore1 = () =>{
        props.scoreDecrease(props,props.score)
      }    

  return (
    <div>
      <section className="modal-main">
        <div className='ModalHead'>
          <div>Update Scores</div>
          <img className='logo' src={logo} alt='Sorry'></img>
        </div>
        <div className='HoriLine'></div>
        <div className='setContent'>
          <div className='Update'>
            <div className='Ellipse1'>
              <img src={Ellipse} alt='Sorry'></img>
              <div className='number'>
                <img src={b1} alt='Sorry'></img>
              </div>
            </div>
            <div className='updateTitle'>Update your <b>rank</b></div>
            <div className='buttons'> 
              <button  className='btn'onClick={increaseRank1}>+</button>
              <div className='input'>{props.rank}</div>
              <button  className='btn'onClick={decreaseRank1}>-</button>
            </div>
          </div>

          <div className='Update'>
            <div className='Ellipse1'>
              <img src={Ellipse} alt='Sorry'></img>
                <div className='number'>
                  <img src={b2} alt='Sorry'></img>
                </div>
            </div>
            <div className='updateTitle'>Update your <b>percentile</b></div> 
            <div className='buttons'>
              <button  className='btn'onClick={increasePercentile1}>+</button>
              <div className='input'>{props.percentile}</div>
              <button  className='btn'onClick={decreasePercentile1}>-</button>
            </div>
          </div>
          
          <div className='Update'>
            <div className='Ellipse1'>
              <img src={Ellipse} alt='Sorry'></img>
              <div className='number'>
                <img src={b3} alt='Sorry'></img>
              </div>
            </div>
            <div className='updateTitle'>Update your <b>score</b></div>
            <div className='buttons'>
              <button className='btn' onClick={increaseScore1}>+</button>
              <div className='input'>{props.score}</div>
              <button className='btn' onClick={decreaseScore1}>-</button></div>
            </div>
          </div>
          
        <div className='HoriLine'></div>
        
        <div className='handles'>
          <button className='buttonSave' onClick={closeModal}>Close</button>
          <button className='buttonSave' onClick={closeModal}>Save<img src={arrow} className='arrow' alt='Sorry'></img></button>
        </div>
          
      </section>
        
    </div>
  )
}

const mapStatetoProps = (state) => {
    return {
        isModalOpen:state.isModalOpen,
        rank:state.rank,
        percentile:state.percentile,
        score:state.score
      }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        closeModal : (state,modalState) => { dispatch(ModalClose(state,modalState)) },
        rankIncrease:(state,rank)=>{dispatch(increaseRank(state,rank))},
        rankDecrease:(state,rank)=>{dispatch(decreaseRank(state,rank))},
        percentileIncrease:(state,percentile)=>{dispatch(increasePercentile(state,percentile))},
        percentileDecrease:(state,percentile)=>{dispatch(decreasePercentile(state,percentile))},
        scoreIncrease:(state,score)=>{dispatch(increaseScore(state,score))},
        scoreDecrease:(state,score)=>{dispatch(decreaseScore(state,score))},
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Modal)



