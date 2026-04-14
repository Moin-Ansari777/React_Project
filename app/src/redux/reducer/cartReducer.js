const intialState = {
    cartItem : []
}

export const cartReducer = (state=intialState,action)=>{
    if(action.type === 'ADD_TO-CART'){
        return state
    }
    else return state
}