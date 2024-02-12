export const languages = [
	{
		value: 'en',
		label: 'English',
	},
	{
		value: 'pt',
		label: 'Português',
	},
] satisfies { value: Language; label: string }[];

export type Language = keyof typeof localesMap;
export type Locale = (typeof localesMap)[Language];

export const localesMap = {
	en: ['en'],
	pt: ['pt_PT', 'en'],
} as const;
