import React, {
    createContext,
    ReactElement,
    useEffect,
    useMemo,
    useState,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { User } from '@shared/models/user';
import { AuthData } from '@shared/types/types';
import { APIS } from '@constants/apis';
import { TOKEN_KEY } from '@constants/constants';
import httpClient from '@http/httpClient';

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

    async function setAuthData(authData: AuthData): Promise<void> {
        try {
            await AsyncStorage.setItem(TOKEN_KEY, authData.token);
            setUser(authData.user);
        } catch (err) {
            throw err;
        }
    }

    async function login(userLogin: string, password: string): Promise<void> {
        try {
            const authData = await httpClient.post<AuthData>(
                `${APIS.auth}/login`,
                {
                    userLogin,
                    password,
                }
            );
            await setAuthData(authData.data);
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
