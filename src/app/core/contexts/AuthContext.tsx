import React, {
    createContext,
    ReactElement,
    useEffect,
    useMemo,
    useState,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { UserModel } from '@shared/models/user.model';
import { AuthData } from '@shared/types/types';
import { TOKEN_KEY } from '@constants/storage-keys';
import { AUTH_API } from '@constants/apis';
import { AuthPayload, RegisterPayload } from '@shared/types/auth';
import { getAuthHeaders } from '@shared/utils/utils';
import httpClient from '@http/httpClient';

type AuthContextValue = {
    signed: boolean;
    loading: boolean;
    user: UserModel;
    login: (data: AuthPayload) => Promise<void>;
    register: (data: RegisterPayload) => Promise<void>;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextValue>({
    async login(): Promise<void> {
        throw new Error('Unimplemented');
    },
    async register(): Promise<void> {
        throw new Error('Unimplemented');
    },
    logout(): void {
        throw new Error('Unimplemented');
    },
    signed: false,
    loading: false,
    user: {} as UserModel,
});

export function AuthProvider({
    children,
}: JSX.ElementChildrenAttribute): ReactElement {
    const [user, setUser] = useState<UserModel | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadStorageData(): Promise<void> {
            try {
                setLoading(true);
                const token = await AsyncStorage.getItem(TOKEN_KEY);
                if (!token) {
                    logout();
                    return;
                }
                const dtrUser = await httpClient.get<UserModel>(AUTH_API.me, {
                    headers: await getAuthHeaders(),
                });
                setUser(dtrUser.data);
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
            await AsyncStorage.setItem(TOKEN_KEY, authData.token.accessToken);
            setUser(authData.user);
        } catch (err) {
            throw err;
        }
    }

    async function login(data: AuthPayload): Promise<void> {
        try {
            const authData = await httpClient.post<AuthData>(
                AUTH_API.login,
                data
            );
            await setAuthData(authData.data);
        } catch (e) {}
    }

    async function register(data: RegisterPayload): Promise<void> {
        try {
            const authData = await httpClient.post<AuthData>(
                AUTH_API.register,
                data
            );
            await setAuthData(authData.data);
        } catch (e) {}
    }

    function logout(): void {
        AsyncStorage.multiRemove([TOKEN_KEY]).then(() => setUser(null));
    }

    const value = useMemo((): Omit<AuthContextValue, 'loading'> => {
        return {
            signed: !!user,
            login,
            logout,
            register,
            user: user as UserModel,
        };
    }, [user]);

    return (
        <AuthContext.Provider value={{ ...value, loading }}>
            {children}
        </AuthContext.Provider>
    );
}
