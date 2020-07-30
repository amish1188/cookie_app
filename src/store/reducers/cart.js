import * as actionTypes from '../actions/cart';

const initialState = {
    products: [],
    sum: 0
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return{
                ...state,
                products: state.products.concat(action.product),
                sum: state.sum + (action.product.price * action.product.quantity)
            };
           
        }
        return state;
};

export default reducer;