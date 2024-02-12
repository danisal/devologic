import type { LayoutLoad } from './$houdini';
import { load_MainLayout } from '$houdini';
import { type Language, localesMap } from '../../utils/locale';

export const load: LayoutLoad = async (event) => {
	const lang = (event.params.lang ?? 'en') as Language;
	const locales = localesMap[lang];

	console.log({ lang, locales });

	return {
		locales,
		lang,
		...(await load_MainLayout({ event, variables: { locales } })),
	};
};
