import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  ADD_CART,
  CART_DELETE
} from "../actionTypes/product";

export default (
  prevstate = {
    product: [],
    cart: [],
    numberofitem: 0,
    isLoggedIn: true,
    isLoading: false
  },
  action
) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...prevstate,
        isLoading: true
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...prevstate,
        isLoading: false,
        product: action.product
      };
    case ADD_CART:
      return {
        ...prevstate,
        cart: [...prevstate.cart, action.cartproduct]
      };
    case CART_DELETE:
      return {
        ...prevstate,
        ...prevstate.cart,
        cart: [...prevstate.cart.filter(p => p !== action.product)]
      };
    default:
      return prevstate;
  }
};
