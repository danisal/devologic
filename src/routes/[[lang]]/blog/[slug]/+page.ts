import { load_BlogPost } from '$houdini';
import type { LoadEvent } from '@sveltejs/kit';
import { type Locale, localesMap } from '../../../../utils/locale';

export async function load(event: LoadEvent) {
	const slug = event.params.slug;
	const parent = await event.parent();
	const { locale } = parent;

	const locales = localesMap[locale as Locale];

	console.log('blog post server page', slug, event);

	return {
		...(await load_BlogPost({ event, variables: { slug, locales } })),
	};
}
