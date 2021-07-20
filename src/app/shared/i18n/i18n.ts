import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import en from './resources/en.json';
import ru from './resources/ru.json';
import ro from './resources/ro.json';

const resources = {
    en: {
        translation: en,
    },
    ru: {
        translation: ru,
    },
    ro: {
        translation: ro,
    },
} as {};

i18n.use(initReactI18next).init({
    lng: 'en',
    resources,
});

export enum LanguageTypes {
    RO = 'ro-RO',
    RU = 'ru-RU',
    EN = 'en-EN',
}

export const languages: LanguageTypes[] = Object.keys(
    LanguageTypes
) as LanguageTypes[];

export default i18n;
