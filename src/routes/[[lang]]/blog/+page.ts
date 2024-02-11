import { load_BlogPosts } from '$houdini';
import type { LoadEvent } from '@sveltejs/kit';
import { type Locale, localesMap } from '../../../utils/locale';

export async function load(event: LoadEvent) {
	const parent = await event.parent();
	const { locale } = parent;

	const locales = localesMap[locale as Locale];

	console.log('blog page', locales);

	return {
		...(await load_BlogPosts({ event, variables: { locales } })),
	};
}
