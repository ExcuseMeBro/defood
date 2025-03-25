import { createContext } from 'react';

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  cartTotal: 0,
  toggleCart: () => {}
});

export default CartContext;