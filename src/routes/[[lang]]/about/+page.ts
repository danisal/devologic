import type { PageLoad } from '../../../../$houdini/types/src/routes';
import { load_About } from '$houdini';

import { type Locale, localesMap } from '../../../utils/locale';

export const load: PageLoad = async (event) => {
	const parent = await event.parent();
	const { locale } = parent;

	const locales = localesMap[locale as Locale];

	return {
		...(await load_About({ event, variables: { locales, id: 'clrmfe9aqbzmu0bl9et3e9ugh' } })),
	};
};
