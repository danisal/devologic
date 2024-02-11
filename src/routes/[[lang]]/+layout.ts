import type { LayoutLoad } from './$houdini';
import { load_MainLayout } from '$houdini';
import { type Locale, localesMap } from '../../utils/locale';

export const load: LayoutLoad = async (event) => {
	const { locale } = event.data;

	const locales = localesMap[locale as Locale];

	return {
		locale,
		...(await load_MainLayout({ event, variables: { locales: locales } })),
	};
};
