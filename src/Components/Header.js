// // src/Components/Header.js (MODIFIED)
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../Context/AuthContext';
// import { CartContext } from '../Context/CartContext';
// import Notification from './Notification'; // NEW
// import './Header.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';


// function Header() {
//   const { user, logout } = useContext(AuthContext);
//   const { totalItemsInCart, totalItemsInWishlist, searchTerm, setSearchTerm, notification } = useContext(CartContext); // MODIFIED

//   const getUserName = () => {
//     // This logic is fine, keeping it as is.
//     if (!user) return 'User';
//     if (typeof user === 'string') return user;
//     if (typeof user.name === 'string') return user.name;
//     if (user.displayName) return user.displayName;
//     if (user.email) return user.email.split('@')[0];
//     if (typeof user.name === 'object') {
//       return `${user.name.first || ''} ${user.name.last || ''}`.trim();
//     }
//     return 'User';
//   };

//   return (
//     <header className="header">
//       <h1 className="logo">MyStore</h1>

//       <input
//         type="text"
//         placeholder="Search products..."
//         className="search"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <div className="auth-buttons">
//         <Link to="/cart" className="cart-count">
//           🛒 {totalItemsInCart} {/* Using totalItemsInCart */}
//         </Link>
//         <Link to="/wishlist" className="wishlist-count"> {/* NEW Wishlist Link */}
//           ❤️ {totalItemsInWishlist}
//         </Link>

//         {user ? (
//           <>
//             <span className="welcome">Hi, 👤 {getUserName()} </span>
//                <button onClick={logout}>Logout</button>   
//           </>
//         ) : (
//           <>
//             <Link to="/login"><button>Login</button></Link>
//             <Link to="/signup"><button>Sign Up</button></Link>
//           </>
//         )}
//       </div>
//       {notification && ( // NEW: Display Notification
//         <Notification message={notification.message} type={notification.type} />
//       )}
//     </header>
//   );
// }

// export default Header;

// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../Context/AuthContext';
// import { CartContext } from '../Context/CartContext';
// import Notification from './Notification';
// import './Header.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

// function Header() {
//   const { user, logout } = useContext(AuthContext);
//   const { totalItemsInCart, totalItemsInWishlist, searchTerm, setSearchTerm, notification } = useContext(CartContext);

//   const getUserName = () => {
//     if (!user) return 'User';
//     if (typeof user === 'string') return user;
//     if (typeof user.name === 'string') return user.name;
//     if (user.displayName) return user.displayName;
//     if (user.email) return user.email.split('@')[0];
//     if (typeof user.name === 'object') {
//       return `${user.name.first || ''} ${user.name.last || ''}`.trim();
//     }
//     return 'User';
//   };

//   return (
//     <header className="header">
//       {/* Logo & Brand */}
//       <div className="header-left">
//         <div className="brand">
//           <img
//             src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/1118cd117297413.607353e7ecaaf.png"
//             alt="logo"
//             className="logo-img"
//           />
//           <h1 className="logo-text">MyStore</h1>
//         </div>
//       </div>

//       {/* Search */}
//       <input
//         type="text"
//         placeholder="Search products..."
//         className="search"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       {/* Auth Buttons */}
//       <div className="auth-buttons">
//         <Link to="/cart" className="cart-count">🛒 {totalItemsInCart}</Link>
//         <Link to="/wishlist" className="wishlist-count">❤️ {totalItemsInWishlist}</Link>

//         {user ? (
//           <>
//             <span className="welcome">Hi, 👤 {getUserName()}</span>
//             <button onClick={logout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <Link to="/login"><button>Login</button></Link>
//             <Link to="/signup"><button>Sign Up</button></Link>
//           </>
//         )}
//       </div>

//       {/* Notification */}
//       {notification && (
//         <Notification message={notification.message} type={notification.type} />
//       )}
//     </header>
//   );
// }

// export default Header;
// src/Components/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { CartContext } from '../Context/CartContext';
import Notification from './Notification';
import './Header.css';

function Header() {
  const { user, logout } = useContext(AuthContext);
  const { totalItemsInCart, totalItemsInWishlist, searchTerm, setSearchTerm, notification } = useContext(CartContext);

  const getUserName = () => {
    if (!user) return 'User';
    if (typeof user === 'string') return user;
    if (typeof user.name === 'string') return user.name;
    if (user.displayName) return user.displayName;
    if (user.email) return user.email.split('@')[0];
    if (typeof user.name === 'object') {
      return `${user.name.first || ''} ${user.name.last || ''}`.trim();
    }
    return 'User';
  };

  return (
    <header className="header">
      {/* Brand Logo and Text */}
      <div className="brand-logo">
        <Link to="/" className="brand-link">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.YRnjSQCEpdy7aizG47fHEwHaHa&pid=Api&P=0&h=180"
            alt="MyStore Logo"
            className="logo-image"
          />
          <h1 className="logo-text">MyStore</h1>
        </Link>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Auth Buttons and Cart/Wishlist */}
      <div className="auth-buttons">
        <Link to="/cart" className="cart-count">
          🛒 {totalItemsInCart}
        </Link>
        <Link to="/wishlist" className="wishlist-count">
          ❤️ {totalItemsInWishlist}
        </Link>

        {user ? (
          <>
            <Link to="/profile" className="welcome-link">
              <span className="welcome">Hi, {getUserName()} </span>
            </Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Sign Up</button></Link>
          </>
        )}
      </div>

      {/* Notification Display */}
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </header>
  );
}

export default Header;