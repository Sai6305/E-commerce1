// src/App.js (MODIFIED)
import React, { useState } from 'react'; // Import useState
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import ProductSection from './Components/ProductSection';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Cart from './Pages/Cart';
import ProductDetail from './Pages/ProductDetail';
import Wishlist from './Pages/Wishlist';
import NotFound from './Pages/NotFound';
import UserProfile from './Pages/UserProfile';      // NEW
import FilterSort from './Components/FilterSort';  // NEW
import './App.css';

function App() {
  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState('default');

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (newSortOption) => {
    setSortOption(newSortOption);
  };

  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            {/* <FilterSort onFilterChange={handleFilterChange} onSortChange={handleSortChange} /> */}
            
            <ProductSection category="Mobiles" filters={filters} sortOption={sortOption} />
            <ProductSection category="TVs" filters={filters} sortOption={sortOption} />
            <ProductSection category="Watches" filters={filters} sortOption={sortOption} />
            <ProductSection category="Refrigerators" filters={filters} sortOption={sortOption} />
            <ProductSection category="ACs" filters={filters} sortOption={sortOption} />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<UserProfile />} /> {/* NEW ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;