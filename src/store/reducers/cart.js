import * as actionTypes from '../actions/cart';

const initialState = {
    products: [],
    sum: 0
};

//function that checks if there are repetiotions in objects, and sum the quantity
const addProduct = (state,action) => {
    const index = state.products.findIndex(p => p.name === action.product.name);
    if(index < 0){
        return{ ...state, products: state.products.concat(action.product)}
    } else{
        const product = {...state.products[index]};
        product.quantity += action.product.quantity;
        const products = [...state.products];
        products[index] = product;
        return {...state, products: products}
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART': return addProduct(state,action);
        default: return state;
}};

export default reducer;