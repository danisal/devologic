import { load_BlogPost } from '$houdini';
import type { LoadEvent } from '@sveltejs/kit';

export async function load(event: LoadEvent) {
	const slug = event.params.slug;
	const parent = await event.parent();
	const { locales } = parent;

	console.log('blog post server page', slug, event);

	return {
		...(await load_BlogPost({ event, variables: { slug, locales } })),
	};
}
