
const ADD_TO_CART = 'cart/add'


export const addToCart = (itemId) => {

  return {
    type: ADD_TO_CART,
    itemId
  }
}

let initialState = {cart:{}}

export default function cartReducer(state=initialState, action){

  const newState = {...state}

  switch(action.type){
    case ADD_TO_CART:
      if (newState.cart[action.itemId]) {
        newState.cart[action.itemId].count += 1;
      } else {
        newState.cart[action.itemId] = { id: action.itemId, count: 1 };
      }
      return newState;
    default:
      return newState
    }
  

}