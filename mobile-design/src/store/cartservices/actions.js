// cartservicesReducer.js
const ADD_TO_CART_SERVICE = 'ADD_TO_CART_SERVICE';
const ADD_TO_CART_SERVICE_multiple = 'ADD_TO_CART_SERVICE_multiple';
const REMOVE_FROM_CART_SERVICE = 'REMOVE_FROM_CART_SERVICE';
const UPDATE_FROM_CART_SERVICE = 'UPDATE_FROM_CART_SERVICE';
const CLEAR_CART_SERVICE = 'CLEAR_CART_SERVICE';
// Action types

// Action creators

export const  addToCartservicesMultiple = (id,product,quantity) => {
  return {
    type: ADD_TO_CART_SERVICE_multiple,
    payload:{ id, product, quantity },
  };
};
export const addToCartservices = (id,product,quantity) => {
  return {
    type: ADD_TO_CART_SERVICE,
    payload:{ id, product, quantity },
  };
};
export const removeFromCartservices = (id,productremove,quantity) => {
  return {
    type: REMOVE_FROM_CART_SERVICE,
    payload:{ id, productremove, quantity },
  };
};


export const clearCartservices = () => ({
  type: CLEAR_CART_SERVICE,
});

export const updateFromCartservices = (idupdate, productupdate, quantityupdate, freeQuantity, discountType, discountPercentage, discountValue, finalPrice) => {
  return {
    type: UPDATE_FROM_CART_SERVICE,
    payload:{idupdate, productupdate, quantityupdate, freeQuantity, discountType, discountPercentage, discountValue, finalPrice},
  };
};