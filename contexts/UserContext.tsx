import {createContext, ReactNode, useEffect, useState} from 'react';
import {account} from '../Lib/appwrite';
import {ID} from 'react-native-appwrite';

type User = {[key: string]: any};

type UserContextType = {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    authCheck: boolean
};

export const UserContext = createContext<UserContextType | undefined>(
    undefined
);

export function UserProvider({children}: {children: ReactNode}) {
    const [user, setUser] = useState<null | User>(null);
    const [authCheck, setAuthCheck] = useState(false);

    async function login(email: string, password: string) {
        try {
            await account.createEmailPasswordSession(email, password);
            const response = await account.get();
            setUser(response);
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async function register(email: string, password: string) {
        try {
            await account.create(ID.unique(), email, password);
            await login(email, password);
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    async function logout() {
        await account.deleteSession("current");
        setUser(null);
    }

    async function getInitialUserValue() {
        try {
            const response = await account.get();
            setUser(response);
        } catch(error) {
            setUser(null);
        } finally {
            setAuthCheck(true);
        }
    }

    useEffect(() => {
        getInitialUserValue();
    }, [])

    return (
        <UserContext.Provider value={{user, login, register, logout, authCheck}}>
            {children}
        </UserContext.Provider>
    );
}
