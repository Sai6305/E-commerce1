// // src/Context/AuthContext.js

// import React, { createContext, useState, useEffect } from 'react'; // Ensure useEffect is imported

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // Initialize user state as null

//   // Load user from localStorage on component mount
//   useEffect(() => {
//     const storedUser = localStorage.getItem('user'); // Using 'user' as the key, consistent with your second example
//     if (storedUser) {
//       try {
//         setUser(JSON.parse(storedUser));
//       } catch (e) {
//         console.error("Failed to parse stored user from localStorage:", e);
//         setUser(null); // Clear user if parsing fails
//       }
//     }
//   }, []); // Empty dependency array ensures this runs only once on mount

//   const login = (userData) => {
//     // userData must be an object and ideally include a 'name' or identifier
//     setUser(userData);
//     localStorage.setItem('user', JSON.stringify(userData)); // Store user data in localStorage
//   };

//   const logout = () => {
//     setUser(null); // Set user state to null
//     localStorage.removeItem('user'); // Remove user data from localStorage
//     // In a real application, you might also want to:
//     // - Invalidate session on the backend
//     // - Redirect the user to the login page (e.g., using navigate('/login'))
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// src/Context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize user state. Try to load from localStorage first.
  // If localStorage is empty or parsing fails, it defaults to null.
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('user'); // Or 'currentUser' if that's what you used
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to parse stored user from localStorage:", error);
      return null; // Return null if localStorage item is corrupted
    }
  });

  // Optional: If you prefer to load user in useEffect
  // (though useState's initializer is more performant for initial load)
  /*
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse stored user from localStorage:", e);
        setUser(null);
      }
    }
  }, []);
  */

  const login = (userData) => {
    // userData should be an object containing user details, e.g., { id: 1, name: "Chandu", email: "chandu@example.com" }
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Store user data
    console.log('User logged in:', userData);
  };

  const logout = () => {
    setUser(null); // Set the user state back to null
    localStorage.removeItem('user'); // Remove the user data from localStorage
    console.log('User logged out');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};