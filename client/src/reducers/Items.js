const initialState = {
    items:[]
}

export default function(state = initialState,action){
    switch(action.type){
        case 'SETITEMS':
           return{
               items:action.payload
           }  
        default:
            return state
    }
}