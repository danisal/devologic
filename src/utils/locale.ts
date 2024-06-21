export type Language = 'en' | 'pt';

type LanguageOption = { value: Language; label: string };

export const languages: LanguageOption[] = [
	{
		value: 'en',
		label: 'English',
	},
	{
		value: 'pt',
		label: 'Português',
	},
];

export type Locale = 'en' | 'pt_PT';

type LanguageOptions = {
	en: Locale[];
	pt: Locale[];
};

export const languageMap: LanguageOptions = {
	en: ['en'],
	pt: ['pt_PT', 'en'],
};
