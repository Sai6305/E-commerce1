import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import './Wishlist.css';

function Wishlist() {
  const { wishlistItems, removeFromWishlist, addToCart } = useContext(CartContext);

  const handleMoveToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <div className="wishlist-page">
      <h2>My Wishlist ({wishlistItems.length})</h2>
      {wishlistItems.length === 0 ? (
        <p className="empty-wishlist">Your wishlist is empty. Start adding some items!</p>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item-card">
              <Link to={`/product/${item.id}`} className="wishlist-item-image-link">
                <img src={item.image} alt={item.name} className="wishlist-item-image" />
              </Link>
              <div className="wishlist-item-details">
                <Link to={`/product/${item.id}`} className="wishlist-item-name">{item.name}</Link>
                <p className="wishlist-item-price">{item.price}</p>
                <div className="wishlist-item-actions">
                  <button onClick={() => handleMoveToCart(item)} className="move-to-cart-btn">Move to Cart</button>
                  <button onClick={() => removeFromWishlist(item.id)} className="remove-from-wishlist-btn">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link to="/" className="back-home-btn">← Back to Home</Link>
    </div>
  );
}

export default Wishlist;
