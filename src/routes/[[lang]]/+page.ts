import type { PageLoad } from './$houdini';
import { load_Home } from '$houdini';
import { type Locale, localesMap } from '../../utils/locale';

export const load: PageLoad = async (event) => {
	const parent = await event.parent();
	const { locale } = parent;

	const locales = localesMap[locale as Locale];

	return {
		...(await load_Home({ event, variables: { locales } })),
	};
};
