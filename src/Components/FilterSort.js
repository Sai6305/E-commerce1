// // src/Components/FilterSort.js (NEW FILE)
// import React, { useState } from 'react';
// import './FilterSort.css'; // Create this CSS file

// function FilterSort({ onFilterChange, onSortChange }) {
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [minRating, setMinRating] = useState('');
//   const [sortOption, setSortOption] = useState('default');

//   const handleApplyFilters = () => {
//     onFilterChange({ minPrice, maxPrice, minRating });
//   };

//   const handleClearFilters = () => {
//     setMinPrice('');
//     setMaxPrice('');
//     setMinRating('');
//     onFilterChange({ minPrice: '', maxPrice: '', minRating: '' });
//   };

//   const handleSortChange = (e) => {
//     setSortOption(e.target.value);
//     onSortChange(e.target.value);
//   };

//   return (
//     <div className="filter-sort-container">
//       <div className="filters-section">
//         <h3>Filters</h3>
//         <div className="filter-group">
//           <label htmlFor="min-price">Min Price ($):</label>
//           <input
//             type="number"
//             id="min-price"
//             value={minPrice}
//             onChange={(e) => setMinPrice(e.target.value)}
//             placeholder="e.g., 100"
//             min="0"
//           />
//         </div>
//         <div className="filter-group">
//           <label htmlFor="max-price">Max Price ($):</label>
//           <input
//             type="number"
//             id="max-price"
//             value={maxPrice}
//             onChange={(e) => setMaxPrice(e.target.value)}
//             placeholder="e.g., 5000"
//             min="0"
//           />
//         </div>
//         <div className="filter-group">
//           <label htmlFor="min-rating">Min Rating (⭐):</label>
//           <input
//             type="number"
//             id="min-rating"
//             value={minRating}
//             onChange={(e) => setMinRating(e.target.value)}
//             placeholder="e.g., 3"
//             min="1"
//             max="5"
//             step="0.1"
//           />
//         </div>
//         <div className="filter-buttons">
//           <button onClick={handleApplyFilters} className="apply-btn">Apply Filters</button>
//           <button onClick={handleClearFilters} className="clear-btn">Clear Filters</button>
//         </div>
//       </div>

//       <div className="sort-section">
//         <h3>Sort By</h3>
//         <select value={sortOption} onChange={handleSortChange}>
//           <option value="default">Default</option>
//           <option value="price-asc">Price: Low to High</option>
//           <option value="price-desc">Price: High to Low</option>
//           <option value="rating-desc">Rating: High to Low</option>
//           <option value="name-asc">Name: A-Z</option>
//         </select>
//       </div>
//     </div>
//   );
// }

// export default FilterSort;