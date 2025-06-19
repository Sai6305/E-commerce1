// src/Pages/ProductDetail.js (MODIFIED)
import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { getProductById } from '../Data/Products'; // Import helper
import './ProductDetail.css';

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, showNotification } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const foundProduct = getProductById(productId); // Use centralized function
    if (foundProduct) {
      setProduct(foundProduct);
      setError(false);
    } else {
      setError(true);
      showNotification('Product not found!', 'error');
    }
    setLoading(false);
  }, [productId, showNotification]);

  if (loading) {
    return <div className="product-detail-page">Loading product details...</div>;
  }

  if (error || !product) {
    return <div className="product-detail-page product-not-found">Product not found. <button onClick={() => navigate('/')}>Go Home</button></div>;
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-image-gallery">
          <img src={product.image} alt={product.name} className="main-product-image" />
          {/* You can add a thumbnail gallery here if you add more images to product data */}
        </div>

        <div className="product-info">
          {product.comingSoon && <span className="coming-soon-badge">Coming Soon</span>}
          <h1 className="product-title">{product.name}</h1>
          {product.rating && <div className="product-rating">{'⭐'.repeat(Math.floor(product.rating))} ({product.rating})</div>}

          <p className="price-detail-display">
            <span className="current-price">${product.price.toFixed(2)}</span>
            {product.originalPrice && <span className="original-price">${product.originalPrice.toFixed(2)}</span>}
            {product.discount && <span className="discount-percent">{product.discount}</span>}
          </p>

          <p className="product-description">{product.description}</p>

          {product.features && product.features.length > 0 && (
            <div className="product-features">
              <h3>Key Features:</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="product-actions-detail">
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
            <button className="add-to-wishlist-btn" onClick={() => addToWishlist(product)}>❤️ Add to Wishlist</button>
          </div>

          <div className="product-reviews"> {/* NEW REVIEWS SECTION */}
            <h3>Customer Reviews ({product.reviews ? product.reviews.length : 0})</h3>
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <p className="review-user"><strong>{review.user}</strong></p>
                  <p className="review-rating">{'⭐'.repeat(review.rating)}</p>
                  <p className="review-comment">"{review.comment}"</p>
                </div>
              ))
            ) : (
              <p>No reviews yet for this product.</p>
            )}
            {/* You could add a "Write a review" form here */}
          </div>

          <button className="back-btn" onClick={() => navigate(-1)}>← Back to Products</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;