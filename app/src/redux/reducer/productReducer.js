const intialState = {
    products : [],
}

export const productReducer = (state = intialState, action) =>{

    if(action.type === 'ADD_TO_PRODUCT')
    {
        return {
            products : [...state.products, action.payload]
        };
    }
    else{
        return state;
    }
}