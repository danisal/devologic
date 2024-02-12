import type { PageLoad } from './$houdini';
import { load_Home } from '$houdini';

export const load: PageLoad = async (event) => {
	const parent = await event.parent();
	const { locales } = parent;

	return {
		...(await load_Home({ event, variables: { locales } })),
	};
};
