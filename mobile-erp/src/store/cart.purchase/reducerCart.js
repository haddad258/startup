// Action Types
const PURCHASE_ADD_TO_CART = 'PURCHASE/ADD_TO_CART';
const PURCHASE_ADD_TO_CART_MULTIPLE = 'PURCHASE/ADD_TO_CART_MULTIPLE';
const PURCHASE_REMOVE_FROM_CART = 'PURCHASE/REMOVE_FROM_CART';
const PURCHASE_DELETE_FROM_CART = 'PURCHASE/DELETE_FROM_CART';
const PURCHASE_UPDATE_CART = 'PURCHASE/UPDATE_CART';
const PURCHASE_CLEAR_CART = 'PURCHASE/CLEAR_CART';

// Initial State
const initialStatePurchase = {
  products: {}, // { id: { product, quantity } }
  total: 0,
};

// Reducer
const purchaseCartReducer = (state = initialStatePurchase, action) => {
  switch (action.type) {
    case PURCHASE_ADD_TO_CART:
      return addToCart(state, action.payload);
    case PURCHASE_ADD_TO_CART_MULTIPLE:
      return addToCartMultiple(state, action.payload);
    case PURCHASE_REMOVE_FROM_CART:
      return removeFromCart(state, action.payload);
    case PURCHASE_DELETE_FROM_CART:
      return deleteFromCart(state, action.payload);
    case PURCHASE_UPDATE_CART:
      return updateCart(state, action.payload);
    case PURCHASE_CLEAR_CART:
      return clearCart();
    default:
      return state;
  }
};

// Helper Functions

// Add a single item to the cart
const addToCart = (state, payload) => {
  const { id, product, quantity } = payload;
  const updatedProducts = {
    ...state.products,
    [id]: { product, quantity: (state.products[id]?.quantity || 0) + quantity },
  };

  const updatedTotal = calculateTotal(updatedProducts);

  return { ...state, products: updatedProducts, total: updatedTotal };
};

// Add multiple items to the cart
const addToCartMultiple = (state, payload) => {
  const { id, product, quantity } = payload;
  const updatedProducts = {
    ...state.products,
    [id]: { product, quantity: (state.products[id]?.quantity || 0) + quantity },
  };

  const updatedTotal = calculateTotal(updatedProducts);

  return { ...state, products: updatedProducts, total: updatedTotal };
};

// Remove a single item from the cart
const removeFromCart = (state, payload) => {
  const { id } = payload;
  const { [id]: removedProduct, ...updatedProducts } = state.products;

  const updatedTotal = removedProduct
    ? state.total - removedProduct.product.price * removedProduct.quantity
    : state.total;

  return { ...state, products: updatedProducts, total: updatedTotal };
};

// Delete all quantities of an item from the cart
const deleteFromCart = (state, payload) => {
  const { id } = payload;
  const { [id]: deletedProduct, ...updatedProducts } = state.products;

  const updatedTotal = deletedProduct
    ? state.total - deletedProduct.product.price * deletedProduct.quantity
    : state.total;

  return { ...state, products: updatedProducts, total: updatedTotal };
};

// Update an item in the cart
const updateCart = (state, payload) => {
  const {
    id,
    quantity,
    freeQuantity = 0,
    discountType,
    discountPercentage = 0,
    discountValue = 0,
    finalPrice = 0,
  } = payload;

  const updatedProduct = {
    ...state.products[id],
    quantity,
    freeQuantity,
    discountType,
    discountPercentage,
    discountValue,
    finalPrice,
  };

  const updatedProducts = {
    ...state.products,
    [id]: updatedProduct,
  };

  const updatedTotal = calculateTotal(updatedProducts);

  return { ...state, products: updatedProducts, total: updatedTotal };
};

// Clear the entire cart
const clearCart = () => ({
  products: {},
  total: 0,
});

// Calculate the total price of the cart
const calculateTotal = (products) => {
  let total = 0;
  for (const id in products) {
    const { product, quantity } = products[id];
    total += product.price * quantity;
  }
  return total;
};

export default purchaseCartReducer;
