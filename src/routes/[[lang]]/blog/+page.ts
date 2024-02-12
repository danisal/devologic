import { load_BlogPosts } from '$houdini';
import type { LoadEvent } from '@sveltejs/kit';

export async function load(event: LoadEvent) {
	const parent = await event.parent();
	const { locales } = parent;

	return {
		...(await load_BlogPosts({ event, variables: { locales } })),
	};
}
