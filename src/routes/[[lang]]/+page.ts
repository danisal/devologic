import type { HomeVariables } from './$houdini';

export const _HomeVariables: HomeVariables = async ({ parent }) => {
	const { locales } = await parent();
	return { locales };
};
