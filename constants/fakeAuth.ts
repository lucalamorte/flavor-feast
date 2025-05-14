// src/constants/fakeAuth.ts

type User = {
    email: string;
    password: string;
  };
  
  let fakeUser: User | null = null;
  
  export const registerUser = (email: string, password: string): boolean => {
    if (fakeUser) return false; // ya existe usuario
    fakeUser = { email, password };
    return true;
  };
  
  export const loginUser = (email: string, password: string): boolean => {
    if (!fakeUser) return false;
    return fakeUser.email === email && fakeUser.password === password;
  };
  
  export const getCurrentUser = () => fakeUser;
  