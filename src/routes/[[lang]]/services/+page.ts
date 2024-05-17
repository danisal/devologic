import type { ServicesDataVariables } from '$houdini/types/src/routes/[[lang]]/services/$houdini';

export const _ServicesDataVariables: ServicesDataVariables = async ({ parent }) => {
	const { locales } = await parent();
	return { locales };
};
