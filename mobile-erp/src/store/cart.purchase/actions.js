const PURCHASE_ADD_TO_CART = 'PURCHASE/ADD_TO_CART';
const PURCHASE_ADD_TO_CART_MULTIPLE = 'PURCHASE/ADD_TO_CART_MULTIPLE';
const PURCHASE_REMOVE_FROM_CART = 'PURCHASE/REMOVE_FROM_CART';
const PURCHASE_DELETE_FROM_CART = 'PURCHASE/DELETE_FROM_CART';
const PURCHASE_UPDATE_CART = 'PURCHASE/UPDATE_CART';
const PURCHASE_CLEAR_CART = 'PURCHASE/CLEAR_CART';

export const purchaseAddToCart = (id, product, quantity) => ({
  type: PURCHASE_ADD_TO_CART,
  payload: { id, product, quantity },
});

export const purchaseAddToCartMultiple = (id, product, quantity) => ({
  type: PURCHASE_ADD_TO_CART_MULTIPLE,
  payload: { id, product, quantity },
});

export const purchaseRemoveFromCart = (id) => ({
  type: PURCHASE_REMOVE_FROM_CART,
  payload: { id },
});

export const purchaseDeleteFromCart = (id) => ({
  type: PURCHASE_DELETE_FROM_CART,
  payload: { id },
});

export const purchaseUpdateCart = (id, quantity) => ({
  type: PURCHASE_UPDATE_CART,
  payload: { id, quantity },
});

export const purchaseClearCart = () => ({
  type: PURCHASE_CLEAR_CART,
});
