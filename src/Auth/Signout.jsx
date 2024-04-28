import { useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import AuthContext from '@/Context/AuthContext'; // Adjust the path as needed

const useFirebaseAuthentication = () => {
  const { user, setLoggedIn, setUser } = useContext(AuthContext);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setLoggedIn(!!authUser);
    });

    return () => unsubscribe();
  }, [setLoggedIn, setUser]);

  const signOutAnonymousUser = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setUser(null);
      setLoggedIn(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return { signOutAnonymousUser };
};

export default useFirebaseAuthentication;
