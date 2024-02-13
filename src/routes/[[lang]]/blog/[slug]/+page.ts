import { load_BlogPost } from '$houdini';
import type { PageLoad } from './$houdini';

export const load: PageLoad = async (event) => {
	const slug = event.params.slug;
	const parent = await event.parent();
	const { locales } = parent;

	return {
		...(await load_BlogPost({ event, variables: { slug, locales } })),
	};
};
