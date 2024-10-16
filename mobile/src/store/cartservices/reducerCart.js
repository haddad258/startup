// Reducers.js
const ADD_TO_CART_SERVICE = 'ADD_TO_CART_SERVICE';
const ADD_TO_CART_SERVICE_multiple = 'ADD_TO_CART_SERVICE_multiple';
const REMOVE_FROM_CART_SERVICE = 'REMOVE_FROM_CART_SERVICE';
const DELETE_FROM_CART_SERVICE = 'DELETE_FROM_CART_SERVICE';
const UPDATE_FROM_CART_SERVICE = 'UPDATE_FROM_CART_SERVICE';
const CLEAR_CART_SERVICE = 'CLEAR_CART_SERVICE';
const initialState = {
  products: {}, // { id: { product, quantity } }
  total: 0,
};

// reducer.js
const cartservicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_SERVICE:
      return addToCartservices(state, action.payload);
    case ADD_TO_CART_SERVICE_multiple:
      return addToCartservicesMultiple(state, action.payload);
    case REMOVE_FROM_CART_SERVICE:
      return removeFromCartservices(state, action.payload);
    case DELETE_FROM_CART_SERVICE:
      return deleteFromCartservices(state, action.payload);
    case UPDATE_FROM_CART_SERVICE:
      return updateCartservices(state, action.payload);
    case CLEAR_CART_SERVICE:
      return clearCartservices(state, action.payload);
    default:
      return state;
  }
};
const addToCartservices = (state, payload) => {
  const { id, product, quantity } = payload;
  const updatedProducts = { [id]: { product, quantity } };
  const updatedTotal =  product.price * quantity;
  return {  products: updatedProducts, total: updatedTotal };
};
const addToCartservicesMultiple = (state, payload) => {
  const { id, product, quantity } = payload;
  const updatedProducts = { ...state.products, [id]: { product, quantity } };
  const updatedTotal = state.total + product.price * quantity;
  return { ...state, products: updatedProducts, total: updatedTotal };
};
const removeFromCartservices = (state, payload) => {
  const { id } = payload;
  const { [id]: removedProduct, ...updatedProducts } = state.products;
  const updatedTotal = state.total - removedProduct.product.price * removedProduct.quantity;
  return { ...state, products: updatedProducts, total: updatedTotal };
};

const deleteFromCartservices = (state, payload) => {
  const { id } = payload;
  const { [id]: deletedProduct, ...updatedProducts } = state.products;
  const updatedTotal = state.total - deletedProduct.product.price * deletedProduct.quantity;

  return { ...state, products: updatedProducts, total: updatedTotal };
};

const updateCartservices = (state, payload) => {
  const { id, quantity } = payload;
  const updatedProducts = {
    ...state.products,
    [id]: { ...state.products[id], quantity },
  };

  const updatedTotal = calculateTotal(updatedProducts);

  return { ...state, products: updatedProducts, total: updatedTotal };
};
const clearCartservices = (state, payload) => {
  return {
    products: {},
    total: 0,
  }
};
const calculateTotal = (products) => {
  let total = 0;
  for (const id in products) {
    const { product, quantity } = products[id];
    total += product.price * quantity;
  }
  return total;
};

export default cartservicesReducer