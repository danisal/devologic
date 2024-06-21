import type { PartnersPageVariables } from './$houdini';

export const _PartnersPageVariables: PartnersPageVariables = async ({ parent }) => {
	const { locales } = await parent();
	return { locales };
};
