import React, {
    createContext,
    ReactElement,
    useEffect,
    useMemo,
    useState,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { User } from '@shared/models/user';

type AuthContextValue = {
    signed: boolean;
    loading: boolean;
    user: User;
    login: (login: string, password: string) => Promise<void>;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextValue>({
    async login(): Promise<void> {
        throw new Error('Unimplemented');
    },
    logout(): void {
        throw new Error('Unimplemented');
    },
    signed: false,
    loading: false,
    user: {} as User,
});

export function AuthProvider({
    children,
}: JSX.ElementChildrenAttribute): ReactElement {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadStorageData(): Promise<void> {
            try {
            } catch (e) {
                logout();
            } finally {
                setLoading(false);
            }
        }

        loadStorageData();
    }, []);

    async function login(login: string, password: string): Promise<void> {
        try {
        } catch (e) {}
    }

    function logout(): void {
        AsyncStorage.multiRemove([]).then(() => setUser(null));
    }

    const value = useMemo((): Omit<AuthContextValue, 'loading'> => {
        return {
            signed: !!user,
            login,
            logout,
            user: user as User,
        };
    }, [user]);

    return (
        <AuthContext.Provider value={{ ...value, loading }}>
            {children}
        </AuthContext.Provider>
    );
}
