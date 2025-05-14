
// context/UserContext.tsx
import React, { createContext, useContext, useState } from 'react';

type User = {
  username: string;
  password: string;
  email: string;
} | null;

type UserContextType = {
  user: User;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);

  const login = (username: string, password: string) => {
    if (username === 'admin' && password === '123') {
      setUser({
        username,
        password,
        email: 'lclamorte@gmail.com',
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser debe usarse dentro de un UserProvider');
  return context;
};
