
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  userEmail: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    const email = localStorage.getItem('userEmail');
    if (authStatus === 'true' && email) {
      setIsAuthenticated(true);
      setUserEmail(email);
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    // Validação simples - senha fixa "acesso123"
    if (password === 'acesso123') {
      setIsAuthenticated(true);
      setUserEmail(email);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserEmail('');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userEmail }}>
      {children}
    </AuthContext.Provider>
  );
};
