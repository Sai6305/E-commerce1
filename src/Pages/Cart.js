// src/Pages/Cart.js (MODIFIED - with "Continue Shopping" button AND "Back to Home" Link)
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useNavigate, Link } from 'react-router-dom'; // Import Link as well
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart, updateCartItemQuantity, totalPrice, showNotification } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      showNotification('Your cart is empty. Add items before checking out!', 'info');
      return;
    }
    showNotification(`Proceeding to checkout! Total: $${totalPrice.toFixed(2)} (This is a demo, no actual payment)`, 'success');
    // In a real application, you would navigate to a checkout page
    // and integrate with a payment gateway.
  };

  const handleContinueShopping = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0
        ? (
          <div className="empty-cart-message">
            <p>No items in your cart.</p>
            <button className="continue-shopping-btn" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
          </div>
        )
        : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">Price: ${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateCartItemQuantity(item.id, parseInt(e.target.value))}
                    />
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
            <div className="cart-summary">
              <p>Total: ${totalPrice.toFixed(2)}</p>
              <div className="cart-actions-bottom">
                <button className="continue-shopping-btn" onClick={handleContinueShopping}>
                  Continue Shopping
                </button>
                <button onClick={handleCheckout}>Proceed to Checkout</button>
              </div>
            </div>
          </>
        )
      }
      {/* Changed class name to match Wishlist.js */}
      <Link to="/" className="back-home-btn">← Back to Home</Link>
    </div>
  );
}

export default Cart;