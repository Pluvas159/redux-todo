const filterReducer = (state = 'All', action) =>{
    switch(action.type){
        case 'CHANGE_FILTER':
            return state = action.payload.changeTo
        default:
            return state
    }


}


export default filterReducer