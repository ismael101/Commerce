import {combineReducers} from 'redux'
import Cart from './Cart'
import Items from './Items'

export default combineReducers({
    cart:Cart,
    items:Items
})