import {SETCART, ADD, UPDATE, DELETE} from './types'

export const set = (orders) =>{
    return dispatch => {
        dispatch({
            type:SETCART, 
            payload:orders
        })
}
}

export const add = (order) =>{
    return dispatch => {
        dispatch({
            type:ADD, 
            payload:order
        })
}
}

export const update = (order) =>{
    return dispatch => {
        dispatch({
            type:UPDATE, 
            payload:order
        })
}
}
export const remove = (order) =>{
    return dispatch => {
        dispatch({
            type:DELETE,
            payload:order
        })
    }
}
