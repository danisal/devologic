import type { ContactPageVariables } from './$houdini';

export const _ContactPageVariables: ContactPageVariables = async ({ parent }) => {
	const { locales } = await parent();
	return { locales };
};
