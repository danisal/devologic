import type { BlogPostVariables } from './$houdini';

export const _BlogPostVariables: BlogPostVariables = async ({ params, parent }) => {
	const { slug } = params;
	const { locales } = await parent();

	return {
		slug,
		locales,
	};
};
