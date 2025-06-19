// src/components/CartSummary.js
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const CartSummary = () => {
  const { cartItems } = useContext(CartContext);

  // Convert price from string '$799' to number 799
  const getTotalPrice = () =>
    cartItems.reduce((total, item) => {
      const priceNumber = parseFloat(item.price.replace('$', ''));
      return total + priceNumber;
    }, 0);

  return (
    <div style={{ padding: '1rem', backgroundColor: '#f1f1f1', borderRadius: '8px', margin: '1rem' }}>
      <h3>Cart Summary</h3>
      <p>Total Items: {cartItems.length}</p>
      <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
    </div>
  );
};

export default CartSummary;
