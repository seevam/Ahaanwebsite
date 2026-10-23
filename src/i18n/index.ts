import en from './en.json';

// Add hi.json / ta.json here to enable more languages; pages only ever call t().
const dictionaries = { en } as const;
export type Lang = keyof typeof dictionaries;
export type Dict = typeof en;

export const defaultLang: Lang = 'en';
export const getDict = (lang: Lang = defaultLang): Dict => dictionaries[lang];
