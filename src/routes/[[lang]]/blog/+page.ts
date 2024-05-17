import type { BlogPostsVariables } from './$houdini';

export const _BlogPostsVariables: BlogPostsVariables = async ({ parent }) => {
	const { locales } = await parent();
	return { locales };
};
