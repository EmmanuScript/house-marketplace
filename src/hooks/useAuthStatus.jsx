import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }
      setCheckingStatus(false);
    });

    return () => unsub();
  }, []);

  return { loggedIn, checkingStatus };
};

//Protected Roytes in v6: contains code that comes from stack overflow

//Fix memory leak warning: contains cose that comes from stack overflow

//check video 91, 10th minute

export default useAuthStatus;
