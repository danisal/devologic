import type { PageLoad } from './$houdini';
import { load_PartnersPage } from '$houdini';

export const load: PageLoad = async (event) => {
	const parent = await event.parent();
	const { locales } = parent;

	return {
		...(await load_PartnersPage({ event, variables: { locales } })),
	};
};
