import { createContext, ReactNode, useState } from "react";

type User = any; // replace with your actual user type

type UserContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: {children: ReactNode}) {
    const [user, setUser] = useState(null);

    async function login(email, password) {
        
    }

    async function register(email, password) {
        
    }

    async function logout() {
        
    }

    return (
        <UserContext.Provider value={{user, login, register, logout}}>
            {children}
        </UserContext.Provider>
    )
}
