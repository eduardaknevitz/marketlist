import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
AuthContext.displayName = "Carrinho";

export default function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const { isLogged, setIsLogged } = useContext(AuthContext);

  const login = () => {
    setIsLogged(true);
  };

  return {
    isLogged,
    login,
  };
}
