import type { PageLoad } from './$houdini';
import { load_ServicesData } from '$houdini';

export const load: PageLoad = async (event) => {
	const parent = await event.parent();
	const { locales } = parent;

	return {
		...(await load_ServicesData({ event, variables: { locales } })),
	};
};
