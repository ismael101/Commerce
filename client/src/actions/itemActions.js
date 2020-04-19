import {SETITEMS} from './types'

export const set = (products) =>{
    return dispatch => {
        dispatch({
            type:SETITEMS, 
            payload:products
        })
}
}