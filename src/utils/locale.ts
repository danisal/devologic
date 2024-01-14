export const AVAILABLE_LOCALES = ['en', 'pt_PT'] as const;

export const languages = [
	{
		value: 'en',
		label: 'English'
	},
	{
		value: 'pt_PT',
		label: 'Português'
	}
] satisfies { value: Locale; label: string }[];

export const DEFAULT_LANGUAGE = AVAILABLE_LOCALES[0];

export type Locale = (typeof AVAILABLE_LOCALES)[number];

export const localesMap = {
	en: ['en'],
	pt_PT: ['pt_PT', 'en']
} satisfies Record<Locale, Locale[]>;
