// src/Context/CartContext.js (MODIFIED)
import React, { createContext, useState, useMemo, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { getProducts } from '../Data/Products'; // Import centralized products

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState(null);
  const { user } = useContext(AuthContext);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const addToCart = (product) => {
    if (!user) {
      showNotification('Please login to add items to cart!', 'error');
      return false;
    }
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex(item => item.id === product.id);
      if (existingItemIndex > -1) {
        const updatedCart = [...prev];
        updatedCart[existingItemIndex].quantity += 1;
        showNotification(`${product.name} quantity updated in cart!`, 'info');
        return updatedCart;
      }
      showNotification(`${product.name} added to cart!`, 'success');
      return [...prev, { ...product, quantity: 1 }];
    });
    return true;
  };

  // NEW: Update quantity of an item in cart
  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems((prev) => {
      const updatedCart = prev.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, newQuantity) } // Ensure quantity is at least 1
          : item
      );
      showNotification(`Quantity for ${updatedCart.find(item => item.id === productId)?.name} updated!`, 'info');
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter(item => item.id !== productId));
    showNotification('Item removed from cart!', 'info');
  };

  const addToWishlist = (product) => {
    if (!user) {
      showNotification('Please login to add items to wishlist!', 'error');
      return false;
    }
    setWishlistItems((prev) => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        showNotification(`${product.name} is already in your wishlist!`, 'info');
        return prev;
      }
      showNotification(`${product.name} added to wishlist!`, 'success');
      return [...prev, product];
    });
    return true;
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) => prev.filter(item => item.id !== productId));
    showNotification('Item removed from wishlist!', 'info');
  };

  const totalItemsInCart = cartItems.reduce((acc, item) => acc + item.quantity, 0); // Sum quantities
  const totalItemsInWishlist = wishlistItems.length;

  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartItemQuantity, // NEW
        removeFromCart,
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        searchTerm,
        setSearchTerm,
        notification,
        showNotification,
        totalItemsInCart,
        totalItemsInWishlist,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};