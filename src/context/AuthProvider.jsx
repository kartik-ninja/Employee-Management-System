import { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: [] });

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    if (!employees || !admin) {
      setLocalStorage();
    }
    setUserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{ userData, setUserData }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
