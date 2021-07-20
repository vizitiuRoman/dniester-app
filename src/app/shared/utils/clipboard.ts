import Clipboard from '@react-native-community/clipboard';

export function clipboard(value: string): void {
    Clipboard.setString(value);
}
