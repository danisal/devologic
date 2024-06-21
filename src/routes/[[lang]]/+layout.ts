import type { LayoutLoad } from './$houdini';
import { load_MainLayout } from '$houdini';
import { type Language, languageMap } from '@/utils/locale';

export const prerender = true;

export const load: LayoutLoad = async (event) => {
	const lang = (event.params.lang ?? 'en') as Language;
	const locales = languageMap[lang];
	const variables = { locales };

	return {
		locales,
		lang,
		...(await load_MainLayout({ event, variables })),
	};
};
