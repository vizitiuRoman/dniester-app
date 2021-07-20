import moment from 'moment';

export enum Units {
    today = 0,
    yesterday = 1,
    week = 7,
    month = 30,
}

export function getYYYYMMDD(date: Date): string {
    return date.toISOString().slice(0, 10);
}

export function prepareData(unit: Units): string {
    const date = new Date();
    date.setDate(date.getDate() - unit);
    return getYYYYMMDD(date);
}

export function transformDateFromAPIToDate(str: string): Date {
    const prepared = str.substring('/Date('.length);

    return new Date(+prepared.slice(0, prepared.length - 2));
}

export function prepareDateFromAPI(str: string, language: string): string {
    return moment(transformDateFromAPIToDate(str))
        .locale(language)
        .format('MMMM Do h:mm')
        .toString();
}

export const languageMapping: { [key: string]: 'ro-RO' | 'en-EN' | 'ru-RU' } = {
    en: 'en-EN',
    ro: 'ro-RO',
    ru: 'ru-RU',
};
