import type { PageLoad } from './$houdini';
import { load_About } from '$houdini';

export const load: PageLoad = async (event) => {
	const parent = await event.parent();
	const { locales } = parent;

	return {
		...(await load_About({ event, variables: { locales, id: 'clrmfe9aqbzmu0bl9et3e9ugh' } })),
	};
};
