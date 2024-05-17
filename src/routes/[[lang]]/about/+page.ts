import type { AboutVariables } from './$houdini';

export const _AboutVariables: AboutVariables = async ({ parent }) => {
	const { locales } = await parent();
	return { locales };
};
