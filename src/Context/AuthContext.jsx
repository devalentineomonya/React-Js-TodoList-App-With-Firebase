import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userName = user.displayName || "Anonymous User - " + user.uid.slice(0, 5);
 
        const userEmail = user.email || `anonymous_${user.uid.slice(0, 5)}@unknown.com`;
        setUser({ ...user, email: userEmail, displayName: userName });
        setLoggedIn(true);
      } else {
        setUser(null);
        setLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loggedIn, setLoggedIn, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
