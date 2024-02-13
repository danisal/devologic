import { load_BlogPosts } from '$houdini';
import type { PageLoad } from './$houdini';

export const load: PageLoad = async (event) => {
	const parent = await event.parent();
	const { locales } = parent;

	return {
		...(await load_BlogPosts({ event, variables: { locales } })),
	};
};
