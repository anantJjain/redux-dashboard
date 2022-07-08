export const ModalOpen = (state,modalState) => {
    return { type:'OPEN_MODAL',modalState:state.isModalOpen}
}    

export const ModalClose = (state,modalState) => {
    return { type:'CLOSE_MODAL',modalState:!state.isModalOpen}
}    

export const increaseRank = (state,rank) =>{
    return { type:'INCREASE_RANK',rank:state.rank+1 }
}

export const decreaseRank = (state,rank) =>{
    return { type:'DECREASE_RANK',rank:state.rank-1 }
}

export const increasePercentile = (state,percentile) =>{
    return { type:'INCREASE_PERCENTILE',percentile:state.percentile+1 }
}

export const decreasePercentile = (state,percentile) =>{
    return { type:'DECREASE_PERCENTILE',percentile:state.percentile-1 }
}

export const increaseScore = (state,score) =>{
    return { type:'INCREASE_SCORE',score:state.score+1 }
}

export const decreaseScore = (state,score) =>{
    return { type:'DECREASE_SCORE',score:state.score-1 }
}