const initState = {
    isModalOpen:false,
    rank:1,
    percentile:100,
    score:15,
}

const rootReducer = (state=initState,action) =>{
  if(action.type==='OPEN_MODAL'){
    let newState = !(state.isModalOpen)
    return{
        ...state,
        isModalOpen :newState
    }   
} 
  if(action.type==='CLOSE_MODAL'){
    let newState = !(state.isModalOpen)
    return{
        ...state,
        isModalOpen :newState
    }   
} 
if(action.type==='INCREASE_RANK'){
    let newRank = state.rank + 1
    return {
        ...state,
        rank:newRank
    }
}
if(action.type==='DECREASE_RANK'  && state.rank>1 ){
    let newRank = state.rank - 1
    return {
        ...state,
        rank:newRank
    }
}
if(action.type==='INCREASE_PERCENTILE' && state.percentile<100 ){
    let newPercentile = state.percentile   + 1
    return {
        ...state,
        percentile:newPercentile
    }
}
if(action.type==='DECREASE_PERCENTILE' && state.percentile>0){
    let newPercentile = state.percentile   - 1
    return {
        ...state,
        percentile:newPercentile
    }
}
if(action.type==='INCREASE_SCORE' && state.score<15){
    let newScore = state.score   + 1
    return {
        ...state,
        score:newScore
    }
}
if(action.type==='DECREASE_SCORE' && state.score>0){
    let newScore = state.score   - 1
    return {
        ...state,
        score:newScore
    }
}
  return state  
}

export default rootReducer