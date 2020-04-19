const initialState = {
    cart:[],
    amount:0,
    total:0
}

export default function(state = initialState, action){
    switch(action.type){
        case 'SETCART':
            let setAmount = 0
            let setTotal = 0
            action.payload.forEach(item => {
               setAmount++
               setTotal = setTotal + item.total 
            })
            return{
                total:setTotal,
                amount:setAmount,
                cart:action.payload
            }
        case 'ADD':
            let addAmount = 0
            let addTotal = 0
            let addCart = [...state.cart,action.payload]
            addCart.forEach(item => {
                addAmount = addAmount + 1
                addTotal = addTotal + item.total
            })
            return{
                total:addTotal,
                amount:addAmount,
                cart:addCart
            }
        case 'UPDATE':
            let updateTotal = 0
            let updateAmount = 0
            let updateCart = state.cart.map(order => {
                if(order._id === action.payload._id){
                    order = action.payload
                }
                return order
            })
            updateCart.forEach(order => {
                updateTotal = updateTotal + order.total
                updateAmount++
            })
            return{
                total:updateTotal,
                amount:updateAmount,
                cart:updateCart
            }
        case 'DELETE':
            let deleteTotal = 0
            let deleteAmount = 0
            const deleteCart = state.cart.filter(order => order !== action.payload)
            deleteCart.forEach(order => {
                deleteTotal = deleteTotal + order.total
                deleteAmount++
            })
            return{
                cart:deleteCart,
                total:deleteTotal,
                amount:deleteAmount
            }
        default:
            return state;
    }
}