import * as actionTypes from '../actions/cart';

const initialState = {
    sum: 0,
    products: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return{
                ...state,
                sum: state.sum + action.product.quantity,
                products: state.products.concat(action.product)
            }
    }
    return state;
};

export default reducer;