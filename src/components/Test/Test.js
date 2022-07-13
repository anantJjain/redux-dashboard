import React from 'react'
import { connect } from 'react-redux'
import Modal from '../Modal/Modal'
import { ModalOpen } from '../../actions/stateChange'
import skill from '../../assets/image4.png'
import '../Test/styles.css'


function Test(props) {

const openModal = () => {
        console.log(props)
        props.openModal(props,props.isModalOpen)
}

  return (
    <div>
        { props.isModalOpen ? <Modal /> : <>
                                            <div className='SkillContainer'>
                                                <div className='icon'>
                                                <img src={skill} alt='Sorry'></img>
                                                </div>
                                                <div className='contentSkill'>
                                                <div className='SkillName'>Hypertext Markup Language</div>
                                                <div className='SkillDetails'>Questions : 08  |  Duration : 15 mins  |  Submitted on 5 June 2021</div> 
                                                </div>
                                                <button 
                                                    onClick={openModal} 
                                                    className='ModalToggler'>Update
                                                </button>
                                            </div>             
                                        </>  
      }
    </div>
  )
}


const mapStatetoProps = (state) =>{
    return {
      isModalOpen:state.isModalOpen,
    }
}

const mapDispatchtoProps = (dispatch) => {
    return{
      openModal : (state,modalState) => { dispatch(ModalOpen(state,modalState)) }
    }
    }

export default connect(mapStatetoProps,mapDispatchtoProps)(Test)