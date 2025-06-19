// // src/Components/ProductSection.js (MODIFIED)
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom'; // Import Link
// import { CartContext } from '../Context/CartContext';
// import './ProductSection.css';

// function ProductSection({ category }) {
//   const { addToCart, addToWishlist, searchTerm = '' } = useContext(CartContext);

//   // MODIFIED: Product Data with unique 'id' and more details
//   const productData = {
//     Mobiles: [
     
//       {
//         id: 'iphone-14',
//         name: 'iPhone 14',
//         price: '$799',
//         originalPrice: '$899',
//         discount: '11% off',
//         image: 'https://m.media-amazon.com/images/I/71ZDY57yTQL._SL1500_.jpg',
//         description: 'The latest iPhone with A15 Bionic chip, amazing camera system, and all-day battery life. Enjoy super-fast performance and robust privacy features.',
//         rating: 4.5, // NEW field
//       },
//       {
//         id: 'samsung-galaxy-s23',
//         name: 'Samsung Galaxy S23',
//         price: '$749',
//         originalPrice: '$849',
//         discount: '12% off',
//         image: 'https://tse3.mm.bing.net/th?id=OIP.5QMkXIlusvZfEUm50okfbAHaHa&pid=Api&P=0&h=180',
//         description: 'Powerful Android smartphone with a versatile camera, vibrant display, and premium design. Perfect for productivity and entertainment.',
//         rating: 4.2,
//       },
//       {
//         id: 'oneplus-11',
//         name: 'OnePlus 11',
//         price: '$699',
//         originalPrice: '$750',
//         discount: '7% off',
//         image: 'https://oasis.opstatics.com/content/dam/oasis/page/2023/na/oneplus-11/specs/green-img.png',
//         description: 'Flagship killer with lightning-fast charging, smooth performance, and a sleek design. Great for gaming and multimedia consumption.',
//         rating: 4.6,
//       },
//       {
//         id: 'google-pixel-7',
//         name: 'Google Pixel 7',
//         price: '$599',
//         originalPrice: '$650',
//         discount: '8% off',
//         image: 'https://tse3.mm.bing.net/th?id=OIP.Kz7YK3nqAITvq74Q9C-l1AHaHa&pid=Api&P=0&h=180',
//         description: 'Unmatched camera quality and pure Android experience. Google Tensor G2 chip offers exceptional AI capabilities.',
//         rating: 4.7,
//       },
//     ],
//     TVs: [
//       {
//         id: 'samsung-55-4k',
//         name: 'Samsung 55" 4K Smart TV',
//         price: '$899',
//         image: 'https://tse3.mm.bing.net/th?id=OIP.QAsT9Cwug2UTzN2G38yxAwHaHO&pid=Api&P=0&h=180',
//         description: 'Immersive 4K experience with smart features. Access your favorite streaming apps and enjoy stunning visuals.',
//       },
//       {
//         id: 'lg-oled-48',
//         name: 'LG OLED 48" TV',
//         price: '$999',
//         image: 'https://m.media-amazon.com/images/I/81tUu6OtRsL.jpg',
//         description: 'Vibrant colors and perfect blacks with OLED technology. Ideal for movie buffs and gamers.',
//       },
//       {
//         id: 'sony-bravia-50',
//         name: 'Sony Bravia 50" Smart TV',
//         price: '$849',
//         image: 'https://tse2.mm.bing.net/th?id=OIP._1O3B3ZlO7XRQwAFyJ0qZgHaE8&pid=Api&P=0&h=180',
//         description: 'Stunning clarity and sound with Sony\'s renowned picture processing. Enjoy a truly cinematic experience.',
//       },
//       {
//         id: 'mi-smart-tv-43',
//         name: 'Mi Smart TV 43"',
//         price: '$499',
//         image: 'https://tse4.mm.bing.net/th?id=OIP.TjquwsUta_gWEy4vIEW1EQHaER&pid=Api&P=0&h=180',
//         description: 'Affordable smart TV with Android TV built-in. Access thousands of apps and enjoy seamless entertainment.',
//       },
//     ],
//     Watches: [
//       {
//         id: 'apple-watch-series-9',
//         name: 'Apple Watch Series 9',
//         price: '$399',
//         image: 'https://tse1.mm.bing.net/th?id=OIP.bWaYLmfcNI21OFZLA_i24gHaHa&pid=Api&P=0&h=180',
//         description: 'Advanced health features and seamless integration with your iPhone. Stay connected and track your fitness goals.',
//       },
//       {
//         id: 'samsung-galaxy-watch-6',
//         name: 'Samsung Galaxy Watch 6',
//         price: '$299',
//         image: 'https://m.media-amazon.com/images/I/61epn29QG0L._SL1500_.jpg',
//         description: 'Stylish design and comprehensive fitness tracking for Android users. Monitor your health and receive notifications on your wrist.',
//       },
//       {
//         id: 'fire-boltt-ninja',
//         name: 'Fire-Boltt Ninja',
//         price: '$49',
//         image: 'https://m.media-amazon.com/images/I/61y2VVWcGBL._SL1500_.jpg',
//         description: 'Budget-friendly smartwatch with essential features. Track steps, heart rate, and receive basic notifications.',
//       },
//       {
//         id: 'fossil-gen-6',
//         name: 'Fossil Gen 6 Smartwatch',
//         price: '$199',
//         image: 'https://m.media-amazon.com/images/I/71393U576XL._AC_UL1500_.jpg',
//         description: 'Classic watch design with modern smartwatch capabilities. Powered by Wear OS for access to Google services and apps.',
//       },
//     ],
//     Refrigerators: [
//       {
//         id: 'lg-260l-double-door',
//         name: 'LG 260 L Double Door Refrigerator',
//         price: '$499',
//         image: 'https://i.pinimg.com/736x/19/ec/d2/19ecd2f19c414519de1dfb36b0befa75.jpg',
//         description: 'Spacious and energy-efficient refrigerator with smart inverter compressor. Keeps your food fresh for longer.',
//       },
//       {
//         id: 'samsung-253l-3star',
//         name: 'Samsung 253 L 3 Star Refrigerator',
//         price: '$469',
//         image: 'https://tiimg.tistatic.com/fp/1/007/828/samsung-253-l-3-star-with-inverter-double-door-refrigerator-elegant-inox-182.jpg',
//         description: 'Stylish design with ample storage and energy-saving features. Perfect for small to medium-sized families.',
//       },
//       {
//         id: 'whirlpool-265l',
//         name: 'Whirlpool 265 L Refrigerator',
//         price: '$439',
//         image: 'https://www.liqo.in/wp-content/uploads/2022/04/6.png',
//         description: 'Reliable cooling performance with spacious interior. Ideal for everyday use.',
//       },
//       {
//         id: 'godrej-240l-inverter',
//         name: 'Godrej 240 L Inverter Refrigerator',
//         price: '$429',
//         image: 'https://cdn.lotuselectronics.com/ItemImages/468381IM.jpg',
//         description: 'Energy-efficient inverter technology for consistent cooling. A durable and practical choice for your kitchen.',
//       },
//     ],
//     ACs: [
//       {
//         id: 'voltas-1.5-ton-split',
//         name: 'Voltas 1.5 Ton Split AC',
//         price: '$599',
//         image: 'https://tse1.mm.bing.net/th?id=OIP.GEQwSAEhNe_bfEb4874tTAHaHa&pid=Api&P=0&h=180',
//         description: 'Efficient cooling with powerful air throw. Keeps your room comfortable even in extreme heat.',
//       },
//       {
//         id: 'lg-1.5-ton-5star',
//         name: 'LG 1.5 Ton 5 Star AC',
//         price: '$679',
//         image: 'https://tse2.mm.bing.net/th?id=OIP.FW-n8qq-20SoHWJpMGfOUQHaHa&pid=Api&P=0&h=180',
//         description: 'Superior cooling and energy savings with 5-star rating. Features advanced air purification.',
//       },
//       {
//         id: 'blue-star-1-ton',
//         name: 'Blue Star 1 Ton AC',
//         price: '$519',
//         image: 'https://tse1.mm.bing.net/th?id=OIP.MSRcj-gLVxzIVO-qXhgofQHaHa&pid=Api&P=0&h=180',
//         description: 'Compact and efficient 1-ton AC for smaller rooms. Provides quick cooling and quiet operation.',
//       },
//       {
//         id: 'samsung-1.5-ton-inverter',
//         name: 'Samsung 1.5 Ton Inverter AC',
//         price: '$629',
//         image: 'https://japanelectronics.com.pk/cdn/shop/files/Samsung_AC_1.5_Ton_Split_Inverter_AR18ASFZGWKY.webp?v=1725532045',
//         description: 'Smart inverter technology for precise temperature control and energy efficiency. Enjoy comfortable cooling year-round.',
//       },
//     ],
//   };

//   const filtered = productData[category]?.filter(p =>
//     p.name.toLowerCase().includes(searchTerm.toLowerCase())
//   ) || [];

//   return (
//     <section className="product-section">
//       <h2>{category}</h2>
//       <div className="product-grid">
//         {filtered.length > 0 ? (
//           filtered.map((p) => ( // Use p.id for key
//             <div key={p.id} className="product-card">
//               {p.comingSoon && <span className="coming-soon-badge">Coming Soon</span>} {/* NEW */}
//               <Link to={`/product/${p.id}`}> {/* Link to Product Detail */}
//                 <img src={p.image} alt={p.name} />
//               </Link>
//               <h3>
//                 <Link to={`/product/${p.id}`}>{p.name}</Link>
//               </h3>
//               <p className="price-display">
//                 <span className="current-price">{p.price}</span>
//                 {p.originalPrice && <span className="original-price">{p.originalPrice}</span>}
//                 {p.discount && <span className="discount-percent">{p.discount}</span>}
//               </p>
//               {p.rating && <div className="product-rating">{'⭐'.repeat(Math.floor(p.rating))}</div>} {/* NEW */}
//               <div className="product-actions">
//                 <button onClick={() => addToCart(p)}>Add to Cart</button>
//                 <button className="wishlist-btn" onClick={() => addToWishlist(p)}>❤️</button> {/* NEW */}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No products found in this category matching your search.</p>
//         )}
//       </div>
//     </section>
//   );
// }

// export default ProductSection;

// src/Components/ProductSection.js (MODIFIED - Correct Version)
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { getProductsByCategory } from '../Data/Products'; // Import helper
import './ProductSection.css';

function ProductSection({ category, filters, sortOption }) { // MODIFIED to accept filters and sort
  const { addToCart, addToWishlist, searchTerm = '' } = useContext(CartContext);

  // Get products for this category from the centralized data
  let products = getProductsByCategory(category);

  // Apply search term (existing logic)
  let filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Apply filters (NEW)
  if (filters.minPrice) {
    filteredProducts = filteredProducts.filter(p => p.price >= parseFloat(filters.minPrice));
  }
  if (filters.maxPrice) {
    filteredProducts = filteredProducts.filter(p => p.price <= parseFloat(filters.maxPrice));
  }
  if (filters.minRating) {
    filteredProducts = filteredProducts.filter(p => p.rating >= parseFloat(filters.minRating));
  }

  // Apply sorting (NEW)
  if (sortOption === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'rating-desc') {
    filteredProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0)); // Handle undefined rating
  } else if (sortOption === 'name-asc') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }


  return (
    <section className="product-section">
      <h2>{category}</h2>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div key={p.id} className="product-card">
              {p.comingSoon && <span className="coming-soon-badge">Coming Soon</span>}
              <Link to={`/product/${p.id}`}>
                <img src={p.image} alt={p.name} />
              </Link>
              <h3>
                <Link to={`/product/${p.id}`}>{p.name}</Link>
              </h3>
              <p className="price-display">
                <span className="current-price">${p.price.toFixed(2)}</span> {/* Format price */}
                {p.originalPrice && <span className="original-price">${p.originalPrice.toFixed(2)}</span>}
                {p.discount && <span className="discount-percent">{p.discount}</span>}
              </p>
              {p.rating && <div className="product-rating">{'⭐'.repeat(Math.floor(p.rating))}</div>}
              <div className="product-actions">
                <button onClick={() => addToCart(p)}>Add to Cart</button>
                <button className="wishlist-btn" onClick={() => addToWishlist(p)}>❤️</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found in this category matching your criteria.</p>
        )}
      </div>
    </section>
  );
}

export default ProductSection;