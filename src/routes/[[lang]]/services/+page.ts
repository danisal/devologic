import { load_ServicesData } from '$houdini';
import type { LoadEvent } from '@sveltejs/kit';

export async function load(event: LoadEvent) {
	const lang = event.params.lang;
	const parent = await event.parent();
	const { locales } = parent;

	console.log(lang, locales);

	return {
		...(await load_ServicesData({ event, variables: { locales } })),
	};
}
