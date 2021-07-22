import { TOKEN_KEY } from '@constants/storage-keys';
import AsyncStorage from '@react-native-community/async-storage';

export const getAuthHeaders = async () => ({
    Authorization: 'Bearer ' + (await AsyncStorage.getItem(TOKEN_KEY)),
});
